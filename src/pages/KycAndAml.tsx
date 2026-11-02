import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const KycAndAml: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>KYC &amp; AML</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>KYC &amp; AML Policy</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Know Your Customer Norms &amp; Anti-Money Laundering Measures under RBI Master Directions.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Customer Identification &amp; Anti-Money Laundering Framework
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                <strong>{siteConfig.legalName}</strong> (brand name <strong>Prest Loans</strong>) has framed this Know Your Customer (KYC) and Anti-Money Laundering (AML) Policy pursuant to the Prevention of Money Laundering Act (PMLA), 2002, and RBI Master Direction on KYC.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Customer Acceptance Policy (CAP)
              </h3>
              <p>
                Prest Loans maintains strict compliance that no loan account is opened in anonymous or fictitious names. Digital identity verification is completed using officially valid documents (OVD) like PAN, Aadhaar (via UIDAI offline XML / OTP), Voter ID, or Passport.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Central KYC Records Registry (CKYCR)
              </h3>
              <p>
                In compliance with regulatory requirements, borrower KYC records are synchronized with the Central KYC Registry (CKYCR) managed by CERSAI to ensure streamlined verification and fraud deterrence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
