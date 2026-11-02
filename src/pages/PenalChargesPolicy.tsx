import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const PenalChargesPolicy: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Penal Charges</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Penal Charges Policy</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            In compliance with RBI Circular on Fair Lending Practice - Penal Charges in Loan Accounts.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Policy on Penal Charges in Loan Accounts
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                In accordance with Reserve Bank of India guidelines (RBI/2023-24/53 DOR.MCS.REC.28/01.01.001/2023-24), <strong>{siteConfig.legalName}</strong> has implemented a transparent policy regarding default charges in loan accounts.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Penalty as 'Penal Charges' Rather Than 'Penal Interest'
              </h3>
              <p>
                Penalty, if charged, for non-compliance of material terms and conditions of loan agreement by the borrower shall be treated as <strong>‘penal charges’</strong> and shall not be levied in the form of ‘penal interest’ that is added to the rate of interest charged on the advances.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. No Capitalisation of Penal Charges
              </h3>
              <p>
                There shall be no capitalisation of penal charges, i.e., no further interest shall be computed on such charges. This will not affect the normal procedures for compounding of interest in the loan account.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                3. Quantum of Penal Charges
              </h3>
              <p>
                The quantum of penal charges is reasonable and commensurate with non-compliance of loan conditions, capped at <strong>24.00% per annum</strong> computed on the overdue amount only for the actual period of default.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
