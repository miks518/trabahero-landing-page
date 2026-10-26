const VERDICTS = [
  { label: 'Do not proceed', tone: 'bg-danger', note: 'A contradiction was found - a verified negative about the employer.' },
  { label: 'Caution', tone: 'bg-caution', note: 'Settle the fee recipient and reason before going further.' },
  { label: 'Note', tone: 'bg-secondary', note: "Check the employer's own site for the stated fee or claim." },
  { label: 'Proceed', tone: 'bg-positive', note: 'No red flags and no contradicted claims.' },
];

const NOTES = [
  {
    icon: 'gavel',
    title: 'Authored, not generated',
    body: 'The verdict headline is one of four reviewed strings looked up by verdict. It cannot drift between runs, and it cannot assert more than the evidence supports.',
  },
  {
    icon: 'search_off',
    title: 'Absence is not evidence',
    body: 'An employer that could not be found, or an all-"not confirmed" result, adds nothing. A failed lookup is never treated as a guilty company.',
  },
  {
    icon: 'visibility_off',
    title: 'No invented numbers',
    body: 'If no company name was captured, the panel asks you for one instead of judging an employer it never checked.',
  },
];

export default function RiskScoreSection() {
  return (
    <section id="risk-score" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5 reveal">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">The verdict</span>
            <h2 className="font-headline text-headline-lg text-on-surface">
              A verdict you can <span className="metallic-gold-text">trace back</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Trabahero does not hand you a number. It hands you a short instruction plus the evidence behind it -
              the anomalies found in the posting and what the employer check confirmed or contradicted.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {VERDICTS.map((v) => (
                <div key={v.label} className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                  <span className={`w-3 h-3 rounded-sm ${v.tone}`} />
                  <span className="text-on-surface-variant font-medium">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 card-base reveal reveal-delay-1 gradient-border">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-label-sm text-on-surface-variant">
                <span>Anomalies found in the posting</span>
                <span className="text-on-surface font-semibold">3</span>
              </div>
              <div className="h-3 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full w-[60%] bg-primary rounded-full" />
              </div>

              <div className="flex items-center justify-between text-label-sm text-on-surface-variant pt-2">
                <span>Employer claims contradicted</span>
                <span className="text-on-surface font-semibold">1</span>
              </div>
              <div className="h-3 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full w-[25%] bg-danger rounded-full" />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/30">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">Verdict</div>
                  <div className="text-3xl font-extrabold text-danger">Do not proceed</div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-danger/15 border border-danger/40 text-danger text-label-sm font-bold">
                  Critical
                </span>
              </div>
              <p className="text-label-sm text-on-surface-variant">
                Anomaly evidence + employer contradiction. Sample result.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-12">
          {NOTES.map((note, i) => (
            <div
              key={note.title}
              className={`card-base hover-lift reveal reveal-delay-${i + 1} gradient-border`}
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{note.icon}</span>
              <h3 className="font-headline text-headline-md text-on-surface mb-2">{note.title}</h3>
              <p className="text-on-surface-variant font-body-md">{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
