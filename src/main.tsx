import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/style.css';

function getBasename(): string | undefined {
  // 1. Explicit build-time base path (e.g. for GitHub Pages)
  const rawBase = import.meta.env.BASE_URL;
  if (rawBase && rawBase !== '/' && rawBase !== './' && rawBase.startsWith('/')) {
    return rawBase.replace(/\/$/, '');
  }

  // 2. Runtime auto-detection for subfolder deployments (e.g. /prestloans/, /demo/, /dist/)
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return undefined;
  }

  const knownRootRoutes = new Set([
    '',
    'index.html',
    'about',
    'products',
    'calculator',
    'career',
    'customers-stories',
    'employee-testimonials',
    'media',
    'gallery',
    'prestloans-diaries',
    'blog',
    'faq',
    'contact',
    'policies',
    'grievance-redressal',
    'interest-rate-model',
    'fair-practices-code',
    'kyc-and-aml',
    'penal-charges-policy',
    'regulatory-certifications',
    'public-notice',
    'privacy-policy',
    'terms-and-conditions',
    'terms-of-use',
    'disclaimer'
  ]);

  const first = segments[0].toLowerCase().replace(/\.html$/, '');
  if (!knownRootRoutes.has(first)) {
    return `/${segments[0]}`;
  }

  return undefined;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={getBasename()}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

