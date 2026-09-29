export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="text-center space-y-4 mb-16 reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Features</span>
          <h2 className="font-headline-lg text-headline-lg metallic-gold-text">What Trabahero actually does</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">
            Everything below runs from one side panel, on the page you are already reading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Posting scan */}
          <div className="md:col-span-7 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 hover-lift reveal reveal-delay-1">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm mb-4">
              CORE
            </div>
            <h3 className="font-headline-lg text-2xl mb-3">Scan a posting from a screenshot</h3>
            <p className="text-on-surface-variant font-body-md mb-6">
              Capture the listing with the element picker — or paste the text — and the model reports what the posting
              says, never what it guesses. Every flag carries a severity and a quote taken from the posting itself.
            </p>
            <div className="space-y-2.5">
              {[
                { sev: 'bg-danger', label: 'High', text: '"Pay ₱500 for the training kit"' },
                { sev: 'bg-caution', label: 'Mid', text: '"Interview via text only, no call"' },
                { sev: 'bg-outline', label: 'Low', text: '"Salary: daily payouts"' },
              ].map((flag) => (
                <div key={flag.text} className="tactile-sunken rounded-lg px-4 py-3 flex items-center gap-3 text-label-md">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${flag.sev}`} />
                  <span className="text-on-surface-variant italic truncate">{flag.text}</span>
                  <span className="ml-auto text-label-sm text-outline shrink-0">{flag.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Offer analysis */}
          <div className="md:col-span-5 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 flex flex-col justify-between hover-lift reveal reveal-delay-2">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm mb-4">
                NO EMPLOYER NAMED?
              </div>
              <h3 className="font-headline-lg text-2xl mb-3">The offer is still assessed</h3>
              <p className="text-on-surface-variant font-body-md">
                Plenty of scams never name a company. When there is nothing to verify, Trabahero analyses the offer on
                its own terms instead of guessing at a name.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              {['What it asks of you', 'What it offers', 'What to check before replying'].map((row) => (
                <div key={row} className="flex items-center gap-2.5 text-label-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  {row}
                </div>
              ))}
            </div>
          </div>

          {/* Employer verification */}
          <div className="md:col-span-5 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 hover-lift reveal reveal-delay-3">
            <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm mb-4">
              WEB SEARCH
            </div>
            <h3 className="font-headline-lg text-2xl mb-3">Employer check, with citations</h3>
            <p className="text-on-surface-variant font-body-md mb-6">
              Two searches — registration records, then reviews and complaints — across SEC, DTI, PEZA, BOI and local
              government listings. Results arrive as clickable sources, not as an unsourced verdict.
            </p>
            <div className="space-y-2">
              {[
                { dot: 'bg-positive', name: 'Company Existence' },
                { dot: 'bg-caution', name: 'Official Registration' },
                { dot: 'bg-danger', name: 'Reputation' },
              ].map((cat) => (
                <div key={cat.name} className="tactile-sunken rounded-lg px-4 py-2.5 flex items-center gap-3 text-label-md">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                  <span className="text-on-surface">{cat.name}</span>
                  <span className="material-symbols-outlined text-secondary text-base ml-auto">open_in_new</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume match */}
          <div className="md:col-span-7 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 flex flex-col hover-lift reveal reveal-delay-4">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-sm mb-4">
                AI FEATURE
              </div>
              <h3 className="font-headline-lg text-2xl mb-3">Match your resume against saved scans</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Upload a PDF or image resume once, then compare it with the jobs you have already scanned. Filter by
                risk so you spend your effort on the postings worth answering — and see which skills are missing.
              </p>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Verified', cls: 'text-positive border-positive/40' },
                  { label: 'Moderate', cls: 'text-caution border-caution/40' },
                  { label: 'High / Critical', cls: 'text-danger border-danger/40' },
                ].map((chip) => (
                  <span key={chip.label} className={`px-3 py-1 rounded-full border text-label-sm ${chip.cls}`}>
                    {chip.label}
                  </span>
                ))}
              </div>
              <div className="tactile-sunken rounded-lg p-4">
                <div className="flex items-center justify-between text-label-md text-on-surface-variant mb-2">
                  <span>Sales Associate · skills match</span>
                  <span className="text-secondary font-bold metallic-gold-text">86%</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[86%] gradient-gold rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* History + offline */}
          <div className="md:col-span-6 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 hover-lift reveal reveal-delay-5">
            <h3 className="font-headline-lg text-2xl mb-3">Your history stays on your device</h3>
            <p className="text-on-surface-variant font-body-md">
              Past scans live in the extension's local storage — review them any time, and clear them by removing the
              extension. Nothing is scanned until you click the picker.
            </p>
          </div>
          <div className="md:col-span-6 tactile-raised machined-edge rounded-2xl bg-surface-container p-8 md:p-10 hover-lift reveal reveal-delay-5">
            <h3 className="font-headline-lg text-2xl mb-3">Honest about what it cannot reach</h3>
            <p className="text-on-surface-variant font-body-md mb-4">
              If the backend is unreachable, the panel says so and pauses network actions — it never shows you a result
              that was not measured.
            </p>
            <div className="rounded-lg border-l-4 border-caution bg-surface-container-high px-4 py-3 flex items-center gap-3 text-label-md">
              <span className="material-symbols-outlined text-caution">cloud_off</span>
              <span className="text-on-surface-variant">Server unreachable — Retry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
