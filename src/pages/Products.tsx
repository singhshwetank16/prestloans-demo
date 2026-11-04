import React, { useEffect } from 'react';

export const Products: React.FC = () => {
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
          <span>Products</span>
        </div>
        <h1 className="page-banner-title">Our Loan Products</h1>
        <p className="page-banner-sub">

        Tailored digital financing solutions designed for business owners, entrepreneurs, home buyers, students, and
        working professionals.
              </p>
      </div>
    </section>
    {/* QUICK NAVIGATION PILLS BAR */}
    <div style={{"background":"#ffffff","borderBottom":"1px solid #e2e8f0","position":"sticky","top":"72px","zIndex":"20","boxShadow":"0 4px 12px rgba(0,0,0,0.03)"}}>
      <div className="container" style={{"paddingTop":"14px","paddingBottom":"14px"}}>
        <div style={{"display":"flex","gap":"10px","overflowX":"auto","paddingBottom":"4px","scrollbarWidth":"none"}}>
          <a href="#education-loan" className="product-nav-pill" style={{"display":"inline-flex","alignItems":"center","gap":"8px","padding":"8px 16px","borderRadius":"999px","background":"#f8fafc","border":"1px solid #e2e8f0","color":"#1e293b","fontSize":"0.875rem","fontWeight":"600","textDecoration":"none","whiteSpace":"nowrap","transition":"all 0.2s ease"}}>
            <i className="fa-solid fa-graduation-cap" style={{"color":"#70146e"}}></i>
 Coaching/Skill Development/Education Loans
                  </a>
          <a href="#personal-loan" className="product-nav-pill" style={{"display":"inline-flex","alignItems":"center","gap":"8px","padding":"8px 16px","borderRadius":"999px","background":"#f8fafc","border":"1px solid #e2e8f0","color":"#1e293b","fontSize":"0.875rem","fontWeight":"600","textDecoration":"none","whiteSpace":"nowrap","transition":"all 0.2s ease"}}>
            <i className="fa-solid fa-user-shield" style={{"color":"#70146e"}}></i>
 Personal Loan
                  </a>
          <a href="#short-term-personal-loan" className="product-nav-pill" style={{"display":"inline-flex","alignItems":"center","gap":"8px","padding":"8px 16px","borderRadius":"999px","background":"#f8fafc","border":"1px solid #e2e8f0","color":"#1e293b","fontSize":"0.875rem","fontWeight":"600","textDecoration":"none","whiteSpace":"nowrap","transition":"all 0.2s ease"}}>
            <i className="fa-solid fa-clock-rotate-left" style={{"color":"#f05a28"}}></i>
 Short Term Personal Loan
                  </a>
          <a href="#home-loan" className="product-nav-pill" style={{"display":"inline-flex","alignItems":"center","gap":"8px","padding":"8px 16px","borderRadius":"999px","background":"#f8fafc","border":"1px solid #e2e8f0","color":"#1e293b","fontSize":"0.875rem","fontWeight":"600","textDecoration":"none","whiteSpace":"nowrap","transition":"all 0.2s ease"}}>
            <i className="fa-solid fa-house-chimney" style={{"color":"#70146e"}}></i>
 Home Loan
                  </a>
          <a href="#business-loan" className="product-nav-pill" style={{"display":"inline-flex","alignItems":"center","gap":"8px","padding":"8px 16px","borderRadius":"999px","background":"#f8fafc","border":"1px solid #e2e8f0","color":"#1e293b","fontSize":"0.875rem","fontWeight":"600","textDecoration":"none","whiteSpace":"nowrap","transition":"all 0.2s ease"}}>
            <i className="fa-solid fa-briefcase" style={{"color":"#70146e"}}></i>
 Business Loan
                  </a>
        </div>
      </div>
    </div>
    {/* DETAILED PRODUCTS SHOWCASE */}
    <section className="section">
      <div className="container">
        {/* 1. Coaching/Skill Development/Education Loans */}
        <div id="education-loan" style={{"background":"#ffffff","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px","marginBottom":"40px","boxShadow":"var(--shadow-sm)","scrollMarginTop":"140px"}}>
          <div style={{"display":"flex","gap":"28px","alignItems":"flex-start","flexWrap":"wrap"}}>
            <img src="/assets/products/education-loan.jpg" alt="Education and Skill Development Loan" style={{"width":"260px","height":"180px","objectFit":"cover","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)","flexShrink":"0"}} />
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","gap":"10px","alignItems":"center","flexWrap":"wrap","marginBottom":"10px"}}>
                <span className="section-tag" style={{"background":"#fdf2f8","color":"#70146e","marginBottom":"0"}}>
Higher Studies
                & Upskilling                </span>
                <span style={{"background":"#70146e","color":"#ffffff","fontSize":"0.75rem","fontWeight":"700","padding":"4px 12px","borderRadius":"20px"}}>
Skill
                & Growth                </span>
              </div>
              <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>
Coaching/Skill
              Development/Education Loans              </h2>
              <p style={{"color":"#475569","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>

              Unsecured institutional financing covering coaching institutes, skill programs & degree studies.
                          </p>
              <div className="product-specs" style={{"marginBottom":"24px"}}>
                <div className="spec-item">
                  <span className="spec-title">Max Amount</span>
                  <span className="spec-val">
₹50,000 - ₹2.5
                  Lakhs                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Tenure</span>
                  <span className="spec-val">6 - 24 Month</span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Interest Rate</span>
                  <span className="spec-val">
12% – 18%
                  P.A.                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Facility</span>
                  <span className="spec-val">
Unsecured
                  Tie-Up                  </span>
                </div>
              </div>
              <ul className="product-features-list" style={{"marginBottom":"24px"}}>
                <li>
                  <i className="fa-solid fa-check"></i>
 Institutional coaching & university collaboration                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Family co-applicant repayment capacity                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Direct disbursement to educational institute                </li>
              </ul>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(260px, 1fr))","gap":"20px","marginBottom":"24px"}}>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-id-card-clip" style={{"color":"var(--primary-orange)"}}></i>
 Eligibility Criteria                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>
Confirmed admission in recognized coaching / university / skill program                    </li>
                    <li>
Earning family member / parent considered for repayment capacity                    </li>
                    <li>
Parent will be primary borrower if student is under 18 years                    </li>
                    <li>Satisfactory CIBIL score and credit history</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-file-invoice" style={{"color":"var(--primary-purple)"}}></i>
 Documents Required                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>KYC documents (Aadhaar & PAN) of applicant & co-applicant</li>
                    <li>Admission letter & fee structure from the institution</li>
                    <li>Income proof of earning family members</li>
                    <li>Latest 6 months bank statements</li>
                  </ul>
                </div>
              </div>
              <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Coaching/Skill Development/Education Loans', amount: 250000})")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-graduation-cap"></i>
 Apply for Coaching/Skill Development/Education Loans
                              </button>
                <a href="/calculator" className="btn-secondary">
                  <i className="fa-solid fa-calculator"></i>
 Calculate Education EMI
                              </a>
              </div>
            </div>
          </div>
        </div>
        {/* 2. Personal Loan */}
        <div id="personal-loan" style={{"background":"#ffffff","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px","marginBottom":"40px","boxShadow":"var(--shadow-sm)","scrollMarginTop":"140px"}}>
          <div style={{"display":"flex","gap":"28px","alignItems":"flex-start","flexWrap":"wrap"}}>
            <img src="/assets/products/personal-loan.jpg" alt="Personal Loan for Salaried Employees" style={{"width":"260px","height":"180px","objectFit":"cover","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)","flexShrink":"0"}} />
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","gap":"10px","alignItems":"center","flexWrap":"wrap","marginBottom":"10px"}}>
                <span className="section-tag" style={{"background":"#fdf2f8","color":"#70146e","marginBottom":"0"}}>
Salaried
                Professionals                </span>
                <span style={{"background":"#70146e","color":"#ffffff","fontSize":"0.75rem","fontWeight":"700","padding":"4px 12px","borderRadius":"20px"}}>
Corporate
                Tie-Up                </span>
              </div>
              <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>Personal Loan</h2>
              <p style={{"color":"#475569","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>

              Convenient, collateral-free personal loans for salaried employees under partnered organizations.
                          </p>
              <div className="product-specs" style={{"marginBottom":"24px"}}>
                <div className="spec-item">
                  <span className="spec-title">Max Amount</span>
                  <span className="spec-val">
₹10,000 -
                  ₹1 Lakhs                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Tenure</span>
                  <span className="spec-val">Up to 6 Months</span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Interest Rate</span>
                  <span className="spec-val">
18% – 30%
                  P.A.                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Processing</span>
                  <span className="spec-val">
Hassle-Free
                  Digital                  </span>
                </div>
              </div>
              <ul className="product-features-list" style={{"marginBottom":"24px"}}>
                <li>
                  <i className="fa-solid fa-check"></i>
 Convenient EMI deduction directly from salary                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Medical emergencies, home renovation & wedding needs                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Minimum documentation with employer tie-up                </li>
              </ul>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(260px, 1fr))","gap":"20px","marginBottom":"24px"}}>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-id-card-clip" style={{"color":"var(--primary-orange)"}}></i>
 Eligibility Criteria                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>
Applicant associated with partnered organization / corporate                    </li>
                    <li>Authorization required for EMI / dues deduction from salary</li>
                    <li>
Stable income profile & minimum 1 year continuous earning history                    </li>
                    <li>Good CIBIL score and clean credit conduct</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-file-invoice" style={{"color":"var(--primary-purple)"}}></i>
 Documents Required                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>KYC documents (Aadhaar Card and PAN Card)</li>
                    <li>Latest 6 months salary slips</li>
                    <li>Latest 6 months salary bank account statement</li>
                    <li>Employment ID card & EMI deduction authorization letter</li>
                  </ul>
                </div>
              </div>
              <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Personal Loan', amount: 100000})")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-user-shield"></i>
 Apply for Personal Loan
                              </button>
                <a href="/calculator" className="btn-secondary">
                  <i className="fa-solid fa-calculator"></i>
 Calculate Personal EMI
                              </a>
              </div>
            </div>
          </div>
        </div>
        {/* 3. Short Term Personal Loan */}
        <div id="short-term-personal-loan" style={{"background":"#ffffff","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px","marginBottom":"40px","boxShadow":"var(--shadow-sm)","scrollMarginTop":"140px"}}>
          <div style={{"display":"flex","gap":"28px","alignItems":"flex-start","flexWrap":"wrap"}}>
            <img src="/assets/products/short-term-personal-loan.jpg" alt="Short Term Personal Loan Instant Cash" style={{"width":"260px","height":"180px","objectFit":"cover","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)","flexShrink":"0"}} />
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","gap":"10px","alignItems":"center","flexWrap":"wrap","marginBottom":"10px"}}>
                <span className="section-tag" style={{"background":"#fff7ed","color":"#c2410c","marginBottom":"0"}}>
Digital Salary
                Advance                </span>
                <span style={{"background":"#c2410c","color":"#ffffff","fontSize":"0.75rem","fontWeight":"700","padding":"4px 12px","borderRadius":"20px"}}>
Instant
                Cash                </span>
              </div>
              <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>
Short Term Personal
              Loan              </h2>
              <p style={{"color":"#475569","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>

              100% paperless emergency credit directly credited to your active salary account in hours.
                          </p>
              <div className="product-specs" style={{"marginBottom":"24px"}}>
                <div className="spec-item">
                  <span className="spec-title">Amount</span>
                  <span className="spec-val">
₹5,000 to ₹1
                  Lakh                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Tenure</span>
                  <span className="spec-val">7 to 45 Days</span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Daily Rate</span>
                  <span className="spec-val">
Up to 1% per
                  day                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Verification</span>
                  <span className="spec-val">
Aadhaar
                  e-Sign                  </span>
                </div>
              </div>
              <ul className="product-features-list" style={{"marginBottom":"24px"}}>
                <li>
                  <i className="fa-solid fa-check"></i>
 Instant salary advance with zero physical visits                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Direct bank transfer in active salary account                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Automatic repayment via UPI AutoPay / e-NACH                </li>
              </ul>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(260px, 1fr))","gap":"20px","marginBottom":"24px"}}>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-id-card-clip" style={{"color":"var(--primary-orange)"}}></i>
 Eligibility Criteria                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>Indian resident salaried individual</li>
                    <li>Minimum monthly salary of ₹30,000 (regular bank credit)</li>
                    <li>Active salary bank account in applicant's name</li>
                    <li>Valid PAN Card & Aadhaar linked to mobile number</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-file-invoice" style={{"color":"var(--primary-purple)"}}></i>
 Documents Required                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>Valid PAN Card & Aadhaar Card</li>
                    <li>Aadhaar-linked mobile for instant OTP e-Sign</li>
                    <li>Salary account bank credentials / net banking statement</li>
                    <li>UPI AutoPay or e-NACH mandate registration</li>
                  </ul>
                </div>
              </div>
              <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Short Term Personal Loan', amount: 50000})")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-bolt"></i>
 Apply for Short Term Loan
                              </button>
                <a href="/calculator" className="btn-secondary">
                  <i className="fa-solid fa-calculator"></i>
 Repayment Calculator
                              </a>
              </div>
            </div>
          </div>
        </div>
        {/* 4. Home Loan */}
        <div id="home-loan" style={{"background":"#ffffff","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px","marginBottom":"40px","boxShadow":"var(--shadow-sm)","scrollMarginTop":"140px"}}>
          <div style={{"display":"flex","gap":"28px","alignItems":"flex-start","flexWrap":"wrap"}}>
            <img src="/assets/products/home-loan.png" alt="Home Loan and Housing Finance" style={{"width":"260px","height":"180px","objectFit":"cover","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)","flexShrink":"0"}} />
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","gap":"10px","alignItems":"center","flexWrap":"wrap","marginBottom":"10px"}}>
                <span className="section-tag" style={{"background":"#f0fdf4","color":"#16a34a","marginBottom":"0"}}>
Housing &
                Construction                </span>
                <span style={{"background":"#16a34a","color":"#ffffff","fontSize":"0.75rem","fontWeight":"700","padding":"4px 12px","borderRadius":"20px"}}>
Lowest
                Rates                </span>
              </div>
              <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>Home Loan</h2>
              <p style={{"color":"#475569","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>

              Affordable housing loans & renovation credit for your home with extended repayment tenures.
                          </p>
              <div className="product-specs" style={{"marginBottom":"24px"}}>
                <div className="spec-item">
                  <span className="spec-title">Max Amount</span>
                  <span className="spec-val">
Up to ₹25
                  Lakhs                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Tenure</span>
                  <span className="spec-val">Up to 20 Years</span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Interest Rate</span>
                  <span className="spec-val">
8% - 24%
                  P.A.                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Purpose</span>
                  <span className="spec-val">
Purchase &
                  Repair                  </span>
                </div>
              </div>
              <ul className="product-features-list" style={{"marginBottom":"24px"}}>
                <li>
                  <i className="fa-solid fa-check"></i>
 Residential property purchase & construction                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Extended tenure with low monthly EMIs                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Self-employed and salaried eligibility                </li>
              </ul>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(260px, 1fr))","gap":"20px","marginBottom":"24px"}}>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-id-card-clip" style={{"color":"var(--primary-orange)"}}></i>
 Eligibility Criteria                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>
Self-Employed Individuals: 2+ years operational track record                    </li>
                    <li>
Salaried Individuals: 1+ year salary track or cash salary proof                    </li>
                    <li>Good CIBIL score and consistent credit history</li>
                    <li>Clear and unencumbered residential property title</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-file-invoice" style={{"color":"var(--primary-purple)"}}></i>
 Documents Required                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>KYC documents of applicant & co-applicant</li>
                    <li>Bank statements of the last 12 months</li>
                    <li>Property documents (Patta / Registered GPA / Sale Deed)</li>
                    <li>Income proof / Salary slips / UDYAM certificate</li>
                  </ul>
                </div>
              </div>
              <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Home Loan', amount: 2500000})")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-house-chimney"></i>
 Apply for Home Loan
                              </button>
                <a href="/calculator" className="btn-secondary">
                  <i className="fa-solid fa-calculator"></i>
 Calculate Home Loan EMI
                              </a>
              </div>
            </div>
          </div>
        </div>
        {/* 5. Business Loan */}
        <div id="business-loan" style={{"background":"#ffffff","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px","marginBottom":"40px","boxShadow":"var(--shadow-sm)","scrollMarginTop":"140px"}}>
          <div style={{"display":"flex","gap":"28px","alignItems":"flex-start","flexWrap":"wrap"}}>
            <img src="/assets/products/business-loan.png" alt="Business Loan for Growth and Expansion" style={{"width":"260px","height":"180px","objectFit":"cover","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","boxShadow":"var(--shadow-sm)","flexShrink":"0"}} />
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","gap":"10px","alignItems":"center","flexWrap":"wrap","marginBottom":"10px"}}>
                <span className="section-tag" style={{"background":"#fff7ed","color":"#ea580c","marginBottom":"0"}}>
Working Capital
                & Growth                </span>
                <span style={{"background":"#ea580c","color":"#ffffff","fontSize":"0.75rem","fontWeight":"700","padding":"4px 12px","borderRadius":"20px"}}>
Fast
                Disbursal                </span>
              </div>
              <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>Business Loan</h2>
              <p style={{"color":"#475569","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>

              Collateral-free business credit up to ₹50 Lakhs to fuel your working capital, inventory, and enterprise
              expansion.
                          </p>
              <div className="product-specs" style={{"marginBottom":"24px"}}>
                <div className="spec-item">
                  <span className="spec-title">Max Amount</span>
                  <span className="spec-val">
Up to ₹50
                  Lakhs                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Tenure</span>
                  <span className="spec-val">Up to 36 Months</span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Interest Rate</span>
                  <span className="spec-val">
12% - 30%
                  PA                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-title">Disbursal</span>
                  <span className="spec-val">
Within 48
                  Hours                  </span>
                </div>
              </div>
              <ul className="product-features-list" style={{"marginBottom":"24px"}}>
                <li>
                  <i className="fa-solid fa-check"></i>
 100% collateral-free working capital facility                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Minimal documentation with instant online pre-approval                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
 Flexible repayment tenures with transparent rates                </li>
              </ul>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(260px, 1fr))","gap":"20px","marginBottom":"24px"}}>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-id-card-clip" style={{"color":"var(--primary-orange)"}}></i>
 Eligibility Criteria                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>Active business operations for a minimum of 1 year</li>
                    <li>Annual business turnover of ₹10 Lakhs and above</li>
                    <li>
Proprietorships, Partnerships, LLPs & Private Limited Companies                    </li>
                    <li>CIBIL score of 650+ preferred (evaluated holistically)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{"fontWeight":"700","color":"#0f172a","marginBottom":"8px"}}>
                    <i className="fa-solid fa-file-invoice" style={{"color":"var(--primary-purple)"}}></i>
 Documents Required                  </h4>
                  <ul style={{"fontSize":"0.875rem","color":"#475569","paddingLeft":"18px","lineHeight":"1.8"}}>
                    <li>KYC documents (PAN & Aadhaar) of promoters / partners</li>
                    <li>Last 6 to 12 months business bank account statements</li>
                    <li>
Business registration proof (GST certificate / Trade License)                    </li>
                    <li>Latest 1 to 2 years Income Tax Returns or GST returns</li>
                  </ul>
                </div>
              </div>
              <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Business Loan', amount: 500000})")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-briefcase"></i>
 Apply for Business Loan
                              </button>
                <a href="/calculator" className="btn-secondary">
                  <i className="fa-solid fa-calculator"></i>
 Calculate Business Loan EMI
                              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS */}
    {/* MODALS */}

    </>
  );
};
