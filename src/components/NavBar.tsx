const REPO_URL = 'https://github.com/miks518/traba-hero';

const LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#technology', label: 'Technology' },
  { href: '#team', label: 'Team' },
  { href: '#privacy', label: 'Privacy' },
];

export default function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-margin-desktop py-3.5 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center glow-gold">
            <span className="material-symbols-outlined text-black text-lg">shield</span>
          </span>
          <span className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-secondary transition-colors">
            Trabahero
          </span>
        </a>
        <div className="hidden md:flex items-center gap-stack-lg">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="beveled-gold-btn px-5 py-2 rounded text-on-secondary font-bold transition-all active:translate-y-px active:shadow-inner hover:scale-105 flex items-center gap-1.5 text-label-md"
        >
          Get it free
          <span className="material-symbols-outlined text-base">open_in_new</span>
        </a>
      </div>
    </nav>
  );
}
