import type { FormEvent } from 'react';

const EMAIL = 'trabahero+@gmail.com';

export default function SupportSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const replyTo = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Trabahero support — ${name || 'feedback'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${replyTo ? ` (${replyTo})` : ''}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="support" className="py-24 bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-xl mx-auto px-margin-desktop text-center space-y-8">
        <div className="space-y-4 reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Support</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Questions or feedback?</h2>
          <p className="text-outline font-body-md">
            The form opens your email app with the message ready to send — nothing is stored on a server.
          </p>
        </div>
        <div className="tactile-raised machined-edge rounded-2xl p-8 bg-surface-container reveal reveal-delay-1">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl">contact_support</span>
            <div className="text-left">
              <div className="font-bold text-on-surface">Email us</div>
              <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline font-label-md">
                {EMAIL}
              </a>
            </div>
          </div>
          <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors resize-none"
            />
            <button className="beveled-gold-btn px-8 py-3 rounded-lg font-bold text-on-secondary">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
