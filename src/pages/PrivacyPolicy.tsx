import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
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
    <section className="page-banner" style={{"paddingBottom":"70px"}}>
      <div className="container">
        <div className="breadcrumbs">
          <a href="/">Home</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
          <a href="/policies">Policies</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
          <span>Privacy Policy</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-user-lock" style={{"color":"#ffb088"}}></i>
 256-BIT ENCRYPTION • DIGITAL PERSONAL DATA PROTECTION COMPLIANT
              </span>
        <h1 className="page-banner-title">Privacy Policy & Data Protection</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>
{`
        Lord Krishna Financial Services Ltd ("Prest Loans") is committed to protecting the privacy, confidentiality, 
        and security of personal, financial, and credit data shared by our users and borrowers.
      `}        </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>256-Bit SSL</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Bank-Grade Encryption</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-hand-holding-hand"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Zero Data Sale</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Never Sold or Rented</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>DPDP Act Aligned</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Indian Data Protection</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Reporting</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Regulated Disclosures Only</div>
          </div>
        </div>
      </div>
    </section>
    {/* MAIN POLICIES CONTENT SECTION */}
    <section className="section">
      <div className="container">
        <div className="policies-page-grid">
          {/* STICKY SIDEBAR NAVIGATION */}
          <div className="policy-nav-card">
            <h4 style={{"fontSize":"1rem","fontWeight":"800","color":"#0f172a","marginBottom":"12px","padding":"0 10px"}}>
              <i className="fa-solid fa-book-bookmark" style={{"color":"var(--primary-purple)"}}></i>
 Table of Policies
                      </h4>
            <ul className="policy-nav-list">
              <li>
                <a href="/terms-and-conditions" className="policy-nav-link">
                  <span>Terms & Conditions</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="policy-nav-link">
                  <span>Terms Of Use</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="policy-nav-link active">
                  <span>Privacy Policy</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/fair-practices-code" className="policy-nav-link">
                  <span>Fair Practices Code</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/penal-charges-policy" className="policy-nav-link">
                  <span>Penal Charges Policy</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/kyc-and-aml" className="policy-nav-link">
                  <span>KYC & AML Policy</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="policy-nav-link">
                  <span>Disclaimer & Fraud Alert</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/grievance-redressal" className="policy-nav-link">
                  <span>Grievance Redressal</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/interest-rate-model" className="policy-nav-link">
                  <span>Interest Rate Model</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/regulatory-certifications" className="policy-nav-link">
                  <span>Regulatory Certifications</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
            </ul>
            {/* Sachet RBI Box */}
            <div style={{"marginTop":"24px","padding":"14px","background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"12px","fontSize":"0.78rem"}}>
              <div style={{"fontWeight":"700","color":"#1e293b","marginBottom":"4px"}}>
                <i className="fa-solid fa-building-columns" style={{"color":"#0284c7"}}></i>
 RBI Sachet Portal
                          </div>
              <p style={{"color":"#64748b","marginBottom":"8px","lineHeight":"1.35"}}>Check NBFC registrations & lodge feedback on Sachet.</p>
              <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener" style={{"color":"#0284c7","fontWeight":"700"}}>
Visit Sachet                 <i className="fa-solid fa-arrow-up-right-from-square" style={{"fontSize":"0.7rem"}}></i>
              </a>
            </div>
          </div>
          {/* MAIN CONTENT ARTICLE */}
          <article className="policy-article-card">
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"12px","borderBottom":"2px solid #f1f5f9","paddingBottom":"20px","marginBottom":"28px"}}>
              <div>
                <span className="section-tag" style={{"marginBottom":"8px"}}>
                  <i className="fa-solid fa-lock"></i>
 Information Security Standard                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Privacy Policy</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>Lord Krishna Financial Services Ltd • www.prestloans.com</p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-calendar-check" style={{"color":"#70146e"}}></i>
 Last Updated: January 2026
                              </span>
              </div>
            </div>
            {/* Preamble Box */}
            <div style={{"background":"#faf5ff","borderLeft":"4px solid #70146e","padding":"20px 22px","borderRadius":"0 12px 12px 0","marginBottom":"30px"}}>
              <p style={{"color":"#334155","fontSize":"0.92rem","lineHeight":"1.65","margin":"0"}}>

              This Privacy Policy is applicable to                 <strong>Prestloans.com</strong>
 whereby the Company intends to protect the privacy of its 
              users, members, and borrowers on                 <strong>www.prestloans.com</strong>
 (our “Website”) and the privacy of the data provided 
              to Prest Loans from time to time. The privacy of our Website users and members—whether you are a former or existing registered 
              borrower or merely a visitor to our Website—is of utmost importance to us.
                          </p>
            </div>
            <div className="policy-doc">
              {/* Section 1 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                1. What Type of Information Does prestloans.com Collect?
                              </h3>
                <p>

                In order to evaluate loan eligibility, conduct credit appraisals, satisfy RBI Know Your Customer (KYC) requirements, 
                and disburse credit facilities, Prest Loans collects two primary categories of information:
                              </p>
                <h4 style={{"fontSize":"1.02rem","fontWeight":"700","color":"#0f172a","margin":"16px 0 8px"}}>A. Personal Information</h4>
                <p>

                Personal Information refers to any information that identifies or can be used to identify, contact, or locate the person 
                to whom such information pertains. This includes:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Identity & Demographics:</strong>
 Full Name, Date of Birth, Gender, Father’s/Spouse’s Name, Marital Status, Photograph.                  </li>
                  <li>
                    <strong>Government Identifiers:</strong>
 Permanent Account Number (PAN), Aadhaar number (collected via voluntary masked e-KYC/offline XML verification pursuant to UIDAI guidelines), Passport, Voter ID, Driving License.                  </li>
                  <li>
                    <strong>Contact Information:</strong>
 Residential Address, Registered Office Address, Phone Number, Mobile Number, Email Address.                  </li>
                  <li>
                    <strong>Financial & Credit Data:</strong>
 Bank account details, account statements, GST returns, Income Tax Returns (ITR), audited financial statements, loan repayment track records, and Credit Information Reports from CIBIL, Experian, Equifax, or CRIF High Mark.                  </li>
                  <li>
                    <strong>Business & Employment Details:</strong>
 Business incorporation papers, partnership deeds, registration certificates, nature of business turnover, employment tenure, and monthly salary slips.                  </li>
                </ul>
                <h4 style={{"fontSize":"1.02rem","fontWeight":"700","color":"#0f172a","margin":"16px 0 8px"}}>B. Non-Personal & Technical Information</h4>
                <p>

                When you visit our Website, our servers automatically log certain non-personally identifiable information, including:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Session & Device Data:</strong>
 IP Address, domain server, device hardware fingerprint, operating system, browser type and version.                  </li>
                  <li>
                    <strong>Usage Analytics:</strong>
 Date and time of visit, pages viewed, time spent on loan calculators, conversion funnels, and referring URL.                  </li>
                  <li>
                    <strong>Cookies:</strong>
 Small alphanumeric identifiers stored on your computer's browser to personalize your navigation experience and maintain active session security.                  </li>
                </ul>
              </div>
              {/* Section 2 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                2. How Does prestloans.com Use the Collected Information?
                              </h3>
                <p>
We use the information collected from you strictly for legitimate, regulated business purposes, including:                </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
Conducting algorithmic credit scoring and underwriting to determine loan sanction amounts, interest rates, and loan tenure.                  </li>
                  <li>
Verifying identity, address, and legal capacity pursuant to RBI Master Directions on KYC and AML.                  </li>
                  <li>
Processing loan disbursements directly to your verified bank account.                  </li>
                  <li>
Setting up automatic monthly installment collections via e-NACH mandates, direct debits, and payment gateways.                  </li>
                  <li>
Preventing, detecting, and mitigating fraud, identity theft, cyber vulnerabilities, and unauthorized access.                  </li>
                  <li>
Complying with statutory reporting mandates to the Reserve Bank of India, Financial Intelligence Unit (FIU-IND), and Credit Information Companies.                  </li>
                  <li>
Transmitting important transactional updates, EMI reminders, sanction letters, and account statements via WhatsApp, SMS, and email.                  </li>
                </ul>
              </div>
              {/* Section 3 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                3. Disclosure & Sharing of Information
                              </h3>
                <div style={{"background":"#ecfdf5","border":"1px solid #a7f3d0","borderRadius":"10px","padding":"14px 18px","marginBottom":"16px"}}>
                  <strong style={{"color":"#065f46"}}>
                    <i className="fa-solid fa-shield-check"></i>
 Absolute Zero Sale of Data Pledge:                  </strong>
                  <span style={{"color":"#047857","fontSize":"0.9rem"}}>
 Prest Loans DOES NOT sell, rent, trade, or commercialize your personal or financial data to any third-party marketing companies under any circumstances.                  </span>
                </div>
                <p>
We share information solely with authorized and regulated entities on a strict need-to-know basis:                </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Credit Information Companies (CICs):</strong>
 Reporting loan performance, sanction details, and defaults to CIBIL, Experian, Equifax, and CRIF High Mark as mandated by RBI.                  </li>
                  <li>
                    <strong>Banking & Payment Partners:</strong>
 Authorized scheduled commercial banks, NPCI (NACH / e-mandate network), and RBI-licensed payment aggregators for processing disbursals and collecting EMIs.                  </li>
                  <li>
                    <strong>Verification Agencies:</strong>
 Third-party KYC verification, field investigation, and document authentication partners bound by strict non-disclosure agreements (NDAs).                  </li>
                  <li>
                    <strong>Legal & Regulatory Authorities:</strong>
 In response to court orders, summons, statutory requests from the RBI, FIU-IND, tax authorities, or law enforcement agencies under applicable law.                  </li>
                </ul>
              </div>
              {/* Section 4 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                4. Data Security & Encryption Architecture
                              </h3>
                <p>

                Prest Loans maintains rigorous administrative, physical, and technical safeguards to preserve the confidentiality, integrity, 
                and availability of your data:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Bank-Grade Encryption:</strong>
 All sensitive data transmitted between your browser and our servers is protected using                     <strong>256-bit Secure Socket Layer (SSL) encryption</strong>
.                  </li>
                  <li>
                    <strong>Perimeter Firewalls:</strong>
 Multi-tiered web application firewalls (WAF) and automated intrusion detection systems prevent unauthorized penetration.                  </li>
                  <li>
                    <strong>Role-Based Access Control:</strong>
 Strict least-privilege access permissions ensure only authorized underwriting and credit operations personnel can access customer financial files.                  </li>
                  <li>
                    <strong>Secure Data Storage:</strong>
 Customer files and databases are hosted on certified enterprise cloud infrastructure located physically within India in compliance with RBI data localization mandates.                  </li>
                </ul>
              </div>
              {/* Section 5 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                5. Data Retention & Erasure Standards
                              </h3>
                <p>

                In compliance with the Prevention of Money Laundering Act (PMLA) 2002 and RBI Master Directions on NBFCs, the Company is 
                statutorily obligated to maintain customer records, identity documents, and account transaction histories for a minimum period of 
                                  <strong>five (5) years</strong>
 after the closure of the loan account or cessation of the lending relationship. 
                Following the expiry of statutory retention periods, records are securely shredded or irreversibly anonymized.
                              </p>
              </div>
              {/* Section 6 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                6. Your Rights & Consent Management
                              </h3>
                <p>
You enjoy the following rights regarding your personal information:                </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Right of Review:</strong>
 You may request a review of the personal and financial information you have provided to ensure its accuracy.                  </li>
                  <li>
                    <strong>Right of Correction:</strong>
 If any personal details are outdated or inaccurate, you may submit updated documentary proof to rectify our records.                  </li>
                  <li>
                    <strong>Promotional Opt-Out:</strong>
 You may opt out of non-essential promotional SMS or newsletters by clicking unsubscribe or emailing us at                     <a href="mailto:unsubscribe@prestloans.com" style={{"color":"#70146e","fontWeight":"600"}}>unsubscribe@prestloans.com</a>
. (Note: Mandatory transactional notices, EMI reminders, and regulatory communications cannot be opted out).                  </li>
                </ul>
              </div>
              {/* Section 7 */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>

                7. Privacy Grievances & Data Protection Officer
                              </h3>
                <p>

                In accordance with the Information Technology Act 2000 and Digital Personal Data Protection standards, the contact details 
                of our designated Grievance Officer for privacy and data-related queries are provided below:
                              </p>
                <div style={{"background":"#fdf4ff","border":"1px solid rgba(112, 20, 110, 0.2)","borderRadius":"12px","padding":"20px 24px","marginTop":"14px"}}>
                  <h5 style={{"fontSize":"1.05rem","fontWeight":"800","color":"#70146e","marginBottom":"8px"}}>Grievance & Privacy Officer</h5>
                  <p style={{"fontSize":"0.9rem","color":"#334155","lineHeight":"1.6","margin":"0"}}>
                    <strong>{`Lord Krishna Financial Services Limited ("Prest Loans")`}</strong>
                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002                    <br />

                  Telephone:                     <a href="tel:+911145241131" style={{"color":"#70146e","fontWeight":"700"}}>011-45241131</a>
 | Email:                     <a href="mailto:nodalofficer@prestloans.com" style={{"color":"#f05a28","fontWeight":"700"}}>nodalofficer@prestloans.com</a>
                    <br />

                  Working Hours: Monday to Friday (10:00 AM – 6:00 PM)
                                  </p>
                </div>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px"}}>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Board Adopted Standard</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Lord Krishna Financial Services Limited                    <br />

                  CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                    <br />

                  Formulated under Board Governance & Digital Lending Norms
                                  </p>
                </div>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Escalation Matrix</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  If any privacy concern remains unresolved within 14 days, you may escalate to our 
                                      <a href="/grievance-redressal" style={{"color":"#70146e","fontWeight":"700"}}>Grievance Redressal Mechanism</a>
 
                  or the Reserve Bank of India Ombudsman.
                                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    {/* FOOTER */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
