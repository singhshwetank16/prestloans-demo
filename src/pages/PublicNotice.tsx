import React, { useEffect } from 'react';

export const PublicNotice: React.FC = () => {
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
          <a href="/policies">Policies & Regulatory</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
          <span>Public Notices & Disclosures</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-scale-balanced" style={{"color":"#ffb088"}}></i>
 STATUTORY REGULATORY DISCLOSURES • RBI NBFC COMPLIANCE
              </span>
        <h1 className="page-banner-title">Public Notices & Statutory Disclosures</h1>
        <p className="page-banner-sub" style={{"maxWidth":"860px"}}>

        Official public caution advisories against fake loan agents, statutory quarterly portfolio disclosures, 
        audited annual returns (Form MGT-7), and regulatory co-lending partner frameworks published by 
                  <strong>Lord Krishna Financial Services Limited (Prest Loans)</strong>
 in compliance with RBI guidelines and Companies Act, 2013.
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-folder-open"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>20 Published Notices</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Official Public Records</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-file-pdf"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Direct PDF Downloads</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Instant View & Download</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Regulated NBFC</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Reg. No: B-14.02019</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-certificate"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Statutory Integrity</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>MCA & ROC Filings</div>
          </div>
        </div>
      </div>
    </section>
    {/* MAIN NOTICES DIRECTORY SECTION */}
    <section className="notices-section" id="notices">
      <div className="container">
        {/* Interactive Toolbar: Search */}
        <div className="notice-toolbar">
          <div className="notice-search-wrap">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="notice-search" className="notice-search-input" placeholder="Search public notices by title, period, or keyword (e.g., 'Annual Return', 'Portfolio', 'Caution', 'Moratorium', '2026')..." aria-label="Search public notices" />
          </div>
        </div>
        {/* Notices Cards Grid */}
        <div className="notice-grid" id="notices-grid">
          {/* Notice Card 1 */}
          <div className="notice-card" data-category="caution" data-keywords="caution notice against fraudulent activities & impersonators public caution advisory warning customers against impostors, fake loan sanction letters, and unauthorized personal bank or upi accounts. official caution notice anti-fraud advisory">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-caution">
                <i className="fa-solid fa-file-shield"></i>
 Public Caution Notice              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Official Caution Notice              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">
Caution Notice Against Fraudulent Activities & Impersonators                </h3>
                <p className="notice-card-desc">
Public caution advisory warning customers against impostors, fake loan sanction letters, and unauthorized personal bank or UPI accounts.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 59.3 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Anti-Fraud Advisory                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Caution%20Notice%20against%20Fradulent%20Activities.pdf" download="Caution-Notice-Fraudulent-Activities-Prest-Loans.pdf" className="btn-notice-download" title="Download Caution Notice Against Fraudulent Activities & Impersonators">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Caution%20Notice%20against%20Fradulent%20Activities.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Caution Notice Against Fraudulent Activities & Impersonators Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 2 */}
          <div className="notice-card" data-category="caution" data-keywords="caution notice against unauthorized digital lending platforms public notice advising borrowers to verify legitimate digital lending applications and beware of unauthorized third-party mobile lending apks. regulatory advisory digital lending">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-caution">
                <i className="fa-solid fa-file-shield"></i>
 Digital Lending Advisory              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Regulatory Advisory              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">
Caution Notice Against Unauthorized Digital Lending Platforms                </h3>
                <p className="notice-card-desc">
Public notice advising borrowers to verify legitimate digital lending applications and beware of unauthorized third-party mobile lending APKs.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 76.4 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Digital Lending                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Caution%20notice%20against%20digital%20lending%20platform.pdf" download="Caution-Notice-Digital-Lending-Platforms-Prest-Loans.pdf" className="btn-notice-download" title="Download Caution Notice Against Unauthorized Digital Lending Platforms">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Caution%20notice%20against%20digital%20lending%20platform.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Caution Notice Against Unauthorized Digital Lending Platforms Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 3 */}
          <div className="notice-card" data-category="caution" data-keywords="reserve bank of india press release on digital lending platforms official notification regarding regulatory framework, legitimate lending service providers, and consumer protection protocols. december 23, 2020 rbi official circular">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-caution">
                <i className="fa-solid fa-file-shield"></i>
 RBI Press Release              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 December 23, 2020              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">
Reserve Bank of India Press Release on Digital Lending Platforms                </h3>
                <p className="notice-card-desc">
Official notification regarding regulatory framework, legitimate lending service providers, and consumer protection protocols.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 298.8 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 RBI Official Circular                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Press%20Release%20on%20Digital%20Lenders%20-%20Dec%2023%202020.pdf" download="RBI-Press-Release-Digital-Lending-Dec-2020.pdf" className="btn-notice-download" title="Download Reserve Bank of India Press Release on Digital Lending Platforms">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Press%20Release%20on%20Digital%20Lenders%20-%20Dec%2023%202020.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Reserve Bank of India Press Release on Digital Lending Platforms Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 4 */}
          <div className="notice-card" data-category="caution" data-keywords="covid-19 regulatory relief & moratorium package (phase 1) implementation of rbi regulatory relief package, emi moratorium options, and asset classification guidelines for eligible borrowers. march 2020 – may 2020 covid relief phase 1">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-caution">
                <i className="fa-solid fa-file-shield"></i>
 Regulatory Relief Package              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 March 2020 – May 2020              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">COVID-19 Regulatory Relief & Moratorium Package (Phase 1)</h3>
                <p className="notice-card-desc">
Implementation of RBI regulatory relief package, EMI moratorium options, and asset classification guidelines for eligible borrowers.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 323.8 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 COVID Relief Phase 1                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Moratorium%20March%202020-May%202020.pdf" download="RBI-Moratorium-Framework-March-May-2020.pdf" className="btn-notice-download" title="Download COVID-19 Regulatory Relief & Moratorium Package (Phase 1)">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Moratorium%20March%202020-May%202020.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View COVID-19 Regulatory Relief & Moratorium Package (Phase 1) Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 5 */}
          <div className="notice-card" data-category="caution" data-keywords="covid-19 regulatory relief & moratorium package (phase 2) extension of loan moratorium and special restructuring framework under rbi covid-19 regulatory relief directives. june 2020 – august 2020 covid relief phase 2">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-caution">
                <i className="fa-solid fa-file-shield"></i>
 Regulatory Relief Package              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 June 2020 – August 2020              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">COVID-19 Regulatory Relief & Moratorium Package (Phase 2)</h3>
                <p className="notice-card-desc">
Extension of loan moratorium and special restructuring framework under RBI COVID-19 regulatory relief directives.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 137.7 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 COVID Relief Phase 2                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Moratorium%20June%202020-August%202020.pdf" download="RBI-Moratorium-Framework-June-August-2020.pdf" className="btn-notice-download" title="Download COVID-19 Regulatory Relief & Moratorium Package (Phase 2)">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Moratorium%20June%202020-August%202020.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View COVID-19 Regulatory Relief & Moratorium Package (Phase 2) Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 6 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 30th june 2026 audited statutory disclosure of loan assets, sectoral deployment, aum growth, and asset quality classification under rbi guidelines. q1 fy 2026-27 latest statement">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q1 FY 2026-27              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 30th June 2026</h3>
                <p className="notice-card-desc">
Audited statutory disclosure of loan assets, sectoral deployment, AUM growth, and asset quality classification under RBI guidelines.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 284.8 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Latest Statement                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20June%202026.pdf" download="Portfolio-Disclosure-30-June-2026-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 30th June 2026">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20June%202026.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 30th June 2026 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 7 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 31st march 2026 statutory balance sheet portfolio statement, capital adequacy metrics, and prudential loan book composition for q4 fy 2025-26. q4 fy 2025-26 q4 fy26">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q4 FY 2025-26              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 31st March 2026</h3>
                <p className="notice-card-desc">
Statutory balance sheet portfolio statement, capital adequacy metrics, and prudential loan book composition for Q4 FY 2025-26.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 410.9 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q4 FY26                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure-%2031st%20March%202026.pdf" download="Portfolio-Disclosure-31-March-2026-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 31st March 2026">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure-%2031st%20March%202026.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 31st March 2026 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 8 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 31st december 2025 comprehensive statement of micro and sme lending advances, collateral status, and statutory provision coverage ratios. q3 fy 2025-26 q3 fy26">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q3 FY 2025-26              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 31st December 2025</h3>
                <p className="notice-card-desc">
Comprehensive statement of micro and SME lending advances, collateral status, and statutory provision coverage ratios.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 346.3 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q3 FY26                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure-%2031st%20December%202025.pdf" download="Portfolio-Disclosure-31-Dec-2025-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 31st December 2025">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure-%2031st%20December%202025.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 31st December 2025 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 9 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 30th september 2025 quarterly asset classification statement, liquidity coverage, and prudential lending portfolio indicators. q2 fy 2025-26 q2 fy26">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q2 FY 2025-26              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 30th September 2025</h3>
                <p className="notice-card-desc">
Quarterly asset classification statement, liquidity coverage, and prudential lending portfolio indicators.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 591.2 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q2 FY26                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20September%202025.pdf" download="Portfolio-Disclosure-30-Sept-2025-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 30th September 2025">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20September%202025.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 30th September 2025 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 10 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 30th june 2025 first quarter lending portfolio disclosure, risk-weighted asset distribution, and institutional borrowing details. q1 fy 2025-26 q1 fy26">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q1 FY 2025-26              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 30th June 2025</h3>
                <p className="notice-card-desc">
First quarter lending portfolio disclosure, risk-weighted asset distribution, and institutional borrowing details.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 418.8 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q1 FY26                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20June%202025.pdf" download="Portfolio-Disclosure-30-June-2025-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 30th June 2025">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure-%2030th%20June%202025.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 30th June 2025 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 11 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 31st march 2025 year-end financial portfolio disclosures, loan book consolidation, npa metrics, and provisioning schedule. q4 fy 2024-25 q4 fy25">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q4 FY 2024-25              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 31st March 2025</h3>
                <p className="notice-card-desc">
Year-end financial portfolio disclosures, loan book consolidation, NPA metrics, and provisioning schedule.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 324.6 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q4 FY25                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20disclosure%20as%20on%2031st%20March%202025.pdf" download="Portfolio-Disclosure-31-March-2025-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 31st March 2025">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20disclosure%20as%20on%2031st%20March%202025.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 31st March 2025 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 12 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 31st december 2024 third quarter prudential portfolio statement, co-lending distributions, and credit concentration ratios. q3 fy 2024-25 q3 fy25">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q3 FY 2024-25              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 31st December 2024</h3>
                <p className="notice-card-desc">
Third quarter prudential portfolio statement, co-lending distributions, and credit concentration ratios.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 245.3 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q3 FY25                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20Disclosure%20as%20on%2031st%20December%202024.pdf" download="Portfolio-Disclosure-31-Dec-2024-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 31st December 2024">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20Disclosure%20as%20on%2031st%20December%202024.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 31st December 2024 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 13 */}
          <div className="notice-card" data-category="portfolio" data-keywords="quarterly portfolio disclosure – as on 30th september 2024 quarterly financial asset health report, asset liability management (alm) profile, and retail credit advances. q2 fy 2024-25 q2 fy25">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Portfolio Disclosure              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Q2 FY 2024-25              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Quarterly Portfolio Disclosure – As on 30th September 2024</h3>
                <p className="notice-card-desc">
Quarterly financial asset health report, asset liability management (ALM) profile, and retail credit advances.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 232.0 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Q2 FY25                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20Disclosure%20as%20on%2030%20September%202024.pdf" download="Portfolio-Disclosure-30-Sept-2024-Prest-Loans.pdf" className="btn-notice-download" title="Download Quarterly Portfolio Disclosure – As on 30th September 2024">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20Disclosure%20as%20on%2030%20September%202024.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Quarterly Portfolio Disclosure – As on 30th September 2024 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 14 */}
          <div className="notice-card" data-category="portfolio" data-keywords="consolidated portfolio disclosure & asset performance summary master audited portfolio disclosure certificate covering co-origination book, asset classes, and partner allocations. statutory master certificate audited certificate">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-portfolio">
                <i className="fa-solid fa-file-shield"></i>
 Master Portfolio              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Statutory Master Certificate              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">
Consolidated Portfolio Disclosure & Asset Performance Summary                </h3>
                <p className="notice-card-desc">
Master audited portfolio disclosure certificate covering co-origination book, asset classes, and partner allocations.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 287.2 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Audited Certificate                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Portfolio%20Disclosure.pdf" download="Consolidated-Portfolio-Disclosure-Certificate.pdf" className="btn-notice-download" title="Download Consolidated Portfolio Disclosure & Asset Performance Summary">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Portfolio%20Disclosure.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Consolidated Portfolio Disclosure & Asset Performance Summary Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 15 */}
          <div className="notice-card" data-category="annual-return" data-keywords="annual return (form mgt-7) – financial year 2023-24 statutory annual return of lord krishna financial services ltd pursuant to section 92(3) of companies act, 2013 and rule 11(1) of companies (management and administration) rules, 2014. f.y. 2023 – 2024 form mgt-7">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-annual-return">
                <i className="fa-solid fa-file-shield"></i>
 Annual Return (MGT-7)              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 F.Y. 2023 – 2024              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Annual Return (Form MGT-7) – Financial Year 2023-24</h3>
                <p className="notice-card-desc">
Statutory annual return of Lord Krishna Financial Services Ltd pursuant to Section 92(3) of Companies Act, 2013 and Rule 11(1) of Companies (Management and Administration) Rules, 2014.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 2.96 MB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Form MGT-7                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Annual%20Return%20F.Y%2023-24.pdf" download="Form-MGT-7-Annual-Return-FY-2023-24.pdf" className="btn-notice-download" title="Download Annual Return (Form MGT-7) – Financial Year 2023-24">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Annual%20Return%20F.Y%2023-24.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Annual Return (Form MGT-7) – Financial Year 2023-24 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 16 */}
          <div className="notice-card" data-category="annual-return" data-keywords="annual return (form mgt-7) – financial year 2022-23 statutory annual return filed with the registrar of companies (roc) covering shareholding pattern, indebtedness, and directorship details for fy 2022-23. f.y. 2022 – 2023 form mgt-7">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-annual-return">
                <i className="fa-solid fa-file-shield"></i>
 Annual Return (MGT-7)              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 F.Y. 2022 – 2023              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Annual Return (Form MGT-7) – Financial Year 2022-23</h3>
                <p className="notice-card-desc">
Statutory annual return filed with the Registrar of Companies (ROC) covering shareholding pattern, indebtedness, and directorship details for FY 2022-23.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 3.97 MB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Form MGT-7                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202022-23.pdf" download="Form-MGT-7-Annual-Return-FY-2022-23.pdf" className="btn-notice-download" title="Download Annual Return (Form MGT-7) – Financial Year 2022-23">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202022-23.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Annual Return (Form MGT-7) – Financial Year 2022-23 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 17 */}
          <div className="notice-card" data-category="annual-return" data-keywords="annual return (form mgt-7) – financial year 2021-22 official statutory mgt-7 filing submitted to the ministry of corporate affairs (mca) for the financial period ended march 31, 2022. f.y. 2021 – 2022 form mgt-7">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-annual-return">
                <i className="fa-solid fa-file-shield"></i>
 Annual Return (MGT-7)              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 F.Y. 2021 – 2022              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Annual Return (Form MGT-7) – Financial Year 2021-22</h3>
                <p className="notice-card-desc">
Official statutory MGT-7 filing submitted to the Ministry of Corporate Affairs (MCA) for the financial period ended March 31, 2022.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 3.95 MB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Form MGT-7                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202021-22.pdf" download="Form-MGT-7-Annual-Return-FY-2021-22.pdf" className="btn-notice-download" title="Download Annual Return (Form MGT-7) – Financial Year 2021-22">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202021-22.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Annual Return (Form MGT-7) – Financial Year 2021-22 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 18 */}
          <div className="notice-card" data-category="annual-return" data-keywords="annual return (form mgt-7) – financial year 2020-21 statutory annual return filed under the companies act, 2013 detailing corporate governance, financial summaries, and statutory disclosures for fy 2020-21. f.y. 2020 – 2021 form mgt-7">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-annual-return">
                <i className="fa-solid fa-file-shield"></i>
 Annual Return (MGT-7)              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 F.Y. 2020 – 2021              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Annual Return (Form MGT-7) – Financial Year 2020-21</h3>
                <p className="notice-card-desc">
Statutory annual return filed under the Companies Act, 2013 detailing corporate governance, financial summaries, and statutory disclosures for FY 2020-21.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 4.05 MB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Form MGT-7                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202020-21.pdf" download="Form-MGT-7-Annual-Return-FY-2020-21.pdf" className="btn-notice-download" title="Download Annual Return (Form MGT-7) – Financial Year 2020-21">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Annual%20return%20for%20the%20F.Y%202020-21.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Annual Return (Form MGT-7) – Financial Year 2020-21 Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 19 */}
          <div className="notice-card" data-category="partner" data-keywords="co-lending code of conduct – ugro capital limited official code of conduct, borrower engagement standards, and operational fair practices guidelines under institutional co-lending collaboration with ugro capital. statutory co-lending policy co-lending governance">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-partner">
                <i className="fa-solid fa-file-shield"></i>
 Partner Governance              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Statutory Co-Lending Policy              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">Co-Lending Code of Conduct – UGRO Capital Limited</h3>
                <p className="notice-card-desc">
Official code of conduct, borrower engagement standards, and operational fair practices guidelines under institutional co-lending collaboration with UGRO Capital.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 162.3 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Co-Lending Governance                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Code%20of%20Conduct%20-%20UGRO.pdf" download="Co-Lending-Code-of-Conduct-UGRO.pdf" className="btn-notice-download" title="Download Co-Lending Code of Conduct – UGRO Capital Limited">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Code%20of%20Conduct%20-%20UGRO.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Co-Lending Code of Conduct – UGRO Capital Limited Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
          {/* Notice Card 20 */}
          <div className="notice-card" data-category="partner" data-keywords="grievance redressal mechanism – shivalik small finance bank (ssfb) dedicated customer escalation matrix, service standards, and grievance resolution policy for business correspondent partnerships with shivalik sfb. banking correspondent policy banking partner policy">
            <div className="notice-card-header">
              <span className="notice-cat-badge cat-partner">
                <i className="fa-solid fa-file-shield"></i>
 Partner Redressal              </span>
              <span className="notice-date-tag">
                <i className="fa-regular fa-calendar-check"></i>
 Banking Correspondent Policy              </span>
            </div>
            <div className="notice-card-body">
              <div className="notice-pdf-icon-box" title="PDF Document">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="notice-card-content">
                <h3 className="notice-card-title">
Grievance Redressal Mechanism – Shivalik Small Finance Bank (SSFB)                </h3>
                <p className="notice-card-desc">
Dedicated customer escalation matrix, service standards, and grievance resolution policy for business correspondent partnerships with Shivalik SFB.                </p>
                <div className="notice-meta-strip">
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-file-lines" style={{"color":"var(--primary-purple)"}}></i>
 PDF Document                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-hard-drive" style={{"color":"var(--primary-orange)"}}></i>
 370.4 KB                  </span>
                  <span className="notice-meta-item">
                    <i className="fa-solid fa-circle-check" style={{"color":"#16a34a"}}></i>
 Banking Partner Policy                  </span>
                </div>
              </div>
            </div>
            <div className="notice-card-actions">
              <a href="/assets/public_notice/Grievance%20redressal%20mechanism%20of%20SSFB.pdf" download="Grievance-Redressal-Mechanism-SSFB.pdf" className="btn-notice-download" title="Download Grievance Redressal Mechanism – Shivalik Small Finance Bank (SSFB)">
                <i className="fa-solid fa-download"></i>
                 <span>Download PDF</span>
              </a>
              <a href="/assets/public_notice/Grievance%20redressal%20mechanism%20of%20SSFB.pdf" target="_blank" rel="noopener" className="btn-notice-view" title="View Grievance Redressal Mechanism – Shivalik Small Finance Bank (SSFB) Online">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                 <span>View Online</span>
              </a>
            </div>
          </div>
        </div>
        {/* No Notices Found Alert Box */}
        <div id="no-notices-msg">
          <i className="fa-solid fa-folder-open"></i>
          <h3>No Public Notices Found</h3>
          <p>
No documents matched your search query. Try typing another keyword or clear your search.          </p>
          <button type="button" id="btn-reset-filters" className="btn-secondary" style={{"marginTop":"14px","padding":"10px 22px"}}>
            <i className="fa-solid fa-rotate-left"></i>
 Clear Search
                  </button>
        </div>
        {/* STATUTORY REGULATORY NOTE */}
        <div style={{"marginTop":"50px","background":"#ffffff","border":"1.5px solid #e2e8f0","borderRadius":"var(--radius-lg)","padding":"28px","boxShadow":"0 4px 20px rgba(0,0,0,0.03)"}}>
          <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
            <div style={{"width":"44px","height":"44px","borderRadius":"12px","background":"#eff6ff","color":"#2563eb","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","flexShrink":"0"}}>
              <i className="fa-solid fa-circle-info"></i>
            </div>
            <div>
              <h4 style={{"fontSize":"1.1rem","fontWeight":"800","color":"#0f172a","marginBottom":"6px"}}>Statutory Public Notice & Compliance Statement</h4>
              <p style={{"fontSize":"0.875rem","color":"#64748b","lineHeight":"1.65","margin":"0"}}>

              All documents listed on this repository are authentic public notices and statutory disclosures published by 
                              <strong>Lord Krishna Financial Services Limited (Prest Loans)</strong>
 in compliance with the Master Directions issued by 
              the                 <strong>Reserve Bank of India (RBI)</strong>
 and filing mandates under the                 <strong>Companies Act, 2013</strong>
. 
              Borrowers, investors, and members of the public can view or download these records freely. For any inquiries or authentications 
              regarding these notices, kindly write to our official compliance desk at 
                              <a href="mailto:info@prestloans.com" style={{"color":"var(--primary-purple)","fontWeight":"700"}}>info@prestloans.com</a>
.
                          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER */}
    {/* FLOATING ACTIONS & MODALS */}
    {/* JAVASCRIPT LIBS & INTERACTIVE NOTICE SEARCH FILTER */}

    </>
  );
};
