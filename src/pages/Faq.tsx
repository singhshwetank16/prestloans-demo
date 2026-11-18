import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Is Prest Loans a Reserve Bank of India (RBI) registered NBFC?',
    answer: (
      <p>
        Yes. Prest Loans is the digital brand name of <strong>Lord Krishna Financial Services Ltd</strong>, a
        Non-Banking Financial Company (NBFC) registered with the <strong>Reserve Bank of India (RBI)</strong> under
        Certificate of Registration No. <strong>B-14.02019</strong>. Incorporated and operating with high distinction
        since 1992, we strictly adhere to all statutory RBI Master Directions, Fair Practices Codes, and digital lending
        benchmarks.
      </p>
    )
  },
  {
    id: 2,
    question: 'What documents are required to apply for a loan?',
    answer: (
      <p>
        Our application workflow is 100% digital and paperless. Applicants primarily require:
        <br />
        • Applicant KYC Identification (PAN Card &amp; Aadhaar Card)
        <br />
        • Last 6 to 12 months bank statements
        <br />
        • Income proof / salary slips (for salaried) or income continuity proof (for self-employed)
        <br />
        • Proof of residence / address.
      </p>
    )
  },
  {
    id: 3,
    question: 'Can I obtain a personal or education loan without pledging physical collateral?',
    answer: (
      <p>
        Yes, absolutely! Our Personal Loans, Education / Coaching Loans, and Short Term Loans are 100%{' '}
        <strong>collateral-free</strong>. You do not need to mortgage property or pledge gold assets. Credit decisions
        are evaluated through algorithmic cash-flow analysis and verified bank statements.
      </p>
    )
  },
  {
    id: 4,
    question: 'What is the expected turnaround time for loan disbursal?',
    answer: (
      <p>
        Prest Loans operates an entirely paperless, end-to-end digital lending pipeline. Following rapid digital KYC
        verification and bank statement scrutiny, approved funds are credited directly to your registered bank account via
        NEFT/RTGS within <strong>24 to 48 business hours</strong>.
      </p>
    )
  },
  {
    id: 5,
    question: 'How are scheduled EMI repayments executed?',
    answer: (
      <p>
        Prior to disbursement, an automated National Payments Corporation of India (NPCI) verified{' '}
        <strong>e-NACH / e-Mandate</strong> is activated, allowing your monthly installment to be deducted seamlessly on
        scheduled due dates. Borrowers can also execute advance payments or prepayments anytime via UPI, Debit Card, or
        Net Banking on our borrower portal.
      </p>
    )
  },
  {
    id: 6,
    question: 'Are there foreclosure fees or prepayment penalties?',
    answer: (
      <p>
        In complete compliance with Reserve Bank of India (RBI) regulatory directives, floating-rate individual term loans
        carry <strong>Zero Prepayment and Zero Foreclosure penalties</strong>. Borrowers retain complete freedom to close
        their loan early without extra cost.
      </p>
    )
  },
  {
    id: 7,
    question: 'How can I reach customer support or escalate a grievance?',
    answer: (
      <p>
        You can contact our corporate customer care desk at <strong>011-45241131</strong>, message our official WhatsApp
        support channel at <strong>+91-9711669090</strong>, or email us at <strong>info@prestloans.com</strong>. For
        unresolved grievances, you may escalate directly to our RBI-mandated Principal Nodal Officer at{' '}
        <strong>nodalofficer@prestloans.com</strong>.
      </p>
    )
  }
];

export const Faq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQS;
    const q = searchQuery.toLowerCase();
    return FAQS.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        (typeof f.answer === 'string' && f.answer.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <span>FAQ</span>
          </div>
          <h1 className="page-banner-title">Frequently Asked Questions</h1>
          <p className="page-banner-sub">
            Clear, comprehensive answers to all your queries regarding loan eligibility, documentation, repayments, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section">
        <div className="container">
          {/* Search Filter */}
          <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            <div className="quick-input-group" style={{ position: 'relative' }}>
              <input
                type="text"
                id="faq-search-input"
                className="quick-input-field"
                placeholder="Search keywords (e.g. collateral, documents, tenure, interest)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '42px', borderRadius: 'var(--radius-pill)' }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8'
                }}
              ></i>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>

          <div className="faq-list">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <div
                    className="faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFaq(faq.id);
                      }
                    }}
                    aria-expanded={isOpen}
                  >
                    <h4>{faq.question}</h4>
                    <i
                      className="fa-solid fa-chevron-down faq-toggle-icon"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease',
                        color: isOpen ? 'var(--primary-purple)' : '#64748b'
                      }}
                    ></i>
                  </div>
                  <div
                    className="faq-body"
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease, padding 0.3s ease',
                      padding: isOpen ? '16px 24px 24px' : '0 24px'
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Contact Card */}
          <div
            style={{
              background: 'var(--calc-gradient)',
              color: '#fff',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              marginTop: '50px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Still Have Questions?</h3>
            <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto 24px' }}>
              Our dedicated financial advisors and credit specialists are readily available to assist you with tailored loan planning and paperless onboarding.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+911145241131" className="btn-primary" style={{ background: '#ffffff', color: '#70146e' }}>
                <i className="fa-solid fa-phone"></i> Call 011-45241131
              </a>
              <a
                href="https://wa.me/919711669090?text=Hello%20Prest%20Loans,%20I%20have%20a%20question%20regarding%20loans."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ background: 'transparent', color: '#fff', borderColor: '#fff' }}
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
