import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';

// ── トップに表示する代表作（各カテゴリ1枚）────────────────────────
const featuredImages = (
  ['ballet', 'music', 'event'] as const
).map((cat) => galleryImages.find((img) => img.category === cat)!);

// ── ヒーロー画像（発表会・舞台の象徴的な1枚）──────────────────────
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80';

export default function HomePage() {
  return (
    <>
      {/* ────────── Hero ────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="ヒーローイメージ — ステージパフォーマンス"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* キャッチコピー */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60 mb-5">
            Photographer
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] mb-6">
            Shuga Photo
          </h1>
          <p className="text-sm md:text-base font-light tracking-[0.15em] text-white/80">
            バレエ・音楽発表会・イベント撮影
          </p>
        </div>

        {/* スクロール促進矢印 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-[9px] tracking-widest text-white/50 uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ────────── About / Catchphrase ────────── */}
      <section className="py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-8">About</p>
          <h2 className="text-2xl md:text-3xl font-light leading-[2] text-stone-800">
            大切な瞬間を、永遠に。
          </h2>
          <div className="mt-1 mx-auto w-8 h-px bg-stone-300" />
          <p className="mt-8 text-sm text-stone-500 leading-loose">
            バレエ発表会、音楽発表会、各種イベントの撮影を専門としています。
            <br className="hidden md:block" />
            光と影の中に輝く表情、躍動するからだ、感動の瞬間を
            <br className="hidden md:block" />
            丁寧に切り取り、美しい写真としてお届けします。
          </p>
        </div>
      </section>

      {/* ────────── Featured Works ────────── */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-3">
              Featured Works
            </p>
            <h2 className="text-lg font-light tracking-widest text-stone-800">代表作</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {featuredImages.map((image) => (
              <Link
                key={image.id}
                href="/works"
                className="block aspect-[3/4] relative overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
                {/* ホバー時のオーバーレイ＋ラベル */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-[10px] tracking-[0.3em] text-white uppercase">
                    {image.category === 'ballet'
                      ? 'Ballet'
                      : image.category === 'music'
                      ? 'Music'
                      : 'Event'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/works"
              className="inline-block border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-10 py-3.5 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {/* ────────── Service CTA ────────── */}
      <section className="bg-stone-50 py-28 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-5">Service</p>
        <h2 className="text-xl font-light tracking-wider text-stone-800 mb-5">
          撮影のご依頼
        </h2>
        <p className="text-sm text-stone-500 mb-10 leading-loose max-w-sm mx-auto">
          料金プランや撮影の流れについては、
          サービスページをご覧ください。
        </p>
        <Link
          href="/service"
          className="inline-block bg-stone-900 text-white text-xs tracking-[0.25em] uppercase px-10 py-3.5 hover:bg-stone-700 transition-colors duration-300"
        >
          Price &amp; Service
        </Link>
      </section>
    </>
  );
}
