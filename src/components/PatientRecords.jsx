import React from 'react';

const demoRecords = [
  {
    id: 'r1',
    title: 'Controllo periodico',
    type: 'visita',
    exam_date: '2025-06-01',
    tags: ['igiene'],
    size: 234567,
    status: 'new',
    file_key: 'eu/prevenessere/records/r1.pdf',
  },
  {
    id: 'r2',
    title: 'RX arcata superiore',
    type: 'rx',
    exam_date: '2025-05-21',
    tags: ['rx', 'arcata'],
    size: 178901,
    status: 'seen',
    file_key: 'eu/prevenessere/records/r2.pdf',
  },
  {
    id: 'r3',
    title: 'Analisi laboratorio',
    type: 'analisi',
    exam_date: '2025-04-10',
    tags: ['emocromo'],
    size: 345001,
    status: 'downloaded',
    file_key: 'eu/prevenessere/records/r3.pdf',
  },
];

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function StatusBadge({ status }) {
  const map = {
    new: { label: 'Nuovo', cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300' },
    seen: { label: 'Visto', cls: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300' },
    downloaded: { label: 'Scaricato', cls: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' },
  };
  const d = map[status] || map.new;
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${d.cls}`}>{d.label}</span>;
}

export default function PatientRecords() {
  const [query, setQuery] = React.useState('');
  const [type, setType] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [tag, setTag] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [selected, setSelected] = React.useState(null);
  const [presigned, setPresigned] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const filtered = demoRecords.filter((r) => {
    const q = query ? r.title.toLowerCase().includes(query.toLowerCase()) : true;
    const t = type ? r.type === type : true;
    const s = status ? r.status === status : true;
    const tg = tag ? r.tags.some((x) => x.toLowerCase().includes(tag.toLowerCase())) : true;
    const f = from ? new Date(r.exam_date) >= new Date(from) : true;
    const tt = to ? new Date(r.exam_date) <= new Date(to) : true;
    return q && t && s && tg && f && tt;
  });

  const onSelect = (r) => {
    setSelected({ ...r, status: r.status === 'new' ? 'seen' : r.status });
    setPresigned(null);
  };

  const generatePresigned = () => {
    if (!selected) return;
    const url = new URL('https://download.prevenessere.eu/presigned');
    url.searchParams.set('key', selected.file_key);
    url.searchParams.set('exp', String(Date.now() + 5 * 60 * 1000));
    url.searchParams.set('sig', 'demo-signature');
    setPresigned(url.toString());
    setMessage('Link firmato valido per 5 minuti generato.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6" role="search">
          <input
            type="search"
            className="col-span-2 rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            placeholder="Cerca per titolo"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cerca per titolo"
          />
          <select
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Filtra per tipologia"
          >
            <option value="">Tutte le tipologie</option>
            <option value="visita">Visita</option>
            <option value="rx">RX</option>
            <option value="analisi">Analisi</option>
            <option value="altro">Altro</option>
          </select>
          <input
            type="text"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            aria-label="Filtra per tag"
          />
          <select
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filtra per stato"
          >
            <option value="">Tutti gli stati</option>
            <option value="new">Nuovo</option>
            <option value="seen">Visto</option>
            <option value="downloaded">Scaricato</option>
          </select>
          <div className="flex gap-2">
            <input
              type="date"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              aria-label="Data da"
            />
            <input
              type="date"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              aria-label="Data a"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950" role="region" aria-label="Elenco referti">
          {filtered.length === 0 ? (
            <div className="flex h-48 items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
              Nessun referto trovato.
            </div>
          ) : (
            <ul className="divide-y divide-neutral-200 dark:divide-neutral-800" role="list">
              {filtered.map((r) => (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3">
                  <button
                    className="text-left"
                    onClick={() => onSelect(r)}
                    aria-label={`Apri referto ${r.title}`}
                  >
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{r.title}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {new Date(r.exam_date).toLocaleDateString()} • {r.type} • {formatSize(r.size)}
                    </p>
                  </button>
                  <StatusBadge status={r.status} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950" role="region" aria-label="Viewer referto">
          {!selected ? (
            <div className="flex h-72 items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
              Seleziona un referto per visualizzarlo.
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{selected.title}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {new Date(selected.exam_date).toLocaleDateString()} • {selected.type}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={generatePresigned}
                    className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    Genera link scaricabile (5 min)
                  </button>
                  {presigned && (
                    <a
                      href={presigned}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
                    >
                      Scarica
                    </a>
                  )}
                </div>
              </div>

              {message && (
                <div className="rounded-md bg-emerald-50 p-2 text-xs text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                  {message}
                </div>
              )}

              <div className="h-72 overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
                {/* Lazy load: render iframe only when selected */}
                <iframe
                  title={`Viewer ${selected.title}`}
                  src={`about:blank`}
                  className="h-full w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
