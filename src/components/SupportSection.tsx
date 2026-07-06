export default function SupportSection() {
  return (
    <section id="support" className="py-24 bg-surface-container-low">
      <div className="max-w-xl mx-auto px-margin-desktop text-center space-y-8">
        <div className="space-y-4 reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Support Center</h2>
          <p className="text-outline font-body-md">Need help or want to share feedback? Reach out to us anytime.</p>
        </div>
        <div className="tactile-raised machined-edge rounded-2xl p-8 bg-surface-container reveal reveal-delay-1">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl">contact_support</span>
            <div className="text-left">
              <div className="font-bold text-on-surface">Email Us</div>
              <a href="mailto:trabahero+@gmail.com" className="text-secondary hover:underline font-label-md">trabahero+@gmail.com</a>
            </div>
          </div>
          <form className="flex flex-col gap-4 text-left" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary transition-colors" />
            <textarea rows={4} placeholder="Your message..." className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary transition-colors resize-none" />
            <button className="beveled-gold-btn px-8 py-3 rounded-lg font-bold text-on-secondary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
