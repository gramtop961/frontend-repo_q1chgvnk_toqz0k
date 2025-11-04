import React from 'react';
import { Home, FileText, ShieldCheck, User, HelpCircle } from 'lucide-react';

export default function SidebarNav({ current, onNavigate }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    { key: 'referti', label: 'Referti', icon: FileText },
    { key: 'consensi', label: 'Consensi', icon: ShieldCheck },
    { key: 'profilo', label: 'Profilo', icon: User },
  ];

  return (
    <aside className="hidden shrink-0 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:block md:w-64">
      <div className="flex h-16 items-center border-b border-neutral-200 px-4 dark:border-neutral-800">
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">PrevenEssere</span>
      </div>
      <nav className="p-2">
        {items.map((it) => {
          const ActiveIcon = it.icon;
          const active = current === it.key;
          return (
            <button
              key={it.key}
              onClick={() => onNavigate(it.key)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                active
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300'
                  : 'text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <ActiveIcon size={18} /> {it.label}
            </button>
          );
        })}
        <a
          href="mailto:help@prevenessere.com?subject=Supporto%20Portale%20Pazienti"
          className="mt-2 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          <HelpCircle size={18} /> Supporto
        </a>
      </nav>
      <div className="mt-auto p-3 text-xs text-neutral-500 dark:text-neutral-400">
        <p>Hosting EU • Cifratura a riposo e in transito</p>
      </div>
    </aside>
  );
}
