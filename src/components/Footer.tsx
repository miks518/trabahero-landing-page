export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="font-headline-sm text-headline-sm font-bold text-secondary">Trabahero</div>
          <p className="font-label-sm text-label-sm text-outline">
            © 2026 Trabahero. Job-scam detection for Filipino job seekers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#privacy">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#support">
            Support
          </a>
          <a
            className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline"
            href="https://github.com/miks518/traba-hero"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline"
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
