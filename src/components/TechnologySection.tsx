const GROUPS = [
  {
    heading: 'Extension',
    icon: 'extension',
    items: [
      { icon: 'widgets', name: 'WXT + React 19', desc: 'The side panel, the content-script element picker and the scan history are built with WXT, React and TypeScript, styled in Tailwind.' },
      { icon: 'crop_free', name: 'Element capture', desc: 'The picker overlays any page so you can select the exact posting; the region is captured as a compressed screenshot with its text.' },
      { icon: 'storage', name: 'Local storage', desc: 'Scan history and preferences are kept in extension storage on your device, with the backend health state polled in the background.' },
    ],
  },
  {
    heading: 'Backend & models',
    icon: 'dns',
    items: [
      { icon: 'api', name: 'FastAPI (Python)', desc: 'Streams scan progress over server-sent events, enforces rate limits and a shared client key, and keeps model configuration in one .env file.' },
      { icon: 'smart_toy', name: 'OpenRouter models', desc: 'Hosted multimodal models read the screenshot and the posting text. Structured output is requested where the model supports it, with a plain-text fallback where it does not.' },
      { icon: 'terminal', name: 'Prompt-driven rules', desc: 'System prompts live in readable files and carry the guardrails: observational only, every claim traced to its source, absence never scored as guilt.' },
    ],
  },
  {
    heading: 'Verification & retrieval',
    icon: 'travel_explore',
    items: [
      { icon: 'search', name: 'Tavily web search', desc: 'Two queries per employer check — registration records, then reviews and complaints — with a Philippines country boost so local registries surface.' },
      { icon: 'link', name: 'Cited sources', desc: 'Search results are returned as a flat list of titles and URLs; the model may only repeat what a result states, and the panel shows the links.' },
      { icon: 'report', name: 'Explicit failures', desc: 'A search that fails is reported as a failed search, never as "nothing found" — a broken lookup can look like a clean company otherwise.' },
    ],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="text-center space-y-4 mb-16 reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Technology</span>
          <h2 className="font-headline-lg text-headline-lg metallic-gold-text">How it is built</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">
            A browser extension, a thin FastAPI service, hosted models, and a web search that always hands you the
            receipts.
          </p>
        </div>

        <div className="space-y-12">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3 reveal">
                <span className="material-symbols-outlined text-secondary">{group.icon}</span>
                {group.heading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {group.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`tactile-raised machined-edge rounded-2xl p-8 bg-surface-container hover-lift reveal reveal-delay-${i + 1}`}
                  >
                    <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-black text-2xl">{item.icon}</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-on-surface">{item.name}</h4>
                    <p className="text-outline font-body-md mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
