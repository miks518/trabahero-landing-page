import { useState } from 'react';
import type { FormEvent } from 'react';

const EMAIL = 'support@traba-hero.online';

type Draft = {
  subject: string;
  body: string;
};

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  copy?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_CLASS =
  'w-full bg-surface-container-low rounded-lg px-4 py-3 border text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 transition-colors';

const fieldClass = (invalid: boolean, extra = '') =>
  `${FIELD_CLASS} ${extra} ${
    invalid
      ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/20'
      : 'border-outline-variant/30 focus:border-primary focus:ring-primary/20'
  }`;

export default function SupportSection() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const replyTo = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const next: FieldErrors = {};
    if (!name) next.name = 'Please tell us your name.';
    if (!replyTo) next.email = 'Please add an email address so we can reply.';
    else if (!EMAIL_PATTERN.test(replyTo)) next.email = 'That does not look like an email address.';
    if (!message) next.message = 'Please write a message.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const subject = `Traba-Hero support - ${name}`;
    const body = `${message}\n\n- ${name} (${replyTo})`;

    setErrors({});
    setCopied(false);
    setDraft({ subject, body });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopy = async () => {
    if (!draft) return;
    const text = `To: ${EMAIL}\nSubject: ${draft.subject}\n\n${draft.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setErrors({});
    } catch {
      setErrors({ copy: `Could not copy automatically - please select the message text and email it to ${EMAIL}.` });
    }
  };

  const clearError = (field: keyof FieldErrors) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const composeHref = draft
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`
    : `mailto:${EMAIL}`;

  return (
    <section id="support" className="py-24 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-xl mx-auto px-margin-desktop text-center space-y-8">
        <div className="space-y-4 reveal">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Support</span>
          <h2 className="font-headline text-headline-lg text-on-surface">Questions or feedback?</h2>
          <p className="text-on-surface-variant font-body-md">
            The form opens your email app with the message ready to send - nothing is stored on a server.
          </p>
        </div>
        <div className="card-base reveal reveal-delay-1 gradient-border">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">contact_support</span>
            <div className="text-left">
              <div className="font-bold text-on-surface">Email us</div>
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline font-label-md break-all">
                {EMAIL}
              </a>
            </div>
          </div>
          <form className="flex flex-col gap-4 text-left" noValidate onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <input
                name="name"
                type="text"
                placeholder="Name"
                aria-label="Your name"
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                autoComplete="name"
                onInput={() => clearError('name')}
                className={fieldClass(Boolean(errors.name))}
              />
              {errors.name ? (
                <p role="alert" className="text-xs text-red-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <input
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Your email address"
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                onInput={() => clearError('email')}
                className={fieldClass(Boolean(errors.email))}
              />
              {errors.email ? (
                <p role="alert" className="text-xs text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                aria-label="Your message"
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                onInput={() => clearError('message')}
                className={fieldClass(Boolean(errors.message), 'resize-none')}
              />
              {errors.message ? (
                <p role="alert" className="text-xs text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {errors.copy ? (
              <p role="alert" className="text-xs text-red-400">
                {errors.copy}
              </p>
            ) : null}

            {draft ? (
              <div
                role="status"
                className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm space-y-2"
              >
                <p className="text-on-surface">
                  Your email app should have opened with the message ready to send.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="tactile-btn-accent px-4 py-2 rounded-lg font-bold text-sm text-on-secondary"
                  >
                    {copied ? 'Copied!' : 'Copy message'}
                  </button>
                  <a href={composeHref} className="text-primary hover:underline font-label-md">
                    Open email app again
                  </a>
                </div>
                <p className="text-on-surface-variant text-xs">
                  If nothing opened, paste the copied message into an email addressed to {EMAIL}.
                </p>
              </div>
            ) : null}

            <button
              type="submit"
              className="tactile-btn-accent px-8 py-3 rounded-lg font-bold text-on-secondary"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
