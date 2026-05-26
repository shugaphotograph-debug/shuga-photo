# Shuga Photo — Photographer Portfolio

バレエ・音楽発表会・イベント撮影専門フォトグラファーのポートフォリオサイトです。

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS |
| フォント | Noto Sans JP (Google Fonts) |
| デプロイ | GitHub Pages（静的エクスポート） |

---

## ローカル開発

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. 静的ビルド（ローカル確認）

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

---

## GitHub Pages へのデプロイ

### ステップ 1 — リポジトリ名の設定

`next.config.js` の先頭にある定数をリポジトリ名に変更します。

```js
// next.config.js
const REPO_NAME = 'your-repo-name'; // ← リポジトリ名に変更
```

### ステップ 2 — GitHubにプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### ステップ 3 — GitHub Pages の有効化

1. リポジトリの **Settings** タブを開く
2. サイドバーの **Pages** をクリック
3. **Build and deployment** → **Source** を **`GitHub Actions`** に変更

`main` ブランチへの次のプッシュ（または Actions タブから手動実行）でデプロイが走り、
`https://<username>.github.io/<repo-name>/` でサイトが公開されます。

---

## カスタマイズ

### サイト名・メタ情報の変更

| ファイル | 変更箇所 |
|----------|---------|
| `src/app/layout.tsx` | `metadata`（title・description） |
| `src/components/Header.tsx` | サイト名文字列 |
| `src/components/Footer.tsx` | コピーライト文字列 |

### Googleフォームの埋め込み

`src/app/contact/page.tsx` の定数を差し替えます。

```tsx
// src/app/contact/page.tsx
const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';
```

**Googleフォームの埋め込みURLの取得方法：**
1. Googleフォームを開く
2. 右上の「送信」ボタンをクリック
3. `<>` （埋め込み）タブを選択
4. iframeの `src` 属性のURLをコピー

### ギャラリー画像の差し替え

`src/data/gallery.ts` の各画像の `src` を実際の写真パスに変更します。

```ts
// ローカルファイルの場合
src: '/images/ballet-01.jpg',

// 外部URLの場合
src: 'https://example.com/photo.jpg',
```

> `public/images/` ディレクトリに画像ファイルを置き、`src: '/images/ファイル名.jpg'` と指定します。

### 料金プランの更新

`src/data/services.ts` の `price` フィールドを実際の料金に更新します。

```ts
price: '¥30,000〜',
```

---

## ディレクトリ構成

```
photographer-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions ワークフロー
├── public/
│   └── favicon.svg             # ファビコン（要差し替え）
├── src/
│   ├── app/
│   │   ├── globals.css         # グローバルスタイル
│   │   ├── layout.tsx          # ルートレイアウト（フォント・メタ情報）
│   │   ├── page.tsx            # トップページ
│   │   ├── works/
│   │   │   └── page.tsx        # ギャラリーページ（ライトボックス付き）
│   │   ├── service/
│   │   │   └── page.tsx        # 料金・サービスページ
│   │   └── contact/
│   │       └── page.tsx        # お問い合わせページ（Googleフォーム埋め込み）
│   ├── components/
│   │   ├── Header.tsx          # ヘッダー（スクロールエフェクト・ハンバーガーメニュー）
│   │   ├── Footer.tsx          # フッター
│   │   ├── Lightbox.tsx        # ライトボックス（外部ライブラリ不使用）
│   │   └── FAQAccordion.tsx    # FAQアコーディオン
│   └── data/
│       ├── gallery.ts          # ギャラリー画像データ
│       ├── services.ts         # 料金プラン・撮影フローデータ
│       └── faq.ts              # FAQデータ
├── next.config.js              # Next.js設定（basePath・静的エクスポート）
├── tailwind.config.ts          # Tailwind CSS設定
├── tsconfig.json               # TypeScript設定
└── README.md
```

---

## ライセンス

本リポジトリのコードは MIT ライセンスです。
ギャラリーに使用しているダミー画像は [Unsplash](https://unsplash.com) からのものです（実際の写真への差し替えが必要です）。
