import React, { useEffect } from 'react';

export const KycAndAml: React.FC = () => {
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
          <span>KYC & AML Policy</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-id-card-clip" style={{"color":"#ffb088"}}></i>
 PMLA 2002 & RBI MASTER DIRECTIONS COMPLIANT
              </span>
        <h1 className="page-banner-title">KYC & Anti-Money Laundering Policy</h1>
        <p className="page-banner-sub" style={{"maxWidth":"840px"}}>
{`
        Comprehensive Know Your Customer (KYC) norms, Customer Identification Procedures (CIP), and Anti-Money
        Laundering (AML)
        measures established by Lord Krishna Financial Services Limited ("Prest Loans").
      `}        </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-id-card"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>OVD Verification</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Officially Valid Documents</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-virus"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>PMLA Standards</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Combating Financial Crime</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Risk Graded</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Low, Medium & High Risk</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Principal Officer</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>FIU-IND Reporting Head</div>
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
                <a href="/kyc-and-aml" className="policy-nav-link active">
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
              <p style={{"color":"#64748b","marginBottom":"8px","lineHeight":"1.35"}}>
Check NBFC registrations & lodge
              feedback on Sachet.              </p>
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
                  <i className="fa-solid fa-id-card"></i>
 Statutory Due
                Diligence                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>
KYC & AML Policy
                Code                </h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>
Lord Krishna Financial Services Limited • Trade
                Name: Prest Loans                </p>
              </div>
              <div style={{"textAlign":"right"}}>
                <span style={{"display":"inline-block","padding":"6px 12px","background":"#f1f5f9","borderRadius":"8px","fontSize":"0.78rem","fontWeight":"600","color":"#475569"}}>
                  <i className="fa-solid fa-calendar-check" style={{"color":"#70146e"}}></i>
 RBI & PMLA Mandate
                              </span>
              </div>
            </div>
            {/* Preamble Highlight Box */}
            <div style={{"background":"#faf5ff","borderLeft":"4px solid #70146e","padding":"20px 22px","borderRadius":"0 12px 12px 0","marginBottom":"30px"}}>
              <p style={{"color":"#334155","fontSize":"0.92rem","lineHeight":"1.65","margin":"0"}}>

              In compliance with the Reserve Bank of India (Non-Banking Financial Companies – Know Your Customer)
              Directions, 2025
                              <strong>
(RBI/DOR/2025-26/361; DOR.AML.REC.No.280/14.01.003/2025-26 dated November 28, 2025)                </strong>
 as
                              <em>
amended from time to time, the Prevention of Money Laundering Act, 2002 (“PMLA”)                </em>
 and the
              Prevention of Money-Laundering (Maintenance of Records) Rules, 2005, the Board of Directors of
                              <strong>Prevention of Money Laundering Act, 2002 (PMLA)</strong>
, the Board of Directors of
                              <strong>Lord Krishna Financial Services Ltd (“Company”)</strong>
 operating under the trade name
                              <strong>“Prest Loans”</strong>

              has adopted this comprehensive KYC & AML Policy.
                          </p>
            </div>
            <div className="policy-doc">
              {/* 1. Objective */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>
1. Objectives of the
                Policy                </h3>
                <p>
The primary objectives of our KYC & AML policy framework are:                </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
To prevent the Company from being used, intentionally or unintentionally, by criminal elements for
                  money laundering or terrorist financing activities.                  </li>
                  <li>
To establish robust Customer Identification Procedures (CIP) for establishing the identity of
                  borrowers before granting credit facilities.                  </li>
                  <li>
To put in place an effective risk categorization and transaction monitoring mechanism commensurate
                  with the borrower's profile.                  </li>
                  <li>
To ensure compliance with all statutory reporting requirements to the Financial Intelligence Unit -
                  India (FIU-IND) and the RBI.                  </li>
                </ul>
              </div>
              {/* 2. Four Key Elements of KYC */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"14px"}}>
2. The Four Pillars
                of KYC & AML Governance                </h3>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"16px","marginTop":"14px"}}>
                  <div style={{"background":"#fdf2f8","border":"1px solid #fbcfe8","borderRadius":"12px","padding":"18px"}}>
                    <h4 style={{"fontSize":"1rem","fontWeight":"800","color":"#9d174d","margin":"0 0 6px"}}>
                      <i className="fa-solid fa-user-check"></i>
 Pillar 1: Customer Acceptance Policy (CAP)
                                      </h4>
                    <p style={{"fontSize":"0.85rem","color":"#475569","lineHeight":"1.5","margin":"0"}}>

                    Clear criteria for accepting customers. No loan account opened in anonymous, fictitious, or 'benami'
                    names.
                    Checks against UN, MHA, and international sanctions lists.
                                      </p>
                  </div>
                  <div style={{"background":"#eff6ff","border":"1px solid #bfdbfe","borderRadius":"12px","padding":"18px"}}>
                    <h4 style={{"fontSize":"1rem","fontWeight":"800","color":"#1d4ed8","margin":"0 0 6px"}}>
                      <i className="fa-solid fa-address-card"></i>
 Pillar 2: Customer Identification Procedure (CIP)
                                      </h4>
                    <p style={{"fontSize":"0.85rem","color":"#475569","lineHeight":"1.5","margin":"0"}}>

                    Rigorous verification of borrower identity and address using Officially Valid Documents (OVDs),
                    digital e-KYC, video verification, and legal business existence proofs.
                                      </p>
                  </div>
                  <div style={{"background":"#f0fdf4","border":"1px solid #bbf7d0","borderRadius":"12px","padding":"18px"}}>
                    <h4 style={{"fontSize":"1rem","fontWeight":"800","color":"#15803d","margin":"0 0 6px"}}>
                      <i className="fa-solid fa-gauge-high"></i>
 Pillar 3: Risk Management Framework
                                      </h4>
                    <p style={{"fontSize":"0.85rem","color":"#475569","lineHeight":"1.5","margin":"0"}}>

                    Grading customers into Low, Medium, and High-risk categories based on turnover, geography, business
                    activity,
                    and Politically Exposed Person (PEP) status.
                                      </p>
                  </div>
                  <div style={{"background":"#fff7ed","border":"1px solid #fed7aa","borderRadius":"12px","padding":"18px"}}>
                    <h4 style={{"fontSize":"1rem","fontWeight":"800","color":"#c2410c","margin":"0 0 6px"}}>
                      <i className="fa-solid fa-magnifying-glass-chart"></i>
 Pillar 4: Transaction Monitoring
                                      </h4>
                    <p style={{"fontSize":"0.85rem","color":"#475569","lineHeight":"1.5","margin":"0"}}>

                    Continuous supervision of repayments, high-value early prepayments, cash velocity, and filing of
                    Suspicious Transaction Reports (STRs) with FIU-IND.
                                      </p>
                  </div>
                </div>
              </div>
              {/* 3. Customer Identification Documents (OVDs Table) */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"12px"}}>
3. Officially Valid
                Documents (OVD) Matrix                </h3>
                <p>
Borrowers must furnish verified copies of documents based on their constitution:                </p>
                <div className="soc-table-card" style={{"marginTop":"16px"}}>
                  <div className="soc-table-wrapper">
                    <table className="amortization-table" style={{"width":"100%"}}>
                      <thead>
                        <tr>
                          <th style={{"width":"25%"}}>Borrower Category</th>
                          <th style={{"width":"35%"}}>Proof of Identity (POI)</th>
                          <th style={{"width":"40%"}}>Proof of Address (POA) & Business Proof</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Individuals / Proprietors</strong>
                          </td>
                          <td>
Aadhaar Card (masked), Passport, Voter ID Card, Driving License, PAN Card                          </td>
                          <td>
Electricity Bill, Telephone/Broadband Bill, Bank Statement (last 3-6 months), Property tax
                          receipt                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Sole Proprietorships</strong>
                          </td>
                          <td>PAN of Proprietor, Identity Proof of Proprietor</td>
                          <td>
Registration certificate, GST Certificate, Municipal Trade License, Shop & Establishment
                          Certificate, Udyam Registration                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Partnership Firms & LLPs</strong>
                          </td>
                          <td>
PAN Card of Firm/LLP, Identity Proof of all Partners/Designated Partners                          </td>
                          <td>
Partnership Deed, LLP Agreement, Registration Certificate with Registrar of Firms, Power of
                          Attorney in favor of signing partner                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Private & Public Companies</strong>
                          </td>
                          <td>
PAN Card of Company, Identity Proof of Managing Director & Authorized Signatories                          </td>
                          <td>
Certificate of Incorporation (CIN), Memorandum & Articles of Association (MOA &
                          AOA), Board Resolution authorizing loan, List of Directors                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Trusts & Societies</strong>
                          </td>
                          <td>
PAN Card of Trust/Society, Identity Proof of Trustees/Founders                          </td>
                          <td>
Trust Deed, Registration Certificate, Resolution of Managing Committee to avail loan                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* 4. Beneficial Ownership (BO) */}
              <div style={{"marginBottom":"28px","paddingBottom":"24px","borderBottom":"1px solid #f1f5f9"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>
4. Beneficial
                Ownership (BO) Identification                </h3>
                <p>

                In compliance with PMLA Rules, the Company identifies the natural person(s) who ultimately own or
                control the legal entity borrowing funds:
                              </p>
                <ul style={{"paddingLeft":"20px","lineHeight":"1.7","color":"#475569"}}>
                  <li>
                    <strong>For Companies:</strong>
 Any individual holding an ultimate controlling ownership interest of
                  more than                     <strong>10%</strong>
 of shares or voting rights.                  </li>
                  <li>
                    <strong>For Partnership Firms & LLPs:</strong>
 Any natural person owning or entitled to more
                  than                     <strong>15%</strong>
 of capital or profits.                  </li>
                  <li>
                    <strong>For Unincorporated Associations / Trusts:</strong>
 Any natural person owning more than
                                      <strong>15%</strong>
 of property or acting as Author, Settlor, or Trustee.                  </li>
                </ul>
              </div>
              {/* 5. Principal Officer & FIU-IND Reporting */}
              <div style={{"marginBottom":"28px","paddingBottom":"10px"}}>
                <h3 style={{"fontSize":"1.2rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>
5. Appointment of
                Principal Officer & AML Reporting                </h3>
                <p>

                The Company has appointed a designated Senior Executive as the                   <strong>Principal Officer</strong>

                responsible for overseeing
                AML policy implementation, staff training, and reporting obligations to the                   <strong>
Financial
                  Intelligence Unit - India (FIU-IND)                  </strong>
:
                              </p>
                <div style={{"background":"#faf5ff","border":"1px solid rgba(112, 20, 110, 0.2)","borderRadius":"12px","padding":"20px 24px","marginTop":"14px"}}>
                  <p style={{"margin":"0","fontSize":"0.9rem","lineHeight":"1.6","color":"#334155"}}>
                    <strong>Principal Officer (AML & KYC Compliance):</strong>
                    <br />
{`
                  Lord Krishna Financial Services Limited ("Prest Loans")`}                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002                    <br />

                  Suspicious Transaction Reports (STRs) and Cash Transaction Reports (CTRs) are furnished directly to
                  Director, FIU-IND under PMLA.
                                  </p>
                </div>
              </div>
            </div>
            {/* Official Sign-off Box */}
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"14px","padding":"24px","marginTop":"36px"}}>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px"}}>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>
Statutory Adoption
                                  </h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Lord Krishna Financial Services Limited                    <br />

                  CIN: U65993DL1992PLC049609 | RBI CoR: B-14.02019                    <br />

                  Master Direction on Know Your Customer (KYC) Direction, 2016
                                  </p>
                </div>
                <div>
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>
Periodic Updates
                                  </h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Subject to ongoing due diligence (CDD). Low-risk borrowers are re-verified every 10 years, medium-risk
                  every 8 years,
                  and high-risk every 2 years.
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
