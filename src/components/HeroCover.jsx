import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Lock, Download } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="relative h-[560px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
      </div>

      <div className="mx-auto -mt-72 max-w-7xl px-6 pb-16 sm:-mt-64 md:-mt-80">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 ring-1 ring-emerald-400/20">
            <ShieldCheck size={16} />
            Portale Pazienti PrevenEssere
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Referti dentistici sicuri, privati e sempre disponibili
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Accesso protetto con MFA, URL firmati a scadenza breve e audit completo. Hosting e dati cifrati in UE.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#demo-login"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Accedi Demo
            </a>
            <a
              href="#embed"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Integra su WordPress
            </a>
          </div>

          <dl className="mt-8 grid max-w-xl grid-cols-1 gap-4 text-sm text-neutral-300 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Lock size={18} className="text-emerald-400" />
              <span>MFA + HSTS/CSP</span>
            </div>
            <div className="flex items-center gap-2">
              <Download size={18} className="text-emerald-400" />
              <span>URL firmati (5 min)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>Privacy by design (UE)</span>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
