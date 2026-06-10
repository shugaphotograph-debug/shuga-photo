import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.siteName} | バレエ・音楽発表会撮影（東京）`,
  description: siteConfig.description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | バレエ・音楽発表会撮影（東京）`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} | バレエ・音楽発表会撮影（東京）`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <Header />
        {/* ヘッダー（h-16）ぶんの余白 */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
