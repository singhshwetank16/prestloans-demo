import React, { useEffect } from 'react';

export const RegulatoryCertifications: React.FC = () => {
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
          <span>Regulatory Certifications</span>
        </div>
        <span className="rbi-badge-pill" style={{"marginBottom":"14px","background":"rgba(255,255,255,0.18)","border":"1px solid rgba(255,255,255,0.3)","fontSize":"0.75rem","letterSpacing":"0.8px"}}>
          <i className="fa-solid fa-certificate" style={{"color":"#ffb088"}}></i>
 OFFICIAL STATUTORY ACCREDITATIONS & REGISTRATIONS
              </span>
        <h1 className="page-banner-title">Regulatory Certifications</h1>
        <p className="page-banner-sub" style={{"maxWidth":"860px"}}>

        Lord Krishna Financial Services Ltd (operating under the brand name           <strong>{`"Prest Loans"`}</strong>
) is an RBI-registered Non-Banking Financial Company (NBFC) holding all requisite statutory licenses, corporate incorporations, and credit bureau memberships.
              </p>
        {/* HERO STAT CARDS */}
        <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"18px","marginTop":"36px"}}>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>RBI Registered</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>CoR: B-14.02019</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-building"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>Incorporated 1992</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>CIN: U65993DL1992PLC049609</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-database"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>4 Credit Bureaus</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>CIBIL • Experian • CRIF • Equifax</div>
          </div>
          <div style={{"background":"rgba(255, 255, 255, 0.1)","backdropFilter":"blur(12px)","border":"1px solid rgba(255, 255, 255, 0.2)","borderRadius":"14px","padding":"18px","textAlign":"center"}}>
            <div style={{"fontSize":"1.3rem","color":"#ffb088","marginBottom":"6px"}}>
              <i className="fa-solid fa-stamp"></i>
            </div>
            <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#ffffff"}}>GST & MSME</div>
            <div style={{"fontSize":"0.75rem","color":"#cbd5e1"}}>Govt. Recognized & Compliant</div>
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
                <a href="/regulatory-certifications" className="policy-nav-link active">
                  <span>Regulatory Certifications</span>
                   <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
            </ul>
            {/* Corporate Quick Details */}
            <div style={{"marginTop":"24px","padding":"18px","background":"#faf5ff","border":"1px solid rgba(112, 20, 110, 0.15)","borderRadius":"12px"}}>
              <h5 style={{"fontSize":"0.9rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>
                <i className="fa-solid fa-building-circle-check"></i>
 Corporate Details
                          </h5>
              <p style={{"fontSize":"0.8125rem","color":"#475569","marginBottom":"6px","lineHeight":"1.5"}}>
                <strong>Company:</strong>
 Lord Krishna Financial Services Ltd
                          </p>
              <p style={{"fontSize":"0.8125rem","color":"#475569","marginBottom":"6px","lineHeight":"1.5"}}>
                <strong>Trade Name:</strong>
 Prest Loans
                          </p>
              <p style={{"fontSize":"0.8125rem","color":"#475569","marginBottom":"6px","lineHeight":"1.5"}}>
                <strong>CIN:</strong>
 U65993DL1992PLC049609
                          </p>
              <p style={{"fontSize":"0.8125rem","color":"#475569","marginBottom":"6px","lineHeight":"1.5"}}>
                <strong>RBI CoR:</strong>
 B-14.02019
                          </p>
              <p style={{"fontSize":"0.8125rem","color":"#475569","margin":"0","lineHeight":"1.5"}}>
                <strong>Date of Incorp:</strong>
 25th February 1992
                          </p>
            </div>
            {/* Sachet RBI Box */}
            <div style={{"marginTop":"14px","padding":"14px","background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"12px","fontSize":"0.78rem"}}>
              <div style={{"fontWeight":"700","color":"#1e293b","marginBottom":"4px"}}>
                <i className="fa-solid fa-building-columns" style={{"color":"#0284c7"}}></i>
 RBI Sachet Portal
                          </div>
              <p style={{"color":"#64748b","marginBottom":"8px","lineHeight":"1.35"}}>Verify NBFC registration & lodge regulatory queries.</p>
              <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener" style={{"color":"#0284c7","fontWeight":"700"}}>
Visit Sachet                 <i className="fa-solid fa-arrow-up-right-from-square" style={{"fontSize":"0.7rem"}}></i>
              </a>
            </div>
          </div>
          {/* MAIN CONTENT ARTICLE */}
          <article className="policy-article-card">
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"12px","borderBottom":"2px solid #f1f5f9","paddingBottom":"20px","marginBottom":"24px"}}>
              <div>
                <span className="section-tag" style={{"marginBottom":"8px"}}>
                  <i className="fa-solid fa-shield-halved"></i>
 Statutory Compliance                </span>
                <h2 style={{"fontSize":"1.9rem","fontWeight":"800","color":"#0f172a","margin":"0 0 6px"}}>Statutory Licenses & Regulatory Certifications</h2>
                <p style={{"color":"#64748b","fontSize":"0.875rem","margin":"0"}}>
Click on any certificate to view high-resolution enlarged image.                </p>
              </div>
            </div>
            {/* Category Filter Bar */}
            <div className="cert-filter-bar">
              <button className="cert-filter-btn active" onClick={(event) => { try { (new Function('event', "filterCerts('all', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-layer-group"></i>
 All Certificates (10)              </button>
              <button className="cert-filter-btn" onClick={(event) => { try { (new Function('event', "filterCerts('rbi', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-shield-halved"></i>
 Apex Regulator (RBI)              </button>
              <button className="cert-filter-btn" onClick={(event) => { try { (new Function('event', "filterCerts('mca', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-building"></i>
 Corporate (MCA)              </button>
              <button className="cert-filter-btn" onClick={(event) => { try { (new Function('event', "filterCerts('bureau', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-database"></i>
 Credit Bureaus (CIC)              </button>
              <button className="cert-filter-btn" onClick={(event) => { try { (new Function('event', "filterCerts('govt', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-file-invoice"></i>
 Tax & MSME              </button>
            </div>
            {/* Certificates Grid Display */}
            <div className="cert-grid" id="certGrid">
              {/* 1. RBI Certificate of Registration */}
              <div className="cert-card" data-category="rbi" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/RBI Certificate-merged-images-0.jpg', 'Reserve Bank of India (RBI) - Certificate of Registration', 'Apex Financial Regulator')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/RBI Certificate-merged-images-0.jpg" alt="RBI Certificate of Registration" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-rbi">
                      <i className="fa-solid fa-shield-halved"></i>
 Apex Regulator (RBI)                    </span>
                    <h3 className="cert-title">RBI Certificate of Registration</h3>
                    <p className="cert-authority">Issued by Reserve Bank of India • NBFC CoR No. B-14.02019</p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 2. Certificate of Incorporation */}
              <div className="cert-card" data-category="mca" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Cerificate of Incorporation.jpg', 'Ministry of Corporate Affairs - Certificate of Incorporation', 'Corporate Entity (MCA)')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Cerificate of Incorporation.jpg" alt="Certificate of Incorporation" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-mca">
                      <i className="fa-solid fa-building"></i>
 Corporate Entity (MCA)                    </span>
                    <h3 className="cert-title">Certificate of Incorporation</h3>
                    <p className="cert-authority">
Registrar of Companies, Delhi & Haryana • CIN: U65993DL1992PLC049609                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 3. Legal Entity Identifier (LEI) */}
              <div className="cert-card" data-category="mca" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/LEI Certificate.jpg', 'Legal Entity Identifier (LEI) Certificate', 'Statutory Identifier')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/LEI Certificate.jpg" alt="LEI Certificate" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-statutory">
                      <i className="fa-solid fa-id-card"></i>
 Statutory Identifier                    </span>
                    <h3 className="cert-title">Legal Entity Identifier (LEI)</h3>
                    <p className="cert-authority">
Legal Entity Identifier India Ltd (LEIL) / GLEIF • Global Financial Identifier                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 4. TransUnion CIBIL */}
              <div className="cert-card" data-category="bureau" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Cibil.jpg', 'TransUnion CIBIL Membership Certificate', 'Credit Information Bureau')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Cibil.jpg" alt="TransUnion CIBIL Membership" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-bureau">
                      <i className="fa-solid fa-database"></i>
 Credit Bureau (CIC)                    </span>
                    <h3 className="cert-title">TransUnion CIBIL Membership</h3>
                    <p className="cert-authority">
TransUnion CIBIL Ltd • Authorized Bureau Member & Data Integration                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 5. Experian Credit Bureau */}
              <div className="cert-card" data-category="bureau" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Experion.jpg', 'Experian Credit Information Membership Certificate', 'Credit Information Bureau')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Experion.jpg" alt="Experian Credit Bureau" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-bureau">
                      <i className="fa-solid fa-database"></i>
 Credit Bureau (CIC)                    </span>
                    <h3 className="cert-title">Experian Membership Certificate</h3>
                    <p className="cert-authority">
Experian Credit Information Co. of India • Direct Member & Underwriting                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 6. CRIF High Mark */}
              <div className="cert-card" data-category="bureau" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Crif.jpg', 'CRIF High Mark Credit Bureau Membership Certificate', 'Credit Information Bureau')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Crif.jpg" alt="CRIF High Mark" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-bureau">
                      <i className="fa-solid fa-database"></i>
 Credit Bureau (CIC)                    </span>
                    <h3 className="cert-title">CRIF High Mark Membership</h3>
                    <p className="cert-authority">
CRIF High Mark Credit Information Services • MSME & Retail Bureau                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 7. Equifax Credit Information */}
              <div className="cert-card" data-category="bureau" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Equifax.jpg', 'Equifax Credit Information Services Membership', 'Credit Information Bureau')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Equifax.jpg" alt="Equifax Credit Bureau" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-bureau">
                      <i className="fa-solid fa-database"></i>
 Credit Bureau (CIC)                    </span>
                    <h3 className="cert-title">Equifax Membership Certificate</h3>
                    <p className="cert-authority">
Equifax Credit Information Services Pvt Ltd • Authorized Bureau Member                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 8. GST Registration Certificate */}
              <div className="cert-card" data-category="govt" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/GST Registraion.jpg', 'Goods and Services Tax (GST) Registration Certificate - Page 1', 'Tax Compliance')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/GST Registraion.jpg" alt="GST Registration Certificate" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-tax">
                      <i className="fa-solid fa-receipt"></i>
 Tax Compliance                    </span>
                    <h3 className="cert-title">GST Registration (Page 1)</h3>
                    <p className="cert-authority">Dept. of Revenue, Ministry of Finance • Form GST REG-06</p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 9. GST Registration Annexure */}
              <div className="cert-card" data-category="govt" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/GST Registration 1.jpg', 'Goods and Services Tax (GST) Registration Certificate - Annexure A', 'Tax Compliance')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/GST Registration 1.jpg" alt="GST Registration Annexure" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-tax">
                      <i className="fa-solid fa-receipt"></i>
 Tax Compliance                    </span>
                    <h3 className="cert-title">GST Registration (Annexure A)</h3>
                    <p className="cert-authority">
Dept. of Revenue, Ministry of Finance • Branch & Additional Place Proof                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 10. Udyam MSME Registration */}
              <div className="cert-card" data-category="govt" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Udyam Registration Certificate.jpg', 'Udyam MSME Registration Certificate - Page 1', 'MSME Enterprise')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Udyam Registration Certificate.jpg" alt="Udyam MSME Registration" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-statutory">
                      <i className="fa-solid fa-industry"></i>
 MSME Enterprise                    </span>
                    <h3 className="cert-title">Udyam MSME Registration</h3>
                    <p className="cert-authority">
Ministry of Micro, Small and Medium Enterprises • Official Recognition                    </p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              {/* 11. Udyam MSME Registration Page 2 */}
              <div className="cert-card" data-category="govt" onClick={(event) => { try { (new Function('event', "openCertLightbox('assets/RegulatoryCertificate/Udyam Registration Certificate 1.jpg', 'Udyam MSME Registration Certificate - Annexure', 'MSME Enterprise')")).call(event.currentTarget, event); } catch(e) {} }}>
                <div className="cert-thumb-wrap">
                  <img src="/assets/RegulatoryCertificate/Udyam Registration Certificate 1.jpg" alt="Udyam MSME Annexure" className="cert-thumb-img" loading="lazy" />
                  <div className="cert-overlay-badge">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div>
                    <span className="cert-tag tag-statutory">
                      <i className="fa-solid fa-industry"></i>
 MSME Enterprise                    </span>
                    <h3 className="cert-title">Udyam MSME (Annexure)</h3>
                    <p className="cert-authority">Ministry of MSME • Enterprise Activities & DIC Verification</p>
                  </div>
                  <div className="cert-footer-action">
                    <span>View Full Certificate</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
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
                  <h5 style={{"fontSize":"0.95rem","fontWeight":"700","color":"#1e293b","marginBottom":"6px"}}>Statutory Transparency</h5>
                  <p style={{"fontSize":"0.85rem","color":"#64748b","lineHeight":"1.5","margin":"0"}}>

                  Prest Loans maintains 100% statutory transparency in compliance with Reserve Bank of India directions. For any compliance inquiries, contact our Legal & Secretarial Division at                     <a href="mailto:info@prestloans.com" style={{"color":"#70146e","fontWeight":"700"}}>info@prestloans.com</a>
.
                                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    {/* CERTIFICATE LIGHTBOX MODAL (Dedicated High-Priority Lightbox) */}
    <div id="certLightboxModal" className="cert-lightbox-overlay" onClick={(event) => { try { (new Function('event', "closeCertLightbox(event)")).call(event.currentTarget, event); } catch(e) {} }}>
      <div className="cert-lightbox-container" onClick={(event) => { try { (new Function('event', "event.stopPropagation()")).call(event.currentTarget, event); } catch(e) {} }}>
        {/* Modal Header */}
        <div className="cert-lightbox-header">
          <div>
            <span id="certModalBadge" className="cert-lightbox-badge">Apex Financial Regulator</span>
            <h3 id="certModalTitle" className="cert-lightbox-title">Reserve Bank of India (RBI) - Certificate of Registration</h3>
          </div>
          <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
            <a id="certModalOpenBtn" href="#" target="_blank" rel="noopener" className="btn-primary" style={{"padding":"8px 16px","fontSize":"0.8rem","textDecoration":"none","borderRadius":"8px"}}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
 Open Original
                      </a>
            <button type="button" className="cert-lightbox-close" onClick={(event) => { try { (new Function('event', "closeCertLightbox()")).call(event.currentTarget, event); } catch(e) {} }} title="Close (Esc)">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        {/* Modal Image Container */}
        <div className="cert-lightbox-body">
          <img id="certModalImg" src="" alt="Certificate" className="cert-lightbox-img" />
        </div>
      </div>
    </div>
    {/* FOOTER */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
