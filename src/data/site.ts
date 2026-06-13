// ===============================================================
// サイト全体の設定値はこのファイルにまとまっています。
// サイト名・肩書き・問い合わせ先・SNSリンクの変更はここを編集してください。
// ===============================================================

export const siteConfig = {
  // サイト名（ヘッダー・フッター・メタ情報に使用）
  siteName: 'SHUGA PHOTOGRAPHY',

  // 写真家名
  photographerName: 'SHUGA',

  // キャッチコピー（ヒーローに表示）
  tagline: '舞台の上の、一瞬のきらめきを。',

  // 肩書き・拠点
  title: '東京 ／ バレエ・音楽発表会 撮影',

  // メタ情報（SEO・OGP）
  description:
    '東京を拠点にバレエ発表会・音楽発表会を専門に撮影するイベントフォトグラファー。舞台の上の一瞬のきらめきを、美しい写真に残します。',

  // デプロイ先のURL（OGPの絶対URL生成に使用。Cloudflare Pagesの本番URLに差し替えてください）
  siteUrl: 'https://shuga-photo.pages.dev',

  // OGP画像のURL（SNSシェア時のサムネイル。R2の実画像URLに差し替えてください）
  ogImage: 'https://picsum.photos/seed/shuga-og/1200/630',

  // 問い合わせ先メールアドレス
  contactEmail: 'info@shuga-photography.com',

  // 問い合わせフォームのURL（Googleフォーム等を使う場合はここに設定。空文字ならボタン非表示）
  contactFormUrl: '',

  // 発表会の写真購入（注文サイト）のURL。実際の注文サイトURLに差し替えてください。空文字なら導線非表示
  photoOrderUrl: 'https://stage-flight.com/',

  // SNSリンク（リンク先を差し替えてください）
  sns: {
    instagram: 'https://www.instagram.com/your_account/',
    x: 'https://x.com/your_account/',
  },
} as const;
