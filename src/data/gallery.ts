// ===============================================================
// ギャラリーの画像データはこのファイルにまとまっています。
//
// 【R2の実画像に差し替える手順】
// 1. next.config.js の remotePatterns に R2 の公開ドメインを追加
//    （例: hostname: 'pub-xxxxxxxx.r2.dev' やカスタムドメイン）
// 2. 下の R2_BASE_URL を R2 の公開URLに変更
// 3. 各画像の src を r2(`ファイル名.jpg`) に、width / height を
//    実画像の縦横比に合わせて変更（masonry表示の比率計算に使用）
// ===============================================================

// R2 の公開ベースURL（末尾スラッシュなし）。実運用時に差し替えてください。
export const R2_BASE_URL = 'https://pub-xxxxxxxxxxxxxxxx.r2.dev';

// R2 上のファイル名からURLを組み立てるヘルパー
export const r2 = (fileName: string): string => `${R2_BASE_URL}/${fileName}`;

export type CategoryId = 'ballet' | 'music';

export interface GalleryCategory {
  id: CategoryId;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'ballet', label: 'バレエ' },
  { id: 'music', label: '音楽発表会' },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: CategoryId;
  width: number;
  height: number;
}

// 初期はプレースホルダ画像（picsum.photos）。
// 実画像に差し替える際は src を r2('xxx.jpg') に変更してください。
export const galleryImages: GalleryImage[] = [
  // ── バレエ ──────────────────────────────────────
  {
    id: 'ballet-01',
    src: 'https://picsum.photos/seed/ballet-01/800/1200',
    alt: 'バレエ発表会 ソロヴァリエーションの跳躍の瞬間',
    category: 'ballet',
    width: 800,
    height: 1200,
  },
  {
    id: 'ballet-02',
    src: 'https://picsum.photos/seed/ballet-02/800/534',
    alt: 'バレエ発表会 群舞のフォーメーション',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  {
    id: 'ballet-03',
    src: 'https://picsum.photos/seed/ballet-03/800/1067',
    alt: 'バレエ発表会 パ・ド・ドゥのリフト',
    category: 'ballet',
    width: 800,
    height: 1067,
  },
  {
    id: 'ballet-04',
    src: 'https://picsum.photos/seed/ballet-04/800/534',
    alt: 'バレエ発表会 開演前の舞台袖の様子',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  {
    id: 'ballet-05',
    src: 'https://picsum.photos/seed/ballet-05/800/1200',
    alt: 'バレエ発表会 スポットライトの中のアラベスク',
    category: 'ballet',
    width: 800,
    height: 1200,
  },
  {
    id: 'ballet-06',
    src: 'https://picsum.photos/seed/ballet-06/800/534',
    alt: 'バレエ発表会 フィナーレのカーテンコール',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  {
    id: 'ballet-07',
    src: 'https://picsum.photos/seed/ballet-07/800/1067',
    alt: 'バレエ発表会 トウシューズで立つダンサー',
    category: 'ballet',
    width: 800,
    height: 1067,
  },
  {
    id: 'ballet-08',
    src: 'https://picsum.photos/seed/ballet-08/800/534',
    alt: 'バレエ発表会 子どもたちの群舞',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  // ── 音楽発表会 ──────────────────────────────────
  {
    id: 'music-01',
    src: 'https://picsum.photos/seed/music-01/800/534',
    alt: '音楽発表会 グランドピアノでの独奏',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-02',
    src: 'https://picsum.photos/seed/music-02/800/1200',
    alt: '音楽発表会 ヴァイオリンを構える奏者',
    category: 'music',
    width: 800,
    height: 1200,
  },
  {
    id: 'music-03',
    src: 'https://picsum.photos/seed/music-03/800/534',
    alt: '音楽発表会 弦楽アンサンブルの演奏',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-04',
    src: 'https://picsum.photos/seed/music-04/800/1067',
    alt: '音楽発表会 ステージ照明の中のピアニスト',
    category: 'music',
    width: 800,
    height: 1067,
  },
  {
    id: 'music-05',
    src: 'https://picsum.photos/seed/music-05/800/534',
    alt: '音楽発表会 演奏後のお辞儀の場面',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-06',
    src: 'https://picsum.photos/seed/music-06/800/1067',
    alt: '音楽発表会 鍵盤に向かう手元のクローズアップ',
    category: 'music',
    width: 800,
    height: 1067,
  },
  {
    id: 'music-07',
    src: 'https://picsum.photos/seed/music-07/800/534',
    alt: '音楽発表会 客席から見たホール全景',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-08',
    src: 'https://picsum.photos/seed/music-08/800/1200',
    alt: '音楽発表会 緊張の面持ちで出番を待つ出演者',
    category: 'music',
    width: 800,
    height: 1200,
  },
];
