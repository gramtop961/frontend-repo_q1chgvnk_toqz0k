import React from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import CTAEmbedSnippet from './components/CTAEmbedSnippet';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Salta al contenuto
      </a>

      <HeroCover />

      <main id="main">
        <FeatureGrid />
        <CTAEmbedSnippet />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
