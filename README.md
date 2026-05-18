# Mariri — Portfolio

静かなWebデザインとフロントエンド実装のポートフォリオサイト。
Astro + Tailwind CSS で構築し、GitHub Pages 上で配信しています。

🌐 **Live**: https://mariri777.github.io/portfolio/

## 収録作品

| No. | Title | Path | Description |
| --- | --- | --- | --- |
| 02 | Lume Aesthetic Clinic | [/works/beauty-clinic](https://mariri777.github.io/portfolio/works/beauty-clinic) | 韓国系ナチュラル × 高級感の美容クリニックLP |
| 01 | Rabbit Specialty Clinic | [/works/rabbit-clinic](https://mariri777.github.io/portfolio/works/rabbit-clinic) | うさぎ専門病院のブランドサイト |

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
