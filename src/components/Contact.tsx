import { siteConfig } from '@/data/site';
import FadeIn from '@/components/FadeIn';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-5 sm:px-8 py-24 sm:py-32 bg-neutral-950 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-lg sm:text-xl font-extralight tracking-[0.4em] pl-[0.4em]">
            CONTACT
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-12 text-xs sm:text-sm font-light leading-loose tracking-[0.15em] text-neutral-400">
            撮影のご依頼・ご相談は、メールまたはSNSのDMからお気軽にどうぞ。
          </p>

          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-block border border-neutral-600 px-10 py-4 text-xs tracking-[0.25em] text-neutral-200 hover:bg-white hover:text-neutral-950 hover:border-white transition-colors"
            >
              MAIL — {siteConfig.contactEmail}
            </a>
            {siteConfig.contactFormUrl && (
              <a
                href={siteConfig.contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-neutral-600 px-10 py-4 text-xs tracking-[0.25em] text-neutral-200 hover:bg-white hover:text-neutral-950 hover:border-white transition-colors"
              >
                CONTACT FORM
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-16 flex justify-center gap-8">
            <a
              href={siteConfig.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.sns.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X（旧Twitter）"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <XIcon />
            </a>
          </div>
        </FadeIn>

        {siteConfig.photoOrderUrl && (
          <FadeIn delay={450}>
            <p className="mt-16 text-[0.65rem] sm:text-xs font-light tracking-[0.15em] text-neutral-500">
              <a
                href={siteConfig.photoOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-neutral-700 hover:text-neutral-300 transition-colors"
              >
                発表会の写真購入をご希望の方はこちら
              </a>
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
