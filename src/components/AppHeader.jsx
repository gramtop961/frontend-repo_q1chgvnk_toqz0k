import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function AppHeader({ breadcrumb, darkMode, onToggleDark }) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-semibold text-neutral-900 dark:text-neutral-100 sm:inline">Studio: PrevenEssere</span>
          <span className="text-neutral-400">/</span>
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              {breadcrumb.map((b, i) => (
                <li key={b} className="flex items-center gap-2">
                  <span aria-current={i === breadcrumb.length - 1 ? 'page' : undefined}>{b}</span>
                  {i < breadcrumb.length - 1 && <span className="text-neutral-400">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <button
          type="button"
          onClick={onToggleDark}
          className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-800 shadow-sm hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          aria-pressed={darkMode}
          aria-label="Attiva/disattiva tema scuro"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
