export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(233,195,73,0.08)', top: '-10%', left: '-10%' }} data-speed="0.02" />
        <div className="orb" style={{ width: 400, height: 400, background: 'rgba(233,195,73,0.05)', bottom: '-10%', right: '-5%' }} data-speed="-0.03" />
        <div className="orb" style={{ width: 300, height: 300, background: 'rgba(233,195,73,0.06)', top: '40%', left: '50%' }} data-speed="0.015" />
      </div>
      <div className="flex-1 space-y-stack-lg z-10 reveal">
        <h1 className="font-headline-xl text-headline-xl metallic-gold-text leading-tight">
          Secure Your Career Path
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
          Don't let fraudsters derail your future. Trabahero is the premier Chrome extension that scans job postings in real-time to detect scams before you apply.
        </p>
        <div className="flex gap-stack-md pt-4">
          <button className="beveled-gold-btn px-8 py-4 rounded-lg font-bold text-lg text-on-secondary flex items-center gap-2 group">
            <span className="material-symbols-outlined">extension</span>
            Add to Chrome - Free
          </button>
        </div>
        <div className="flex items-center gap-4 text-outline font-label-sm pt-4">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-sm">verified</span> Verified Secure</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-sm">group</span> Demo Version</span>
        </div>
      </div>
      <div className="flex-1 relative animate-float">
        <div className="tactile-raised rounded-xl overflow-hidden machined-edge bg-surface-container shadow-2xl transform rotate-3">
          <div className="bg-surface-container-highest p-4 flex items-center justify-between border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
            </div>
            <div className="text-on-surface-variant font-label-sm italic">trabahero-v2.0</div>
          </div>
          <img
            className="w-full h-auto"
            alt="Trabahero extension sidebar interface"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8VzJMFTFZ_ZNhtn9XGccR8xItUrp3lNIcG0cp8PTMp_ZGe2Mk2SCvsJt6IbwZhEFPWZGbBF4jbpWon5Rj1A09xSbYzbE_mOErBJyVA5htwgYKfIB6xGtvfqzUmGunBn4Bk_PwqT-uLvYm3WJHUm6zjyS8x1VN97MUiR2lvfJgm21LSOjTrqz6EivXPMeoWwiw23_LD8vTkfBzI4yrVpploMmX6k1p9_xTiOzJs-mqalgnJraO4aBiISmduiwY-vtyCizKKfSEkYr"
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
