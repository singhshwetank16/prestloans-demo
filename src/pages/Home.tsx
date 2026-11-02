import React from 'react';
import { Link } from 'react-router-dom';
import { EmiCalculator } from '../components/EmiCalculator';
import { siteConfig } from '../config/site';

export const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <i className="fa-solid fa-bolt"></i> Fast • 100% Digital • Transparent
            </span>
            <h1 className="hero-title">
              Instant Credit When You <span className="gradient-text">Need It Most</span>
            </h1>
            <p className="hero-sub">
              Empowering individuals, students, MSMEs, and entrepreneurs with hassle-free credit solutions. Direct transfer into your bank within 24–48 hours.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
              <button
                className="btn-primary"
                onClick={() => (window as any).openQuickApplyModal && (window as any).openQuickApplyModal()}
                style={{ padding: '14px 32px', fontSize: '1.05rem', borderRadius: '50px' }}
              >
                <i className="fa-solid fa-paper-plane"></i> Apply Now
              </button>
              <Link
                to="/products"
                className="btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1.05rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <i className="fa-solid fa-layer-group"></i> Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES STRIP */}
      <section className="trust-strip" style={{ background: '#ffffff', borderBottom: '1px solid #f1f5f9', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f05a28' }}>₹500 Cr+</div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Loans Disbursed</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b' }}>25,000+</div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Happy Borrowers</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f05a28' }}>24 - 48 Hrs</div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Quick Disbursal TAT</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b' }}>100% Digital</div>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Paperless Verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW SECTION */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Tailored Financial Products</span>
            <h2 className="section-title">Designed for Your Goals</h2>
            <p className="section-sub">Transparent credit products with clear terms, no hidden charges, and competitive interest rates.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {siteConfig.loanProducts.map((p) => (
              <div key={p.id} style={{ background: '#ffffff', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ background: '#fff1ec', color: '#f05a28', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {p.shortName}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 600 }}>
                      <i className="fa-solid fa-clock"></i> {p.turnaround}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '12px', fontWeight: 700 }}>{p.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0', background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Loan Amount</span>
                      <strong style={{ color: '#1e293b', fontSize: '0.95rem' }}>{p.amount}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Tenure</span>
                      <strong style={{ color: '#1e293b', fontSize: '0.95rem' }}>{p.tenure}</strong>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                  <button
                    className="btn-primary"
                    onClick={() => (window as any).openQuickApplyModal && (window as any).openQuickApplyModal(p.id)}
                    style={{ flex: 1, padding: '10px', fontSize: '0.9rem', borderRadius: '50px' }}
                  >
                    Apply Now
                  </button>
                  <Link
                    to="/products"
                    className="btn-secondary"
                    style={{ padding: '10px 16px', fontSize: '0.9rem', borderRadius: '50px', border: '1px solid #cbd5e1', color: '#334155' }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EMI CALCULATOR */}
      <section className="section" style={{ background: '#f8fafc' }} id="calculator">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Calculate EMI</span>
            <h2 className="section-title">Plan Your Loan Repayments</h2>
            <p className="section-sub">Adjust amount, interest rate, and tenure to visualize your exact monthly installments.</p>
          </div>
          <EmiCalculator />
        </div>
      </section>

      {/* WHY CHOOSE PREST LOANS */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Why Borrowers Trust Us</span>
            <h2 className="section-title">The Prest Loans Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#fff1ec', color: '#f05a28', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '16px' }}>
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#1e293b', marginBottom: '8px' }}>RBI Registered NBFC</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>Operating with rigorous statutory governance, zero hidden charges, and transparent agreements.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '16px' }}>
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#1e293b', marginBottom: '8px' }}>Fast Approvals</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>AI-driven underwriting algorithms evaluate applications promptly with minimal paperwork.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '16px' }}>
                <i className="fa-solid fa-percent"></i>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#1e293b', marginBottom: '8px' }}>Fair Interest Rates</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>Transparent rate model based on credit score, risk gradation, and borrowing profile.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '16px' }}>
                <i className="fa-solid fa-headset"></i>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#1e293b', marginBottom: '8px' }}>Dedicated Advisors</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>Real human relationship managers assist you from application to final repayment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
