# mariri — Portfolio

サービス・ゲーム・Webデザインをまとめたポートフォリオサイト。
Astro + Tailwind CSS で構築し、GitHub Pages 上で配信しています。

🌐 **Live**: https://mariri777.github.io/portfolio/

## 収録作品

トップページ（`src/pages/index.astro`）は、うさぎを歩かせて作品の建物をめぐるドット絵のまち。
トップには各カテゴリの代表作を3つずつ、ぜんぶの作品は「さくひんそうこ」（`src/pages/all.astro` → `/all/`、`?cat=tool|game|design` でしぼりこみ）にならべています。
作品のデータは `src/data/works.js`、見た目は `src/styles/town.css` で、両方のページから使います。
マップ上の建物は `index.astro` の `spots` 配列で、URL に `?spot=games` のように付けると、その建物まで歩いた状態ではじまります。

| 区分 | 配列（`works.js`） | 内容 |
| --- | --- | --- |
| サービス・ツール | `services` | トップにのせる3つ：超!企業DB / 日々. / 気血水カルテ |
| ゲーム | `games` | トップにのせる3つ：その判定、言うか。 / 英傑大乱 / うさぎマジカルレース |
| Webデザイン | `designs` | 7作品。`pick: true` の3つ（Rabbit Specialty Clinic / 鼓動 KODO / Lume Aesthetic Clinic）がトップにのる |
| ちいさな作品 | `minis` | 道具33・ゲーム7。そうこにだけ出る。本体は `public/100days/dayN.html`、サムネイルは `public/covers/mini/` |

BGM と釣れたときの音は `python3 tools/make-bgm.py` で `public/bgm.wav` / `public/catch.wav` に書き出しています（曲を変えるときはこのスクリプトの音符を編集）。

サムネイルは `public/covers/`、X などで共有したときの画像は `public/og.png`。

## Stack

- [Astro](https://astro.build/) — 静的サイト生成
- [Tailwind CSS](https://tailwindcss.com/) — ユーティリティCSS
- [GSAP](https://gsap.com/) / [Lenis](https://lenis.darkroom.engineering/) — モーション
- GitHub Actions — 自動デプロイ

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイル出力
npm run preview  # ビルド成果物のプレビュー
```

## デプロイ

`main` ブランチに push すると、GitHub Actions が自動でビルドして
GitHub Pages にデプロイします（`.github/workflows/deploy.yml`）。

GitHub リポジトリの Settings → Pages → Source を **GitHub Actions** に設定してください。

## ディレクトリ構成

```
src/
├── pages/
│   ├── index.astro                  # mariri のまち（トップ）
│   ├── all.astro                    # さくひんそうこ（ぜんぶの作品）
│   └── works/
│       ├── beauty-clinic.astro      # 美容クリニックLP
│       └── rabbit-clinic.astro      # うさぎ専門病院LP
├── components/
│   ├── beauty/                      # 美容LP用コンポーネント
│   └── rabbit/                      # うさぎLP用コンポーネント
├── layouts/
│   ├── BeautyLayout.astro
│   └── Layout.astro
├── styles/
│   └── global.css
└── scripts/                         # GSAP / Lenis / マグネティック等
```
