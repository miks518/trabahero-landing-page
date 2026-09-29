const BANDS = [
  { label: 'Low', range: '0–30', cls: 'bg-positive' },
  { label: 'Moderate', range: '31–50', cls: 'bg-caution' },
  { label: 'High', range: '51–75', cls: 'bg-[#f97316]' },
  { label: 'Critical', range: '76–100', cls: 'bg-danger' },
];

const NOTES = [
  {
    icon: 'stacked_bar_chart',
    title: 'Two stages, added together',
    body: 'Stage one scores the posting from the indicators it reports — high, mid and low severity. Stage two can only add a penalty when a source states a negative about the employer.',
  },
  {
    icon: 'search_off',
    title: 'Absence is not evidence',
    body: 'An employer that could not be found, or an all-"not confirmed" result, adds zero. A failed lookup is never scored as a guilty company.',
  },
  {
    icon: 'visibility_off',
    title: 'No invented numbers',
    body: 'If no company name was captured, the panel asks you for one instead of scoring an employer it never checked. Nothing on screen was measured.',
  },
];

export default function RiskScoreSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5 reveal">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">The risk score</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              A number you can <span className="metallic-gold-text">trace back</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Trabahero shows a single 0–100 score with the level attached — but the point is not the number. It is
              that you can always see which stage produced it and which source stands behind it.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {BANDS.map((band) => (
                <div key={band.label} className="flex items-center gap-2 text-label-sm text-outline">
                  <span className={`w-3 h-3 rounded-sm ${band.cls}`} />
                  <span className="text-on-surface-variant font-medium">{band.label}</span>
                  <span>{band.range}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 reveal reveal-delay-1">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-label-sm text-outline">
                <span>Posting indicators</span>
                <span className="text-on-surface font-semibold">+ 41</span>
              </div>
              <div className="h-3 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full w-[41%] gradient-gold rounded-full" />
              </div>

              <div className="flex items-center justify-between text-label-sm text-outline pt-2">
                <span>Employer verification penalty</span>
                <span className="text-on-surface font-semibold">+ 21</span>
              </div>
              <div className="h-3 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full w-[21%] bg-danger rounded-full ml-[41%]" />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/50">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-label-sm text-outline uppercase tracking-wider">Final score</div>
                  <div className="text-4xl font-extrabold text-on-surface">62 <span className="text-lg text-outline font-bold">/ 100</span></div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-[#f97316]/15 border border-[#f97316]/40 text-[#f97316] text-label-sm font-bold">
                  High risk
                </span>
              </div>
              <div className="relative h-4 rounded-full overflow-hidden flex">
                <div className="h-full w-[31%] bg-positive" />
                <div className="h-full w-[20%] bg-caution" />
                <div className="h-full w-[25%] bg-[#f97316]" />
                <div className="h-full w-[24%] bg-danger" />
                <div className="absolute top-0 bottom-0 w-0.5 bg-on-surface shadow-[0_0_6px_rgba(255,255,255,0.8)]" style={{ left: '62%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-12">
          {NOTES.map((note, i) => (
            <div
              key={note.title}
              className={`tactile-raised machined-edge rounded-2xl p-7 bg-surface-container hover-lift reveal reveal-delay-${i + 1}`}
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block">{note.icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{note.title}</h3>
              <p className="text-outline font-body-md">{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
