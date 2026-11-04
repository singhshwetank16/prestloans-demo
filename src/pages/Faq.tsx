import React, { useEffect } from 'react';

export const Faq: React.FC = () => {
  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
    if (typeof (window as any).initCalculators === 'function') {
      (window as any).initCalculators();
    }
  }, []);

  return (
    <>
    {/* TOP BAR */}
    {/* HEADER */}
    {/* PAGE HERO BANNER */}
    <section className="page-banner">
      <div className="container">
        <div className="breadcrumbs">
          <a href="/">Home</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
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
        <div style={{"maxWidth":"600px","margin":"0 auto 40px"}}>
          <div className="quick-input-group" style={{"position":"relative"}}>
            <input type="text" id="faq-search-input" className="quick-input-field" placeholder="Search keywords (e.g. collateral, documents, tenure, interest)..." style={{"paddingLeft":"42px","borderRadius":"var(--radius-pill)"}} />
            <i className="fa-solid fa-magnifying-glass" style={{"position":"absolute","left":"16px","top":"50%","transform":"translateY(-50%)","color":"#94a3b8"}}></i>
          </div>
        </div>
        <div className="faq-list">
          {/* FAQ 1 */}
          <div className="faq-item active">
            <div className="faq-header">
              <h4>
Is Prest Loans a Reserve Bank of India (RBI) registered NBFC?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body" style={{"maxHeight":"250px"}}>
              <p>

              Yes. Prest Loans is the digital brand name of                 <strong>Lord Krishna Financial Services Ltd</strong>
, a Non-Banking Financial Company (NBFC) registered with the                 <strong>Reserve Bank of India (RBI)</strong>
 under Certificate of Registration No.                 <strong>B-14.02019</strong>
. Incorporated and operating with high distinction since 1992, we strictly adhere to all statutory RBI Master Directions, Fair Practices Codes, and digital lending benchmarks.
                          </p>
            </div>
          </div>
          {/* FAQ 2 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>What documents are required to apply for a loan?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Our application workflow is 100% digital and paperless. Applicants primarily require:
                              <br />
• Applicant KYC Identification (PAN Card & Aadhaar Card)
                              <br />
• Last 6 to 12 months bank statements
                              <br />
• Income proof / salary slips (for salaried) or income continuity proof (for self-employed)
                              <br />
• Proof of residence / address.
                          </p>
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>
Can I obtain a personal or education loan without pledging physical collateral?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Yes, absolutely! Our Personal Loans, Education / Coaching Loans, and Short Term Loans are 100%                 <strong>collateral-free</strong>
. You do not need to mortgage property or pledge gold assets. Credit decisions are evaluated through algorithmic cash-flow analysis and verified bank statements.
                          </p>
            </div>
          </div>
          {/* FAQ 4 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>What is the expected turnaround time for loan disbursal?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Prest Loans operates an entirely paperless, end-to-end digital lending pipeline. Following rapid digital KYC verification and bank statement scrutiny, approved funds are credited directly to your registered bank account via NEFT/RTGS within                 <strong>24 to 48 business hours</strong>
.
                          </p>
            </div>
          </div>
          {/* FAQ 5 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>How are scheduled EMI repayments executed?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Prior to disbursement, an automated National Payments Corporation of India (NPCI) verified                 <strong>e-NACH / e-Mandate</strong>
 is activated, allowing your monthly installment to be deducted seamlessly on scheduled due dates. Borrowers can also execute advance payments or prepayments anytime via UPI, Debit Card, or Net Banking on our borrower portal.
                          </p>
            </div>
          </div>
          {/* FAQ 6 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>Are there foreclosure fees or prepayment penalties?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              In complete compliance with Reserve Bank of India (RBI) regulatory directives, floating-rate individual term loans carry                 <strong>Zero Prepayment and Zero Foreclosure penalties</strong>
. Borrowers retain complete freedom to close their loan early without extra cost.
                          </p>
            </div>
          </div>
          {/* FAQ 7 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>How can I reach customer support or escalate a grievance?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              You can contact our corporate customer care desk at                 <strong>011-45241131</strong>
, message our official WhatsApp support channel at                 <strong>+91-9711669090</strong>
, or email us at                 <strong>info@prestloans.com</strong>
. For unresolved grievances, you may escalate directly to our RBI-mandated Principal Nodal Officer at                 <strong>nodalofficer@prestloans.com</strong>
.
                          </p>
            </div>
          </div>
        </div>
        {/* Quick Contact Card */}
        <div style={{"background":"var(--calc-gradient)","color":"#fff","borderRadius":"var(--radius-xl)","padding":"40px","marginTop":"50px","textAlign":"center"}}>
          <h3 style={{"fontSize":"1.8rem","fontWeight":"800","marginBottom":"12px"}}>Still Have Questions?</h3>
          <p style={{"fontSize":"1.05rem","opacity":"0.95","maxWidth":"650px","margin":"0 auto 24px"}}>

          Our dedicated financial advisors and credit specialists are readily available to assist you with tailored loan planning and paperless onboarding.
                  </p>
          <div style={{"display":"flex","justifyContent":"center","gap":"16px","flexWrap":"wrap"}}>
            <a href="tel:+911145241131" className="btn-primary" style={{"background":"#ffffff","color":"#70146e"}}>
              <i className="fa-solid fa-phone"></i>
 Call 011-45241131
                      </a>
            <a href="https://wa.me/919711669090?text=Hello%20Prest%20Loans,%20I%20have%20a%20question%20regarding%20loans." target="_blank" rel="noopener" className="btn-secondary" style={{"background":"transparent","color":"#fff","borderColor":"#fff"}}>
              <i className="fa-brands fa-whatsapp"></i>
 WhatsApp Us
                      </a>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
