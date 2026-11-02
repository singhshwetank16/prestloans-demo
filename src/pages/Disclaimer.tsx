import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Disclaimer</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Statutory Disclaimer</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Important disclosures, fraud prevention, and third-party limitations.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Website Disclaimer &amp; Caution Advisory
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                Prest Loans is the registered trade name of <strong>{siteConfig.legalName}</strong>, a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India under Certificate of Registration No. <strong>{siteConfig.rbiRegNo}</strong>.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. No Liability for Fraudulent Websites
              </h3>
              <p>
                Borrowers are warned against unauthorized persons, brokers, or clone websites falsely claiming association with Prest Loans. We operate solely via our official domain <strong>prestloans.com</strong> and designated verified portals.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Credit Appraisal Discretion
              </h3>
              <p>
                All loan sanctioning and disbursement decisions remain at the sole discretion of the Credit Committee of Lord Krishna Financial Services Ltd based on internal underwriting criteria and bureau records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
