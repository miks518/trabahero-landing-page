export default function TechnologySection() {
  return (
    <section id="technology" className="py-24">
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <div className="text-center space-y-4 mb-16 reveal">
          <h2 className="font-headline-lg text-headline-lg metallic-gold-text">Technology Used</h2>
          <p className="text-outline max-w-2xl mx-auto font-body-md">The tools, models, and infrastructure powering Trabahero's scam detection pipeline.</p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3 reveal">
              <span className="material-symbols-outlined text-secondary">cloud</span> Backend &amp; APIs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { icon: 'api', name: 'FastAPI', desc: 'High-performance Python backend framework handling the scam detection API endpoints and serving ML model predictions.' },
                { icon: 'document_scanner', name: 'RapidOCR', desc: 'Optical character recognition engine that extracts text from selected element screenshots for content analysis.' },
                { icon: 'smart_toy', name: 'Ollama', desc: 'Local LLM runtime for running inference on fine-tuned scam detection models directly on the server.' },
              ].map((item, i) => (
                <div key={item.name} className={`tactile-raised machined-edge rounded-2xl p-8 bg-surface-container text-center reveal reveal-delay-${i + 1}`}>
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-black text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">{item.name}</h4>
                  <p className="text-outline font-body-md mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3 reveal">
              <span className="material-symbols-outlined text-secondary">model_training</span> ML Models &amp; Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { icon: 'memory', name: 'Unsloth Meta Llama 3 8B', desc: "Fine-tuned 8-billion parameter LLM optimized for job scam classification using Unsloth's efficient training framework." },
                { icon: 'tune', name: 'QLoRA Finetune', desc: 'Quantized Low-Rank Adaptation technique enabling efficient fine-tuning of large language models with minimal GPU memory.' },
                { icon: 'cloud', name: 'Google Colab & Tesla T4 GPU', desc: 'Model training accelerated by Tesla T4 GPUs on Google Colab, providing the compute power needed for LLM fine-tuning.' },
              ].map((item, i) => (
                <div key={item.name} className={`tactile-raised machined-edge rounded-2xl p-8 bg-surface-container text-center reveal reveal-delay-${i + 1}`}>
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-black text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">{item.name}</h4>
                  <p className="text-outline font-body-md mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
