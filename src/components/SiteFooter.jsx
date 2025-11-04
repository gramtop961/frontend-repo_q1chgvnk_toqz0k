import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-neutral-900">PrevenEssere</p>
            <p className="mt-2 text-sm text-neutral-600">
              Portale Pazienti per referti dentistici. Dati trattati con approccio privacy-by-design e hosting UE.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Sicurezza & Compliance</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>HTTPS/TLS 1.2+, HSTS, CSP</li>
              <li>Cifratura a riposo (AES-256) e in transito</li>
              <li>Audit log completo e retention configurabile</li>
              <li>Consensi GDPR con versioning</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Contatti</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>Email: info@prevenessere.com</li>
              <li>Subdominio app: my.prevenessere.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} PrevenEssere. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span>Accessibilità WCAG 2.1 AA</span>
            <span>EU Hosting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
