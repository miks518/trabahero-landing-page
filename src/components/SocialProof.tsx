export default function SocialProof() {
  return (
    <section className="py-16 border-y border-outline-variant bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left reveal">
            <h4 className="font-headline-md text-headline-md text-on-surface">Works Everywhere</h4>
            <p className="text-outline font-label-md">Integrated with 50+ job boards globally</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 reveal reveal-delay-1">
            <div className="flex items-center gap-2 font-bold text-2xl text-on-surface"><span className="material-symbols-outlined">work</span> LinkedIn</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-on-surface"><span className="material-symbols-outlined">search</span> Indeed</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-on-surface"><span className="material-symbols-outlined">grid_view</span> Glassdoor</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-on-surface"><span className="material-symbols-outlined">bolt</span> Monster</div>
          </div>
        </div>
      </div>
    </section>
  );
}
