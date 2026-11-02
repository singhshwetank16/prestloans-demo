import React from 'react';
import { Link } from 'react-router-dom';
import { EmiCalculator } from '../components/EmiCalculator';

export const Calculator: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>EMI Calculator</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Loan EMI Calculator</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Calculate your monthly installment, total interest, and total payable amount with precision.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <EmiCalculator />

          <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '10px', fontWeight: 700 }}>How is EMI Calculated?</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                EMI is computed using the standard reducing balance mathematical formula: <code>EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</code>, where P is loan principal, R is monthly interest rate, and N is tenure in months.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '10px', fontWeight: 700 }}>Zero Prepayment Penalty</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                In compliance with RBI Master Directions, floating rate personal loans sanctioned to individual borrowers carry zero foreclosure or prepayment penalties.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '10px', fontWeight: 700 }}>Transparent APR Model</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                All processing fees, documentation charges, and Annualised Percentage Rates (APR) are itemized upfront in the Key Fact Statement (KFS).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
