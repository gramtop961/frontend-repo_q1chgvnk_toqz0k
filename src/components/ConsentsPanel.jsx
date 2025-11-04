import React from 'react';

const initialHistory = [
  {
    id: 1,
    type: 'privacy',
    version: '1.0',
    accepted: true,
    accepted_at: '2025-05-01T10:00:00Z',
    ip: '192.0.2.10',
    ua: 'Mozilla/5.0',
    note: '',
  },
  {
    id: 2,
    type: 'marketing',
    version: '1.0',
    accepted: false,
    accepted_at: '2025-05-01T10:00:00Z',
    ip: '192.0.2.10',
    ua: 'Mozilla/5.0',
    note: 'Impostazione predefinita disattivata',
  },
];

export default function ConsentsPanel() {
  const [privacy, setPrivacy] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);
  const [history, setHistory] = React.useState(initialHistory);
  const [motivo, setMotivo] = React.useState('');
  const privacyVersion = '1.1';

  const onTogglePrivacy = () => {
    const next = !privacy;
    setPrivacy(next);
    setHistory((h) => [
      {
        id: Date.now(),
        type: 'privacy',
        version: privacyVersion,
        accepted: next,
        accepted_at: new Date().toISOString(),
        ip: '198.51.100.42',
        ua: navigator.userAgent,
        note: next ? '' : motivo,
      },
      ...h,
    ]);
  };

  const onToggleMarketing = () => {
    const next = !marketing;
    setMarketing(next);
    setHistory((h) => [
      {
        id: Date.now(),
        type: 'marketing',
        version: '1.0',
        accepted: next,
        accepted_at: new Date().toISOString(),
        ip: '198.51.100.42',
        ua: navigator.userAgent,
        note: next ? '' : motivo,
      },
      ...h,
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Consensi & Privacy</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Versione documento privacy attiva: <span className="font-medium">{privacyVersion}</span>
        </p>

        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Consenso privacy (obbligatorio)</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Necessario per l'uso del servizio.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={privacy}
                onChange={onTogglePrivacy}
                aria-label="Attiva/disattiva consenso privacy"
              />
              <span className="peer-focus:ring-ring inline-block h-6 w-11 rounded-full bg-neutral-300 transition peer-checked:bg-emerald-500"></span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Marketing (facoltativo)</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Non influisce sull'accesso ai referti.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={marketing}
                onChange={onToggleMarketing}
                aria-label="Attiva/disattiva consenso marketing"
              />
              <span className="peer-focus:ring-ring inline-block h-6 w-11 rounded-full bg-neutral-300 transition peer-checked:bg-emerald-500"></span>
            </label>
          </div>

          <div className="pt-2">
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="motivo">
              Motivazione (per revoca/opzione)
            </label>
            <input
              id="motivo"
              type="text"
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Opzionale"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Storico consensi</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-left text-sm" aria-label="Storico versioni del consenso">
            <thead className="text-xs text-neutral-500 dark:text-neutral-400">
              <tr>
                <th className="py-2">Tipo</th>
                <th className="py-2">Versione</th>
                <th className="py-2">Accettato</th>
                <th className="py-2">Timestamp</th>
                <th className="py-2">IP</th>
                <th className="py-2">User-Agent</th>
                <th className="py-2">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {history.map((h) => (
                <tr key={h.id} className="align-top">
                  <td className="py-2">{h.type}</td>
                  <td className="py-2">{h.version}</td>
                  <td className="py-2">{h.accepted ? 'Sì' : 'No'}</td>
                  <td className="py-2">{new Date(h.accepted_at).toLocaleString()}</td>
                  <td className="py-2">{h.ip}</td>
                  <td className="py-2">{h.ua}</td>
                  <td className="py-2">{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
