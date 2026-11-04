const DOWNLOAD_URL = `${import.meta.env.BASE_URL}traba-hero-extension.zip`;

const STEPS = [
  {
    icon: 'download',
    title: 'Download and unzip',
    body: 'Save the ZIP and extract it to a folder you will keep - for example in Documents. Do not delete the folder afterwards, Chrome loads the extension from it.',
  },
  {
    icon: 'toggle_on',
    title: 'Turn on Developer mode',
    body: 'Open chrome://extensions in Chrome and switch on Developer mode (top-right corner).',
  },
  {
    icon: 'folder_open',
    title: 'Load unpacked',
    body: 'Click "Load unpacked" and select the folder you extracted. "Traba-Hero" appears in the list.',
  },
  {
    icon: 'select_window',
    title: 'Scan a posting',
    body: 'Open any job posting, click the Traba-Hero icon in the toolbar, and pick the posting to scan.',
  },
];

export default function InstallSection() {
  return (
    <section id="install" className="py-24 px-margin-desktop">
      <div className="max-w-5xl mx-auto card-base gradient-border reveal">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-base">schedule</span>
              Chrome Web Store review pending
            </span>
            <h2 className="font-headline text-headline-lg text-on-surface">Try it before the listing goes live</h2>
            <p className="text-on-surface-variant font-body-md">
              The extension is still in review. Until it is published, you can install it directly from here as an
              unpacked build. It is the same code that was submitted, and it already talks to our hosted backend.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a
                href={DOWNLOAD_URL}
                download
                className="tactile-btn-accent px-8 py-3 rounded-xl font-extrabold text-lg flex items-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                Download the extension
              </a>
              <span className="text-on-surface-variant font-label-sm">
                Version 0.5.0 · 114 KB · Chrome, Edge, Brave or Opera on a desktop
              </span>
            </div>
            <ul className="space-y-2 pt-2 text-sm text-on-surface-variant">
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-base">info</span>
                Chrome will show a "developer mode extensions" reminder each time you restart the browser. That is
                normal for an unpacked install.
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-base">info</span>
                It does not update on its own - come back here for a newer ZIP.
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-base">info</span>
                Not available on Android or iOS: mobile Chrome cannot load unpacked extensions.
              </li>
            </ul>
          </div>

          <ol className="space-y-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </span>
                <div>
                  <div className="font-bold text-on-surface">
                    {index + 1}. {step.title}
                  </div>
                  <p className="text-sm text-on-surface-variant font-body-md">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
