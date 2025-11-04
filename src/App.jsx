import React from 'react';
import SidebarNav from './components/SidebarNav';
import AppHeader from './components/AppHeader';
import PatientRecords from './components/PatientRecords';
import ConsentsPanel from './components/ConsentsPanel';

function App() {
  const [section, setSection] = React.useState('referti');
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const breadcrumb = ['Portale', section.charAt(0).toUpperCase() + section.slice(1)];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="flex">
        <SidebarNav current={section} onNavigate={setSection} />
        <div className="flex-1">
          <AppHeader breadcrumb={breadcrumb} darkMode={dark} onToggleDark={() => setDark((d) => !d)} />

          <main id="main" className="mx-auto max-w-7xl p-4">
            {section === 'dashboard' && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <p className="text-sm font-medium">Ultimo referto</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Visualizza rapidamente l'ultimo referto caricato.
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <p className="text-sm font-medium">Consensi</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Privacy: accettato • Marketing: no</p>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <p className="text-sm font-medium">Attività recente</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Download e visualizzazioni recenti.</p>
                </div>
              </div>
            )}

            {section === 'referti' && <PatientRecords />}

            {section === 'consensi' && <ConsentsPanel />}

            {section === 'profilo' && (
              <div className="space-y-6">
                <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <h3 className="text-sm font-semibold">Impostazioni profilo</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm">Tema scuro</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Attiva per affaticare meno la vista</p>
                    </div>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={dark}
                        onChange={() => setDark((d) => !d)}
                        aria-label="Attiva/disattiva tema scuro"
                      />
                      <span className="peer-focus:ring-ring inline-block h-6 w-11 rounded-full bg-neutral-300 transition peer-checked:bg-emerald-500"></span>
                    </label>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm">MFA (TOTP)</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Consigliata per i pazienti - obbligatoria per lo staff</p>
                    </div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-300">Abilitata (demo)</span>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
                  Per supporto: invia una email a <a className="text-emerald-600 underline dark:text-emerald-400" href="mailto:help@prevenessere.com">help@prevenessere.com</a>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
