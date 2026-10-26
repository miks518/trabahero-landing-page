export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-24 px-margin-desktop bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Privacy</span>
          <h2 className="font-headline text-headline-lg text-on-surface mt-3">Privacy Policy</h2>
        </div>
        <div className="card-base space-y-4 text-sm text-on-surface-variant leading-relaxed">
          <p><strong className="text-on-surface">Effective Date:</strong> September 30, 2026</p>
          <p>
            Trabahero is a Chrome extension that helps protect Filipino job seekers from employment scams. Scanning
            needs the posting's content, so some data does leave your browser — this policy states exactly what, where
            it goes, and what never leaves.
          </p>

          <h3 className="text-on-surface font-bold text-base pt-2">1) Legal Basis</h3>
          <p>
            This policy is governed by the <strong className="text-on-surface">Data Privacy Act of 2012 (Republic Act No. 10173)</strong>
            and its Implementing Rules and Regulations, as enforced by the <strong className="text-on-surface">National Privacy Commission (NPC)</strong>.
            Trabahero processes personal information in accordance with the principles of transparency, legitimate purpose,
            and proportionality under RA 10173.
          </p>

          <h3 className="text-on-surface font-bold text-base pt-2">2) What Trabahero Accesses</h3>
          <p>To provide job scam detection and resume matching, Trabahero's content scripts and side panel access:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Page Content (DOM):</strong> the text of the job listing element you explicitly select with the element picker.</li>
            <li><strong className="text-on-surface">Screenshots (Tab Capture):</strong> a screenshot of the region you selected, compressed before sending, for visual analysis.</li>
            <li><strong className="text-on-surface">Resume Files:</strong> only a resume you choose to upload, and only when you use the resume-match feature.</li>
            <li><strong className="text-on-surface">Local Storage (chrome.storage):</strong> your scan history, resume data and preferences, stored on your device.</li>
          </ul>
          <p>
            We do not read passwords, form inputs, private messages, clipboard contents, or your browsing history beyond
            the elements you select. Nothing is captured until you activate the element picker or paste text yourself.
          </p>

          <h3 className="text-on-surface font-bold text-base pt-2">3) Data Processing and Security</h3>
          <p>
            <strong className="text-on-surface">What is sent:</strong> the selected screenshot and/or text is sent over
            HTTPS to the Trabahero backend, which forwards it to the configured AI provider (currently OpenRouter) for
            analysis. When a posting names an employer, the employer's name is also sent to a web-search provider
            (currently Tavily) to look up registration records and public reviews.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Encryption:</strong> all transmission uses HTTPS/TLS.</li>
            <li><strong className="text-on-surface">No server-side scan history:</strong> results are stored in your browser, not in a Trabahero database.</li>
            <li><strong className="text-on-surface">Operational logs:</strong> the backend may keep short-lived logs of errors and request metadata for debugging. They do not contain your scan history.</li>
            <li><strong className="text-on-surface">Data Minimization:</strong> only the content needed for the analysis you started is sent.</li>
            <li><strong className="text-on-surface">Retention:</strong> scan history and resume data remain in your browser's local storage until you clear them or uninstall the extension.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">4) Third-Party Services (Sub-processors)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">AI provider (OpenRouter):</strong> receives the screenshot/text you chose to scan so a model can read it. Their handling of prompts is governed by their own policy.</li>
            <li><strong className="text-on-surface">Web search (Tavily):</strong> receives only the employer's name for the verification lookup.</li>
            <li><strong className="text-on-surface">No Advertising or Analytics:</strong> Trabahero uses no ad networks, analytics SDKs, or trackers.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">5) How We Use the Information We Access</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identify and warn about suspicious job listings.</li>
            <li>Calculate risk scores and list the red flags behind them.</li>
            <li>Look up the employer behind a posting and cite the sources found.</li>
            <li>Compare resume content against job requirements for match analysis.</li>
            <li>Operate, secure, and troubleshoot the service.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">6) What We Don't Collect</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal information beyond what you type into the support email form</li>
            <li>Login credentials or passwords</li>
            <li>Browsing history beyond the elements you explicitly select</li>
            <li>Financial or payment information</li>
            <li>Location data or device identifiers</li>
            <li>Advertising or profiling data</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">7) Your Rights Under RA 10173</h3>
          <p>As a data subject under the Data Privacy Act, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Be informed</strong> — know what personal information is processed and why (this policy).</li>
            <li><strong className="text-on-surface">Access</strong> — request a copy of your scan history and resume data stored locally in the extension.</li>
            <li><strong className="text-on-surface">Rectification</strong> — correct inaccurate data by editing or re-uploading your resume.</li>
            <li><strong className="text-on-surface">Erasure / Blocking</strong> — delete your scan history and resume data by clearing extension storage or uninstalling the extension.</li>
            <li><strong className="text-on-surface">Object</strong> — stop future scans by not using the element picker or removing the extension.</li>
            <li><strong className="text-on-surface">Data Portability</strong> — your scan history is stored in your browser; you can view it in the extension side panel.</li>
            <li><strong className="text-on-surface">File a complaint</strong> — with the <a href="https://www.privacy.gov.ph/" className="text-primary hover:underline" target="_blank" rel="noreferrer">National Privacy Commission</a> if you believe your rights were violated.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">8) User Control</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Manual Control:</strong> nothing is scanned until you use the element picker or paste a posting.</li>
            <li><strong className="text-on-surface">Local History:</strong> your scan history sits in extension storage on your device; removing the extension removes it.</li>
            <li><strong className="text-on-surface">Uninstall:</strong> removing the extension stops all data processing.</li>
            <li><strong className="text-on-surface">Questions:</strong> contact us at trabahero+@gmail.com to ask what a given request sent.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">9) Technical Details</h3>
          <p><strong className="text-on-surface">Permissions Used:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">activeTab:</strong> to read the page when you activate the element picker.</li>
            <li><strong className="text-on-surface">storage:</strong> to save preferences and scan results locally.</li>
            <li><strong className="text-on-surface">tabs:</strong> to communicate between the side panel and the content script.</li>
            <li><strong className="text-on-surface">sidePanel:</strong> to open the Trabahero side panel.</li>
            <li><strong className="text-on-surface">host permissions (&lt;all_urls&gt;):</strong> to inject the element picker into pages and to call the analysis backend.</li>
          </ul>
          <p><strong className="text-on-surface">Data Flow:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You open the side panel and activate the element picker on a job listing.</li>
            <li>The selected region's screenshot and text are compressed and sent over HTTPS to the backend.</li>
            <li>The backend forwards it to the AI provider; if an employer was named, its name also goes to the web-search provider.</li>
            <li>The verdict — risk score, red flags, verification findings and sources — streams back to the side panel.</li>
            <li>The result is stored locally so you can revisit it from your history.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">10) Third Parties</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not sell or share user data with advertisers.</li>
            <li>Sub-processors (AI and search providers) are bound by their own terms and use the data only to answer the request you started.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">11) Changes to This Policy</h3>
          <p>We may update this policy as our practices or providers change. Significant changes will be noted in the extension's update.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">12) Security Disclosure</h3>
          <p>
            If you discover a security vulnerability in Trabahero, please report it responsibly through our GitHub
            repository at{' '}
            <a href="https://github.com/miks518/traba-hero" className="text-primary hover:underline">
              https://github.com/miks518/traba-hero
            </a>
            . We take security issues seriously and will respond promptly to legitimate reports.
          </p>

          <h3 className="text-on-surface font-bold text-base pt-2">13) Chrome Web Store Disclosures</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Purpose limitation:</strong> data accessed by Trabahero is used only for scam detection, employer verification, and resume matching.</li>
            <li><strong className="text-on-surface">Limited Use:</strong> we do not use data for unrelated purposes like advertising or profiling.</li>
            <li><strong className="text-on-surface">Transparency:</strong> this policy details what we access and when network calls occur.</li>
            <li><strong className="text-on-surface">Control:</strong> users can stop, uninstall, or clear their data at any time.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">14) Contact Us</h3>
          <p>
            If you have questions or requests related to privacy, reach out at{' '}
            <strong className="text-on-surface">trabahero+@gmail.com</strong> or through our GitHub repository. We take
            privacy and security issues seriously and will respond promptly to legitimate concerns.
            <br />
            You may also contact the <a href="https://www.privacy.gov.ph/" className="text-primary hover:underline" target="_blank" rel="noreferrer">National Privacy Commission</a> directly at
            <a href="mailto:complaints@privacy.gov.ph" className="text-primary hover:underline">complaints@privacy.gov.ph</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
