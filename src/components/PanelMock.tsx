import type { CSSProperties } from 'react';

type FlagSeverity = 'high' | 'mid' | 'low';

const FLAGS: { severity: FlagSeverity; text: string }[] = [
  { severity: 'high', text: 'Asks for a ₱500 "training kit" payment before onboarding' },
  { severity: 'mid', text: 'Interview happens only in a messaging app, no company email' },
  { severity: 'low', text: 'Salary described only as "daily payouts", no rate' },
];

const CHECKS = [
  { label: 'Company Existence', status: 'Found in public records', tone: 'positive' },
  { label: 'Official Registration', status: 'No certificate found in results', tone: 'caution' },
  { label: 'Reputation', status: '2 complaints published by seekers', tone: 'danger' },
] as const;

const TONE_CLASS: Record<string, string> = {
  positive: 'bg-positive',
  caution: 'bg-caution',
  danger: 'bg-danger',
};

const SEVERITY_CLASS: Record<FlagSeverity, string> = {
  high: 'bg-danger',
  mid: 'bg-caution',
  low: 'bg-outline',
};

const SEVERITY_LABEL: Record<FlagSeverity, string> = {
  high: 'High',
  mid: 'Mid',
  low: 'Low',
};

const RING_OFFSET = 124; // 62% of the 327px circumference

export default function PanelMock() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto scale-in">
      <div className="absolute -inset-6 bg-secondary/10 blur-[90px] rounded-full -z-10" />

      <div className="tactile-raised machined-edge rounded-2xl overflow-hidden bg-surface-container">
        {/* Side panel chrome */}
        <div className="bg-surface-container-highest px-4 py-3 flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-danger" />
            <span className="w-2.5 h-2.5 rounded-full bg-caution" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim" />
            <span className="ml-2 font-headline-sm text-label-md text-on-surface">Trabahero</span>
          </div>
          <div className="flex items-center gap-1.5 text-label-sm text-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-positive animate-pulse-dot" />
            v0.5.0
          </div>
        </div>

        {/* Risk gauge */}
        <div className="px-5 pt-5 pb-4 flex items-center gap-5 border-b border-outline-variant/50">
          <div className="relative w-[92px] h-[92px] shrink-0">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#34353a" strokeWidth="10" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#f87171"
                strokeWidth="10"
                strokeLinecap="round"
                className="ring-animate"
                style={{ '--ring-offset': RING_OFFSET } as CSSProperties}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-on-surface leading-none">62</span>
              <span className="text-[10px] uppercase tracking-widest text-outline mt-1">Risk</span>
            </div>
          </div>
          <div className="space-y-1.5 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-danger/15 border border-danger/40 text-danger text-label-sm font-semibold">
              <span className="material-symbols-outlined text-sm">warning</span>
              High risk
            </div>
            <p className="text-label-sm text-outline leading-snug">
              Posting score + employer penalty
              <br />
              <span className="text-on-surface-variant">Sample result</span>
            </p>
          </div>
        </div>

        {/* Red flags */}
        <div className="px-5 py-4 space-y-3 border-b border-outline-variant/50">
          <div className="flex items-center justify-between">
            <span className="text-label-sm font-semibold text-on-surface uppercase tracking-wider">Red flags</span>
            <span className="text-label-sm text-outline">3 found</span>
          </div>
          <ul className="space-y-2">
            {FLAGS.map((flag) => (
              <li key={flag.text} className="flex items-start gap-2.5 text-label-sm text-on-surface-variant leading-snug">
                <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${SEVERITY_CLASS[flag.severity]}`} />
                <span>
                  {flag.text}
                  <span className="text-outline"> · {SEVERITY_LABEL[flag.severity]}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Employer verification */}
        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-label-sm font-semibold text-on-surface uppercase tracking-wider">Employer check</span>
            <span className="text-label-sm text-secondary">Mabini Staffing Hub</span>
          </div>
          <ul className="space-y-2">
            {CHECKS.map((check) => (
              <li key={check.label} className="flex items-center gap-2.5 text-label-sm">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${TONE_CLASS[check.tone]}`} />
                <span className="text-on-surface font-medium">{check.label}</span>
                <span className="text-outline ml-auto text-right truncate max-w-[55%]">{check.status}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/50">
            <span className="text-label-sm text-outline flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-sm">link</span>
              5 sources you can open
            </span>
            <span className="text-label-sm text-secondary font-semibold">View report</span>
          </div>
        </div>
      </div>
    </div>
  );
}
