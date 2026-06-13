# SHUGA PHOTOGRAPHY — Portfolio

東京を拠点にバレエ・音楽発表会を専門に撮影するイベント写真家の、1ページ完結（LP型）ポートフォリオサイトです。

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 14 (App Router) ・静的エクスポート（`output: 'export'`） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS |
| フォント | Noto Sans JP (Google Fonts) |
| 画像ホスティング | Cloudflare R2（初期はプレースホルダ画像） |
| デプロイ | Cloudflare Pages（GitHub連携の自動デプロイ） |

## ローカルでの確認方法

```bash
npm install        # 初回のみ
npm run dev        # 開発サーバー → http://localhost:3000
npm run build      # 静的ビルド → out/ に生成される
```

`npm run build` 後に `out/index.html` が生成されていればOKです。
ビルド結果をそのまま確認したい場合は `npx serve out` などで `out/` を配信してください。

## Cloudflare Pages の設定

GitHub連携でリポジトリを接続し、以下を設定します。

| 項目 | 値 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `out` |

## 編集箇所まとめ

### 1. R2 の実画像に差し替える — `src/data/gallery.ts`

1. `next.config.js` の `images.remotePatterns` に R2 の公開ドメインを設定
   （`*.r2.dev` は設定済み。カスタムドメインを使う場合は追加）
2. `src/data/gallery.ts` 冒頭の `R2_BASE_URL` を実際の公開URLに変更
3. 各画像の `src` を `r2('ファイル名.jpg')` に変更し、`width` / `height` を実画像の縦横比に合わせる
   （masonry グリッドとライトボックスの表示比率に使われます）

```ts
// src/data/gallery.ts
export const R2_BASE_URL = 'https://pub-xxxxxxxx.r2.dev'; // ← R2の公開URL

{
  id: 'ballet-01',
  src: r2('ballet-01.jpg'),   // ← picsum のURLから差し替え
  alt: 'バレエ発表会 ソロヴァリエーションの跳躍の瞬間',
  category: 'ballet',
  width: 800,                 // ← 実画像の比率に合わせる
  height: 1200,
},
```

### 2. サイト名・SNSリンク・問い合わせ先 — `src/data/site.ts`

サイト名・キャッチコピー・肩書き・メールアドレス・SNSリンク（Instagram / X）・
OGP用のサイトURL / OG画像は、すべて `src/data/site.ts` にまとまっています。

```ts
// src/data/site.ts
contactEmail: 'info@shuga-photography.com',
contactFormUrl: '',     // GoogleフォームなどのURLを入れるとボタンが表示される
photoOrderUrl: '...',   // 発表会の写真注文サイトURL（空文字なら導線非表示）
sns: {
  instagram: 'https://www.instagram.com/your_account/',
  x: 'https://x.com/your_account/',
},
```

### 3. 文章（自己紹介・サービス内容）

| ファイル | 内容 |
|----------|------|
| `src/components/About.tsx` | 自己紹介文（仮テキスト） |
| `src/components/Services.tsx` | サービス紹介の文言 |

## ディレクトリ構成

```
photographer-portfolio/
├── public/
│   └── favicon.svg             # ファビコン（要差し替え）
├── src/
│   ├── app/
│   │   ├── globals.css         # グローバルスタイル（スムーズスクロール）
│   │   ├── layout.tsx          # ルートレイアウト（フォント・メタ情報・OGP）
│   │   └── page.tsx            # 1ページ完結のトップページ
│   ├── components/
│   │   ├── Header.tsx          # 固定ヘッダー（アンカーナビ・ハンバーガーメニュー）
│   │   ├── Hero.tsx            # 導入（テキスト主体）
│   │   ├── Gallery.tsx         # ギャラリー（カテゴリタブ・masonry）
│   │   ├── Lightbox.tsx        # ライトボックス（自前実装）
│   │   ├── About.tsx           # 自己紹介
│   │   ├── Services.tsx        # サービス概要
│   │   ├── Contact.tsx         # 問い合わせ・SNSリンク
│   │   ├── Footer.tsx          # フッター
│   │   └── FadeIn.tsx          # スクロールフェードイン（IntersectionObserver）
│   └── data/
│       ├── site.ts             # ★ サイト設定（名前・SNS・問い合わせ先）
│       └── gallery.ts          # ★ ギャラリー画像データ（R2のURLはここ）
├── next.config.js              # Next.js設定（静的エクスポート・R2ドメイン許可）
└── tailwind.config.ts          # Tailwind CSS設定
```

## ライセンス

本リポジトリのコードは MIT ライセンスです。
ギャラリーのプレースホルダ画像は [Lorem Picsum](https://picsum.photos) を使用しています（実際の写真への差し替えが必要です）。
