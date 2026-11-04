import React, { useEffect } from 'react';

export const About: React.FC = () => {
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
           <span>
About
          Us          </span>
        </div>
        <h1 className="page-banner-title">About Prest Loans</h1>
        <p className="page-banner-sub">

        Transforming small business lending in India with institutional trust, technological speed, and ethical finance
        since 1992.
              </p>
      </div>
    </section>
    {/* CORPORATE OVERVIEW */}
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img src="/assets/about/about-1.jpeg" alt="Prest Loans Corporate Team" className="about-main-img" />
            <div className="about-stat-overlay">
              <div className="num" data-counter="30" data-suffix="+ Years">0+ Years</div>
              <div className="label">Pioneering Credit Inclusion Across India</div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Fintech Agility Powered by 30+ Years of NBFC Heritage</h2>
            <p className="about-text">
              <strong>Prest Loans</strong>
 is the flagship digital trade name under which               <strong>
Lord Krishna Financial
              Services Ltd              </strong>
 operates its modern financial services. Incorporated in               <strong>1992</strong>
, our
            company is registered with the               <strong>Reserve Bank of India (RBI)</strong>
 as a Non-Deposit taking
            Non-Banking Financial Company (NBFC-ND).
                      </p>
            <p className="about-text">

            For over three decades, we have remained dedicated to powering the economic backbone of India: small and
            micro enterprises, manufacturers, wholesale merchants, retailers, and service enterprises. By
            replacing lengthy bank queues with sophisticated credit algorithms and alternative data analytics, we
            approve and disburse loans within 48 hours.
                      </p>
            <div className="rbi-reg-box" style={{"marginTop":"20px"}}>
              <h5>
                <i className="fa-solid fa-certificate"></i>
 Official Regulatory Identifiers              </h5>
              <p>
                <strong>Corporate Identity Number (CIN):</strong>
 U65993DL1992PLC049609              </p>
              <p>
                <strong>RBI Certificate of Registration:</strong>
 B-14.02019              </p>
              <p>
                <strong>Registered Office:</strong>
 M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MISSION, VISION & ETHICAL PILLARS */}
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Philosophy</span>
          <h2 className="section-title">Mission, Vision & Core Values</h2>
          <p className="section-desc">
Building long-term prosperity through responsible lending and financial transparency.
                  </p>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"28px"}}>
          <div style={{"background":"#ffffff","padding":"36px","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)"}}>
            <div style={{"width":"50px","height":"50px","borderRadius":"var(--radius-sm)","background":"var(--primary-purple-light)","color":"var(--primary-purple)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.4rem","marginBottom":"20px"}}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 style={{"fontSize":"1.3rem","fontWeight":"800","color":"#0f172a","marginBottom":"12px"}}>Our Mission</h3>
            <p style={{"color":"#475569","lineHeight":"1.7"}}>

            To bridge the formal credit deficit for underserved borrowers and families by providing fast,
            flexible, and customized digital credit without bureaucratic red tape.
                      </p>
          </div>
          <div style={{"background":"#ffffff","padding":"36px","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)"}}>
            <div style={{"width":"50px","height":"50px","borderRadius":"var(--radius-sm)","background":"var(--primary-orange-light)","color":"var(--primary-orange)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.4rem","marginBottom":"20px"}}>
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 style={{"fontSize":"1.3rem","fontWeight":"800","color":"#0f172a","marginBottom":"12px"}}>Our Vision</h3>
            <p style={{"color":"#475569","lineHeight":"1.7"}}>

            To be recognized as India's most trusted, empathetic, and innovative digital NBFC, setting the gold standard
            for speed, transparency, and sustainable finance.
                      </p>
          </div>
          <div style={{"background":"#ffffff","padding":"36px","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)"}}>
            <div style={{"width":"50px","height":"50px","borderRadius":"var(--radius-sm)","background":"#ecfdf5","color":"#10b981","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.4rem","marginBottom":"20px"}}>
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <h3 style={{"fontSize":"1.3rem","fontWeight":"800","color":"#0f172a","marginBottom":"12px"}}>
Fair Practices & Trust
                      </h3>
            <p style={{"color":"#475569","lineHeight":"1.7"}}>

            Zero hidden charges, transparent Key Fact Statements (KFS), responsible recovery protocols, and full
            compliance with Reserve Bank of India master guidelines.
                      </p>
          </div>
        </div>
      </div>
    </section>
    {/* BOARD OF DIRECTORS */}
    <section className="section" id="board-of-directors" style={{"paddingBottom":"30px"}}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-users-gear"></i>
 Corporate Governance          </span>
          <h2 className="section-title">Board of Directors</h2>
          <p className="section-desc">

          Experienced industry pioneers steering Prest Loans toward exemplary financial performance, regulatory
          integrity, and transformative financial inclusion.
                  </p>
        </div>
        {/* Guiding Principle Strip */}
        <div className="governance-guiding-card">
          <div className="governance-guiding-title">
            <i className="fa-solid fa-compass" style={{"fontSize":"1.5rem","color":"var(--primary-orange)"}}></i>
            <span>Our Dual Guiding Quests:</span>
          </div>
          <div className="governance-pillars">
            <div className="governance-pillar-badge">
              <i className="fa-solid fa-chart-line"></i>
              <span>1. Achieve Top-Tier Financial Performance</span>
            </div>
            <div className="governance-pillar-badge">
              <i className="fa-solid fa-heart"></i>
              <span>2. Make Prest Loans a Great Place to Work</span>
            </div>
          </div>
        </div>
        {/* Founder & Director Featured Spotlight Card */}
        <div className="founder-feature-card">
          <div className="founder-media">
            <div className="founder-img-wrapper">
              <img src="/assets/about/Ashok Mittal.jpg" alt="Ashok Mittal - Founder and Director" className="founder-img" />
              <span className="founder-badge-floating">
                <i className="fa-solid fa-certificate"></i>
 Founder & Director              </span>
            </div>
            <div className="founder-book-teaser" onClick={(event) => { try { (new Function('event', "openBookModal()")).call(event.currentTarget, event); } catch(e) {} }} onKeyDown={(event) => { try { (new Function('event', "if(event.key==='Enter'||event.key===' '){event.preventDefault();openBookModal();}")).call(event.currentTarget, event); } catch(e) {} }} role="button" tabIndex={0} title="Click to view book details and purchase links">
              <img src="/assets/about/fintech-book.jpg" alt="The Fintech Entrepreneur's Guide" className="founder-book-thumb" />
              <div className="founder-book-text">
                <strong>
Published Author                   <i className="fa-solid fa-arrow-up-right-from-square" style={{"fontSize":"0.72rem","marginLeft":"4px","color":"#ea580c"}}></i>
                </strong>
                <span>{`"The Fintech Entrepreneur's Guide" (Nov 2022)`}</span>
                <div className="founder-book-action-hint">
                  <span>Click for details & order</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="founder-details">
            <h3 className="founder-name">Ashok Mittal</h3>
            <div className="founder-designation">
              <i className="fa-solid fa-briefcase"></i>
 Founder & Director — Prest Loans (Lord Krishna Financial Services
            Ltd)
                      </div>
            <div className="founder-chips">
              <span className="founder-chip">
                <i className="fa-solid fa-award"></i>
 30+ Years Leadership              </span>
              <span className="founder-chip">
                <i className="fa-solid fa-graduation-cap"></i>
 Harvard Business School Exec
              Alumnus              </span>
              <span className="founder-chip">
                <i className="fa-solid fa-medal"></i>
 Gold Medallist (MDS)              </span>
              <span className="founder-chip">
                <i className="fa-solid fa-building-columns"></i>
 Ex-Union Bank & UCO Bank              </span>
              <span className="founder-chip">
                <i className="fa-solid fa-scroll"></i>
 MBM & CAIIB              </span>
            </div>
            <p className="founder-bio-text">

            Mr. Ashok Mittal is the visionary Founder and Director of digital lending NBFC               <strong>Prest Loans</strong>

            (Lord Krishna Financial Services Ltd). He is a seasoned financial sector leader possessing over               <strong>
30
              years of rich executive experience              </strong>
 spanning Capital and Commodities Markets, Banking Operations,
            Financial Services, and Foreign Exchange.
                      </p>
            <p className="founder-bio-text">

            Ashok completed the prestigious executive program               <em>
{`"Managing and Transforming Professional Service
              Firms"`}              </em>
 at               <strong>Harvard Business School</strong>
. A gold medallist commerce graduate from M.D.S.
            University, Rajasthan, he holds a Master’s in Banking Management (MBM) and professional CAIIB credentials.
            His expansive career features key leadership positions at premier financial institutions, underpinned by
            foundational commercial banking tenures with               <strong>Union Bank of India</strong>
 and               <strong>
UCO
              Bank              </strong>
.
                      </p>
            <p className="founder-bio-text">

            A prominent voice in Indian fintech and credit markets, he has been a regular expert on leading business
            television networks and print publications for over a decade. He has conducted more than               <strong>
200 public
              seminars              </strong>
 across capital market segments and addressed elite national conventions hosted by
                          <strong>
PHDCCI, FICCI, ASSOCHAM, National Stock Exchanges, and ICFAI              </strong>
.
                      </p>
            <div className="founder-recognition-box">
              <i className="fa-solid fa-trophy" style={{"color":"var(--primary-orange)","marginRight":"6px"}}></i>
              <strong>National Felicitations:</strong>
 Ashok has been honored by eminent national dignitaries including
            former President of India late               <strong>Mr. Pranab Mukherjee</strong>
, Prime Minister               <strong>
Mr. Narendra
              Modi              </strong>
, and Union Home Minister               <strong>Mr. Amit Shah</strong>
. In November 2022, he authored and
            released               <em>{`"The Fintech Entrepreneur's Guide"`}</em>
, delivering strategic blueprints for scalable fintech
            software and visionary credit design.
                      </div>
          </div>
        </div>
        {/* Other Directors Grid */}
        <div className="directors-grid">
          {/* Mamta Mittal */}
          <div className="director-card">
            <div className="director-header">
              <img src="/assets/about/Mamta Mittal.jpg" alt="Mamta Mittal - Managing Director" className="director-img" />
              <div className="director-info">
                <h4>Mamta Mittal</h4>
                <span className="director-role">Managing Director</span>
                <span className="director-tag">M.Sc. Chemistry & B.Ed. (MDS)</span>
              </div>
            </div>
            <p className="director-bio">

            A mother of two, Mamta completed her M.Sc. in Chemistry and B.Ed. from MDS University, Rajasthan. She has
            advised mid-corporate clients on diversified financial structures and is an active angel investor.
            Recognized for resolving multifaceted business and social challenges, Mamta is the driving force behind
            Prest Loans' innovative financial offerings, responsible governance frameworks, and empathetic people-first
            corporate policies.
                      </p>
          </div>
          {/* Manish Poddar */}
          <div className="director-card">
            <div className="director-header">
              <img src="/assets/about/Manish Poddar.jpg" alt="Manish Poddar - Director" className="director-img" />
              <div className="director-info">
                <h4>Manish Poddar</h4>
                <span className="director-role">Director</span>
                <span className="director-tag">Serial Entrepreneur</span>
              </div>
            </div>
            <p className="director-bio">

            Manish is a Commerce Graduate and accomplished Serial Entrepreneur with deep management, distribution, and
            marketing mastery across rural and trade-based economic ecosystems. With an exacting command over corporate
            finances and commercial law, he has successfully founded and steered businesses across Auto Finance,
            Commercial Fleet Logistics, Dealership Networks, and FMCG Distribution.
                      </p>
          </div>
          {/* Sandeep Saini */}
          <div className="director-card">
            <div className="director-header">
              <img src="/assets/about/sandeep-saini.png" alt="Sandeep Saini - Director" className="director-img" />
              <div className="director-info">
                <h4>Sandeep Saini</h4>
                <span className="director-role">Director</span>
                <span className="director-tag">21+ Yrs Banking & Risk</span>
              </div>
            </div>
            <p className="director-bio">

            Mr. Sandeep Saini brings over 21 years of institutional expertise across banking and capital markets,
            specializing in corporate credit underwriting, risk mitigation, and banking alliances. Throughout his
            distinguished tenure at leading institutions—including               <strong>HDFC Bank</strong>
,               <strong>
Emkay
              Global              </strong>
, and               <strong>Karvy</strong>
—he has earned an exemplary reputation for operational
            discipline and borrower-centric credit solutions.
                      </p>
          </div>
          {/* Naresh Goyal */}
          <div className="director-card">
            <div className="director-header">
              <img src="/assets/about/naresh-goyal.png" alt="Naresh Goyal - Director" className="director-img" />
              <div className="director-info">
                <h4>Naresh Goyal</h4>
                <span className="director-role">Director</span>
                <span className="director-tag">30+ Yrs Financial Markets</span>
              </div>
            </div>
            <p className="director-bio">

            Mr. Naresh Goyal brings three decades of rich experience across capital markets, commodity derivatives,
            agricultural financing, and financial services. Having held senior executive roles at               <strong>
Karvy
              Financial Services Ltd              </strong>
 and               <strong>Karvy Comtrade Ltd</strong>
, he spearheaded extensive business
            expansions across Northern India and contributes sharp strategic vision to Prest Loans' lending growth.
                      </p>
          </div>
        </div>
      </div>
    </section>
    {/* OUR ADVISORY BOARD */}
    <section className="section section-light" id="advisory-board">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-compass"></i>
 Strategic Counsel          </span>
          <h2 className="section-title">Our Advisory Board</h2>
          <p className="section-desc">

          Eminent banking veterans, senior corporate legal counsel, and technology innovators guiding our underwriting
          governance, risk models, and institutional strategy.
                  </p>
        </div>
        <div className="advisory-grid">
          {/* Rajiv Kishore Dubey */}
          <div className="advisor-card">
            <div className="advisor-top">
              <img src="/assets/about/Rajiv Kishor Dubey.jpg" alt="Rajiv Kishore Dubey - Advisory Board Member" className="advisor-img" />
              <div className="advisor-headline">
                <h4>Rajiv Kishore Dubey</h4>
                <div className="advisor-title">Strategic Banking & MSME Advisor</div>
                <span className="advisor-pill">
                  <i className="fa-solid fa-building-columns"></i>
 Ex-CMD, Canara Bank • Ex-ED,
                Central Bank                </span>
              </div>
            </div>
            <p className="advisor-desc">

            Mr. Rajiv Kishore Dubey is an award-winning leader and one of India’s most revered career bankers. He served
            as               <strong>Chairman & Managing Director (CMD) of Canara Bank</strong>
 and Executive Director of
                          <strong>Central Bank of India</strong>
, following a distinguished trajectory starting at               <strong>
Punjab
              National Bank (PNB)              </strong>
. His monumental turnaround of Canara Bank is recognized as an official
                          <strong>Harvard Business School / HBR case study</strong>
 taught worldwide. He has served as Chairman of the
            IBA Committee on Agro Business & MSME, Member of the CII National Council on Financial Sector
            Development, and Honorary Fellow & Governing Council Member of the Indian Institute of Banking &
            Finance (IIBF).
                      </p>
          </div>
          {/* Deepak Arora */}
          <div className="advisor-card">
            <div className="advisor-top">
              <img src="/assets/about/Deepak Arora.png" alt="Deepak Arora - Advisory Board Member" className="advisor-img" />
              <div className="advisor-headline">
                <h4>Deepak Arora</h4>
                <div className="advisor-title">Corporate Law, Governance & Insolvency Advisor</div>
                <span className="advisor-pill">
                  <i className="fa-solid fa-scale-balanced"></i>
 Fellow ICSI (FCS) • IBBI Insolvency
                Professional                </span>
              </div>
            </div>
            <p className="advisor-desc">

            Deepak is a Fellow Member of the Institute of Company Secretaries of India (ICSI), Law Graduate, and
            IBBI-registered Insolvency Professional with               <strong>over 20 years of practice</strong>
 in corporate law and
            management consulting. Former Managing Committee Member of ICSI Jaipur and Council Member of the Northern
            India Regional Council (NIRC), he provides expert counsel on MCA, SEBI, ROC, NCLT, and Reserve Bank of India
            (RBI) regulatory compliance to boards of major listed and unlisted corporate institutions in India and
            abroad.
                      </p>
          </div>
          {/* Amit Garg */}
          <div className="advisor-card">
            <div className="advisor-top">
              <img src="/assets/about/Amit Garg.jpg" alt="Amit Garg - Advisory Board Member" className="advisor-img" />
              <div className="advisor-headline">
                <h4>Amit Garg</h4>
                <div className="advisor-title">Technology & Digital Infrastructure Advisor</div>
                <span className="advisor-pill">
                  <i className="fa-solid fa-code"></i>
 IIT Bombay (M.Mgmt) • MD, SR TEKBOX                </span>
              </div>
            </div>
            <p className="advisor-desc">

            Amit is the Managing Director of               <strong>SR TEKBOX</strong>
 and a software industry veteran with over 20
            years of technology leadership across India and the United States. Formerly Principal & Vice President
            at               <strong>TENSOFT (San Jose, Silicon Valley)</strong>
, he architected flagship supply chain software
            solutions for the global fabless semiconductor industry. Amit began his career at               <strong>
Tata Consultancy
              Services (TCS)              </strong>
 in 1995. He holds a Master’s in Management from               <strong>IIT Bombay</strong>
 and an
            Engineering Degree from MBM Engineering College, Jodhpur.
                      </p>
          </div>
          {/* Sandeep Singal */}
          <div className="advisor-card">
            <div className="advisor-top">
              <img src="/assets/about/Sandeep Singal.jpg" alt="Sandeep Singal - Advisory Board Member" className="advisor-img" />
              <div className="advisor-headline">
                <h4>Sandeep Singal</h4>
                <div className="advisor-title">Capital Markets & Treasury Advisor</div>
                <span className="advisor-pill">
                  <i className="fa-solid fa-chart-pie"></i>
 Master of Business Finance • Ex-BSE,
                Emkay, Edelweiss                </span>
              </div>
            </div>
            <p className="advisor-desc">

            Sandeep Singal is a Mechanical Engineer and Master of Business Finance bringing over 20 years of senior
            capital markets and investment banking acumen. Commencing his career at the               <strong>
Bombay Stock Exchange
              (BSE)              </strong>
, he was instrumental in landmark national financial reforms including the migration to
            Rolling Settlements, Dematerialization (Demat) of equities, and the launch of Exchange-Traded Derivatives
            (F&O). He previously served as Head of Institutional Equities at               <strong>Emkay Global</strong>
 and
            Investment Banker at               <strong>Edelweiss</strong>
.
                      </p>
          </div>
        </div>
        {/* FOUNDER'S THOUGHT LEADERSHIP & BOOK SPOTLIGHT */}
        <div className="book-showcase-box">
          <div style={{"textAlign":"center"}}>
            <img src="/assets/about/fintech-book.jpg" alt="The Fintech Entrepreneur's Guide by Ashok Mittal" className="book-cover-img" />
          </div>
          <div>
            <span className="book-tag">
              <i className="fa-solid fa-feather-pointed"></i>
 Thought Leadership By Founder            </span>
            <h3 className="book-title">The Fintech Entrepreneur's Guide</h3>
            <div className="book-author">
By               <strong>Ashok Mittal</strong>
 | Published by BPB Publications (November 2022)
                      </div>
            <p className="book-desc">

            A comprehensive, field-tested roadmap for fintech innovators, banking professionals, and technology leaders.
            Drawing from over three decades of frontline banking, regulatory compliance, and credit operations, this
            book provides actionable insights on constructing scalable technological platforms, designing credit
            underwriting engines, and crafting enduring institutional vision documents.
                      </p>
            <div className="book-actions">
              <a href="https://www.amazon.in/Fintech-Entrepreneurs-Guide-Successful-Scalability-ebook/dp/B0BJYSF5F3" target="_blank" rel="noopener" className="btn-book-store btn-book-amazon">
                <i className="fa-brands fa-amazon"></i>
 Order on Amazon
                          </a>
              <a href="https://in.bpbonline.com/products/the-fintech-entrepreneurs-guide?_pos=1&_sid=124923941&_ss=r" target="_blank" rel="noopener" className="btn-book-store btn-book-bpb">
                <i className="fa-solid fa-book-open"></i>
 Order on BPB Online
                          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TIMELINE / JOURNEY */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Milestones</span>
          <h2 className="section-title">Our Growth Journey</h2>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(240px, 1fr))","gap":"20px"}}>
          <div style={{"background":"#f8fafc","padding":"24px","borderRadius":"var(--radius-md)","borderLeft":"4px solid var(--primary-purple)"}}>
            <span style={{"fontSize":"1.5rem","fontWeight":"800","color":"var(--primary-purple)"}}>1992</span>
            <h4 style={{"fontWeight":"700","margin":"6px 0"}}>Incorporation</h4>
            <p style={{"fontSize":"0.875rem","color":"#64748b"}}>
Lord Krishna Financial Services Ltd was incorporated to
            deliver commercial credit.            </p>
          </div>
          <div style={{"background":"#f8fafc","padding":"24px","borderRadius":"var(--radius-md)","borderLeft":"4px solid var(--primary-orange)"}}>
            <span style={{"fontSize":"1.5rem","fontWeight":"800","color":"var(--primary-orange)"}}>1998</span>
            <h4 style={{"fontWeight":"700","margin":"6px 0"}}>RBI Registration</h4>
            <p style={{"fontSize":"0.875rem","color":"#64748b"}}>
Granted Certificate of Registration by the Reserve Bank of
            India (B-14.02019).            </p>
          </div>
          <div style={{"background":"#f8fafc","padding":"24px","borderRadius":"var(--radius-md)","borderLeft":"4px solid var(--primary-purple)"}}>
            <span style={{"fontSize":"1.5rem","fontWeight":"800","color":"var(--primary-purple)"}}>2017</span>
            <h4 style={{"fontWeight":"700","margin":"6px 0"}}>Fintech Transformation</h4>
            <p style={{"fontSize":"0.875rem","color":"#64748b"}}>
Rebranded to 'Prest Loans', launching 100% paperless digital
            credit underwriting.            </p>
          </div>
          <div style={{"background":"#f8fafc","padding":"24px","borderRadius":"var(--radius-md)","borderLeft":"4px solid var(--primary-orange)"}}>
            <span style={{"fontSize":"1.5rem","fontWeight":"800","color":"var(--primary-orange)"}}>2026</span>
            <h4 style={{"fontWeight":"700","margin":"6px 0"}}>Digital Credit Expansion</h4>
            <p style={{"fontSize":"0.875rem","color":"#64748b"}}>
Disbursed ₹500+ Crores across 25,000+ borrowers, leading the
            digital lending segment.            </p>
          </div>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section style={{"background":"var(--calc-gradient)","color":"#fff","padding":"60px 0","textAlign":"center"}}>
      <div className="container">
        <h2 style={{"fontSize":"2.2rem","fontWeight":"800","marginBottom":"14px"}}>Ready to Power Your Dreams?</h2>
        <p style={{"fontSize":"1.05rem","opacity":"0.95","maxWidth":"600px","margin":"0 auto 28px"}}>

        Apply in 2 minutes or calculate your loan EMI to get customized financing.
              </p>
        <div style={{"display":"flex","justifyContent":"center","gap":"16px","flexWrap":"wrap"}}>
          <button className="btn-primary" style={{"background":"#ffffff","color":"#70146e"}} onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal()")).call(event.currentTarget, event); } catch(e) {} }}>

          Apply For Loan Now
                  </button>
          <a href="/calculator" className="btn-secondary" style={{"background":"transparent","color":"#fff","borderColor":"#fff"}}>

          Open Loan Calculator
                  </a>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS */}
    {/* BOOK PREVIEW & DETAILS MODAL */}
    {/* MODALS */}

    </>
  );
};
