# CLOSM Docs

CLOSMのドキュメントサイトです。複数プロダクトのドキュメントを集約管理する企業向けドキュメントポータルです。

## 概要

### 目的

- **エンジニア主導**: Markdownで執筆し、Gitでバージョン管理
- **エンドユーザー向け**: 検索機能と親しみやすいUIで使いやすいドキュメント
- **低コスト運用**: S3 + CloudFrontで静的ホスティング

### 技術スタック

- **フレームワーク**: [Starlight](https://starlight.astro.build/) (Astro)
- **テーマ**: [Ion](https://github.com/HiDeoo/starlight-ion-theme)
- **パッケージマネージャ**: pnpm
- **検索**: Pagefind（Starlight標準搭載）
- **ホスティング**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions

## サイト構成

### URL構造

```
docs.closm.llc/
├── /                    # ポータルページ（英語・デフォルト）
├── /i/                  # CLOSM i のドキュメント（英語）
│   ├── /intro/
│   └── /tutorial/
├── /ja/                 # ポータルページ（日本語）
└── /ja/i/               # CLOSM i のドキュメント（日本語）
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
│   │   ├── index.md               # ポータル（英語）
│   │   ├── i/
│   │   │   ├── intro.md           # CLOSM i Introduction
│   │   │   └── tutorial.md        # CLOSM i Tutorial
│   │   └── ja/                    # 日本語翻訳
│   │       ├── index.md
│   │       └── i/
│   │           ├── intro.md
│   │           └── tutorial.md
│   └── styles/custom.css          # カスタムCSS（フォント・タイポグラフィ）
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

| Secret | 説明 | 値 |
|--------|------|-----|
| `AWS_ACCESS_KEY_ID` | AWS アクセスキー | GithubActionsExecuter |
| `AWS_SECRET_ACCESS_KEY` | AWS シークレットキー | GithubActionsExecuter |
| `AWS_REGION` | AWS リージョン | `ap-northeast-1` |
| `AWS_S3_BUCKET_NAME` | S3バケット名 | `closm-docs-prod` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFrontディストリビューションID | `EADR14ROCZOLB` |

## 開発方針

- **モノレポ管理**: 全プロダクトのドキュメントを1つのリポジトリで管理
- **集約型**: 1つのサブドメイン（`docs.closm.llc`）に全ドキュメントを集約
- **i18n**: 英語をデフォルト（URLプレフィックスなし）、日本語は`/ja/`プレフィックス
- **拡張性**: 新しいプロダクトは`src/content/docs/`にディレクトリを追加し、`astro.config.mjs`のサイドバーにグループを追加

## 参考リンク

- [Starlight公式ドキュメント](https://starlight.astro.build/)
- [Astro公式ドキュメント](https://docs.astro.build/)
