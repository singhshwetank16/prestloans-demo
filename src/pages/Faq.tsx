import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to apply for a loan with Prest Loans?',
      a: 'Any Indian citizen aged between 21 and 60 years with a regular source of verifiable income (salaried, self-employed professional, micro-entrepreneur, or student with a co-borrower) is eligible to apply online.'
    },
    {
      q: 'What documents are required for digital loan processing?',
      a: 'Minimal digital documentation is needed: PAN Card, Aadhaar Card (for digital e-KYC), last 3–6 months bank statements, and salary slips or business proof (like GST registration/ITR).'
    },
    {
      q: 'How fast will my loan application be approved and disbursed?',
      a: 'Our AI-driven credit underwriting evaluates applications within hours. Upon digital e-Sign and bank mandate verification, funds are typically credited directly into your account in 24 to 48 hours.'
    },
    {
      q: 'Are there any hidden charges or prepayment penalties?',
      a: 'None. Prest Loans strictly complies with RBI directives. Floating rate loans for individual borrowers carry zero prepayment penalty. All processing fees and APR are clearly disclosed in the Key Fact Statement (KFS).'
    },
    {
      q: 'How can I track the status of my loan application?',
      a: 'You can click "Track Loan Status" in the top bar or footer anytime and enter your Application Reference Number or registered mobile number to see real-time updates.'
    },
    {
      q: 'Is Prest Loans registered with the Reserve Bank of India?',
      a: 'Yes. Prest Loans is the digital brand of Lord Krishna Financial Services Ltd, a certified Non-Banking Financial Company (NBFC) holding RBI Certificate of Registration No. B-14.02019.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>FAQ</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Frequently Asked Questions</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Quick answers to common questions about eligibility, interest rates, disbursal timelines, and repayment.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                  border: '1px solid #f1f5f9',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#1e293b'
                  }}
                >
                  <span>{faq.q}</span>
                  <i
                    className={`fa-solid ${openIdx === idx ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ color: '#f05a28', fontSize: '0.9rem', transition: 'transform 0.2s ease' }}
                  ></i>
                </button>
                {openIdx === idx && (
                  <div style={{ padding: '0 24px 20px', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, borderTop: '1px solid #f8fafc' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
