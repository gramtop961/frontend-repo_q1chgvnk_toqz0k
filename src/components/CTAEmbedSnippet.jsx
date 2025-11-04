import React from 'react';
import { Copy, ExternalLink } from 'lucide-react';

const SNIPPET = `<!-- Pulsante Area Pazienti -->
<a href="https://my.prevenessere.com" target="_blank" rel="noopener" class="btn btn-primary">
  Accedi all'Area Pazienti
</a>

<!-- Oppure incorporamento come iframe -->
<iframe
  src="https://my.prevenessere.com"
  title="Area Pazienti PrevenEssere"
  style="width:100%; height:750px; border:0; border-radius:12px;"
  referrerpolicy="strict-origin-when-cross-origin"
  loading="lazy"
  allow="clipboard-write; encrypted-media"
></iframe>`;

export default function CTAEmbedSnippet() {
  const [copied, setCopied] = React.useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="embed" className="bg-neutral-50 py-16" aria-labelledby="embed-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 id="embed-title" className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Integrazione WordPress (vetrina)
          </h2>
          <p className="mt-2 text-neutral-600">
            Usa il seguente snippet per aggiungere un pulsante o incorporare l'app in una pagina WordPress (Elementor):
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-neutral-800">Snippet HTML</p>
            <div className="flex items-center gap-2">
              <a
                href="https://my.prevenessere.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                <ExternalLink size={16} /> Anteprima
              </a>
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-live="polite"
              >
                <Copy size={16} /> {copied ? 'Copiato!' : 'Copia'}
              </button>
            </div>
          </div>
          <div className="mt-3">
            <textarea
              readOnly
              className="h-64 w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs text-neutral-800 focus:outline-none"
              value={SNIPPET}
              aria-label="Codice HTML da copiare"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
