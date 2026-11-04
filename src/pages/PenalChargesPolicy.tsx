import React, { useEffect } from 'react';

export const PenalChargesPolicy: React.FC = () => {
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
          <span>Penal Charges Policy</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-ban" style={{"color":"#ffb088"}}></i>
 ZERO CAPITALIZATION • RBI FAIR LENDING COMPLIANT
              </span>
        <h1 className="page-banner-title">Penal Charges Policy</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>

        Formulated in strict adherence to Reserve Bank of India circular on           <strong>“Fair Lending Practice - Penal Charges in Loan Accounts”</strong>
 
        (DoR.MCS.REC.28/01.01.001/2023-24 dated August 18, 2023).
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-ban"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>No Compounding</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Zero Capitalization</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-receipt"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Separate Levy</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Not Added to Interest</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-bell"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Advance Alert</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Prior SMS & Notice</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Reasonable & Fair</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Credit Discipline Intent</div>
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
                <a href="/penal-charges-policy" className="policy-nav-link active">
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
 Loan Servicing Desk
                          </div>
              <p style={{"fontSize":"0.8rem","color":"#64748b","marginBottom":"10px","lineHeight":"1.4"}}>

              Questions regarding repayment or penal charges?
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
                  <i className="fa-solid fa-scale-balanced"></i>
 RBI Circular Compliance                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Penal Charges Policy</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>Lord Krishna Financial Services Ltd (NBFC - Base Layer)</p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-calendar-check" style={{"color":"#70146e"}}></i>
 Board Adopted
                              </span>
              </div>
            </div>
            {/* Highlight Box */}
            <div style={{"background":"#faf5ff","borderLeft":"4px solid #70146e","padding":"20px 22px","borderRadius":"0 12px 12px 0","marginBottom":"30px"}}>
              <p style={{"color":"#334155","fontSize":"0.92rem","lineHeight":"1.65","margin":"0"}}>
                <strong>“Lord Krishna Financial Services Ltd” (LKFSL / the Company)</strong>
 is an RBI-registered Non-Banking Financial Company 
              categorized as                 <strong>NBFC-Base Layer (“NBFC-BL”)</strong>
 in accordance with the 
                              <em>
RBI Master Direction – Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions, 2023                </em>
. 
              The Reserve Bank of India vide circular                 <strong>“DoR.MCS.REC.28/01.01.001/2023-24 dated August 18, 2023”</strong>
 titled 
                              <em>“Fair Lending Practice - Penal Charges in Loan Accounts”</em>
 directed Regulated Entities to formulate an explicit policy on penal charges. 
              In compliance therewith, the Board of Directors has adopted this policy.
                          </p>
            </div>
            <div className="policy-doc">
              {/* 1. Scope */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>1. Scope & Applicability</h3>
                <p>

                This policy applies universally across all loan accounts, credit facilities, home loans, education loans, personal loans, and short term personal loans 
                disbursed by the Company to all borrower categories.
                              </p>
              </div>
              {/* 2. Key Principles */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"14px"}}>2. Core Regulatory Principles</h3>
                <p>

                In compliance with the circular and Directions issued by the RBI, the key principles governing penal charges at Prest Loans are:
                              </p>
                <div style={{"display":"grid","gridTemplateColumns":"1fr","gap":"14px","marginTop":"14px"}}>
                  <div style={{"background":"#fdf2f8","border":"1px solid #fbcfe8","borderRadius":"10px","padding":"14px 18px"}}>
                    <strong style={{"color":"#9d174d"}}>
                      <i className="fa-solid fa-circle-check"></i>
 Credit Discipline, Not Revenue Enhancement:                    </strong>
                    <p style={{"margin":"6px 0 0","fontSize":"0.9rem","color":"#475569"}}>

                    The intent of levying penal charges is essentially to inculcate a sense of credit discipline among borrowers. Such charges 
                    shall                       <strong>never be used as a revenue enhancement tool</strong>
 over and above the contracted rate of interest.
                                      </p>
                  </div>
                  <div style={{"background":"#fdf2f8","border":"1px solid #fbcfe8","borderRadius":"10px","padding":"14px 18px"}}>
                    <strong style={{"color":"#9d174d"}}>
                      <i className="fa-solid fa-circle-check"></i>
 Treated as 'Penal Charges', Not 'Penal Interest':                    </strong>
                    <p style={{"margin":"6px 0 0","fontSize":"0.9rem","color":"#475569"}}>

                    Penalty charged for non-compliance of material terms and conditions of the loan contract (such as late payment of installment) 
                    is treated strictly as                       <strong>‘penal charges’</strong>
 and is                       <strong>not levied in the form of ‘penal interest’</strong>
.
                                      </p>
                  </div>
                  <div style={{"background":"#fdf2f8","border":"1px solid #fbcfe8","borderRadius":"10px","padding":"14px 18px"}}>
                    <strong style={{"color":"#9d174d"}}>
                      <i className="fa-solid fa-circle-check"></i>
 Absolute Ban on Capitalization (No Compounding):                    </strong>
                    <p style={{"margin":"6px 0 0","fontSize":"0.9rem","color":"#475569"}}>

                    There shall be                       <strong>no capitalization of penal charges</strong>
 i.e., no further interest shall ever be computed or accrued 
                    on such charges. Unpaid penal charges remain separate and do not compound the principal loan balance.
                                      </p>
                  </div>
                  <div style={{"background":"#fdf2f8","border":"1px solid #fbcfe8","borderRadius":"10px","padding":"14px 18px"}}>
                    <strong style={{"color":"#9d174d"}}>
                      <i className="fa-solid fa-circle-check"></i>
 No Additional Hidden Interest Components:                    </strong>
                    <p style={{"margin":"6px 0 0","fontSize":"0.9rem","color":"#475569"}}>

                    No additional component shall be added to the contracted rate of interest. The quantum of penal charges is reasonable, 
                    commensurate with the delay, and non-discriminatory within a particular loan product category.
                                      </p>
                  </div>
                </div>
              </div>
              {/* 3. Structure & Calculation */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>3. Structure & Computation of Penal Charges</h3>
                <p>

                Penal charges are levied                   <strong>
only if loan repayments are not made by the respective due date                  </strong>
. 
                Penal charges are not envisaged or levied for any other routine administrative interactions.
                              </p>
                {/* Table Card */}
                <div className="soc-table-card" style={{"marginTop":"18px"}}>
                  <div className="soc-table-wrapper">
                    <table className="amortization-table" style={{"width":"100%"}}>
                      <thead>
                        <tr>
                          <th style={{"width":"30%"}}>Loan Product</th>
                          <th style={{"width":"35%"}}>Default Trigger</th>
                          <th style={{"width":"35%"}}>Penal Charge Schedule</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Home Loans</strong>
                          </td>
                          <td>Overdue installment beyond EMI due date</td>
                          <td>
2% per month on overdue installment amount for the period of default (computed day-to-day, non-capitalized)                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Education & Skill Development Loans</strong>
                          </td>
                          <td>Overdue installment beyond EMI due date</td>
                          <td>
2% per month on overdue installment amount for the period of default (non-capitalized)                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Personal & Short Term Loans</strong>
                          </td>
                          <td>Overdue installment beyond EMI due date</td>
                          <td>
2% per month on overdue installment amount for the period of default (non-capitalized)                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dishonor of Payment Mandate (NACH / Cheque Return)</strong>
                          </td>
                          <td>
Bounce / return of electronic repayment mandate or cheque due to insufficient funds                          </td>
                          <td>
₹500 + GST per instance of mandate bounce (in addition to bank's own return charges)                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* 4. Upfront Disclosure & Communication */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>4. Borrower Notification & Disclosure Protocols</h3>
                <p>

                The Company adheres to complete transparency regarding penal charges across all customer touchpoints:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>Key Fact Statement (KFS):</strong>
 The quantum and basis for calculation of penal charges is explicitly highlighted in bold in the Key Fact Statement and Sanction Letter provided before loan drawdown.                  </li>
                  <li>
                    <strong>Advance Reminders:</strong>
 Automated SMS and WhatsApp reminders are transmitted to borrowers                     <strong>3 days prior to the EMI due date</strong>
 to prevent accidental default.                  </li>
                  <li>
                    <strong>Default Intimation:</strong>
 If an installment remains unpaid on the due date, an immediate electronic intimation is dispatched clearly stating the overdue installment amount, the date from which penal charges begin to accrue, and the specific daily charge rate.                  </li>
                  <li>
                    <strong>Separate Billing:</strong>
 Account statements clearly delineate principal repayment, normal contracted interest, and penal charges in separate columns with complete breakdown.                  </li>
                </ul>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div>
                <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Regulatory Governance</h5>
                <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                Lord Krishna Financial Services Limited                  <br />

                CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                  <br />

                Formulated under RBI Circular DoR.MCS.REC.28/01.01.001/2023-24
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
