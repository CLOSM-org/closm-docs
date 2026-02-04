# Starlight サイドバー設定ガイド

## 概要

Starlight のサイドバー設定における `autogenerate` と `starlight-auto-sidebar` プラグインのベストプラクティス。

---

## 重要な前提

### `starlight-auto-sidebar` プラグインは `sidebar` 設定が必須

**プラグインは既存の `autogenerate` を拡張するもの**であり、`sidebar` 設定なしでは動作しない。

```javascript
// ❌ 間違い: sidebar 設定なし
plugins: [starlightAutoSidebar()],

// ✅ 正しい: sidebar + autogenerate を設定
sidebar: [
  {
    label: 'CLOSM i',
    autogenerate: { directory: 'i' },
  },
],
plugins: [starlightAutoSidebar()],
```

### `_meta.yml` の `label` は入れ子ディレクトリでのみ機能

```
i/                  ← ルート（autogenerate の対象）
├── _meta.yml       ← label は効かない（config で設定）
├── intro/          ← 入れ子ディレクトリ
│   └── _meta.yml   ← label が機能する ✅
└── goods/
    └── _meta.yml   ← label が機能する ✅
```

---

## 設定の階層と責務

| 項目 | 設定場所 | 例 |
|:-----|:---------|:---|
| ルートグループ名 | `astro.config.mjs` の `sidebar.label` | `label: 'CLOSM i'` |
| サブカテゴリ名 | `_meta.yml` の `label` | `label: グッズ販売` |
| サブカテゴリ順序 | `_meta.yml` の `order` | `order: 4` |
| ページタイトル | frontmatter の `title` | `title: 概要` |
| ページリンク名 | frontmatter の `sidebar.label`（任意） | `sidebar.label: 短い名前` |
| ページ順序 | frontmatter の `sidebar.order` | `sidebar.order: 1` |

---

## 実装例

### astro.config.mjs

```javascript
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

export default defineConfig({
  integrations: [
    starlight({
      sidebar: [
        {
          label: 'CLOSM i',  // ルートグループ名
          autogenerate: { directory: 'i' },
        },
      ],
      plugins: [starlightAutoSidebar()],
    }),
  ],
});
```

### src/content.config.ts

```typescript
import { docsLoader, docsSchema } from '@astrojs/starlight/loaders';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';
import { defineCollection } from 'astro:content';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
};
```

### ディレクトリ構造

```
src/content/docs/
├── i/                      # 英語（デフォルト）
│   ├── intro/
│   │   ├── _meta.yml       # label: Getting Started, order: 1
│   │   ├── index.md        # sidebar.order: 1
│   │   └── quickstart.md   # sidebar.order: 2
│   ├── create/
│   │   ├── _meta.yml       # label: Create, order: 2
│   │   └── index.md
│   ├── gallery/
│   │   ├── _meta.yml       # label: Gallery, order: 3
│   │   └── index.md
│   ├── goods/
│   │   ├── _meta.yml       # label: Merchandise, order: 4
│   │   ├── index.md        # sidebar.order: 1
│   │   ├── products.md     # sidebar.order: 2
│   │   └── ...
│   ├── nft/
│   │   ├── _meta.yml       # label: NFT, order: 5
│   │   └── index.md
│   └── account/
│       ├── _meta.yml       # label: Account, order: 6
│       └── index.md
│
└── ja/                     # 日本語
    └── i/
        ├── intro/
        │   ├── _meta.yml   # label: はじめに, order: 1
        │   └── ...
        ├── goods/
        │   ├── _meta.yml   # label: グッズ販売, order: 4
        │   └── ...
        └── ...
```

### `_meta.yml` の書式

```yaml
# 必須
label: グッズ販売    # サイドバーに表示されるカテゴリ名
order: 4            # カテゴリの表示順序（小さい順）

# オプション
collapsed: false    # 折りたたみ状態
badge: New          # バッジ表示
hidden: false       # 非表示
sort: slug          # コンテンツのソート（slug/reverse-slug）
depth: Infinity     # ネスト表示の深さ制限
cascade: []         # 子ディレクトリへの設定継承
```

### frontmatter 例

```yaml
---
title: グッズ販売について
description: フラクタルアートをオリジナルグッズに
sidebar:
  order: 1          # このカテゴリ内での表示順序
---
```

---

## よくある間違い

### 1. `sidebar` 設定なしでプラグインを使用

```javascript
// ❌ 動作しない
plugins: [starlightAutoSidebar()],
// sidebar が未定義
```

### 2. ルートディレクトリで `_meta.yml` の `label` を使用

```yaml
# i/_meta.yml
# ❌ ルートでは label が効かない
label: CLOSM i
```

### 3. `sidebar.label` でカテゴリ名を設定しようとする

```yaml
# ❌ これはページリンク名であり、カテゴリ名ではない
---
title: 概要
sidebar:
  label: グッズ販売
---
```

### 4. フォルダ順序を制御せずに autogenerate を使用

デフォルトではアルファベット順になる。`_meta.yml` の `order` で明示的に指定が必要。

---

## 参考資料

- [Sidebar Navigation - Astro Starlight](https://starlight.astro.build/guides/sidebar/)
- [Configuration Reference - Astro Starlight](https://starlight.astro.build/reference/configuration/)
- [starlight-auto-sidebar - Getting Started](https://starlight-auto-sidebar.netlify.app/getting-started/)
- [starlight-auto-sidebar - Metadata](https://starlight-auto-sidebar.netlify.app/metadata/)
- [Sidebar folder order issue #1223](https://github.com/withastro/starlight/issues/1223)
