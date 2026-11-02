import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Privacy Policy</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Privacy Policy &amp; Data Protection</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Compliant with Digital Personal Data Protection (DPDP) Act and RBI Digital Lending Master Directions.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Borrower Data Governance &amp; Confidentiality
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                <strong>{siteConfig.legalName}</strong> (brand name <strong>Prest Loans</strong>) is committed to protecting the privacy, security, and integrity of borrower information collected through our web portal, mobile applications, and partner integrations.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Data Collection &amp; Purpose Limitation
              </h3>
              <p>
                We only collect data strictly necessary for identity verification, credit underwriting, statutory KYC compliance, and loan servicing. No biometric data is stored by Prest Loans, and access to contact lists or phone storage is strictly prohibited under RBI digital lending rules.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Data Encryption &amp; Security Standards
              </h3>
              <p>
                All personal and financial communications are encrypted in transit using 256-bit TLS protocol and stored in secured cloud servers physically located in India in strict compliance with data localization directives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
