import React, { useEffect } from 'react';

export const TermsAndConditions: React.FC = () => {
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
          <span>Terms & Conditions</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-scale-balanced" style={{"color":"#ffb088"}}></i>
 RBI MASTER DIRECTIONS COMPLIANT • STATUTORY
        BORROWER AGREEMENT
              </span>
        <h1 className="page-banner-title">Terms and Conditions</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>

        Official terms and conditions governing financing, credit facilities, digital loan appraisal, and user
        undertakings with Lord Krishna Financial Services Ltd operating under the trade name           <strong>{`"Prest Loans"`}</strong>
.
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-building-shield"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Registered</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>NBFC-BL: B-14.02019</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Legally Binding</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>IT Act 2000 & Contract Act</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-magnifying-glass-chart"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>CIC Authorized</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>CIBIL, Experian & Equifax</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Annual Review</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Updated: January 2026</div>
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
                <a href="/terms-and-conditions" className="policy-nav-link active">
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
            {/* Helpline Box */}
            <div style={{"marginTop":"24px","padding":"16px","background":"#fdf4ff","border":"1px solid rgba(112, 20, 110, 0.15)","borderRadius":"12px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"8px","marginBottom":"8px","color":"#70146e","fontWeight":"700","fontSize":"0.85rem"}}>
                <i className="fa-solid fa-headset"></i>
 Compliance Helpdesk
                          </div>
              <p style={{"fontSize":"0.8rem","color":"#64748b","marginBottom":"10px","lineHeight":"1.4"}}>

              Questions regarding these Terms & Conditions?
                          </p>
              <a href="tel:+911145241131" style={{"display":"block","fontSize":"0.85rem","fontWeight":"700","color":"#70146e","marginBottom":"4px"}}>
                <i className="fa-solid fa-phone" style={{"fontSize":"0.75rem"}}></i>
 011-45241131
                          </a>
              <a href="mailto:info@prestloans.com" style={{"display":"block","fontSize":"0.8rem","color":"#f05a28","textDecoration":"underline"}}>

              info@prestloans.com
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
                  <i className="fa-solid fa-shield-halved"></i>
 Statutory Master Agreement                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Terms and Conditions: www.PrestLoans.com</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>
Lord Krishna Financial Services Ltd (RBI Registered NBFC-BL)                </p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-calendar-check" style={{"color":"#70146e"}}></i>
 Effective: January 2026
                              </span>
              </div>
            </div>
            {/* Preamble Notice Box */}
            <div style={{"background":"#faf5ff","borderLeft":"4px solid #70146e","padding":"20px 22px","borderRadius":"0 12px 12px 0","marginBottom":"30px"}}>
              <h4 style={{"color":"#70146e","fontSize":"1rem","fontWeight":"700","margin":"0 0 8px"}}>
                <i className="fa-solid fa-circle-exclamation"></i>
 Important Notice to All Applicants & Borrowers
                          </h4>
              <p style={{"color":"#334155","fontSize":"0.92rem","lineHeight":"1.6","margin":"0"}}>

              Please carefully read and review these Terms and Conditions before submitting a loan application or registering on 
                              <strong>www.prestloans.com</strong>
. By accessing our platform or availing any credit facility, you unconditionally agree 
              to be legally bound by this agreement, our                 <a href="/terms-of-use" style={{"color":"#70146e","fontWeight":"600","textDecoration":"underline"}}>Terms of Use</a>
, 
              and our                 <a href="/privacy-policy" style={{"color":"#70146e","fontWeight":"600","textDecoration":"underline"}}>Privacy Policy</a>
.
                          </p>
            </div>
            {/* Numbered Terms List */}
            <div className="policy-doc">
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>1</span>

                Confirmation of Understanding & Identity of Lender
                              </h3>
                <p>

                I/We confirm that we have carefully read and fully understood all the terms of use of availing financing that are listed on 
                the                   <strong>Prestloans.com</strong>
 website of                   <strong>Lord Krishna Financial Services Ltd</strong>
 at 
                                  <a href="/terms-and-conditions" style={{"color":"#70146e","fontWeight":"600"}}>Terms and Conditions</a>
 & 
                                  <a href="/privacy-policy" style={{"color":"#70146e","fontWeight":"600"}}>Privacy Policy</a>
 and applicable to any loan 
                availed through the company’s website referred to as the                   <strong>“Company”</strong>
,                   <strong>“Lender”</strong>
, or 
                                  <strong>“prestloans.com”</strong>
. I understand that                   <strong>www.prestloans.com</strong>
 or                   <strong>prestloans.com</strong>
 
                represents the Non-Banking Financial Company (NBFC)                   <strong>‘Lord Krishna Financial Services Ltd’</strong>
.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>2</span>

                Unconditional Acceptance & Modification Rights
                              </h3>
                <p>

                I/We accept the terms & conditions unconditionally and agree that these terms and conditions may be amended or modified at 
                any time by the Company, and I/we will be bound by the amended terms & conditions that are published on the website from time to time.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>3</span>

                Sanction Discretion & Documentation Conditions
                              </h3>
                <p>

                I/We understand that sanction of the loan(s) is at the                   <strong>sole discretion of the Company</strong>
 and is subject to 
                my/our execution of necessary documents, providing requisite KYC papers, security creation, and meeting all underwriting criteria 
                stipulated by the Company. The Company reserves the unreserved right to approve or decline any loan application without assigning any reason.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>4</span>

                Borrower Diligence & Key Fact Statement (KFS)
                              </h3>
                <p>

                I/We understand that it is my/our responsibility to fully read and understand the terms and conditions of the loan documents, 
                sanction letter, and                   <strong>Key Fact Statement (KFS)</strong>
, and make ourselves fully aware of the applicable interest rate, 
                annual percentage rate (APR), processing fees, EMI schedule, and penal charges before drawing down the loan.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>5</span>

                Intellectual Property & Platform Protection
                              </h3>
                <p>

                I agree that I shall not copy, reproduce, sell, redistribute, publish, enter into a database, display, perform, modify, 
                transmit, license, create derivative works from, transfer or in any way exploit any part of any information, content, materials, 
                software, source code, or algorithmic services available on                   <strong>prestloans.com</strong>
.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>6</span>

                Ownership of Application Information
                              </h3>
                <p>

                I understand and accept that all information submitted by me through                   <strong>prestloans.com</strong>
 shall be deemed the property 
                of the Company, and the Company shall be free to use, for any purpose, any ideas, concepts, know-how or techniques contained in 
                information provided through this site for credit verification, fraud prevention, and operational reporting.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>7</span>

                Indian Citizenship, Legal Capacity & Accuracy Warranty
                              </h3>
                <p>

                I/We declare that I am/we are citizens of/resident in India and I/we declare, warrant and represent that all the particulars and 
                information and details provided in the loan application form and supporting KYC documents are true, correct, complete, and up to date in all respects.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>8</span>

                Solvency Confirmation & Legal Proceedings
                              </h3>
                <p>

                I/We confirm that there are no insolvency or bankruptcy proceedings initiated against me/us nor have I/we ever been adjudicated 
                insolvent. I/We also undertake to promptly inform the Company in writing of any material adverse change in my/our financial position or employment.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>9</span>

                End-Use Restriction: No Speculative or Anti-Social Purpose
                              </h3>
                <p>

                I/We unequivocally agree and covenant that my/our loan will be utilized strictly for legitimate business, working capital, 
                or permissible personal requirements, and will                   <strong>
not be used for any speculative, antisocial, capital market, or money laundering purpose                  </strong>
.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>10</span>

                Statutory Consent for Regulatory Disclosures to RBI & Authorities
                              </h3>
                <p>

                As a pre-condition relating to the grant of loans/advances/credit facilities by prestloans.com to me/us, I/We agree and give 
                unreserved consent for the disclosure by the Company of all or any such information and data relating to me/us, of the credit 
                facility availed of/to be availed, of any default if committed by me/us, to the                   <strong>Reserve Bank of India (RBI)</strong>
, 
                Income Tax authorities, FIU-IND, or any other statutory authority as required by law.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>11</span>

                Credit Bureau Reporting Authorization (CIBIL, Experian, Equifax, CRIF)
                              </h3>
                <p>

                The Company may, as it reasonably deems appropriate and necessary, disclose and furnish information as set forth above to 
                                  <strong>Credit Information Bureau (India) Limited (CIBIL)</strong>
 and/or any other Credit Information Company (CIC) authorized 
                by RBI. I/we acknowledge that CICs may process, furnish, or circulate credit information reports to other credit institutions.
                              </p>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>12</span>

                Bureau Pull Consent, e-NACH Mandate & Processing Fee Undertakings
                              </h3>
                <p>I/We undertake and acknowledge that:</p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Credit Inquiry Consent:</strong>
 For assessing our creditworthiness, the Company is authorized to pull credit reports from CIBIL and other credit bureaus as frequently as required throughout the loan tenure.                  </li>
                  <li>
                    <strong>Electronic Mandate (NACH):</strong>
 I/We agree to setup and maintain valid electronic repayment mandates (e-NACH, e-Mandate, standing instructions) and ensure sufficient funds are maintained to honor monthly installments.                  </li>
                  <li>
                    <strong>Bounce Charges:</strong>
 In case of any EMI cheque/mandate return, standard return charges and applicable penal charges as detailed in our                     <a href="/penal-charges-policy" style={{"color":"#70146e","fontWeight":"600"}}>Penal Charges Policy</a>
 will apply.                  </li>
                  <li>
                    <strong>Processing Fees:</strong>
 Processing and documentation charges collected are non-refundable and cover underwriting, verification, and technical processing costs.                  </li>
                </ul>
              </div>
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#0f172a","display":"flex","alignItems":"center","gap":"10px","marginBottom":"10px"}}>
                  <span style={{"display":"inline-flex","width":"30px","height":"30px","borderRadius":"50%","background":"#70146e","color":"#fff","alignItems":"center","justifyContent":"center","fontSize":"0.85rem","flexShrink":"0"}}>13</span>

                Communication Consent: WhatsApp, SMS, Telephony & App Alerts
                              </h3>
                <p>

                I/We further authorize the Company and its authorized partners to contact and keep me/us informed vide telephone calls, SMS, 
                WhatsApp messages, electronic mail, and mobile app notifications regarding loan status, repayment reminders, service updates, 
                and promotional schemes. This consent overrides any registration under the National Do Not Call (NDNC) registry.
                              </p>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px"}}>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Governing Entity & Jurisdiction</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Lord Krishna Financial Services Ltd                    <br />

                  CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
                                  </p>
                </div>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Dispute Resolution</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Subject exclusively to the jurisdiction of competent courts in New Delhi, India. In case of unresolved grievances, 
                  refer to our                     <a href="/grievance-redressal" style={{"color":"#70146e","fontWeight":"700"}}>Grievance Redressal Mechanism</a>
.
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
