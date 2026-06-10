import { siteConfig } from '@/data/site';
import FadeIn from '@/components/FadeIn';

export default function Hero() {
  return (
    <section id="top" className="px-5 sm:px-8">
      <div className="max-w-6xl mx-auto min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center py-32">
        <FadeIn>
          <p className="text-xs tracking-[0.35em] text-neutral-400 mb-8">
            {siteConfig.title}
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-[0.3em] text-neutral-900 mb-10 pl-[0.3em]">
            {siteConfig.photographerName}
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-sm sm:text-base font-light tracking-[0.15em] text-neutral-600 leading-loose">
            {siteConfig.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={500} className="mt-20">
          <a
            href="#gallery"
            className="inline-flex flex-col items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors"
            aria-label="ギャラリーへスクロール"
          >
            <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
            <span className="block w-px h-12 bg-current" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
