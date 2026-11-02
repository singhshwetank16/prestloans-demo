import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Products: React.FC = () => {
  const products = [
    {
      id: 'education-loan',
      modalId: 'skill',
      name: 'Coaching / Skill Development / Education Loan',
      badge: 'Higher Studies & Certifications',
      amount: 'Up to ₹5,00,000',
      tenure: '6 to 36 Months',
      interest: 'Starting @ 1.25% p.m.',
      tat: '24 Hours Approval',
      desc: 'Invest in your future with zero collateral education loans for coaching institutes, competitive exams, upskilling, and vocational courses across India.',
      features: ['Direct fee transfer to institute', 'Flexible moratorium options', 'Minimal documentation', 'Zero hidden fees']
    },
    {
      id: 'personal-loan',
      modalId: 'personal',
      name: 'Personal Loan',
      badge: 'Immediate Cash Needs',
      amount: 'Up to ₹3,00,000',
      tenure: '12 to 36 Months',
      interest: 'Starting @ 1.33% p.m.',
      tat: 'Disbursal in 48 Hours',
      desc: 'All-purpose collateral-free personal loans for weddings, travel, medical emergencies, or household consolidation with quick electronic disbursal.',
      features: ['No end-use restrictions', 'Transparent interest computation', 'Flexible repayment tenures', 'Complete digital journey']
    },
    {
      id: 'short-term-personal-loan',
      modalId: 'stpl',
      name: 'Short Term Personal Loan (STPL)',
      badge: 'Urgent Micro-Credit',
      amount: '₹10,000 to ₹1,00,000',
      tenure: '3 to 12 Months',
      interest: 'Starting @ 1.5% p.m.',
      tat: 'Instant Digital TAT',
      desc: 'Rapid micro-financing designed to bridge short-term cash flow gaps with same-day eligibility approval and lightning disbursal.',
      features: ['Instant digital eligibility check', 'Paperless e-KYC and e-Sign', 'Short convenient tenures', 'Easy online EMI payment']
    },
    {
      id: 'home-loan',
      modalId: 'home',
      name: 'Home Loan & Improvement Loan',
      badge: 'Secured Property Loans',
      amount: 'Up to ₹25,00,000',
      tenure: 'Up to 15 Years',
      interest: 'Competitive Floating Rates',
      tat: 'Doorstep Advisory',
      desc: 'Achieve homeownership or upgrade your living space with customized home purchase, plot construction, and renovation loan facilities.',
      features: ['Long repayment tenures up to 15 years', 'Zero prepayment penalty', 'Balance transfer facility', 'Dedicated relationship officer']
    },
    {
      id: 'business-loan',
      modalId: 'business',
      name: 'Business Loan & MSME Credit',
      badge: 'Working Capital & Expansion',
      amount: 'Up to ₹20,00,000',
      tenure: '12 to 60 Months',
      interest: 'Competitive NBFC Terms',
      tat: 'Rapid Turnaround',
      desc: 'Fuel your enterprise expansion, stock procurement, machinery purchase, and operational expenses with customized MSME credit lines.',
      features: ['Collateral-free options available', 'Customized repayment structures', 'GST statement-based appraisal', 'Supports traders, manufacturers & service providers']
    }
  ];

  const handleApply = (modalId: string) => {
    if (typeof (window as any).openQuickApplyModal === 'function') {
      (window as any).openQuickApplyModal(modalId);
    }
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Loan Products</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Credit Products &amp; Solutions</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore transparent borrowing solutions designed for personal milestones, educational aspirations, and MSME growth.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {products.map((p, idx) => (
              <div
                key={p.id}
                id={p.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ background: '#fff1ec', color: '#f05a28', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-block', marginBottom: '8px' }}>
                      {p.badge}
                    </span>
                    <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, margin: '0 0 6px' }}>{p.name}</h2>
                    <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '750px', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => handleApply(p.modalId)}
                    style={{ padding: '12px 28px', borderRadius: '50px', fontWeight: 700 }}
                  >
                    Apply for this Loan
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', background: '#f8fafc', padding: '20px', borderRadius: '16px', marginBottom: '24px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Loan Quantum</span>
                    <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{p.amount}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Repayment Tenure</span>
                    <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{p.tenure}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Interest Rate</span>
                    <strong style={{ fontSize: '1.1rem', color: '#f05a28' }}>{p.interest}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Disbursal TAT</span>
                    <strong style={{ fontSize: '1.1rem', color: '#16a34a' }}>{p.tat}</strong>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 700, marginBottom: '12px' }}>Salient Features:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.92rem' }}>
                        <i className="fa-solid fa-check" style={{ color: '#16a34a' }}></i>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
