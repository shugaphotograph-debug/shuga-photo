import { siteConfig } from '@/data/site';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 px-5 sm:px-8 py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-lg sm:text-xl font-extralight tracking-[0.4em] text-neutral-900 pl-[0.4em]">
            ABOUT
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 text-xs tracking-[0.3em] text-neutral-400">
            {siteConfig.photographerName} ─ {siteConfig.title}
          </p>
          {/* 自己紹介文（仮テキスト。実際のプロフィールに差し替えてください） */}
          <div className="mt-8 space-y-6 text-sm font-light leading-loose tracking-wider text-neutral-600 text-left sm:text-center">
            <p>
              東京を拠点に、バレエ発表会・音楽発表会を中心とした舞台撮影を行っています。
              客席からは見えない緊張、幕が上がる直前のまなざし、音楽と身体がひとつになる瞬間。
              舞台の上にしか存在しない時間を、静かに、確かに残すことを大切にしています。
            </p>
            <p>
              暗転やスポットライトなど刻々と変わる舞台照明の中でも、
              踊り手・演奏者の表情と空気感が伝わる一枚を。
              出演者とそのご家族にとって、何度でも見返したくなる写真をお届けします。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
