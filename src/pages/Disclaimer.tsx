import React, { useEffect } from 'react';

export const Disclaimer: React.FC = () => {
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
          <span>Disclaimer & Fraud Alert</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-triangle-exclamation" style={{"color":"#ffb088"}}></i>
 OFFICIAL CAUTION NOTICE • PUBLIC FRAUD ALERT
              </span>
        <h1 className="page-banner-title">Disclaimer & Public Notice</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>

        Important legal disclaimers regarding website content, external links, and urgent public caution notice against 
        fraudulent entities and fake agents impersonating Prest Loans executives.
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-globe"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Official Domain</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Only prestloans.com</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-money-bill-transfer"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>No Cash / UPI</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Never pay to personal accounts</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-virus"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Fraud Helpline</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>011-45241131</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Sachet</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>sachet.rbi.org.in</div>
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
                <a href="/disclaimer" className="policy-nav-link active">
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
              <li>
                <a href="/public-notice" className="policy-nav-link">
                  <span>Public Notices & Disclosures</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
            </ul>
            {/* Helpdesk Box */}
            <div style={{"marginTop":"24px","padding":"16px","background":"#fff1f2","border":"1px solid rgba(225, 29, 72, 0.2)","borderRadius":"12px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"8px","marginBottom":"8px","color":"#be123c","fontWeight":"700","fontSize":"0.85rem"}}>
                <i className="fa-solid fa-shield-cat"></i>
 Report Impersonation
                          </div>
              <p style={{"fontSize":"0.8rem","color":"#64748b","marginBottom":"10px","lineHeight":"1.4"}}>

              Did someone demand advance fee in a personal UPI account?
                          </p>
              <a href="tel:+911145241131" style={{"display":"block","fontSize":"0.85rem","fontWeight":"700","color":"#be123c","marginBottom":"4px"}}>
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
 Legal Disclosure & Caution                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Disclaimer & Public Notice</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>
Lord Krishna Financial Services Limited • Brand: Prest Loans                </p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#fff1f2","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#be123c"}}>
                  <i className="fa-solid fa-triangle-exclamation"></i>
 Public Caution
                              </span>
              </div>
            </div>
            {/* URGENT FRAUD ALERT BANNER */}
            <div style={{"background":"linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%)","border":"2px solid #f43f5e","borderRadius":"14px","padding":"24px","marginBottom":"32px","boxShadow":"0 4px 16px rgba(244, 63, 94, 0.1)"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"12px","marginBottom":"12px"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"50%","background":"#f43f5e","color":"#ffffff","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <div>
                  <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#9f1239","margin":"0"}}>
CRITICAL PUBLIC NOTICE: Beware of Fake Loan Agents & Impostors                  </h3>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","margin":"2px 0 0"}}>
Do Not Transfer Money to Personal Bank Accounts or Personal UPI IDs                  </p>
                </div>
              </div>
              <p style={{"fontSize":"0.92rem","color":"#334155","lineHeight":"1.6","margin":"0 0 12px"}}>

              It has come to our notice that certain fraudulent individuals, unauthorized agents, and fake websites are misrepresenting 
              themselves as employees, representatives, or DSA partners of                 <strong>“Lord Krishna Financial Services Ltd”</strong>
 or 
                              <strong>“Prest Loans”</strong>
. These fraudsters issue fake loan approval letters, fabricate sanction certificates, and 
              demand advance processing charges, insurance deposits, or clearance fees into                 <strong>personal savings bank accounts or individual UPI IDs</strong>
 (e.g. GooglePay, PhonePe, Paytm).
                          </p>
              <div style={{"background":"#ffffff","borderRadius":"8px","padding":"14px 18px","border":"1px dashed #f43f5e"}}>
                <strong style={{"color":"#be123c","display":"block","marginBottom":"4px"}}>
                  <i className="fa-solid fa-hand-holding-dollar"></i>
 Our Strict Policy:                </strong>
                <span style={{"fontSize":"0.88rem","color":"#475569","lineHeight":"1.5"}}>

                Prest Loans                   <strong>NEVER</strong>
 collects processing charges in cash, nor does it EVER authorize any individual to collect money 
                in personal bank accounts. All legitimate fee payments are made solely through our official portal 
                (                  <strong>www.prestloans.com</strong>
) or via direct transfer into the verified corporate account of 
                                  <strong>“Lord Krishna Financial Services Ltd”</strong>
.
                              </span>
              </div>
            </div>
            <div className="policy-doc">
              {/* 1. General Website Disclaimer */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>1. General Website Disclaimer</h3>
                <p>

                The information contained in this website is for general information purposes only. The information is provided by 
                                  <strong>prestloans.com</strong>
 (Lord Krishna Financial Services Ltd) and while we endeavor to keep the information up to date 
                and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics 
                contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                              </p>
                <p>

                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
                or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                              </p>
              </div>
              {/* 2. Third-Party Links */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>2. External Links & Third-Party Services</h3>
                <p>

                Through this website, you are able to link to other websites (such as credit bureaus, payment gateways, statutory portals, 
                or partner institutions) which are not under the control of Prest Loans. We have no control over the nature, content, availability, 
                or privacy practices of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                              </p>
              </div>
              {/* 3. Technical Availability */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>3. Service Availability & Platform Maintenance</h3>
                <p>

                Every effort is made to keep the website up and running smoothly. However, Prest Loans takes no responsibility for, 
                and will not be liable for, the website being temporarily unavailable due to technical issues, server maintenance, 
                telecommunication failures, or cyber incidents beyond our reasonable control.
                              </p>
              </div>
              {/* 4. Loan Discretion & Underwriting */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>4. Credit Appraisal & Approval Discretion</h3>
                <p>

                Submitting a loan application, uploading documents, or receiving an eligibility estimate on our digital loan calculators does 
                                  <strong>not constitute a final loan sanction or commitment</strong>
. The sanction of all loans is at the sole and unfettered 
                discretion of the Credit Underwriting Committee of Lord Krishna Financial Services Ltd, based upon physical/digital verification, 
                credit bureau analysis, income appraisal, and satisfactory completion of all RBI KYC formalities.
                              </p>
              </div>
              {/* 5. How to Verify Authenticity */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>5. How to Verify Authentic Communications</h3>
                <p>
Borrowers and applicants are advised to always cross-verify communications using our official channels:                </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Official Web Portal:</strong>
                     <a href="https://www.prestloans.com" style={{"color":"#70146e","fontWeight":"700"}}>https://www.prestloans.com</a>
 (Check for https:// secure lock icon).                  </li>
                  <li>
                    <strong>Official Email Domains:</strong>
 All genuine communications are dispatched strictly from                     <strong>@prestloans.com</strong>
 email IDs. (We NEVER use generic @gmail.com, @yahoo.com, or @outlook.com accounts).                  </li>
                  <li>
                    <strong>Official Telephony Lines:</strong>
 Landline:                     <strong>011-45241131 / 011-45241123</strong>
 | Official WhatsApp:                     <strong>+91-9711669090</strong>
.                  </li>
                  <li>
                    <strong>Reporting Suspicious Contacts:</strong>
 Immediately alert our Compliance Team at                     <a href="mailto:info@prestloans.com" style={{"color":"#70146e","fontWeight":"700"}}>info@prestloans.com</a>
.                  </li>
                </ul>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px"}}>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Issued in Public Interest</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>
{`
                  Lord Krishna Financial Services Limited ("Prest Loans")`}                    <br />

                  CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
                                  </p>
                </div>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Statutory Reporting</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Instances of fraudulent impersonation are reported to the Cyber Crime Cell of Delhi Police and the 
                  Reserve Bank of India Sachet Portal (                    <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener" style={{"color":"#0284c7","fontWeight":"700"}}>sachet.rbi.org.in</a>
).
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
