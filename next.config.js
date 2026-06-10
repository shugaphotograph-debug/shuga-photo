/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages（静的サイト）向けの設定。
  // Build output directory には `out` を指定してください。
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      // プレースホルダ画像（実画像に差し替えたら削除可）
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      // Cloudflare R2 の公開ドメイン。
      // 実際のドメインに合わせて hostname を変更してください。
      // （src/data/gallery.ts の R2_BASE_URL と揃えること）
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
    ],
  },
};

module.exports = nextConfig;
