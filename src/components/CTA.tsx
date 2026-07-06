export default function CTA() {
  return (
    <section className="py-32 px-margin-desktop">
      <div className="max-w-4xl mx-auto tactile-raised machined-edge rounded-3xl p-16 text-center space-y-stack-lg relative overflow-hidden bg-surface-container reveal">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <span className="material-symbols-outlined text-[120px] text-secondary">security</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">Ready to apply with <span className="metallic-gold-text">confidence?</span></h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Join thousands of professionals who trust Trabahero to keep their job search secure, focused, and successful.
        </p>
        <div className="pt-8">
          <button className="beveled-gold-btn px-12 py-5 rounded-xl font-extrabold text-xl text-on-secondary shadow-2xl transition-all hover:scale-105">
            Start Scanning Securely
          </button>
          <p className="mt-4 text-outline font-label-sm">No credit card required. Free for all job seekers.</p>
        </div>
      </div>
    </section>
  );
}
