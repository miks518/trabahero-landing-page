export default function CoreFeatures() {
  return (
    <section className="py-32 px-margin-desktop max-w-7xl mx-auto">
      <h2 className="font-headline-lg text-headline-lg text-center mb-16 metallic-gold-text reveal">Advanced Protective Intelligence</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Scam Scan */}
        <div className="md:col-span-7 tactile-raised machined-edge rounded-2xl bg-surface-container p-10 flex flex-col md:flex-row gap-8 items-center reveal reveal-delay-1">
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm">CORE TECH</div>
            <h3 className="font-headline-lg text-headline-lg">Scam Scan Engine</h3>
            <p className="text-on-surface-variant font-body-md">Our neural network analyzes job descriptions against millions of known fraud patterns in milliseconds.</p>
            <ul className="space-y-2 text-outline font-label-md">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Domain Verification</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Sentiment Analysis</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Recruiter Ghosting Checks</li>
            </ul>
          </div>
          <div className="w-full md:w-64 aspect-square tactile-sunken rounded-full p-4 flex items-center justify-center relative bg-surface-container-low">
            <div className="w-full h-full rounded-full border-[12px] border-surface-container-highest flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border-[12px] border-secondary border-b-transparent -rotate-45" />
              <div className="text-center">
                <div className="text-5xl font-bold metallic-gold-text">75</div>
                <div className="text-xs text-outline font-label-sm uppercase tracking-widest">Risk Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Match */}
        <div className="md:col-span-5 tactile-raised machined-edge rounded-2xl bg-surface-container p-10 flex flex-col justify-between reveal reveal-delay-2">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm">AI FEATURE</div>
            <h3 className="font-headline-lg text-headline-lg">Resume Match Engine</h3>
            <p className="text-on-surface-variant font-body-md">Upload your resume and let our AI find the intersection between your qualifications and the job requirements.</p>
          </div>
          <div className="tactile-sunken rounded-xl p-4 mt-6 bg-surface-container-low">
            <div className="flex items-center justify-between text-sm text-outline mb-2 font-label-md">
              <span>Match Score</span>
              <span className="text-secondary font-bold metallic-gold-text">86%</span>
            </div>
            <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-[86%] gradient-gold rounded-full" />
            </div>
            <div className="flex justify-between mt-4 text-xs text-outline font-label-sm">
              <span>Your Resume: Frontend Developer</span>
              <span className="text-secondary">Strong Match</span>
            </div>
          </div>
        </div>

        {/* Instant Alerts */}
        <div className="md:col-span-12 tactile-raised machined-edge rounded-2xl bg-surface-container p-10 flex flex-col md:flex-row items-center gap-12 reveal reveal-delay-3">
          <div className="flex-1 space-y-6">
            <h3 className="font-headline-lg text-headline-lg">Instant Security Alerts</h3>
            <p className="text-on-surface-variant font-body-lg">Get notified the second you land on a suspicious listing. Our intrusive—yet elegant—alerts ensure you never miss a red flag.</p>
            <div className="flex flex-wrap gap-4">
              <div className="tactile-sunken px-4 py-2 rounded-full flex items-center gap-2 text-on-surface font-label-md">
                <span className="material-symbols-outlined text-secondary">notifications_active</span>
                Push Notifications
              </div>
              <div className="tactile-sunken px-4 py-2 rounded-full flex items-center gap-2 text-on-surface font-label-md">
                <span className="material-symbols-outlined text-secondary">gpp_maybe</span>
                Redline Highlights
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="space-y-4">
              <div className="tactile-raised p-4 rounded-lg border-l-4 border-error bg-surface-container-high flex gap-4 animate-pulse">
                <span className="material-symbols-outlined text-error">warning</span>
                <div>
                  <div className="font-bold text-on-surface">Potential Fraud Detected</div>
                  <div className="text-xs text-outline">Listing domain mismatch. Proceed with caution.</div>
                </div>
              </div>
              <div className="tactile-raised p-4 rounded-lg border-l-4 border-secondary bg-surface-container-high flex gap-4 opacity-50">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <div className="font-bold text-on-surface">Verified Employer</div>
                  <div className="text-xs text-outline">Matching official company records for Microsoft Corp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
