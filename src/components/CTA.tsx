const REPO_URL = 'https://github.com/miks518/traba-hero';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-margin-desktop">
      <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center space-y-stack-lg relative overflow-hidden bg-surface-container tactile-raised gradient-border reveal">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative space-y-stack-lg">
          <span className="material-symbols-outlined text-secondary text-6xl">shield_person</span>
          <h2 className="font-headline-xl text-4xl md:text-5xl text-on-surface leading-tight">
            Check the next posting
            <br />
            <span className="metallic-gold-text">before you reply.</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Install the extension, pick a posting, and read the evidence. It is free, open source, and does not need
            an account.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="beveled-gold-btn px-10 py-4 rounded-xl font-extrabold text-lg text-on-secondary flex items-center gap-2 hover:scale-[1.03] transition-transform"
            >
              <span className="material-symbols-outlined">download</span>
              Get the extension
            </a>
            <a
              href={`${REPO_URL}#readme`}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 rounded-xl font-bold text-lg text-on-surface border border-outline-variant hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined">menu_book</span>
              Setup guide
            </a>
          </div>
          <p className="text-outline font-label-sm">Free forever · No account · Open source</p>
        </div>
      </div>
    </section>
  );
}
