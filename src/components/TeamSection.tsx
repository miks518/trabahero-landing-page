const team = [
  { name: 'Janzel Garcia' },
  { name: 'Georich Mikko Yuzon' },
  { name: 'Denzel Capulong' },
  { name: 'John Uriel Garcia' },
  { name: 'Princess Myr Manquil' },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-desktop text-center space-y-12">
        <div className="space-y-4 reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet the Team Behind Trabahero</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">A team of developers and researchers committed to protecting Filipino job seekers from online employment scams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {team.map((member, i) => (
            <div key={member.name} className={`tactile-sunken p-6 rounded-xl text-center bg-surface-container-lowest/50 hover:bg-surface-container transition-colors reveal reveal-delay-${i + 1}`}>
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-black text-2xl">person</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">{member.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
