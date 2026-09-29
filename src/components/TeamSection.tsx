const team = [
  { name: 'Janzel Garcia' },
  { name: 'Georich Mikko Yuzon' },
  { name: 'Denzel Capulong' },
  { name: 'John Uriel Garcia' },
  { name: 'Princess Myr Manquil' },
  { name: 'Neil Andrei Manuntag' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-desktop text-center space-y-12">
        <div className="space-y-4 reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Team</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Built by students who job-hunt too</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">
            Six developers and researchers building the tool they wanted for Filipino job seekers.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`tactile-raised machined-edge p-6 rounded-xl text-center bg-surface-container hover:border-secondary/50 transition-colors reveal reveal-delay-${i + 1}`}
            >
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3 glow-gold">
                <span className="font-headline-md text-xl font-extrabold text-black">{initials(member.name)}</span>
              </div>
              <h4 className="font-headline-sm text-label-md text-on-surface">{member.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
