export default function Footer() {
  return (
    <footer className="w-full py-stack-lg border-t border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-stack-md max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-headline-sm text-headline-sm font-bold text-secondary">Trabahero</div>
          <p className="font-label-sm text-label-sm text-outline">© 2024 Trabahero. All rights reserved. Tactile Authority Protection.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-md">
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#">Privacy Policy</a>
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#">Terms of Service</a>
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#">Security Whitepaper</a>
          <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors hover:underline" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
