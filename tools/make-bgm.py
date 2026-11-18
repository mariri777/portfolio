"""mariri のまち の BGM と つれたときの音 を WAV に書き出す。

    python3 tools/make-bgm.py

曲を変えたいときは MELODY / BASS を書きかえて実行しなおす。
出力: public/bgm.wav（16秒ほどでループする曲）, public/catch.wav（つれたときの短い音）
"""
import math
import struct
import wave
from pathlib import Path

RATE = 22050
E8 = 0.24  # 8分音符の長さ（秒）
# [MIDIノート番号, 長さ(8分音符いくつ分)]。0 は休み。合計 64（= 8小節）
MELODY = [[64, 2], [67, 2], [72, 2], [67, 2], [69, 2], [67, 1], [64, 1], [67, 4],
          [65, 2], [69, 2], [67, 2], [64, 2], [62, 3], [64, 1], [62, 4],
          [64, 2], [67, 2], [72, 2], [76, 2], [74, 2], [72, 1], [69, 1], [67, 4],
          [69, 2], [72, 2], [71, 2], [67, 2], [72, 6], [0, 2]]
BASS = [48, 55, 45, 52, 41, 48, 43, 50, 48, 55, 45, 52, 41, 43, 48, 48]  # 2分音符ごと


def add(buf, midi, start, dur, kind, vol):
    freq = 440.0 * 2 ** ((midi - 69) / 12)
    i0 = int(round(start * RATE))
    n = int(dur * RATE)
    attack = int(0.015 * RATE)
    hold = int(n * 0.6)
    for i in range(n):
        if i0 + i >= len(buf):
            break
        s = math.sin(2 * math.pi * freq * i / RATE)
        w = (1.0 if s >= 0 else -1.0) if kind == 'square' else (2 / math.pi) * math.asin(s)
        if i < attack:
            env = i / attack
        elif i < hold:
            env = 1.0
        else:
            env = math.exp(-6.0 * (i - hold) / max(1, n - hold))
        buf[i0 + i] += w * env * vol


def write(path, buf, peak=0.7):
    top = max(abs(v) for v in buf) or 1.0
    scale = peak / top
    with wave.open(str(path), 'wb') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(RATE)
        f.writeframes(b''.join(struct.pack('<h', int(v * scale * 32767)) for v in buf))
    print(path, f'{path.stat().st_size / 1024:.0f} KB', f'{len(buf) / RATE:.2f} s')


def main():
    out = Path(__file__).resolve().parent.parent / 'public'
    assert sum(n[1] for n in MELODY) == 64
    bgm = [0.0] * int(round(64 * E8 * RATE))
    t = 0
    for midi, length in MELODY:
        if midi:
            add(bgm, midi, t * E8, length * E8 * 0.95, 'square', 0.16)
        t += length
    for step in range(64):
        if step % 4 == 0:
            add(bgm, BASS[step // 4] + 12, step * E8, E8 * 3.6, 'triangle', 0.30)
        if step % 2 == 1:
            add(bgm, BASS[step // 4] + 24, step * E8, E8 * 0.8, 'triangle', 0.12)
    write(out / 'bgm.wav', bgm)

    catch = [0.0] * int(0.5 * RATE)
    for i, midi in enumerate([76, 79, 84, 88]):
        add(catch, midi, 0.01 + i * 0.08, 0.18, 'square', 0.2)
    write(out / 'catch.wav', catch, peak=0.6)


if __name__ == '__main__':
    main()
