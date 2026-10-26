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
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Team</span>
          <h2 className="font-headline text-headline-lg text-on-surface">Built by students who job-hunt too</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">
            Six developers and researchers building the tool they wanted for Filipino job seekers.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-gutter" data-parallax="0.05">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`card-base p-6 rounded-xl text-center hover-lift reveal reveal-delay-${i + 1} gradient-border`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 border border-primary/30 glow-primary">
                <span className="font-headline text-xl font-extrabold text-primary">{initials(member.name)}</span>
              </div>
              <h4 className="font-headline text-label-md text-on-surface">{member.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}