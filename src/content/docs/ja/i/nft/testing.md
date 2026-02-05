---
title: テスト手順
description: 開発・ステージング環境でのNFTミントテスト
sidebar:
  order: 7
---

開発（dev）・ステージング（stg）環境でNFT機能をテストする手順を説明します。

:::note[対象読者]
このページは開発者・QA担当者向けです。一般ユーザーは本番環境をご利用ください。
:::

---

## テスト環境の概要

### 環境と使用チェーン

| 環境 | 使用ネットワーク | 用途 |
|------|------------------|------|
| development | テストネット | ローカル開発・動作確認 |
| staging | テストネット | リリース前検証 |
| production | メインネット | 本番運用 |

### テストネットワーク

| チェーン | テストネット名 | Chain ID |
|----------|----------------|----------|
| Polygon | Polygon Amoy | 80002 |
| Ethereum | Sepolia | 11155111 |

テスト環境では実際の暗号資産ではなく、**テスト用トークン**（無料で取得可能）を使用します。

---

## 事前準備

### 1. MetaMaskの準備

MetaMaskがインストールされていない場合は、先に導入してください。

→ [ウォレット準備](/ja/i/nft/setup/)

### 2. テストネットワークの追加

MetaMaskにテストネットワークを追加します。

#### Polygon Amoy の追加

| 項目 | 値 |
|------|-----|
| ネットワーク名 | Polygon Amoy |
| RPC URL | `https://rpc-amoy.polygon.technology/` |
| Chain ID | 80002 |
| 通貨シンボル | MATIC |
| Block Explorer | `https://amoy.polygonscan.com` |

**追加手順:**
1. MetaMaskを開く
2. ネットワーク選択 → 「ネットワークを追加」
3. 「ネットワークを手動で追加」を選択
4. 上記の情報を入力して保存

#### Sepolia の追加

| 項目 | 値 |
|------|-----|
| ネットワーク名 | Sepolia |
| RPC URL | `https://rpc.sepolia.org` |
| Chain ID | 11155111 |
| 通貨シンボル | ETH |
| Block Explorer | `https://sepolia.etherscan.io` |

:::tip
Sepoliaは MetaMask の「テストネットワークを表示」設定を有効にすると、プリセットとして選択できる場合があります。
:::

### 3. テスト用トークンの取得

テストネットでのガス代として、無料のテストトークンが必要です。

#### Polygon Amoy（テスト用MATIC）

1. [Polygon Faucet](https://faucet.polygon.technology/) にアクセス
2. 「Amoy」を選択
3. MetaMaskのウォレットアドレスを入力
4. 「Submit」をクリック
5. 数分以内にテスト用MATICが届く

**推奨取得量**: 0.5〜1 MATIC（複数回のテストに十分）

#### Sepolia（テスト用ETH）

1. [Sepolia Faucet](https://sepoliafaucet.com/) にアクセス
2. Alchemyアカウントでログイン（無料）
3. MetaMaskのウォレットアドレスを入力
4. 「Send Me ETH」をクリック

**推奨取得量**: 0.1〜0.5 ETH

:::note[フォーセットの制限]
フォーセットには1日あたりの取得制限があります。必要に応じて翌日再度取得してください。
:::

---

## テスト手順

### Step 1: 環境の確認

開発環境またはステージング環境にアクセスします。

テスト環境では以下が表示されます：

- **テストネットバナー**: ページ上部に「🧪 テストネット環境です」という警告
- **チェーン名に🧪**: ドロップダウンに「🧪 Polygon Amoy」と表示
- **通貨表記**: tMATIC / tETH（テストトークンを示す）

### Step 2: ウォレット接続

1. NFTページを開く
2. 「ウォレット接続」セクションで「接続」をクリック
3. MetaMaskで承認

接続後、以下を確認：
- ウォレットアドレスが表示されている
- テスト用トークンの残高が表示されている

### Step 3: テスト用作品の準備

テスト環境のデータベースに作品が必要です。

- **開発環境**: ローカルDBまたは開発用DBの作品を使用
- **ステージング環境**: ステージング用DBの作品を使用

:::note
テスト用アカウントで作品を事前に作成しておいてください。
:::

### Step 4: チェーン選択

ドロップダウンからテストネットを選択します。

| 選択肢 | 説明 |
|--------|------|
| 🧪 Polygon Amoy | Polygonテストネット（推奨） |
| 🧪 Sepolia | Ethereumテストネット |

:::tip[推奨]
初回テストは **Polygon Amoy** で実施してください。ガス代が低く、処理も高速です。
:::

### Step 5: ガス代確認

ガス見積もりが表示されます。

テスト環境での表示例：
```
推定ガス代: 0.02 tMATIC
🧪 実ガス費用ではありません
```

- **tMATIC / tETH**: テストトークンであることを示す
- テスト用トークンなので実際の費用は発生しません

### Step 6: ミント実行

1. 「ミント」ボタンをクリック
2. MetaMaskでトランザクションを確認・承認
3. 処理完了を待つ

### Step 7: 結果確認

#### テストネットエクスプローラーで確認

ミント成功後、トランザクションを確認できます。

| チェーン | エクスプローラー |
|----------|------------------|
| Polygon Amoy | https://amoy.polygonscan.com |
| Sepolia | https://sepolia.etherscan.io |

完了画面に表示されるトランザクションハッシュをクリックして確認します。

#### テストネットマーケットプレイスで確認

テストネットNFTは以下で確認できます：

- [Rarible Testnet](https://testnet.rarible.com) - ウォレット接続後、Myコレクションで確認

:::note
OpenSea本番サイトではテストネットNFTは表示されません。
:::

---

## テストシナリオ

### 基本テスト

| # | テスト項目 | 期待結果 |
|---|-----------|----------|
| 1 | Polygon Amoyでミント | 成功、エクスプローラーで確認可能 |
| 2 | Sepoliaでミント（Premium） | 成功、エクスプローラーで確認可能 |
| 3 | 残高不足でミント | エラー表示、ボタン無効化 |
| 4 | 月間上限到達後にミント | エラー表示、ボタン無効化 |

### エラーケーステスト

| # | テスト項目 | 期待結果 |
|---|-----------|----------|
| 1 | MetaMaskで拒否 | 「署名がキャンセルされました」エラー |
| 2 | ネットワーク切断中 | 適切なエラーメッセージ |
| 3 | Freeプランでアクセス | ミントボタン無効、プランアップグレード案内 |

### プラン別テスト

| プラン | Polygon Amoy | Sepolia |
|--------|--------------|---------|
| Free | 利用不可 | 利用不可 |
| Lite | 利用可能（月3回） | 利用不可 |
| Premium | 利用可能（月10回） | 利用可能（月3回） |

---

## トラブルシューティング

### テスト用トークンが届かない

- フォーセットの1日制限に達している可能性があります
- 別のフォーセットを試すか、翌日再度取得してください
- ウォレットアドレスが正しいか確認してください

### ネットワークに接続できない

- MetaMaskのネットワーク設定を確認
- RPC URLが正しいか確認
- VPNを使用している場合は一時的に無効化

### トランザクションが失敗する

- ガス代が十分か確認
- ネットワークの混雑状況を確認
- 数分待ってから再試行

### テストネットバナーが表示されない

- 環境変数 `DEPLOY_ENV` が正しく設定されているか確認
- 開発サーバーを再起動

---

## 環境変数リファレンス

### Web側（.env）

```bash
# 環境指定（development / staging / production）
NEXT_PUBLIC_DEPLOY_ENV=development

# RPC URL（テストネット用）
NEXT_PUBLIC_POLYGON_CHAIN_RPC_URL=https://polygon-amoy.g.alchemy.com/v2/YOUR_KEY
NEXT_PUBLIC_ETHEREUM_CHAIN_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
```

### API側（.env）

```bash
# 環境指定
DEPLOY_ENV=development

# RPC URL（テストネット用）
POLYGON_CHAIN_RPC_URL=https://polygon-amoy.g.alchemy.com/v2/YOUR_KEY
ETHEREUM_CHAIN_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY

# コントラクトアドレス（テストネット用）
POLYGON_CHAIN_CONTRACT=0xEF0dBBDf5A3a45dAF6CEA4F4748d154A4F27eaA1
ETHEREUM_CHAIN_CONTRACT=0x5ddE85BD9989F12dDBcAC135ADA44e2651BCDDdD
```

---

## 関連リンク

### フォーセット

- [Polygon Faucet](https://faucet.polygon.technology/)
- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)

### エクスプローラー

- [Polygon Amoy Scan](https://amoy.polygonscan.com)
- [Sepolia Etherscan](https://sepolia.etherscan.io)

### マーケットプレイス（テストネット）

- [Rarible Testnet](https://testnet.rarible.com)
