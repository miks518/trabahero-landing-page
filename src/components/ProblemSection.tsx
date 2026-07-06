export default function ProblemSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-desktop text-center space-y-12">
        <div className="space-y-4 reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">The Silent Epidemic</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">Job scams increased by 250% last year. Fraudsters are becoming more sophisticated, impersonating top firms to steal your identity and money.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="tactile-sunken p-8 rounded-xl space-y-4 bg-surface-container-lowest/50 group hover:bg-surface-container transition-colors reveal reveal-delay-1">
            <span className="material-symbols-outlined text-secondary text-4xl">dangerous</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Fake Listings</h3>
            <p className="text-outline font-body-md">Scammers create phantom roles to collect sensitive personal data and financial information.</p>
          </div>
          <div className="tactile-sunken p-8 rounded-xl space-y-4 bg-surface-container-lowest/50 group hover:bg-surface-container transition-colors reveal reveal-delay-2">
            <span className="material-symbols-outlined text-secondary text-4xl">shield_with_heart</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Identity Theft</h3>
            <p className="text-outline font-body-md">Your resume is a goldmine for bad actors. Protect your private history from malicious intent.</p>
          </div>
          <div className="tactile-sunken p-8 rounded-xl space-y-4 bg-surface-container-lowest/50 group hover:bg-surface-container transition-colors reveal reveal-delay-3">
            <span className="material-symbols-outlined text-secondary text-4xl">monetization_on</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Advance-Fee Fraud</h3>
            <p className="text-outline font-body-md">Never pay for a job. Trabahero flags requests for equipment fees or training costs instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
