const STEPS = [
  {
    icon: 'crop_free',
    title: 'Pick the posting',
    body: 'Open the side panel, click the element picker, and select the job posting — on any site, in one click. Trabahero captures that region as a screenshot along with its text.',
  },
  {
    icon: 'fact_check',
    title: 'Scan it',
    body: 'The posting streams to the backend and an AI model reads what it actually says: money asked for, contact channels, promises made, details missing. Each flag comes back with severity and a quote.',
  },
  {
    icon: 'travel_explore',
    title: 'Verify the employer',
    body: 'If the posting names a company, Trabahero runs two web searches — registration records and reviews/complaints — and reports what a source states, with links you can open yourself.',
  },
  {
    icon: 'speed',
    title: 'Decide with the evidence',
    body: 'A 0–100 risk score combines what the posting says with what the employer check found. High-risk results lead with the flags, so you see why before you see anything else.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="text-center space-y-4 mb-16 reveal">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">How it works</span>
          <h2 className="font-headline text-headline-lg metallic-gold-text">Four steps, about a minute</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">
            No copy-pasting, no account, no leaving the page you are on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative card-base hover-lift reveal reveal-delay-{i + 1}"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <span className="font-headline text-3xl text-primary/30 font-extrabold leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface mb-2">{step.title}</h3>
              <p className="text-on-surface-variant font-body-md">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}