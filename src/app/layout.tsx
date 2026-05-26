import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Shuga Photo | バレエ・音楽発表会・イベント撮影',
    template: '%s | Shuga Photo',
  },
  description:
    'バレエ発表会、音楽発表会、イベントの撮影を専門とするフォトグラファー。大切な瞬間を美しい写真に残します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Shuga Photo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans bg-white text-stone-900 antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
