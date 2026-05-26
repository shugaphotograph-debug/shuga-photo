export type Category = 'all' | 'ballet' | 'music' | 'event';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'all'>;
  width: number;
  height: number;
}

// ダミー画像は Unsplash の直リンクを使用しています。
// 実際の写真に差し替える場合は src を変更してください。
// public/images/ に画像を置く場合は src: '/images/ファイル名.jpg' に変更。
export const galleryImages: GalleryImage[] = [
  // ── バレエ発表会 ──────────────────────────────────────
  {
    id: 'ballet-1',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    alt: 'バレエ発表会 - ソロパフォーマンス',
    category: 'ballet',
    width: 800,
    height: 1067,
  },
  {
    id: 'ballet-2',
    src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80',
    alt: 'バレエ発表会 - 群舞',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  {
    id: 'ballet-3',
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    alt: 'バレエ発表会 - バリエーション',
    category: 'ballet',
    width: 800,
    height: 1200,
  },
  {
    id: 'ballet-4',
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80',
    alt: 'バレエ発表会 - 発表会本番',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  {
    id: 'ballet-5',
    src: 'https://images.unsplash.com/photo-1611420576585-5ceac7c8c57c?w=800&q=80',
    alt: 'バレエ発表会 - クラシックバレエ',
    category: 'ballet',
    width: 800,
    height: 1067,
  },
  {
    id: 'ballet-6',
    src: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?w=800&q=80',
    alt: 'バレエ発表会 - 舞台袖',
    category: 'ballet',
    width: 800,
    height: 534,
  },
  // ── 音楽発表会 ──────────────────────────────────────
  {
    id: 'music-1',
    src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    alt: '音楽発表会 - ピアノ演奏',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-2',
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    alt: '音楽発表会 - ステージ演奏',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-3',
    src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
    alt: '音楽発表会 - 弦楽器',
    category: 'music',
    width: 800,
    height: 1067,
  },
  {
    id: 'music-4',
    src: 'https://images.unsplash.com/photo-1415886813400-10ade9a4a4ff?w=800&q=80',
    alt: '音楽発表会 - 弦楽四重奏',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-5',
    src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
    alt: '音楽発表会 - コンサート',
    category: 'music',
    width: 800,
    height: 534,
  },
  {
    id: 'music-6',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    alt: '音楽発表会 - ライブパフォーマンス',
    category: 'music',
    width: 800,
    height: 1067,
  },
  // ── イベント ──────────────────────────────────────
  {
    id: 'event-1',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'イベント撮影 - セレモニー',
    category: 'event',
    width: 800,
    height: 534,
  },
  {
    id: 'event-2',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    alt: 'イベント撮影 - スピーカー',
    category: 'event',
    width: 800,
    height: 534,
  },
  {
    id: 'event-3',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    alt: 'イベント撮影 - パーティー',
    category: 'event',
    width: 800,
    height: 1067,
  },
  {
    id: 'event-4',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    alt: 'イベント撮影 - アウトドアイベント',
    category: 'event',
    width: 800,
    height: 534,
  },
  {
    id: 'event-5',
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    alt: 'イベント撮影 - 会場全体',
    category: 'event',
    width: 800,
    height: 534,
  },
  {
    id: 'event-6',
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    alt: 'イベント撮影 - チームフォト',
    category: 'event',
    width: 800,
    height: 1067,
  },
];
