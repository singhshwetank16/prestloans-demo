import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const PublicNotice: React.FC = () => {
  const notices = [
    { title: 'Caution Notice Against Fraudulent Digital Lending Apps & Impersonators', file: '/assets/public_notice/Caution Notice against Fradulent Activities.pdf', date: 'Statutory Notice', icon: 'fa-shield-halved', color: '#dc2626' },
    { title: 'Public Advisory Regarding Fake Loan Approval Letters', file: '/assets/public_notice/Caution notice against digital lending platform.pdf', date: 'Fraud Alert', icon: 'fa-triangle-exclamation', color: '#f05a28' },
    { title: 'Portfolio Disclosure (Half Yearly & Annual Statement)', file: '/assets/public_notice/Portfolio Disclosure as on 30 September 2024.pdf', date: 'Statutory Disclosure', icon: 'fa-chart-pie', color: '#2563eb' },
    { title: 'Annual Return for Financial Year 2023-2024', file: '/assets/public_notice/Annual Return F.Y 23-24.pdf', date: 'MCA Filing', icon: 'fa-file-pdf', color: '#16a34a' }
  ];

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Public Notice</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Public Notices &amp; Statutory Disclosures</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Official statutory public advisories, portfolio returns, and caution alerts issued by {siteConfig.legalName}.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff1ec', border: '1px solid #fed7aa', borderRadius: '16px', padding: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <i className="fa-solid fa-triangle-exclamation" style={{ color: '#f05a28', fontSize: '1.6rem', marginTop: '2px' }}></i>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#9a3412', fontWeight: 700, margin: '0 0 6px' }}>Fraud Prevention Warning</h3>
                <p style={{ color: '#7c2d12', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Prest Loans <strong>never</strong> asks borrowers to pay any advance processing fees, insurance deposits, or approval charges into individual personal UPI/bank accounts. All processing charges are deducted solely from the sanctioned loan disbursal amount.
                </p>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {notices.map((n, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${n.color}15`, color: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                    <i className={`fa-solid ${n.icon}`}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: n.color, fontWeight: 700, textTransform: 'uppercase' }}>{n.date}</span>
                    <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 700, margin: '2px 0 0' }}>{n.title}</h4>
                  </div>
                </div>
                <a
                  href={n.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 20px', borderRadius: '50px', fontSize: '0.85rem', border: '1px solid #cbd5e1', color: '#334155' }}
                >
                  <i className="fa-solid fa-file-pdf" style={{ color: '#dc2626', marginRight: '6px' }}></i> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
