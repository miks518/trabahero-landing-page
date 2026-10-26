const PROBLEMS = [
  {
    icon: 'request_quote',
    title: 'Advance-fee asks',
    body: 'A "training kit", an "onboarding fee", a uniform deposit — a real employer does not ask you to pay to start working.',
  },
  {
    icon: 'person_off',
    title: 'Employers that do not exist',
    body: 'Listings borrow a real company\'s name, or name no company at all. Trabahero checks whether anyone can actually be found behind the posting.',
  },
  {
    icon: 'forum',
    title: 'Chats that rush you',
    body: 'Weekend interviews in a messaging app, offers without a call, pressure to decide today — the pattern shows up in the posting itself.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin-desktop text-center space-y-12">
        <div className="space-y-4 reveal">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">The problem</span>
          <h2 className="font-headline text-headline-lg text-on-surface">Job hunting is hard enough</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">
            Every week, Filipino job seekers lose money and personal data to postings that look ordinary until it is
            too late. Most of them share a few tells — if you know where to look.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PROBLEMS.map((problem, i) => (
            <div
              key={problem.title}
              className={`card-base space-y-4 group hover-lift reveal reveal-delay-${i + 1}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl">{problem.icon}</span>
              <h3 className="font-headline text-headline-md text-on-surface">{problem.title}</h3>
              <p className="text-on-surface-variant font-body-md">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}