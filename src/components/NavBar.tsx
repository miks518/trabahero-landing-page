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
    <nav className="w-full sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-margin-desktop py-3.5 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-lg">shield</span>
          </span>
          <span className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors text-headline-md">
            Trabahero
          </span>
        </a>
        <div className="hidden md:flex items-center gap-stack-lg">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-label-md"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="tactile-btn-accent px-5 py-2 rounded-lg font-bold text-label-md flex items-center gap-1.5"
        >
          Get it free
          <span className="material-symbols-outlined text-base">open_in_new</span>
        </a>
      </div>
    </nav>
  );
}