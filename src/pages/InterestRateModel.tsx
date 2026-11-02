import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const InterestRateModel: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Interest Rate Model</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Interest Rate Model &amp; Schedule of Charges</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Transparent Gradation of Risk • Reference Base Rate (18% p.a.) • Annualised Percentage Rate (APR)
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Policy on Determining Interest Rates &amp; Charges
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
              In accordance with RBI Master Directions on Fair Practices Code, Prest Loans (Lord Krishna Financial Services Ltd, RBI Reg: {siteConfig.rbiRegNo}) has adopted an objective, risk-adjusted interest rate model that evaluates creditworthiness, cost of funds, operational expenses, and risk margins.
            </p>

            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 700, marginBottom: '8px' }}>
                Reference Base Rate (RBR)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0 0 14px' }}>
                The Reference Base Rate of the company is pegged at <strong>18.00% per annum</strong>. All product-specific pricing is derived as a spread over or around this reference benchmark.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Cost of Borrowed Funds</span>
                  <strong style={{ color: '#1e293b' }}>8.50% - 10.50%</strong>
                </div>
                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Operational &amp; Admin Costs</span>
                  <strong style={{ color: '#1e293b' }}>3.00% - 4.50%</strong>
                </div>
                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Risk &amp; Expected Loss Margin</span>
                  <strong style={{ color: '#1e293b' }}>3.00% - 6.00%</strong>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', fontWeight: 700, marginBottom: '14px' }}>
              Schedule of Charges
            </h3>
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', color: '#1e293b' }}>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid #cbd5e1' }}>Charge Category</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid #cbd5e1' }}>Applicable Rate / Amount</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid #cbd5e1' }}>Regulatory Remark</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#475569' }}>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 16px' }}>Processing Fee</td>
                    <td style={{ padding: '12px 16px' }}>1% to 3% of Loan Amount + GST</td>
                    <td style={{ padding: '12px 16px' }}>One-time deduction from disbursal</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 16px' }}>Documentation &amp; e-Stamp</td>
                    <td style={{ padding: '12px 16px' }}>At actual statutory stamp duty rates</td>
                    <td style={{ padding: '12px 16px' }}>State-specific duty payable to govt</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 16px' }}>Bounce / Dishonour Charges</td>
                    <td style={{ padding: '12px 16px' }}>₹450 + GST per NACH/e-Mandate bounce</td>
                    <td style={{ padding: '12px 16px' }}>Recovered on actual operational cost</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 16px' }}>Penal Charges on Default</td>
                    <td style={{ padding: '12px 16px' }}>24% p.a. on overdue amount only</td>
                    <td style={{ padding: '12px 16px' }}>Strictly non-capitalized per RBI circular</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px' }}>Foreclosure / Prepayment</td>
                    <td style={{ padding: '12px 16px' }}><strong>NIL (0%)</strong></td>
                    <td style={{ padding: '12px 16px' }}>Zero penalty for individual floating rate loans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
