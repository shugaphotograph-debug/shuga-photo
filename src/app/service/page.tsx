import type { Metadata } from 'next';
import Link from 'next/link';
import { servicePlans, shootingSteps } from '@/data/services';
import { faqItems } from '@/data/faq';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: '料金・サービス',
  description:
    'バレエ・音楽発表会・イベント撮影の料金プランと撮影の流れをご案内します。',
};

export default function ServicePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* ページタイトル */}
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-3">
            Service &amp; Price
          </p>
          <h1 className="text-2xl font-light tracking-wider text-stone-800">料金・サービス</h1>
        </div>

        {/* ── 撮影の流れ ───────────────────────────────── */}
        <section className="mb-24">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-stone-400 text-center mb-12">
            撮影の流れ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {shootingSteps.map(({ step, title, description }) => (
              <div key={step} className="flex gap-7">
                {/* ステップ番号 */}
                <div
                  className="text-4xl font-thin text-stone-150 leading-none select-none w-10 shrink-0"
                  style={{ color: '#e7e5e4' }}
                  aria-hidden="true"
                >
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="text-sm font-medium text-stone-800 mb-2">{title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 料金プラン ───────────────────────────────── */}
        <section className="mb-24">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-stone-400 text-center mb-12">
            料金プラン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {servicePlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border p-8 flex flex-col ${
                  plan.recommended ? 'border-stone-900' : 'border-stone-200'
                }`}
              >
                {/* POPULARバッジ */}
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1">
                    Popular
                  </span>
                )}

                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                  {plan.name}
                </p>
                <p className="text-3xl font-thin text-stone-800 mb-1">{plan.price}</p>
                <p className="text-xs text-stone-400 mb-6 pb-6 border-b border-stone-100">
                  {plan.duration}
                </p>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                      <svg
                        className="w-3.5 h-3.5 mt-0.5 shrink-0 text-stone-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-6 leading-relaxed">
            ※ 表示価格はTBD（別途お見積もり）です。詳細はお問い合わせください。
            <br />
            ※ 交通費・遠方の場合は別途ご相談となります。
          </p>
        </section>

        {/* ── よくある質問 ──────────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-stone-400 text-center mb-12">
            よくある質問
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ── お問い合わせCTA ───────────────────────────── */}
        <div className="text-center bg-stone-50 py-14 px-6">
          <p className="text-sm text-stone-600 mb-6 leading-relaxed">
            ご不明点やご相談は、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-10 py-3.5 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
