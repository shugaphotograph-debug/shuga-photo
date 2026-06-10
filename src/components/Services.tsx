import FadeIn from '@/components/FadeIn';

const services = [
  {
    title: 'バレエ発表会撮影',
    description:
      '本番の舞台撮影を中心に、リハーサルや舞台袖のスナップにも対応します。教室単位・演目単位でのご依頼を承ります。',
  },
  {
    title: '音楽発表会・コンクール撮影',
    description:
      'ピアノ・弦楽器などの発表会、コンクールでの演奏写真を撮影します。演奏の妨げにならない静音撮影に配慮しています。',
  },
];

export default function Services() {
  return (
    <section id="service" className="scroll-mt-16 px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-center text-lg sm:text-xl font-extralight tracking-[0.4em] text-neutral-900 pl-[0.4em]">
            SERVICE
          </h2>
        </FadeIn>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100} className="bg-white">
              <div className="p-8 sm:p-10 h-full">
                <h3 className="text-sm tracking-[0.2em] text-neutral-900">{service.title}</h3>
                <p className="mt-5 text-xs font-light leading-loose tracking-wider text-neutral-500">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mt-12 text-center text-xs font-light tracking-[0.15em] leading-loose text-neutral-500">
            発表会・コンクールの撮影を承ります。
            <br className="sm:hidden" />
            日程・会場・内容に応じてお見積りしますので、お気軽にご相談ください。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
