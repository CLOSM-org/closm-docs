# CLOSM Docs

CLOSMのドキュメントサイトです。複数プロダクトのドキュメントを集約管理する企業向けドキュメントポータルです。

## 概要

### 目的

- **エンジニア主導**: Markdownで執筆し、Gitでバージョン管理
- **エンドユーザー向け**: 検索機能と親しみやすいUIで使いやすいドキュメント
- **低コスト運用**: S3 + CloudFrontで静的ホスティング

### 技術スタック

- **フレームワーク**: [Starlight](https://starlight.astro.build/) (Astro)
- **パッケージマネージャ**: pnpm
- **検索**: Pagefind（Starlight標準搭載）
- **ホスティング**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions

## サイト構成

### URL構造

```
docs.closm.llc/
├── /                    # ポータルページ（日本語・デフォルト）
├── /i/                  # CLOSM i のドキュメント（日本語）
│   ├── /intro/
│   └── /tutorial/
├── /en/                 # ポータルページ（英語）
└── /en/i/               # CLOSM i のドキュメント（英語）
    ├── /intro/
    └── /tutorial/
```

### ディレクトリ構成

```
closm-docs/
├── .github/workflows/deploy.yml   # CI/CD
├── public/favicon.svg             # ファビコン
├── src/
│   ├── content.config.ts          # Content Collections設定
│   ├── content/docs/
│   │   ├── index.md               # ポータル（日本語）
│   │   ├── i/
│   │   │   ├── intro.md           # CLOSM i はじめに
│   │   │   └── tutorial.md        # CLOSM i チュートリアル
│   │   └── en/                    # 英語翻訳
│   │       ├── index.md
│   │       └── i/
│   │           ├── intro.md
│   │           └── tutorial.md
│   └── styles/custom.css          # カスタムCSS
├── astro.config.mjs               # Starlight設定
├── tsconfig.json
└── package.json
```

## 開発

```bash
# 依存パッケージのインストール
pnpm install

# 開発サーバー起動 (http://localhost:4321)
pnpm dev

# プロダクションビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview

# 型チェック
pnpm check
```

## デプロイフロー

```mermaid
flowchart LR
    A["Markdownを執筆"] --> B["GitHubにPush"]
    B --> C["GitHub Actions発火"]
    C --> D["pnpm build"]
    D --> E["S3に同期"]
    E --> F["CloudFrontキャッシュ削除"]
    F --> G["デプロイ完了"]
```

mainブランチへのPushで自動デプロイされます。

### 必要なGitHub Secrets

| Secret | 説明 |
|--------|------|
| `AWS_ACCESS_KEY_ID` | AWS アクセスキー |
| `AWS_SECRET_ACCESS_KEY` | AWS シークレットキー |
| `S3_BUCKET_NAME` | S3バケット名 |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFrontディストリビューションID |

## 開発方針

- **モノレポ管理**: 全プロダクトのドキュメントを1つのリポジトリで管理
- **集約型**: 1つのサブドメイン（`docs.closm.llc`）に全ドキュメントを集約
- **i18n**: 日本語をデフォルト（URLプレフィックスなし）、英語は`/en/`プレフィックス
- **拡張性**: 新しいプロダクトは`src/content/docs/`にディレクトリを追加し、`astro.config.mjs`のサイドバーにグループを追加

## 参考リンク

- [Starlight公式ドキュメント](https://starlight.astro.build/)
- [Astro公式ドキュメント](https://docs.astro.build/)
