import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const TermsAndConditions: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Terms &amp; Conditions</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Terms &amp; Conditions</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Governing digital loan applications, credit appraisals, disbursals, and repayments.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Master Lending Terms &amp; Conditions
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                These Terms and Conditions constitute a legally binding agreement between the Applicant/Borrower and <strong>{siteConfig.legalName}</strong> (brand name <strong>Prest Loans</strong>), an RBI-registered NBFC (Reg No: {siteConfig.rbiRegNo}).
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Electronic Signature &amp; Digital Consent
              </h3>
              <p>
                By clicking "Submit" or applying via OTP authentication, the borrower grants consent to Prest Loans to fetch credit reports from authorized bureaus (CIBIL, Experian, Equifax, CRIF High Mark) and authenticate identity through UIDAI/DigiLocker.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Repayment Mandates
              </h3>
              <p>
                Borrowers agree to set up recurring electronic repayment mandates (e-NACH / UPI AutoPay) for seamless EMI servicing. Charges applicable for mandate dishonor are non-negotiable and strictly limited to actual bank collection overheads.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
