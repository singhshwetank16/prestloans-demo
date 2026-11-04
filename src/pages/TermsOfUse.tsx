import React, { useEffect } from 'react';

export const TermsOfUse: React.FC = () => {
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
          <span>Terms of Use</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-shield-halved" style={{"color":"#ffb088"}}></i>
 DIGITAL PLATFORM ACCESS & USER CODE OF CONDUCT
              </span>
        <h1 className="page-banner-title">Terms of Use</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>

        Comprehensive guidelines, electronic licensing conditions, and legal parameters governing your access to 
                  <strong>prestloans.com</strong>
, operated by Lord Krishna Financial Services Limited.
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-globe"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Platform</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>prestloans.com</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Jurisdiction</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Courts of New Delhi</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-user-check"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Eligibility</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Age 18+ Indian Citizens</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Compliance</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>RBI & IT Act 2000</div>
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
                <a href="/terms-of-use" className="policy-nav-link active">
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
            {/* Helpdesk Box */}
            <div style={{"marginTop":"24px","padding":"16px","background":"#fdf4ff","border":"1px solid rgba(112, 20, 110, 0.15)","borderRadius":"12px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"8px","marginBottom":"8px","color":"#70146e","fontWeight":"700","fontSize":"0.85rem"}}>
                <i className="fa-solid fa-headset"></i>
 Compliance Helpdesk
                          </div>
              <p style={{"fontSize":"0.8rem","color":"#64748b","marginBottom":"10px","lineHeight":"1.4"}}>

              Queries on Website Terms of Use?
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
                  <i className="fa-solid fa-code"></i>
 Platform Access Guidelines                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Website Terms of Use</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>prestloans.com • Lord Krishna Financial Services Limited</p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-shield-halved" style={{"color":"#70146e"}}></i>
 Enforceable Agreement
                              </span>
              </div>
            </div>
            {/* Introductory Notice Box */}
            <div style={{"background":"#faf5ff","borderLeft":"4px solid #70146e","padding":"20px 22px","borderRadius":"0 12px 12px 0","marginBottom":"30px"}}>
              <p style={{"color":"#334155","fontSize":"0.92rem","lineHeight":"1.65","margin":"0"}}>

              The website                 <strong>prestloans.com</strong>
 (the “Website”) is owned, provided, and maintained by 
                              <strong>Lord Krishna Financial Services Limited</strong>
, a Non-Banking Financial Company (NBFC) incorporated under the 
              Companies Act, 1956, having its registered office at                 <strong>
M5, M6 Essel House, 10 Asaf Ali Road, New Delhi - 110002, India                </strong>
 
              (“Company”). In these Terms of Use (“ToU”), “we”, “our”, and “us” cumulatively mean ‘prestloans.com’ and the Company. “You” and “your” 
              refer to the user or visitor browsing this Website.
                          </p>
            </div>
            <div className="policy-doc">
              {/* Section 1 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>1. General Terms</h3>
                <p>

                By using our Website, you acknowledge and agree that these Terms of Use constitute a legally binding agreement between you 
                and the Company. If you do not agree with any of these terms, you must immediately terminate access to and refrain from using 
                this Website. We reserve the exclusive right to modify, add, or eliminate portions of these ToU at our sole discretion. 
                Your continued use of the platform after updates indicates your full acceptance of the revised terms.
                              </p>
              </div>
              {/* Section 2 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>2. User Eligibility</h3>
                <p>

                You represent and warrant that you are an                   <strong>Indian citizen/resident</strong>
, at least                   <strong>18 years of age</strong>
, 
                and possess the full legal capacity to enter into a legally binding contract under the Indian Contract Act, 1872. 
                If you are applying for a loan on behalf of a legal entity (sole proprietorship, partnership firm, LLP, or company), you represent 
                that you have the express authority to legally bind such entity.
                              </p>
              </div>
              {/* Section 3 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>3. Right to Use Personal & Contact Details</h3>
                <p>

                By submitting personal information, contact numbers, email addresses, and KYC records on this Website, you authorize the 
                Company and its lending partners to verify your identity, perform bureau credit checks, conduct employment/business verification, 
                and contact you through SMS, WhatsApp, phone calls, and automated notifications for credit appraisal, loan servicing, and administrative purposes.
                              </p>
              </div>
              {/* Section 4 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>4. Permission to Use Platform</h3>
                <p>

                The Company grants you a limited, non-transferable, non-exclusive, revocable license to access and make personal, non-commercial 
                use of this Website to evaluate loan products, submit applications, check eligibility, and track loan accounts. 
                You agree not to download (other than page caching), scrape, reverse-engineer, or modify any portion of the Website without express written consent.
                              </p>
              </div>
              {/* Section 5 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>5. Intellectual Property Rights (IPR)</h3>
                <p>

                All content published on this Website—including but not limited to text, graphics, logos, button icons, images, audio clips, 
                digital downloads, data compilations, software code, and loan evaluation algorithms—is the exclusive proprietary property of 
                                  <strong>Lord Krishna Financial Services Limited</strong>
 or its content suppliers and is protected by Indian and international copyright and trademark laws.
                              </p>
              </div>
              {/* Section 6 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>6. Business Secrets & Method Protection</h3>
                <p>

                The processes, data models, risk scorecards, and credit evaluation methodologies implemented on 
                                  <strong>prestloans.com</strong>
 are confidential proprietary trade secrets of the Company. 
                Any attempt by any user or automated crawler to extract, reverse engineer, or decompile our underwriting workflow is strictly prohibited and subject to civil and criminal prosecution under the Information Technology Act, 2000.
                              </p>
              </div>
              {/* Section 7 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>7. Limited Liabilities & Warranty Disclaimer</h3>
                <p>

                This Website and all services are provided on an                   <strong>{`"as is" and "as available" basis`}</strong>
. While the Company takes 
                all commercially reasonable precautions to maintain continuous service and robust digital security, we make no representations 
                or warranties of any kind regarding uninterrupted uptime, server availability, or freedom from third-party cyber interference. 
                In no event shall the Company be liable for indirect, incidental, punitive, or consequential damages arising from the use of this Website.
                              </p>
              </div>
              {/* Section 8 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>8. Responsibilities of Users</h3>
                <p>As a condition of using this platform, you agree not to:</p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
Provide false, forged, deceptive, or misleading identity credentials, business records, or financial statements.                  </li>
                  <li>
Impersonate any person or entity, or falsely state your affiliation with any third party.                  </li>
                  <li>
Transmit any computer viruses, worms, malware, trojans, or destructive code to our servers.                  </li>
                  <li>
Interfere with or disrupt the normal operation of our payment gateways, verification APIs, or user portals.                  </li>
                  <li>
Engage in any activity that violates RBI regulations, AML standards, or Indian laws.                  </li>
                </ul>
              </div>
              {/* Section 9 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>9. Indemnity</h3>
                <p>

                You agree to defend, indemnify, and hold harmless Lord Krishna Financial Services Ltd, its directors, officers, employees, 
                and affiliates from and against any claims, liabilities, losses, damages, costs, and expenses (including legal fees) arising out of 
                or related to your violation of these Terms of Use, your infringement of any intellectual property rights, or any fraudulent 
                misrepresentations made during your loan application.
                              </p>
              </div>
              {/* Section 10 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>10. Telephonic Call Recording Consent</h3>
                <p>

                In compliance with regulatory standards and quality assurance protocols, you acknowledge and agree that all inbound and outbound 
                calls, telephone conversations, customer service interactions, and verification discussions between you and Company executives 
                may be monitored and recorded for quality training, verification, audit, and legal evidence.
                              </p>
              </div>
              {/* Section 11 */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>11. Complaints & Grievance Redressal</h3>
                <p>

                The Company places highest emphasis on prompt resolution of customer inquiries. For any platform grievances, loan disputes, 
                or technical issues, please refer to our structured 3-tier                   <a href="/grievance-redressal" style={{"color":"#70146e","fontWeight":"700"}}>Grievance Redressal Mechanism</a>
, 
                or reach our Principal Nodal Officer at                   <strong>nodalofficer@prestloans.com</strong>
.
                              </p>
              </div>
              {/* Section 12 */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>12. Governing Law, Arbitration & Jurisdiction</h3>
                <p>

                These Terms of Use shall be governed by, construed, and enforced in accordance with the                   <strong>laws of the Republic of India</strong>
. 
                Any dispute, claim, or controversy arising out of or relating to these Terms shall be referred to arbitration in accordance with 
                the                   <strong>Arbitration and Conciliation Act, 1996</strong>
. The seat and venue of arbitration shall be                   <strong>New Delhi, India</strong>
, 
                and proceedings shall be conducted in English. The courts in New Delhi shall have exclusive jurisdiction.
                              </p>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div>
                <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Corporate Entity</h5>
                <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                Lord Krishna Financial Services Limited                  <br />

                CIN: U65993DL1992PLC049609 | RBI Regd NBFC: B-14.02019                  <br />

                M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
                              </p>
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
