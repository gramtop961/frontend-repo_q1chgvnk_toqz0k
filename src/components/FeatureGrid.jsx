import React from 'react';
import { User, Users, FileText, Activity, Mail, Server } from 'lucide-react';

const features = [
  {
    title: 'Accesso sicuro con MFA',
    icon: User,
    desc:
      'Login con password + TOTP. Possibile SMS. Rate limit, blocco tentativi e sessioni protette.',
  },
  {
    title: 'Referti con URL firmati',
    icon: FileText,
    desc:
      'Upload su storage S3 in UE, verifica MIME, checksum e download tramite URL presigned a scadenza.',
  },
  {
    title: 'Ruoli e permessi (RBAC)',
    icon: Users,
    desc:
      'Paziente, Staff/Dentista e Admin con visibilità segregata. Prevenzione IDOR e audit per azione.',
  },
  {
    title: 'Audit, report e retention',
    icon: Activity,
    desc:
      'Tracciamento login, view, download, upload e modifiche admin. Esportazione CSV e politiche di retention.',
  },
  {
    title: 'Notifiche email UE',
    icon: Mail,
    desc:
      'SMTP in Europa con template per inviti, reset password e nuove disponibilità di referti.',
  },
  {
    title: 'Hosting e cifratura in UE',
    icon: Server,
    desc:
      'Cifratura a riposo e in transito, HSTS e CSP restrittive. Backup cifrati e test di ripristino.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16" aria-labelledby="caratteristiche">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 id="caratteristiche" className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Funzionalità principali
          </h2>
          <p className="mt-2 text-neutral-600">
            Progettato per conformità GDPR, sicurezza e usabilità per pazienti e studio dentistico.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-emerald-400"
              tabIndex={0}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <f.icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
