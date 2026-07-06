export default function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-7xl mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-secondary dark:text-secondary-fixed">
          Trabahero
        </div>
        <div className="hidden md:flex items-center gap-stack-lg">
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md" href="#">Features</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#technology">Technology</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#team">Team</a>
        </div>
        <button className="beveled-gold-btn px-6 py-2 rounded text-on-secondary font-bold transition-all active:translate-y-px active:shadow-inner hover:scale-105">
          Add to Chrome
        </button>
      </div>
    </nav>
  );
}
