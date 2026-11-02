import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const FairPracticesCode: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Fair Practices Code</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Fair Practices Code (FPC)</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Adopted by the Board of Directors of {siteConfig.legalName} in compliance with RBI guidelines.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Guidelines on Fair Practices Code
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                The Fair Practices Code (FPC) has been formulated by <strong>{siteConfig.legalName}</strong> (brand name <strong>Prest Loans</strong>) to set standards for fair, transparent, and ethical lending. The FPC covers all stages of borrower engagement: loan applications, processing, loan agreements, disbursement, terms alteration, and collection mechanisms.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Applications for Loans and Their Processing
              </h3>
              <p>
                All loan application forms contain comprehensive details regarding the information required for appraisal, along with transparent eligibility norms. Borrowers receive an electronic acknowledgment for submitted applications with an estimated processing timeline.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Loan Appraisal and Terms &amp; Conditions
              </h3>
              <p>
                Prest Loans conveys in writing (via digital sanction letter and Key Fact Statement) the sanctioned loan amount, annualized rate of interest, method of application, and all terms governing loan disbursement. Acceptance of these terms by the borrower is kept on digital record.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                3. Non-Coercive Recovery Standards
              </h3>
              <p>
                Staff and collection agents strictly adhere to civil behavior. Debt recovery practices do not involve harassment, humiliation, calling at inappropriate hours (before 8:00 AM or after 7:00 PM), or misleading communications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
