import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Policies: React.FC = () => {
  const policyList = [
    { title: 'Grievance Redressal Mechanism', path: '/grievance-redressal', desc: 'Official 4-tier customer dispute resolution framework with RB-IOS 2026 integrated.', icon: 'fa-scale-balanced', color: '#f05a28' },
    { title: 'Interest Rate Model & Charges', path: '/interest-rate-model', desc: 'Reference base rate (18% p.a.), risk gradation parameters, and schedule of charges.', icon: 'fa-percent', color: '#2563eb' },
    { title: 'Fair Practices Code (FPC)', path: '/fair-practices-code', desc: 'Standards of fairness, transparency, non-coercive recovery, and ethical lending.', icon: 'fa-handshake', color: '#16a34a' },
    { title: 'Penal Charges Policy', path: '/penal-charges-policy', desc: 'RBI-compliant penal charges structure with non-capitalisation on overdue amounts.', icon: 'fa-file-invoice-dollar', color: '#ea580c' },
    { title: 'KYC & AML Policy', path: '/kyc-and-aml', desc: 'Know Your Customer norms and anti-money laundering risk mitigation framework.', icon: 'fa-user-check', color: '#9333ea' },
    { title: 'Regulatory Certifications', path: '/regulatory-certifications', desc: 'RBI Certificate of Registration B-14.02019, incorporation, and credit bureau links.', icon: 'fa-certificate', color: '#0d9488' },
    { title: 'Public Notice & Caution', path: '/public-notice', desc: 'Advisory alerts against fraudulent lending apps and statutory portfolio disclosures.', icon: 'fa-bullhorn', color: '#dc2626' },
    { title: 'Privacy Policy', path: '/privacy-policy', desc: 'Borrower data protection, encryption, and digital personal data governance.', icon: 'fa-shield-halved', color: '#4f46e5' },
    { title: 'Terms & Conditions', path: '/terms-and-conditions', desc: 'Legally binding terms governing loan disbursals, electronic mandates, and repayments.', icon: 'fa-file-lines', color: '#d97706' },
    { title: 'Terms of Use', path: '/terms-of-use', desc: 'Website terms of use, intellectual property rights, and platform security rules.', icon: 'fa-desktop', color: '#0284c7' },
    { title: 'Website Disclaimer', path: '/disclaimer', desc: 'Statutory disclaimer, third-party limitations, and fraud prevention notices.', icon: 'fa-triangle-exclamation', color: '#e11d48' }
  ];

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Statutory Policies</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Policies &amp; Regulatory Compliance</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Prest Loans ({siteConfig.legalName}) operates in strict compliance with Reserve Bank of India (RBI) directives.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {policyList.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                style={{
                  textDecoration: 'none',
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${p.color}15`, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '16px' }}>
                    <i className={`fa-solid ${p.icon}`}></i>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700, margin: '0 0 8px' }}>{p.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
                <div style={{ marginTop: '20px', color: p.color, fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>View Document</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
