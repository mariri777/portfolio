# mariri — Portfolio

サービス・ゲーム・Webデザインをまとめたポートフォリオサイト。
Astro + Tailwind CSS で構築し、GitHub Pages 上で配信しています。

🌐 **Live**: https://mariri777.github.io/portfolio/

## 収録作品

トップページ（`src/pages/index.astro`）は、うさぎを歩かせて作品の建物をめぐるドット絵のまち。
先頭にある配列を編集すると、掲載作品を増減できます。マップ上の建物は `spots` 配列で、
URL に `?spot=games` のように付けると、その建物まで歩いた状態ではじまります。

| 区分 | 配列 | 作品 |
| --- | --- | --- |
| サービス・ツール | `services` | 超!企業DB / 日々. / 気血水カルテ（`public/tools/kikketsusui.html`） |
| ゲーム | `games` | その判定、言うか。 / 英傑大乱 |
| Webデザイン | `designs` | 鼓動 KODO / TSUMUGI / Lume Aesthetic Clinic / Rabbit Specialty Clinic / Pâtisserie Hidamari / Aoyama Leaf Clinic |
| 100日チャレンジ | `days` | 作品数は手書き。進んだら数字を更新する |

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
│   ├── index.astro                  # ポートフォリオ作品一覧
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
