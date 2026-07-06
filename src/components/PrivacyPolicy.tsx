export default function PrivacyPolicy() {
  return (
    <section className="py-24 px-margin-desktop bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Privacy</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3">Privacy Policy</h2>
        </div>
        <div className="machined-edge rounded-2xl p-10 bg-surface-container text-sm text-on-surface-variant leading-relaxed space-y-4">
          <p><strong className="text-on-surface">Effective Date:</strong> October 1, 2025</p>
          <p>Trabahero is a Chrome extension that helps protect Filipino job seekers from employment scams. We designed Trabahero to analyze job listings primarily on your device, and to minimize the data that leaves your browser. This privacy policy explains how we collect, use, and protect your information when you use our extension.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">1) What Trabahero Accesses (Extension Permissions in Practice)</h3>
          <p>To provide job scam detection and resume matching, Trabahero's content scripts and service worker access:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Page Content (DOM):</strong> We analyze the text content of job listing elements you explicitly select using the element picker.</li>
            <li><strong className="text-on-surface">Screenshots (Tab Capture):</strong> When you select an element, we capture a visible tab screenshot of that region for visual analysis and verification.</li>
            <li><strong className="text-on-surface">User Preferences (chrome.storage):</strong> We store lightweight settings such as your auto-scan preference or resume filename locally on your device.</li>
          </ul>
          <p>We do not read passwords, form inputs, private messages, your browsing history beyond the elements you select, or clipboard contents.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">2) Data Processing and Security</h3>
          <p><strong className="text-on-surface">Local Processing:</strong> Initial scam pattern analysis happens locally in your browser using feature extraction from the selected element's text.</p>
          <p><strong className="text-on-surface">Server Analysis:</strong> When a listing requires advanced ML analysis, the selected element's text content is sent to our secure servers using encrypted HTTPS connections. Our machine learning models analyze the content for scam patterns.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Encryption: All data transmission uses HTTPS/TLS encryption.</li>
            <li>Access Control: Server access is restricted and monitored.</li>
            <li>Data Minimization: We only collect and process data necessary for scam analysis.</li>
            <li>Automatic Cleanup: Cached data is automatically deleted after 7 days.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">3) Third-Party Services</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Machine Learning Service:</strong> Elements requiring advanced analysis are processed by our ML service hosted on secure infrastructure. No personal information is included.</li>
            <li><strong className="text-on-surface">No Advertising or Analytics:</strong> Trabahero does not use advertising networks, analytics services, or other third-party tracking systems.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">4) How We Use the Information We Access</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identify and warn about suspicious or fraudulent job listings.</li>
            <li>Calculate risk scores and highlight detected scam red flags.</li>
            <li>Compare resume content against job requirements for match analysis.</li>
            <li>Reduce duplicate scans and improve detection reliability.</li>
            <li>Operate, secure, and troubleshoot the service.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">5) What We Don't Collect</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal information (names, emails, addresses)</li>
            <li>Login credentials or passwords</li>
            <li>Browsing history beyond the elements you explicitly select</li>
            <li>File contents or downloads</li>
            <li>Social media posts or private messages</li>
            <li>Financial or payment information</li>
            <li>Location data or device identifiers</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">6) User Rights and Control</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Disable Scanning:</strong> You can disable the auto-scan feature at any time through the toggle switch in the Scan view.</li>
            <li><strong className="text-on-surface">Manual Control:</strong> Use the element picker only when you want to scan a specific listing — nothing is analyzed without your action.</li>
            <li><strong className="text-on-surface">Uninstall:</strong> Remove the extension completely to stop all data processing.</li>
            <li><strong className="text-on-surface">Data Deletion:</strong> When you uninstall the extension, all local data is automatically removed. Server-side cached data is deleted after 7 days.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">7) Technical Details</h3>
          <p><strong className="text-on-surface">Permissions Used:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">activeTab:</strong> To access the current page when you activate the element picker.</li>
            <li><strong className="text-on-surface">storage:</strong> To save user preferences and cache scan results locally.</li>
            <li><strong className="text-on-surface">tabs:</strong> To communicate between the side panel and content script.</li>
            <li><strong className="text-on-surface">sidePanel:</strong> To open the Trabahero sidebar interface.</li>
            <li><strong className="text-on-surface">host permissions (&lt;all_urls&gt;):</strong> To inject the element picker into web pages and communicate with our analysis servers.</li>
          </ul>
          <p><strong className="text-on-surface">Data Flow:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>User activates the element picker on a job listing page.</li>
            <li>Element content is extracted and checked against local scam pattern rules.</li>
            <li>If advanced analysis is needed, text content is sent to our ML servers.</li>
            <li>Security verdicts (risk score, red flags) are returned and displayed in the sidebar.</li>
            <li>Results are cached locally to avoid duplicate scans.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">8) Third Parties</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not sell or share user data with advertisers.</li>
            <li>If we ever use a sub-processor (e.g., for secure hosting), it will be bound by confidentiality and data protection obligations.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">9) Changes to This Policy</h3>
          <p>We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify users of significant changes through the extension's update mechanism.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">10) Copyright Policy</h3>
          <p>All images featured on this landing page and within the extension are either owned by the development team or generated using AI tools. The Trabahero name and branding are protected.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">11) Security Disclosure</h3>
          <p>If you discover a security vulnerability in Trabahero, please report it responsibly through our GitHub repository at <a href="https://github.com/miks518/trabahero-landing-page" className="text-secondary hover:underline">https://github.com/miks518/trabahero-landing-page</a>. We take security issues seriously and will respond promptly to legitimate reports.</p>

          <h3 className="text-on-surface font-bold text-base pt-2">12) Chrome Web Store Disclosures</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-on-surface">Purpose limitation:</strong> Data accessed by Trabahero is used only to provide scam detection and resume matching features.</li>
            <li><strong className="text-on-surface">Limited Use:</strong> We do not use data for unrelated purposes like advertising or profiling.</li>
            <li><strong className="text-on-surface">Transparency:</strong> This policy details what we access and when network calls occur.</li>
            <li><strong className="text-on-surface">Control:</strong> Users can disable, remove, or change settings at any time.</li>
          </ul>

          <h3 className="text-on-surface font-bold text-base pt-2">13) Contact Us</h3>
          <p>If you have questions or requests related to privacy, please reach out at <strong className="text-on-surface">trabahero+@gmail.com</strong> or through our GitHub repository. We take privacy and security issues seriously and will respond promptly to legitimate concerns.</p>
        </div>
      </div>
    </section>
  );
}
