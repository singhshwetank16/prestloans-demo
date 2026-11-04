import React, { useEffect } from 'react';

export const FairPracticesCode: React.FC = () => {
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
          <span>Fair Practices Code</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-scale-balanced" style={{"color":"#ffb088"}}></i>
 RBI MASTER DIRECTIONS COMPLIANT • ETHICAL LENDING MANDATE
              </span>
        <h1 className="page-banner-title">Fair Practices Code (FPC)</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>
{`
        Lord Krishna Financial Services Limited ("Prest Loans") is committed to conducting lending operations with 
        integrity, transparency, fairness, and non-harassment across all borrower interactions in India.
      `}        </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-handshake-angle"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Fair Practices</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Zero Harassment Code</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Key Fact Statement</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>100% APR Transparency</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Security Release</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Timely Collateral Return</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Framework</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Scale-Based Regulation</div>
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
                <a href="/privacy-policy" className="policy-nav-link">
                  <span>Privacy Policy</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/fair-practices-code" className="policy-nav-link active">
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
            {/* Helpdesk Box */}
            <div style={{"marginTop":"24px","padding":"16px","background":"#fdf4ff","border":"1px solid rgba(112, 20, 110, 0.15)","borderRadius":"12px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"8px","marginBottom":"8px","color":"#70146e","fontWeight":"700","fontSize":"0.85rem"}}>
                <i className="fa-solid fa-headset"></i>
 Nodal Grievance Desk
                          </div>
              <p style={{"fontSize":"0.8rem","color":"#64748b","marginBottom":"10px","lineHeight":"1.4"}}>

              Fair practices feedback or escalation?
                          </p>
              <a href="tel:+911145241131" style={{"display":"block","fontSize":"0.85rem","fontWeight":"700","color":"#70146e","marginBottom":"4px"}}>
                <i className="fa-solid fa-phone" style={{"fontSize":"0.75rem"}}></i>
 011-45241131
                          </a>
              <a href="mailto:nodalofficer@prestloans.com" style={{"display":"block","fontSize":"0.8rem","color":"#f05a28","textDecoration":"underline"}}>

              nodalofficer@prestloans.com
                          </a>
            </div>
            {/* Sachet RBI Box */}
            <div style={{"marginTop":"14px","padding":"14px","background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"12px","fontSize":"0.78rem"}}>
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
                  <i className="fa-solid fa-scale-balanced"></i>
 RBI Governance Policy                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Fair Practices Code</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>
Lord Krishna Financial Services Limited • Trade Name: Prest Loans                </p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-calendar-check" style={{"color":"#70146e"}}></i>
 Board Adopted
                              </span>
              </div>
            </div>
            {/* Document Index Quick Jump */}
            <div style={{"background":"#fdf4ff","border":"1px solid rgba(112, 20, 110, 0.15)","borderRadius":"14px","padding":"22px","marginBottom":"30px"}}>
              <h4 style={{"fontSize":"1.05rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>
                <i className="fa-solid fa-list-check"></i>
 Code Outline & Index
                          </h4>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"8px 24px","fontSize":"0.875rem"}}>
                <div>
                  <strong>1.</strong>
 Preamble & Statutory Background                </div>
                <div>
                  <strong>7.</strong>
 Interest Rate Policy                </div>
                <div>
                  <strong>2.</strong>
 Purpose of the Code                </div>
                <div>
                  <strong>8.</strong>
 Processing & Documentation Charges                </div>
                <div>
                  <strong>3.</strong>
 Definitions                </div>
                <div>
                  <strong>9.</strong>
 Penal Charges / Late Payment Policy                </div>
                <div>
                  <strong>4.</strong>
 Key Commitments                </div>
                <div>
                  <strong>10.</strong>
 Repossession of Hypothecated Assets                </div>
                <div>
                  <strong>5.</strong>
 Lifecycle Application Standards                </div>
                <div>
                  <strong>11.</strong>
 Privacy & Confidentiality                </div>
                <div>
                  <strong>6.</strong>
 Loan Appraisal & Key Fact Statement                </div>
                <div>
                  <strong>12.</strong>
 Grievance Redressal Mechanism                </div>
              </div>
            </div>
            <div className="policy-doc">
              {/* 1. Preamble */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>1. Preamble</h3>
                <p>

                The Reserve Bank of India (RBI) has issued guidelines on                   <strong>Fair Practices Code (FPC)</strong>
 for all 
                Non-Banking Financial Companies (NBFCs) to establish standard conduct, fair treatment, and consumer protection principles. 
                In compliance with these guidelines,                   <strong>
{`Lord Krishna Financial Services Limited ("Prest Loans" / "the Company")`}                  </strong>
 
                has formulated and adopted this comprehensive Fair Practices Code.
                              </p>
              </div>
              {/* 2. Purpose */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>2. Purpose of the Code</h3>
                <p>The code has been formulated by the Company to:</p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
Promote good and fair lending practices by setting minimum standards across all customer interactions.                  </li>
                  <li>
Increase transparency in credit agreements so borrowers have a complete understanding of charges, interest calculations, and contractual obligations.                  </li>
                  <li>
Foster a fair, constructive, and dignified relationship between borrowers and the Company.                  </li>
                  <li>
Ensure compliance with all applicable statutory and regulatory directives issued by the RBI.                  </li>
                </ul>
              </div>
              {/* 3. Definitions */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>3. Definitions</h3>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>“Board”</strong>
 means the Board of Directors of Lord Krishna Financial Services Limited.                  </li>
                  <li>
                    <strong>“Company”</strong>
 means Lord Krishna Financial Services Limited operating under the trade name “Prest Loans”.                  </li>
                  <li>
                    <strong>“Borrower”</strong>
 means any individual, sole proprietorship, partnership firm, LLP, or corporate body availing credit facilities from the Company.                  </li>
                  <li>
                    <strong>“KFS”</strong>
 means Key Fact Statement detailing annualized percentage rate (APR), fees, and terms prior to sanction.                  </li>
                </ul>
              </div>
              {/* 4. Key Commitments */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>4. Key Commitments</h3>
                <p>The Company commits to:</p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
Act fairly and reasonably in all dealings with borrowers, ensuring products meet acceptable financial standards.                  </li>
                  <li>
Provide complete, accurate, and unambiguous product details in English, Hindi, or the vernacular language preferred by the borrower.                  </li>
                  <li>
Ensure all fees, interest rates, amortizations, and penal charges are disclosed upfront before loan sanction with zero hidden levies.                  </li>
                  <li>
Handle customer complaints promptly and compassionately through our formal grievance redressal desk.                  </li>
                </ul>
              </div>
              {/* 5. Loan Applications & Processing */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>5. Loan Applications, Processing & Disposal</h3>
                <p>

                All loan application forms include necessary information regarding required KYC documents, eligibility criteria, and fee structures. 
                The Company provides a written or digital receipt / acknowledgment for all loan applications received. 
                The standard turnaround time for disposal of loan applications is communicated upfront and typically ranges between 
                                  <strong>48 hours to 7 business days</strong>
 from receipt of complete documentation.
                              </p>
              </div>
              {/* 6. Loan Appraisal & Terms/Conditions */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>6. Loan Appraisal & Key Fact Statement (KFS)</h3>
                <p>

                The Company conveys in writing or through digital portal to the borrower the exact sanctioned loan amount, annualized percentage rate (APR), 
                amortization schedule, EMI payment dates, and terms and conditions. 
                A standardized                   <strong>Key Fact Statement (KFS)</strong>
 is provided to every borrower before loan drawdown. 
                A formal copy of the executed Loan Agreement along with all annexures is delivered to the borrower upon sanction.
                              </p>
              </div>
              {/* 7. Disbursement of Loans & Notice of Changes */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>7. Disbursement & Changes in Terms and Conditions</h3>
                <p>

                Disbursements are credited directly to the borrower's verified bank account via NEFT, RTGS, or NACH. 
                The Company gives prior written or electronic notice to borrowers of any proposed changes to terms and conditions, 
                including changes in interest rates, service fees, or prepayment charges. Changes in interest rates and charges are 
                effected only prospectively.
                              </p>
              </div>
              {/* 8. Post-Disbursement Supervision & Non-Interference */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>8. Post-Disbursement Conduct & Recovery Norms</h3>
                <p>

                The Company maintains an uncompromised                   <strong>zero-harassment policy</strong>
 during recovery. 
                Our staff and authorized representatives observe the following standards:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
Borrowers are contacted only during reasonable hours (between                     <strong>08:00 AM and 07:00 PM</strong>
).                  </li>
                  <li>
Staff members conduct themselves with dignity, courtesy, and professional restraint, refraining from aggressive, abusive, or coercive behavior.                  </li>
                  <li>
Customer privacy is strictly respected; family members, neighbors, or third parties are never harassed or coerced regarding borrower obligations.                  </li>
                  <li>
Borrowers are provided adequate notice before initiating any formal legal or recovery proceedings.                  </li>
                </ul>
              </div>
              {/* 9. Release of Collateral & Movable Assets */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>9. Release of Collateral Documents & NOC</h3>
                <p>

                Upon full and final repayment of all dues under the loan agreement, the Company releases all original title deeds, 
                collateral documents, and hypothecation charges, and issues a formal                   <strong>No Objection Certificate (NOC) / No Dues Certificate</strong>
 
                within                   <strong>30 days</strong>
 of account closure, subject to any legitimate right of set-off or lien for other outstanding credit facilities.
                              </p>
              </div>
              {/* 10. Repossession of Hypothecated Assets */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>10. Repossession of Hypothecated Assets</h3>
                <p>

                Repossession of hypothecated assets financed by the Company is undertaken strictly as a measure of last resort. 
                The Company adheres to statutory process: giving reasonable notice, conducting fair independent market valuation, 
                granting the borrower a final opportunity to clear overdue dues, and accounting for surplus realization from sale proceeds.
                              </p>
              </div>
              {/* 11. Interest Rate Model & Penal Charges */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>11. Interest Rate & Penal Charges Policy</h3>
                <p>

                The Company has adopted an objective, risk-graded discrete pricing model formulated pursuant to RBI Master Directions. 
                For complete schedule of base rates, credit spreads, and documentation charges, please visit our dedicated 
                                  <a href="/interest-rate-model" style={{"color":"#70146e","fontWeight":"700"}}>Interest Rate Model</a>
. 
                Penal charges in case of default are levied separately without capitalization pursuant to our 
                                  <a href="/penal-charges-policy" style={{"color":"#70146e","fontWeight":"700"}}>Penal Charges Policy</a>
.
                              </p>
              </div>
              {/* 12. Grievance Redressal Mechanism */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>12. Complaints & Grievance Redressal</h3>
                <p>

                If a borrower has any dissatisfaction regarding service, interest calculations, or collection conduct, they can invoke our 
                structured 3-tier                   <a href="/grievance-redressal" style={{"color":"#70146e","fontWeight":"700"}}>Grievance Redressal Mechanism</a>
:
                              </p>
                <div style={{"background":"#faf5ff","border":"1px solid rgba(112, 20, 110, 0.2)","borderRadius":"12px","padding":"20px 24px","marginTop":"14px"}}>
                  <p style={{"margin":"0","fontSize":"0.9rem","lineHeight":"1.6","color":"#334155"}}>
                    <strong>Principal Nodal Officer:</strong>
 Lord Krishna Financial Services Ltd                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002                    <br />

                  Helpline:                     <a href="tel:+911145241131" style={{"color":"#70146e","fontWeight":"700"}}>011-45241131</a>
 | Email:                     <a href="mailto:nodalofficer@prestloans.com" style={{"color":"#f05a28","fontWeight":"700"}}>nodalofficer@prestloans.com</a>
                    <br />

                  If unresolved within 30 days, borrowers have the statutory right to appeal before the                     <strong>RBI Integrated Ombudsman</strong>
 via                     <a href="https://cms.rbi.org.in" target="_blank" rel="noopener" style={{"color":"#0284c7","fontWeight":"700"}}>cms.rbi.org.in</a>
.
                                  </p>
                </div>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px"}}>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Board Governance</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Lord Krishna Financial Services Limited                    <br />

                  CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                    <br />

                  Reviewed & Adopted by the Board of Directors
                                  </p>
                </div>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Annual Review</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  The Fair Practices Code is reviewed annually by the Board to reflect new RBI regulatory circulars and industry best practices.
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
