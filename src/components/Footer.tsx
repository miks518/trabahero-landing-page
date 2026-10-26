export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-outline-variant/30 bg-surface-container-lowest/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="font-headline font-bold text-on-surface">Trabahero</div>
          <p className="font-label text-label-sm text-on-surface-variant">
            © 2026 Trabahero. Job-scam detection for Filipino job seekers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-label text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#privacy">
            Privacy Policy
          </a>
          <a className="font-label text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#support">
            Support
          </a>
          <a
            className="font-label text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors"
            href="https://github.com/miks518/traba-hero"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label text-label-sm text-on-surface-variant hover:text-primary hover:underline transition-colors"
            href="https://github.com/miks518/traba-hero#readme"
            target="_blank"
            rel="noreferrer"
          >
            Setup guide
          </a>
        </div>
      </div>
    </footer>
  );
}