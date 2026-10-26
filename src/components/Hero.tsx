import PanelMock from './PanelMock';

const CHIPS = [
  { icon: 'photo_camera', label: 'Screenshot scan' },
  { icon: 'gavel', label: 'Employer check with sources' },
  { icon: 'work_history', label: 'Resume matching' },
  { icon: 'lock', label: 'No account needed' },
];

const REPO_URL = 'https://github.com/miks518/traba-hero';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-28 md:pb-36">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(74,222,128,0.06)', top: '-10%', left: '-10%' }} data-speed="0.02" />
        <div className="orb" style={{ width: 400, height: 400, background: 'rgba(74,222,128,0.04)', bottom: '-10%', right: '-5%' }} data-speed="-0.03" />
        <div className="orb" style={{ width: 300, height: 300, background: 'rgba(120,80,255,0.05)', top: '45%', left: '55%' }} data-speed="0.015" />
      </div>

      <div className="relative max-w-7xl mx-auto px-margin-desktop flex flex-col md:flex-row items-center gap-14">
        <div className="flex-1 space-y-stack-lg z-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-label-sm font-semibold">
            <span className="material-symbols-outlined text-sm">extension</span>
            Chrome extension · Built for Filipino job seekers
          </span>
          <h1 className="font-headline font-extrabold text-headline-xl leading-[1.05]">
            <span className="metallic-gold-text">Spot the scam</span>
            <br />
            before you reply.
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            Trabahero reads a posting the way a careful friend would - what it asks of you, what it offers, and who is
            really behind the company - then shows you the evidence and lets you decide.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="tactile-btn-accent px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">download</span>
              Get the extension - free
            </a>
            <a
              href="#how-it-works"
              className="tactile-btn-outline px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2"
            >
              See how it works
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-label-sm text-on-surface-variant">
            {CHIPS.map((chip) => (
              <span key={chip.label} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative animate-float">
          <PanelMock />
        </div>
      </div>
    </section>
  );
}