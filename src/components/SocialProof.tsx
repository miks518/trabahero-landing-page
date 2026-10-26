const BOARDS = [
  { icon: 'work', name: 'JobStreet' },
  { icon: 'language', name: 'OnlineJobs.ph' },
  { icon: 'badge', name: 'LinkedIn' },
  { icon: 'groups', name: 'Facebook Jobs' },
  { icon: 'search', name: 'Indeed' },
  { icon: 'star', name: 'Glassdoor' },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-outline-variant/30 bg-surface-container-lowest/50">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left reveal">
            <h4 className="font-headline text-headline-md text-on-surface">Works wherever you find jobs</h4>
            <p className="text-on-surface-variant font-label-md">
              The element picker runs on any page — no integrations or partnerships required.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 grayscale opacity-40 hover:opacity-70 transition-opacity reveal reveal-delay-1">
            {BOARDS.map((board) => (
              <div key={board.name} className="flex items-center gap-2 font-bold text-xl text-on-surface">
                <span className="material-symbols-outlined">{board.icon}</span>
                {board.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}