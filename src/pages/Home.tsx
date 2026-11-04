import React, { useEffect } from 'react';

export const Home: React.FC = () => {
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
    {/* TOP ANNOUNCEMENT BAR */}
    {/* MAIN HEADER (Matching User's Screenshot 1) */}
    {/* ==========================================================================
       REAL-TIME LIVE ACTIVITY & DISBURSAL TICKER (MOVING CONTINUOUS MARQUEE)
       ========================================================================== */}
    {/* <div class="live-activity-bar" aria-label="Live Loan Disbursals">
    <div class="live-ticker-track"> */}
    {/* Group 1 */}
    {/* <div class="live-ticker-content">
        <span class="live-ticker-badge"><i class="fa-solid fa-bolt"></i> LIVE DISBURSALS</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹15,00,000 Sanctioned •
          Wholesale Trader, Delhi NCR <span class="text-time">(2 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-bolt text-orange"></i> ₹4,50,000 Machinery Line Approved •
          Jaipur, Rajasthan <span class="text-time">(5 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹25,00,000 Working Capital
          Approved in 48 Hrs • Ludhiana, Punjab <span class="text-time">(8 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-shield-halved text-purple"></i> RBI Statutory Compliance
          Audit • 100% Certified</span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹8,00,000 Home Loan
          Disbursed • Lucknow, UP <span class="text-time">(12 mins ago)</span></span>
      </div> */}
    {/* Group 2 (Duplicate for Infinite Seamless Marquee) */}
    {/* <div class="live-ticker-content" aria-hidden="true">
        <span class="live-ticker-badge"><i class="fa-solid fa-bolt"></i> LIVE DISBURSALS</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹15,00,000 Sanctioned •
          Wholesale Trader, Delhi NCR <span class="text-time">(2 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-bolt text-orange"></i> ₹4,50,000 Machinery Line Approved •
          Jaipur, Rajasthan <span class="text-time">(5 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹25,00,000 Working Capital
          Approved in 48 Hrs • Ludhiana, Punjab <span class="text-time">(8 mins ago)</span></span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-shield-halved text-purple"></i> RBI Statutory Compliance
          Audit • 100% Certified</span>
        <span class="live-ticker-dot">●</span>
        <span class="live-ticker-item"><i class="fa-solid fa-circle-check text-green"></i> ₹8,00,000 Home Loan
          Disbursed • Lucknow, UP <span class="text-time">(12 mins ago)</span></span>
      </div>
    </div>
  </div> */}
    {/* HERO SECTION */}
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge-tag">
              <i className="fa-solid fa-certificate"></i>
 RBI REGISTERED NBFC • FASTEST DISBURSAL
                      </div>
            <h1 className="hero-title">

            Power Your Dreams with               <span className="highlight-moving-gradient">Instant Digital Loans</span>
            </h1>
            <p className="hero-desc">

            Business loans, home loans, education loans, and personal loans, sourced through RBI-regulated lending
            partners.
            Clear eligibility criteria, upfront pricing, and a Key Fact Statement before you sign anything.
                      </p>
            <div className="hero-cta-group">
              <button className="btn-primary" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal()")).call(event.currentTarget, event); } catch(e) {} }}>
                <i className="fa-solid fa-bolt"></i>
 Apply For Loan
                          </button>
              <a href="#calculator" className="btn-secondary">
                <i className="fa-solid fa-calculator"></i>
 Calculate EMI
                          </a>
            </div>
            <div className="hero-trust-row">
              <div className="trust-stat">
                <span className="trust-stat-num" data-counter="500" data-prefix="₹">
₹0                  <span>Cr+</span>
                </span>
                <span className="trust-stat-label">Total Disbursed</span>
              </div>
              <div className="trust-stat">
                <span className="trust-stat-num" data-counter="25000" data-format="comma">
0                  <span>+</span>
                </span>
                <span className="trust-stat-label">Happy Borrowers</span>
              </div>
              <div className="trust-stat">
                <span className="trust-stat-num" data-counter="48">
0                  <span>Hrs</span>
                </span>
                <span className="trust-stat-label">Fast Disbursal</span>
              </div>
              <div className="trust-stat">
                <span className="trust-stat-num" data-counter="100">
0                  <span>%</span>
                </span>
                <span className="trust-stat-label">Paperless Digital</span>
              </div>
            </div>
          </div>
          {/* Quick Loan Application Card */}
          <div className="hero-card-wrap">
            <div className="hero-quick-apply-card">
              <div className="quick-card-badge">Instant Approval</div>
              <h3 className="quick-card-title">Get Instant Loan Quote</h3>
              <p className="quick-card-sub">
Check eligibility in 2 minutes without affecting CIBIL score              </p>
              {/* Key Feature Trust Badges (48-Hour Disbursal & 100% Digital Flow) */}
              <div className="quick-card-trust-row">
                <div className="trust-chip-pill">
                  <i className="fa-solid fa-bolt text-orange"></i>
                  <span>48-Hour Disbursal</span>
                </div>
                <div className="trust-chip-pill">
                  <i className="fa-solid fa-shield-halved text-green"></i>
                  <span>100% Digital Flow</span>
                </div>
              </div>
              <form id="hero-quick-form">
                <div className="quick-input-group">
                  <label className="quick-input-label">Required Loan Amount (₹)</label>
                  <input type="number" id="hero-loan-amount" className="quick-input-field" placeholder="e.g. 500000" value="500000" min="50000" max="5000000" required={true} />
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Loan Product</label>
                  <select id="hero-biz-type" className="quick-input-field">
                    <option value="Business Loan">Business Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Coaching/Skill Development/Education Loans">Education Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Short Term Personal Loan">Short Term Personal Loan</option>
                  </select>
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Mobile Number</label>
                  <input type="tel" id="hero-phone" className="quick-input-field" placeholder="10-digit mobile number" pattern="[0-9]{10}" required={true} />
                </div>
                <button type="submit" className="btn-card-submit">
                  <span>Check Eligibility Now</span>
                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <div className="quick-form-security-note">
                  <i className="fa-solid fa-circle-check text-green"></i>
                   <span>100% Paperless • Zero Impact on CIBIL</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       ABOUT PREST LOANS & LORD KRISHNA FINANCIAL SERVICES LTD
       ========================================================================== */}
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box reveal-on-scroll reveal-left is-visible">
            <img src="/assets/about/about-1.jpeg" alt="Prest Loans Team and Corporate Office" className="about-main-img" />
            <div className="about-stat-overlay">
              <div className="num" data-counter="30" data-suffix="+ Years">0+ Years</div>
              <div className="label">Financial Excellence & Trusted RBI Registered NBFC Heritage</div>
            </div>
          </div>
          <div className="about-content reveal-on-scroll reveal-right is-visible">
            <span className="section-tag">About The Company</span>
            <h2 className="section-title">Enabling Financial Inclusion Through Fintech Innovation</h2>
            <p className="about-text">
              <strong>Prest Loans</strong>
 is the flagship trade brand of               <strong>
Lord Krishna Financial Services
              Ltd              </strong>
, a Non-Banking Financial Company (NBFC) incorporated in 1992 and registered with the
                          <strong>Reserve Bank of India (RBI)</strong>
.
                      </p>
            <p className="about-text">

            Our primary mission is to democratize formal credit access for millions of aspiring homeowners, students,
            and salaried professionals across India who face persistent roadblocks
            in conventional banking channels. By harnessing proprietary underwriting algorithms, alternative cash flow
            analytics, and enterprise-grade digital infrastructure, we engineer frictionless credit delivery with utmost
            transparency and industry-leading turnaround times.
                      </p>
            <div className="about-points">
              <div className="point-card reveal-on-scroll delay-1 is-visible">
                <div className="point-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <div className="point-title">Speed & Agility</div>
                  <div className="point-sub">48-hour turn-around time from application to disbursal</div>
                </div>
              </div>
              <div className="point-card reveal-on-scroll delay-2 is-visible">
                <div className="point-icon">
                  <i className="fa-solid fa-fingerprint"></i>
                </div>
                <div>
                  <div className="point-title">100% Digital Flow</div>
                  <div className="point-sub">Video KYC, e-NACH mandates & automated verification</div>
                </div>
              </div>
              <div className="point-card">
                <div className="point-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div>
                  <div className="point-title">Fair & Ethical Lending</div>
                  <div className="point-sub">Strict adherence to RBI Fair Practices Code</div>
                </div>
              </div>
              <div className="point-card">
                <div className="point-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <div className="point-title">Flexible Working Capital</div>
                  <div className="point-sub">Structured credit tailored to your cash flows</div>
                </div>
              </div>
            </div>
            <div className="rbi-reg-box">
              <h5>
                <i className="fa-solid fa-building-columns"></i>
 Statutory Registration Notice              </h5>
              <p>

              Lord Krishna Financial Services Ltd |                 <strong>CIN:</strong>
 U65993DL1992PLC049609 |                 <strong>
RBI Reg.
                No.:                </strong>
 B-14.02019. Registered Office: M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002.
                          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       LOAN PRODUCTS SECTION
       ========================================================================== */}
    <section className="section section-light" id="products">
      <div className="container">
        <div className="section-header reveal-on-scroll is-visible">
          <span className="section-tag">Flexible Credit Solutions</span>
          <h2 className="section-title">Designed For Your Enterprise Needs</h2>
          <p className="section-desc">

          Every enterprise has unique growth milestones. Fuel your working capital cycles, bulk inventory procurement,
          machinery upgrades, and green fleet expansion with our tailored, tech-enabled credit solutions.
                  </p>
        </div>
        <div className="products-grid">
          {/* Product 1: Coaching/Skill Development/Education Loans */}
          <div className="product-card is-visible">
            <div className="product-card-img-wrap">
              <img src="/assets/products/education-loan.jpg" alt="Education & Skill Development Loan" className="product-card-img" />
              <span className="product-card-badge">Skill & Growth</span>
              <div className="product-icon-floating">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <div className="product-card-body">
              <span className="product-category-tag">Higher Studies & Upskilling</span>
              <h3 className="product-name">Coaching/Skill Development/Education Loans</h3>
              <p className="product-tagline">
Unsecured institutional financing covering coaching institutes, skill programs &
              degree studies.              </p>
              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-title">Max Amount</span>
                  <span className="spec-val">
₹50,000 -
                  ₹2.5 Lakhs                  </span>
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
              <ul className="product-features-list">
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
              <div className="product-card-footer">
                <button className="btn-product-apply" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Coaching/Skill Development/Education Loans', amount: 800000})")).call(event.currentTarget, event); } catch(e) {} }}>
Apply
                Now                </button>
                <a href="/products#education-loan" className="btn-product-details">Details</a>
              </div>
            </div>
          </div>
          {/* Product 2: Personal Loan */}
          <div className="product-card is-visible">
            <div className="product-card-img-wrap">
              <img src="/assets/products/personal-loan.jpg" alt="Personal Loan for Salaried Employees" className="product-card-img" />
              <span className="product-card-badge">Corporate Tie-Up</span>
              <div className="product-icon-floating">
                <i className="fa-solid fa-user-shield"></i>
              </div>
            </div>
            <div className="product-card-body">
              <span className="product-category-tag">Salaried Professionals</span>
              <h3 className="product-name">Personal Loan</h3>
              <p className="product-tagline">
Convenient, collateral-free personal loans for salaried employees under partnered
              organizations.              </p>
              <div className="product-specs">
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
              <ul className="product-features-list">
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
              <div className="product-card-footer">
                <button className="btn-product-apply" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Personal Loan', amount: 300000})")).call(event.currentTarget, event); } catch(e) {} }}>Apply Now</button>
                <a href="/products#personal-loan" className="btn-product-details">Details</a>
              </div>
            </div>
          </div>
          {/* Product 3: Short Term Personal Loan */}
          <div className="product-card is-visible">
            <div className="product-card-img-wrap">
              <img src="/assets/products/short-term-personal-loan.jpg" alt="Short Term Personal Loan Instant Cash" className="product-card-img" />
              <span className="product-card-badge highlight">Instant Cash</span>
              <div className="product-icon-floating">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
            </div>
            <div className="product-card-body">
              <span className="product-category-tag">Digital Salary Advance</span>
              <h3 className="product-name">Short Term Personal Loan</h3>
              <p className="product-tagline">
100% paperless emergency credit directly credited to your active salary account
              in hours.              </p>
              <div className="product-specs">
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
              <ul className="product-features-list">
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
              <div className="product-card-footer">
                <button className="btn-product-apply" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Short Term Personal Loan', amount: 50000})")).call(event.currentTarget, event); } catch(e) {} }}>
Apply
                Now                </button>
                <a href="/products#short-term-personal-loan" className="btn-product-details">Details</a>
              </div>
            </div>
          </div>
          {/* Product 4: Home Loan */}
          <div className="product-card is-visible">
            <div className="product-card-img-wrap">
              <img src="/assets/products/home-loan.png" alt="Home Loan and Housing Finance" className="product-card-img" />
              <span className="product-card-badge">Lowest Rates</span>
              <div className="product-icon-floating">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
            </div>
            <div className="product-card-body">
              <span className="product-category-tag">Housing & Construction</span>
              <h3 className="product-name">Home Loan</h3>
              <p className="product-tagline">
Affordable housing loans & renovation credit for your home with extended
              repayment tenures.              </p>
              <div className="product-specs">
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
              <ul className="product-features-list">
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
              <div className="product-card-footer">
                <button className="btn-product-apply" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Home Loan', amount: 2500000})")).call(event.currentTarget, event); } catch(e) {} }}>Apply Now</button>
                <a href="/products#home-loan" className="btn-product-details">Details</a>
              </div>
            </div>
          </div>
          {/* Product 5: Business Loan */}
          <div className="product-card is-visible">
            <div className="product-card-img-wrap">
              <img src="/assets/products/business-loan.png" alt="Business Loan for Growth & Expansion" className="product-card-img" />
              <span className="product-card-badge highlight">Fast Disbursal</span>
              <div className="product-icon-floating">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>
            <div className="product-card-body">
              <span className="product-category-tag">Working Capital & Growth</span>
              <h3 className="product-name">Business Loan</h3>
              <p className="product-tagline">
Collateral-free business credit up to ₹50 Lakhs to fuel your working capital,
              inventory, and enterprise expansion.              </p>
              <div className="product-specs">
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
              <ul className="product-features-list">
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
              <div className="product-card-footer">
                <button className="btn-product-apply" onClick={(event) => { try { (new Function('event', "window.openLoanApplicationModal({product: 'Business Loan', amount: 500000})")).call(event.currentTarget, event); } catch(e) {} }}>Apply Now</button>
                <a href="/products#business-loan" className="btn-product-details">Details</a>
              </div>
            </div>
          </div>
        </div>
        {/* Extra products quick banner */}
        <div className="products-more-strip reveal-on-scroll is-visible" style={{"marginTop":"30px"}}>
          <div className="more-strip-text">
            <strong>Looking for Comprehensive Loan Guidelines & Rate Charts?</strong>
            <span>
Explore detailed interest rate models, eligibility criteria, and regulatory certifications.            </span>
          </div>
          <a href="/products" className="btn-more-products">
            <span>Compare All Products</span>
             <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       LOAN CALCULATOR SECTION (EXACT LAYOUT FROM USER SCREENSHOT 3)
       Gradient Banner: Deep Purple to Warm Orange
       ========================================================================== */}
    <section className="calculator-section" id="calculator">
      <div className="calc-ambient-orb orb-1"></div>
      <div className="calc-ambient-orb orb-2"></div>
      <div className="container">
        <div className="calc-header-center">
          <div className="calc-badge">
            <span className="calc-badge-dot"></span>
            <span>SMART FINANCIAL SIMULATOR</span>
          </div>
          <h2 className="calc-title-main">How Much Capital Do You Need?</h2>
          <p className="calc-desc-sub">

          Instant EMI forecasting with 100% transparent reducing-balance calculation & zero hidden surprises.
                  </p>
          {/* Product Selector Switcher */}
          <div className="calc-product-tabs" role="tablist">
            <button type="button" className="calc-product-tab" data-loan-type="business" data-rate="14" data-tenure="3">
              <i className="fa-solid fa-briefcase"></i>
 Business Loan (14%)
                      </button>
            <button type="button" className="calc-product-tab active" data-loan-type="home" data-rate="9.5" data-tenure="10">
              <i className="fa-solid fa-house-chimney"></i>
 Home Loan (9.5%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="education" data-rate="12" data-tenure="5">
              <i className="fa-solid fa-graduation-cap"></i>
 Coaching/Skill Development/Education Loans (12%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="personal" data-rate="18" data-tenure="3">
              <i className="fa-solid fa-user-shield"></i>
 Personal Loan (18%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="short-term" data-rate="24" data-tenure="1">
              <i className="fa-solid fa-clock-rotate-left"></i>
 Short Term Personal Loan
                      </button>
          </div>
        </div>
        {/* Studio Card: 2-Column Split */}
        <div className="calc-studio-card">
          <div className="calc-studio-grid">
            {/* LEFT COLUMN: Interactive Sliders & Inputs */}
            <div className="calc-controls-col">
              {/* Control 1: Loan Amount */}
              <div className="calc-control-group">
                <div className="calc-control-top">
                  <div className="calc-field-info">
                    <span className="calc-field-icon">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </span>
                    <label htmlFor="calc-amount-input" className="calc-field-title">Required Loan Amount</label>
                  </div>
                  <div className="calc-val-badge">
                    <span className="currency-symbol">₹</span>
                    <input type="text" id="calc-amount-input" className="calc-input-field" placeholder="500000" value="500000" />
                  </div>
                </div>
                {/* Slider */}
                <div className="slider-wrapper">
                  <input type="range" id="calc-amount-slider" className="slider-range" min="50000" max="5000000" step="25000" value="500000" />
                  <div className="slider-limits">
                    <span>₹ 50 Thousand</span>
                    <span>₹ 50 Lakh</span>
                  </div>
                </div>
                {/* Quick Amount Chips */}
                <div className="calc-preset-chips" data-target="amount">
                  <button type="button" className="calc-chip-btn" data-val="100000">₹1 Lakh</button>
                  <button type="button" className="calc-chip-btn" data-val="300000">₹3 Lakh</button>
                  <button type="button" className="calc-chip-btn active" data-val="500000">₹5 Lakh</button>
                  <button type="button" className="calc-chip-btn" data-val="1000000">₹10 Lakh</button>
                  <button type="button" className="calc-chip-btn" data-val="2500000">₹25 Lakh</button>
                  <button type="button" className="calc-chip-btn" data-val="5000000">₹50 Lakh</button>
                </div>
              </div>
              {/* Control 2: Interest Rate */}
              <div className="calc-control-group">
                <div className="calc-control-top">
                  <div className="calc-field-info">
                    <span className="calc-field-icon">
                      <i className="fa-solid fa-percent"></i>
                    </span>
                    <label htmlFor="calc-rate-input" className="calc-field-title">Interest Rate (% P.A.)</label>
                  </div>
                  <div className="calc-val-badge">
                    <input type="text" id="calc-rate-input" className="calc-input-field" placeholder="14" value="14" />
                    <span className="percent-symbol">%</span>
                  </div>
                </div>
                {/* Slider */}
                <div className="slider-wrapper">
                  <input type="range" id="calc-rate-slider" className="slider-range" min="8" max="30" step="0.5" value="14" />
                  <div className="slider-limits">
                    <span>8% Minimum</span>
                    <span>30% Maximum</span>
                  </div>
                </div>
                {/* Quick Rate Chips */}
                <div className="calc-preset-chips" data-target="rate">
                  <button type="button" className="calc-chip-btn" data-val="10">10%</button>
                  <button type="button" className="calc-chip-btn" data-val="12">12%</button>
                  <button type="button" className="calc-chip-btn active" data-val="14">14% (Std)</button>
                  <button type="button" className="calc-chip-btn" data-val="16">16%</button>
                  <button type="button" className="calc-chip-btn" data-val="18">18%</button>
                </div>
              </div>
              {/* Control 3: Loan Tenure */}
              <div className="calc-control-group">
                <div className="calc-control-top">
                  <div className="calc-field-info">
                    <span className="calc-field-icon">
                      <i className="fa-regular fa-calendar-check"></i>
                    </span>
                    <label htmlFor="calc-tenure-input" className="calc-field-title">Loan Duration / Tenure</label>
                  </div>
                  <div className="calc-val-badge">
                    <input type="text" id="calc-tenure-input" className="calc-input-field" placeholder="3" value="3" />
                    <span className="tenure-unit">Years</span>
                    <span className="tenure-months-badge" id="calc-tenure-months">(36 Mo)</span>
                  </div>
                </div>
                {/* Slider */}
                <div className="slider-wrapper">
                  <input type="range" id="calc-tenure-slider" className="slider-range" min="1" max="10" step="1" value="3" />
                  <div className="slider-limits">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
                {/* Quick Tenure Chips */}
                <div className="calc-preset-chips" data-target="tenure">
                  <button type="button" className="calc-chip-btn" data-val="1">1 Year</button>
                  <button type="button" className="calc-chip-btn" data-val="2">2 Years</button>
                  <button type="button" className="calc-chip-btn active" data-val="3">3 Years</button>
                  <button type="button" className="calc-chip-btn" data-val="5">5 Years</button>
                  <button type="button" className="calc-chip-btn" data-val="7">7 Years</button>
                </div>
              </div>
            </div>
            {/* RIGHT COLUMN: Realtime Results & Visual Donut Analytics */}
            <div className="calc-results-col">
              {/* Hero Monthly EMI Display */}
              <div className="calc-hero-emi-card">
                <div className="calc-hero-top">
                  <span className="calc-hero-badge">
                    <i className="fa-solid fa-bolt-lightning"></i>
 MONTHLY OUTFLOW                  </span>
                  <span className="calc-reducing-tag">Reducing Rate EMI</span>
                </div>
                <div className="calc-hero-amount-row">
                  <span className="calc-hero-value" id="calc-emi-result">₹ 17,089</span>
                  <span className="calc-hero-unit">/ month</span>
                </div>
                <p className="calc-hero-note">
Zero advance installments • Direct auto-debit via e-NACH mandate                </p>
              </div>
              {/* Interactive Donut Breakdown */}
              <div className="calc-breakdown-card">
                <div className="calc-donut-wrap">
                  <svg className="calc-donut-chart" viewBox="0 0 100 100">
                    <circle className="donut-bg" cx="50" cy="50" r="42"></circle>
                    <circle className="donut-interest" id="donut-interest-circle" cx="50" cy="50" r="42"></circle>
                    <circle className="donut-principal" id="donut-principal-circle" cx="50" cy="50" r="42"></circle>
                  </svg>
                  <div className="donut-center-info">
                    <span className="donut-center-ratio" id="donut-center-ratio">70%</span>
                    <span className="donut-center-sub">Principal</span>
                  </div>
                </div>
                {/* Donut Legends */}
                <div className="calc-donut-legend">
                  <div className="legend-item">
                    <div className="legend-title">
                      <span className="legend-dot principal"></span>
                      <span>Principal Amount</span>
                    </div>
                    <span className="legend-val" id="calc-principal-display">₹ 5,00,000</span>
                    <span className="legend-pct" id="ratio-p">70%</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-title">
                      <span className="legend-dot interest"></span>
                      <span>Total Interest</span>
                    </div>
                    <span className="legend-val" id="calc-interest-result">₹ 1,15,204</span>
                    <span className="legend-pct" id="ratio-i">30%</span>
                  </div>
                </div>
              </div>
              {/* Summary Total Payable */}
              <div className="calc-total-pay-box">
                <div className="total-pay-info">
                  <span className="total-pay-label">Total Amount Payable</span>
                  <span className="total-pay-sub">(Principal + Interest over selected tenure)</span>
                </div>
                <span className="total-pay-value" id="calc-total-result">₹ 6,15,204</span>
              </div>
              {/* Hidden elements for backward compatibility */}
              <div style={{"display":"none"}} aria-hidden="true">
                <div id="breakdown-bar-p"></div>
                <div id="breakdown-bar-i"></div>
              </div>
              {/* Apply Button */}
              <button id="calc-apply-btn" className="btn-calc-apply">
                <span>Apply For This Loan</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              {/* Trust Badges */}
              <div className="calc-trust-strip">
                <div className="calc-trust-item">
                  <i className="fa-solid fa-circle-check"></i>
 48-Hour Disbursal                </div>
                <div className="calc-trust-item">
                  <i className="fa-solid fa-shield-halved"></i>
 RBI Regulated NBFC                </div>
                <div className="calc-trust-item">
                  <i className="fa-solid fa-file-shield"></i>
 Zero Hidden Fees                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       LENDING PARTNERS & SOURCING PARTNERS (MARQUEE / LOGO SHOWCASE)
       ========================================================================== */}
    <section className="partners-section">
      <div className="container">
        <div className="partner-type-title">Strategic Lending & Financial Partners</div>
      </div>
      <div className="carousel-ticker-wrap">
        <div className="carousel-ticker-track track-scroll-partners">
          <div className="carousel-ticker-group">
            <a href="https://fintreefinance.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="FinTree Finance Private Limited">
              <img src="/assets/lending_partner/FinTree-Logo.jpg" alt="FinTree Partner" />
            </a>
            <a href="https://rohahousing.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Roha Housing Finance">
              <img src="/assets/lending_partner/RohaLogo.png" alt="Roha Housing Partner" />
            </a>
            <a href="https://growmoneycapital.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Grow Money Capital Pvt. Ltd.">
              <img src="/assets/lending_partner/grow-logo.png" alt="Grow Money Capital Partner" />
            </a>
            <a href="https://www.lendenclub.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="LenDenClub">
              <img src="/assets/lending_partner/lenden.png" alt="LenDen Partner" />
            </a>
            <a href="https://www.i2ifunding.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="i2ifunding">
              <img src="/assets/lending_partner/logo.png" alt="i2ifunding Partner" />
            </a>
            <a href="https://www.bajajfinserv.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Bajaj Finserv">
              <img src="/assets/lending_partner/Bajaj-Fin.png" alt="Bajaj Finserv Partner" />
            </a>
            <a href="https://www.ugrocapital.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="UGRO Capital">
              <img src="/assets/lending_partner/logo_ugro.jpg" alt="UGRO Capital Partner" />
            </a>
            <a href="https://shivalik.bank.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Shivalik Small Finance Bank">
              <img src="/assets/lending_partner/shivalik.png" alt="Shivalik Bank Partner" />
            </a>
            <div className="partner-logo-item" title="OML">
              <img src="/assets/lending_partner/logo Oml.jpg" alt="OML Partner" />
            </div>
          </div>
          <div className="carousel-ticker-group" aria-hidden="true">
            <a href="https://fintreefinance.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="FinTree Finance Private Limited" tabIndex={-1}>
              <img src="/assets/lending_partner/FinTree-Logo.jpg" alt="FinTree Partner" />
            </a>
            <a href="https://rohahousing.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Roha Housing Finance" tabIndex={-1}>
              <img src="/assets/lending_partner/RohaLogo.png" alt="Roha Housing Partner" />
            </a>
            <a href="https://growmoneycapital.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Grow Money Capital Pvt. Ltd." tabIndex={-1}>
              <img src="/assets/lending_partner/grow-logo.png" alt="Grow Money Capital Partner" />
            </a>
            <a href="https://www.lendenclub.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="LenDenClub" tabIndex={-1}>
              <img src="/assets/lending_partner/lenden.png" alt="LenDen Partner" />
            </a>
            <a href="https://www.i2ifunding.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="i2ifunding" tabIndex={-1}>
              <img src="/assets/lending_partner/logo.png" alt="i2ifunding Partner" />
            </a>
            <a href="https://www.bajajfinserv.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Bajaj Finserv" tabIndex={-1}>
              <img src="/assets/lending_partner/Bajaj-Fin.png" alt="Bajaj Finserv Partner" />
            </a>
            <a href="https://www.ugrocapital.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="UGRO Capital" tabIndex={-1}>
              <img src="/assets/lending_partner/logo_ugro.jpg" alt="UGRO Capital Partner" />
            </a>
            <a href="https://shivalik.bank.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Shivalik Small Finance Bank" tabIndex={-1}>
              <img src="/assets/lending_partner/shivalik.png" alt="Shivalik Bank Partner" />
            </a>
            <div className="partner-logo-item" title="OML">
              <img src="/assets/lending_partner/logo Oml.jpg" alt="OML Partner" />
            </div>
          </div>
        </div>
      </div>
      {/* Authorized Loan Sourcing Partners (Static Grid Display, Carousel Removed) */}
      <div className="container" style={{"marginTop":"36px"}}>
        <div className="partner-type-title">Authorized Loan Sourcing Partners</div>
        <div className="sourcing-partners-grid">
          <a href="https://rupymart.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Rupymart | Smarter Credit. Stronger Decisions.">
            <img src="/assets/loan_provider/Rupymart_Logo.png" alt="Rupymart Sourcing Partner" />
          </a>
          <a href="https://finz.club/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="FinZ">
            <img src="/assets/loan_provider/finz-logo.svg" alt="FinZ Partner" />
          </a>
          <a href="https://rupinow.com/home" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="Rupinow — Personal Loans up to ₹5 Lakh">
            <img src="/assets/loan_provider/rupinow-logo.png" alt="Rupinow Partner" />
          </a>
          <a href="https://www.karmalife.ai/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="India’s Largest Earned Wage Access Platform">
            <img src="/assets/loan_provider/Karmalife.jpg" alt="KarmaLife Partner" />
          </a>
          <a href="https://moneyase.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-item" title="MoneyAse">
            <img src="/assets/loan_provider/MoneyAse.jpeg" alt="MoneyAse Partner" />
          </a>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       CUSTOMERS' STORIES / TESTIMONIALS (REAL CUSTOMERS FROM ASSETS)
       ========================================================================== */}
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Borrower Success Stories</span>
          <h2 className="section-title">What Our Borrowers Say About Us</h2>
          <p className="section-desc">

          Empowering over 25,000+ ambitious individuals, students, and homeowners
          driving India's economic growth.
                  </p>
        </div>
      </div>
      {/* Moving Testimonials Carousel Track */}
      <div className="carousel-ticker-wrap">
        <div className="carousel-ticker-track track-scroll-testimonials">
          {/* Group 1 */}
          <div className="carousel-ticker-group">
            {/* Customer 1: Rajeev Khetan */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Prest Loans' digital processing was remarkably swift. When we required urgent capital to scale our
              home renovation, our loan was sanctioned and credited within 48 hours. Zero paperwork
              hassles, upfront pricing, and absolute transparency won our complete trust!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/636345295057086250Rajeevkhetan.jpg" alt="Rajeev Khetan" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajeev Khetan</h4>
                  <p>Wholesale Trader • Delhi NCR (₹15 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 2: Parmeshwar */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Traditional commercial banks delayed our facility for months demanding property collateral. The Prest
              Loans team evaluated our audited GST sales and cash flows, sanctioning an ₹8 Lakh collateral-free working
              capital line immediately. Outstanding responsiveness and true partnership for manufacturers!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/636345295405992500parmeshwar.png" alt="Parmeshwar" className="author-avatar" />
                <div className="author-info">
                  <h4>Parmeshwar Sharma</h4>
                  <p>Manufacturing Unit Owner • Haryana (₹8 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 3: Rajesh Kumar Patwa */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Our retail outlet needed rapid liquidity to procure festive inventory. We simulated our repayments on the
              Prest Loans EMI calculator, submitted our digital application, and had funds disbursed to our account in
              under 48 hours. Highly recommended for growth-oriented retail enterprises!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639621804852875010036 Rajehs kumar patwa.jpg" alt="Rajesh Kumar Patwa" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajesh Kumar Patwa</h4>
                  <p>Retail Enterprise • Rajasthan (₹5 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 4: Raj Kumar */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "The client advisory team at Prest Loans is exceptionally supportive and professional. The repayment
              amortization and compliance disclosures are crystal clear with zero hidden clauses. With this capital
              injection, our workshop’s manufacturing capacity expanded by 40%."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639622708290375010051 raj kumar.jpg" alt="Raj Kumar" className="author-avatar" />
                <div className="author-info">
                  <h4>Raj Kumar</h4>
                  <p>Auto Components Fabricator • Punjab (₹12 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 5: Shiv Narayan Paul */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "We partnered with Prest Loans to finance our commercial transport and delivery operations. Their quick
              sanction,
              minimal documentation, and flexible repayment schedules made scaling seamless. Our fleet operations and
              net monthly
              earnings have surged three-fold since disbursal."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639623573587250010059 shiv narayan Paul.jpg" alt="Shiv Narayan Paul" className="author-avatar" />
                <div className="author-info">
                  <h4>Shiv Narayan Paul</h4>
                  <p>Fleet & Logistics Operator • UP (₹6 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 6: Rajesh */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "What sets Prest Loans apart is their ethical governance and total fee transparency. As an RBI-registered
              NBFC, they maintain exemplary compliance with zero surprise charges. Every ambitious entrepreneur should
              consider them their first-choice financial partner."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639623935352875010033 rajesh same.jpg" alt="Rajesh Sharma" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajesh Sharma</h4>
                  <p>Garments Merchant • Delhi (₹10 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
          <div className="carousel-ticker-group" aria-hidden="true">
            {/* Customer 1: Rajeev Khetan */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Prest Loans' digital processing was remarkably swift. When we required urgent capital to scale our
              home renovation, our loan was sanctioned and credited within 48 hours. Zero paperwork
              hassles, upfront pricing, and absolute transparency won our complete trust!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/636345295057086250Rajeevkhetan.jpg" alt="Rajeev Khetan" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajeev Khetan</h4>
                  <p>Wholesale Trader • Delhi NCR (₹15 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 2: Parmeshwar */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Traditional commercial banks delayed our facility for months demanding property collateral. The Prest
              Loans team evaluated our audited GST sales and cash flows, sanctioning an ₹8 Lakh collateral-free working
              capital line immediately. Outstanding responsiveness and true partnership for manufacturers!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/636345295405992500parmeshwar.png" alt="Parmeshwar" className="author-avatar" />
                <div className="author-info">
                  <h4>Parmeshwar Sharma</h4>
                  <p>Manufacturing Unit Owner • Haryana (₹8 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 3: Rajesh Kumar Patwa */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "Our retail outlet needed rapid liquidity to procure festive inventory. We simulated our repayments on the
              Prest Loans EMI calculator, submitted our digital application, and had funds disbursed to our account in
              under 48 hours. Highly recommended for growth-oriented retail enterprises!"
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639621804852875010036 Rajehs kumar patwa.jpg" alt="Rajesh Kumar Patwa" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajesh Kumar Patwa</h4>
                  <p>Retail Enterprise • Rajasthan (₹5 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 4: Raj Kumar */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "The client advisory team at Prest Loans is exceptionally supportive and professional. The repayment
              amortization and compliance disclosures are crystal clear with zero hidden clauses. With this capital
              injection, our workshop’s manufacturing capacity expanded by 40%."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639622708290375010051 raj kumar.jpg" alt="Raj Kumar" className="author-avatar" />
                <div className="author-info">
                  <h4>Raj Kumar</h4>
                  <p>Auto Components Fabricator • Punjab (₹12 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 5: Shiv Narayan Paul */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "We partnered with Prest Loans to finance our commercial transport and delivery operations. Their quick
              sanction,
              minimal documentation, and flexible repayment schedules made scaling seamless. Our fleet operations and
              net monthly
              earnings have surged three-fold since disbursal."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639623573587250010059 shiv narayan Paul.jpg" alt="Shiv Narayan Paul" className="author-avatar" />
                <div className="author-info">
                  <h4>Shiv Narayan Paul</h4>
                  <p>Fleet & Logistics Operator • UP (₹6 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer 6: Rajesh */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="testimonial-text">
{`
              "What sets Prest Loans apart is their ethical governance and total fee transparency. As an RBI-registered
              NBFC, they maintain exemplary compliance with zero surprise charges. Every ambitious entrepreneur should
              consider them their first-choice financial partner."
            `}              </p>
              <div className="testimonial-author">
                <img src="/assets/testimonials/63639623935352875010033 rajesh same.jpg" alt="Rajesh Sharma" className="author-avatar" />
                <div className="author-info">
                  <h4>Rajesh Sharma</h4>
                  <p>Garments Merchant • Delhi (₹10 Lakh Loan)</p>
                  <div className="author-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       PHOTO GALLERY (REAL ASSETS IN ASSETS/GALLERY/PHOTO_GALLERY)
       ========================================================================== */}
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Life & Moments</span>
          <h2 className="section-title">Prest Loans in Action</h2>
          <p className="section-desc">

          A dynamic showcase capturing our collaborative culture, ground-breaking branch ceremonies, borrower summits,
          and corporate milestones.
                  </p>
        </div>
        {/* Category Filter Tabs */}
        <div className="gallery-filters">
          <button className="gallery-filter-btn active" data-filter="all">All Photos</button>
          <button className="gallery-filter-btn" data-filter="culture">Team & Culture</button>
          <button className="gallery-filter-btn" data-filter="events">Customer Meets & Awards</button>
          <button className="gallery-filter-btn" data-filter="office">Head Office & Branches</button>
        </div>
        {/* Gallery Grid with real assets 1.jpg to 17.jpg */}
        <div className="gallery-grid">
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/1.jpg', 'Corporate Team & Leadership Meet')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/1.jpg" alt="Corporate Team Meet" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Corporate Team Meet</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/2.jpg', 'Customer Felicitation Ceremony')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/2.jpg" alt="Customer Felicitation" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Customer Felicitation Ceremony</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/3.jpeg', 'Head Office Operations & Credit Desk')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/3.jpeg" alt="Credit Desk" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Credit Desk & Operations</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/4.jpg', 'Team Collaboration Session')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/4.jpg" alt="Team Session" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Team Collaboration Session</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/5.jpg', 'Annual Awards & Recognition')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/5.jpg" alt="Annual Awards" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Annual Awards & Recognition</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/6.jpg', 'Branch Network Launch')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/6.jpg" alt="Branch Network" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Branch Network Expansion</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/7.jpg', 'Fintech Training Workshop')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/7.jpg" alt="Training Workshop" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Fintech Training Workshop</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/8.jpg', 'Borrower Community Outreach')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/8.jpg" alt="Borrower Outreach" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Borrower Community Outreach</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/9.jpg', 'Underwriting Team Floor')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/9.jpg" alt="Underwriting Floor" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Underwriting Team Floor</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/10.jpg', 'Cultural Celebrations at Office')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/10.jpg" alt="Celebrations" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Cultural Celebrations</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/11.jpg', 'Strategic Partner Tie-up Launch')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/11.jpg" alt="Partner Tie-up Launch" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Strategic Partner Tie-up Launch</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/13.jpg', 'Prest Loans Leadership Address')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/13.jpg" alt="Leadership Address" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Leadership Address</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/14.jpg', 'Client Reception at New Delhi HQ')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/14.jpg" alt="Client Reception" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">New Delhi HQ Lounge</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/15.jpg', 'Borrower Success Milestone')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/15.jpg" alt="Borrower Milestone" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Borrower Success Milestone</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/16.jpg', 'All-Hands Tech & Risk Meeting')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/16.jpg" alt="Tech & Risk Meeting" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">All-Hands Tech & Risk Meeting</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/17.jpg', 'Customer Relationship Center')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/17.jpg" alt="Customer Center" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Customer Relationship Center</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       MEDIA & PRESS COVERAGE (LOGOS FROM ASSETS/PRESS)
       ========================================================================== */}
    <section className="press-section" id="press">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">In The News</span>
          <h2 className="section-title">Prest Loans in National Media & Press</h2>
          <p className="section-desc">

          Featured across India's leading financial dailies, fintech magazines and digital news platforms.
                  </p>
        </div>
      </div>
      {/* Moving Press Carousel Track */}
      <div className="carousel-ticker-wrap">
        <div className="carousel-ticker-track track-scroll-press">
          {/* Group 1 */}
          <div className="carousel-ticker-group">
            <a href="media.html?pub=economic-times#press-coverage" className="press-item" title="The Economic Times">
              <img src="/assets/press/econonictimes-logo.jpg" alt="Economic Times" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Business Standard">
              <img src="/assets/press/Business Standard.png" alt="Business Standard" />
            </a>
            <a href="media.html?pub=business-world#press-coverage" className="press-item" title="Business World">
              <img src="/assets/press/business_world.png" alt="Business World" />
            </a>
            <a href="media.html?pub=ani-news#press-coverage" className="press-item" title="ANI News">
              <img src="/assets/press/ANI News.jpg" alt="ANI News" />
            </a>
            <a href="media.html?pub=dna#press-coverage" className="press-item" title="DNA India">
              <img src="/assets/press/DNA.png" alt="DNA" />
            </a>
            <a href="media.html?pub=theprint#press-coverage" className="press-item" title="ThePrint">
              <img src="/assets/press/the_print_logo.png" alt="ThePrint" />
            </a>
            <a href="media.html?pub=outlook#press-coverage" className="press-item" title="Outlook Magazine">
              <img src="/assets/press/Outlook_magazine.jpg" alt="Outlook Magazine" />
            </a>
            <a href="media.html?pub=vccircle#press-coverage" className="press-item" title="VCCircle">
              <img src="/assets/press/vccircle.png" alt="VCCircle" />
            </a>
            <a href="media.html?pub=sme-times#press-coverage" className="press-item" title="SME Times">
              <img src="/assets/press/SME.jpg" alt="SME Times" />
            </a>
            <a href="media.html?pub=ani-news#press-coverage" className="press-item" title="ANI News Multimedia">
              <img src="/assets/press/ANI Multimedia.png" alt="ANI News Multimedia" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Business Standard">
              <img src="/assets/press/BS.jpg" alt="Business Standard" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Dalal">
              <img src="/assets/press/DALAT.jpg" alt="Dalal" />
            </a>
            <a href="media.html?pub=sme-post#press-coverage" className="press-item" title="knn">
              <img src="/assets/press/knn200.png" alt="KNN" />
            </a>
            <a href="media.html?pub=outlook#press-coverage" className="press-item" title="Outlook News">
              <img src="/assets/press/outlook-logo.png" alt="Outlook News" />
            </a>
            <a href="media.html?pub=pti#press-coverage" className="press-item" title="PTI">
              <img src="/assets/press/pti.gif" alt="PTI" />
            </a>
            <a href="media.html?pub=sme-post#press-coverage" className="press-item" title="SME Post">
              <img src="/assets/press/SMEpost.png" alt="SME Post" />
            </a>
            <a href="media.html?pub=sourcing-hardware#press-coverage" className="press-item" title="Sourcing Hardware">
              <img src="/assets/press/Sourcing Hardware.gif" alt="Sourcing Hardware" />
            </a>
            <a href="media.html?pub=economic-times#press-coverage" className="press-item" title="The Economic Times">
              <img src="/assets/press/THe Economic times.png" alt="The Economic Times" />
            </a>
            <a href="media.html?pub=the-week#press-coverage" className="press-item" title="The Week">
              <img src="/assets/press/THE WEEK.png" alt="The Week" />
            </a>
            <a href="media.html?pub=dailyhunt#press-coverage" className="press-item" title="Dailyhunt">
              <img src="/assets/press/dailyhunt.png" alt="Dailyhunt" />
            </a>
          </div>
          {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
          <div className="carousel-ticker-group" aria-hidden="true">
            <a href="media.html?pub=economic-times#press-coverage" className="press-item" title="The Economic Times">
              <img src="/assets/press/econonictimes-logo.jpg" alt="Economic Times" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Business Standard">
              <img src="/assets/press/Business Standard.png" alt="Business Standard" />
            </a>
            <a href="media.html?pub=business-world#press-coverage" className="press-item" title="Business World">
              <img src="/assets/press/business_world.png" alt="Business World" />
            </a>
            <a href="media.html?pub=ani-news#press-coverage" className="press-item" title="ANI News">
              <img src="/assets/press/ANI News.jpg" alt="ANI News" />
            </a>
            <a href="media.html?pub=dna#press-coverage" className="press-item" title="DNA India">
              <img src="/assets/press/DNA.png" alt="DNA" />
            </a>
            <a href="media.html?pub=theprint#press-coverage" className="press-item" title="ThePrint">
              <img src="/assets/press/the_print_logo.png" alt="ThePrint" />
            </a>
            <a href="media.html?pub=outlook#press-coverage" className="press-item" title="Outlook Magazine">
              <img src="/assets/press/Outlook_magazine.jpg" alt="Outlook Magazine" />
            </a>
            <a href="media.html?pub=vccircle#press-coverage" className="press-item" title="VCCircle">
              <img src="/assets/press/vccircle.png" alt="VCCircle" />
            </a>
            <a href="media.html?pub=sme-post#press-coverage" className="press-item" title="SME Post">
              <img src="/assets/press/SME.jpg" alt="SME Post" />
            </a>
            <a href="media.html?pub=ani-news#press-coverage" className="press-item" title="ANI News Multimedia">
              <img src="/assets/press/ANI Multimedia.png" alt="ANI News Multimedia" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Business Standard">
              <img src="/assets/press/BS.jpg" alt="Business Standard" />
            </a>
            <a href="media.html?pub=business-standard#press-coverage" className="press-item" title="Dalal">
              <img src="/assets/press/DALAT.jpg" alt="Dalal" />
            </a>
            <a href="media.html?pub=sme-post#press-coverage" className="press-item" title="knn">
              <img src="/assets/press/knn200.png" alt="KNN" />
            </a>
            <a href="media.html?pub=outlook#press-coverage" className="press-item" title="Outlook News">
              <img src="/assets/press/outlook-logo.png" alt="Outlook News" />
            </a>
            <a href="media.html?pub=pti#press-coverage" className="press-item" title="PTI">
              <img src="/assets/press/pti.gif" alt="PTI" />
            </a>
            <a href="media.html?pub=sme-post#press-coverage" className="press-item" title="SME Post">
              <img src="/assets/press/SMEpost.png" alt="SME Post" />
            </a>
            <a href="media.html?pub=sourcing-hardware#press-coverage" className="press-item" title="Sourcing Hardware">
              <img src="/assets/press/Sourcing Hardware.gif" alt="Sourcing Hardware" />
            </a>
            <a href="media.html?pub=economic-times#press-coverage" className="press-item" title="The Economic Times">
              <img src="/assets/press/THe Economic times.png" alt="The Economic Times" />
            </a>
            <a href="media.html?pub=the-week#press-coverage" className="press-item" title="The Week">
              <img src="/assets/press/THE WEEK.png" alt="The Week" />
            </a>
            <a href="media.html?pub=dailyhunt#press-coverage" className="press-item" title="Dailyhunt">
              <img src="/assets/press/dailyhunt.png" alt="Dailyhunt" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       FAQ ACCORDION SECTION
       ========================================================================== */}
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">

          Find clear, definitive answers regarding our credit appraisal process, eligibility thresholds, documentation
          requirements, and competitive interest rates.
                  </p>
        </div>
        <div className="faq-list">
          {/* FAQ 1 */}
          <div className="faq-item active">
            <div className="faq-header">
              <h4>
Is Prest Loans a Reserve Bank of India (RBI) registered NBFC?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body" style={{"maxHeight":"200px"}}>
              <p>

              Yes. Prest Loans is the digital brand of                 <strong>Lord Krishna Financial Services Ltd</strong>
, a
              Non-Banking Financial Company (NBFC) registered with the                 <strong>Reserve Bank of India (RBI)</strong>

              under Registration No.                 <strong>B-14.02019</strong>
. Operating with distinction since 1992, we strictly
              adhere to RBI Master Directions, Fair Practices Code, and digital lending governance.
                          </p>
            </div>
          </div>
          {/* FAQ 2 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>What documents are required to apply for a loan?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Our application workflow is 100% digital and paperless. Applicants primarily require:
                              <br />
1. Applicant KYC Identification (PAN Card & Aadhaar Card)
                              <br />
2. Last 6 to 12 months bank statements
                              <br />
3. Income proof or salary slips (for salaried) / business continuity proof (for self-employed)
                              <br />
4. Proof of residence / address.
                          </p>
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>
What is the typical turnaround time from application to disbursement?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Upon completing digital KYC verification and e-signing your sanction agreement, funds are directly
              disbursed to your verified bank account via NEFT/RTGS within                 <strong>
24 to 48 business
                hours                </strong>
.
                          </p>
            </div>
          </div>
          {/* FAQ 4 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>How is monthly loan installment (EMI) repayment managed?</h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Before disbursal, an automated                 <strong>e-NACH / e-Mandate</strong>
 is activated via National Payments
              Corporation of India (NPCI) verified rails, enabling seamless debit on scheduled due dates. Borrowers can
              also make instant advance repayments anytime through our portal via UPI, Debit Card, or Net Banking.
                          </p>
            </div>
          </div>
          {/* FAQ 5 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>
Can I obtain a personal or education loan without pledging physical collateral?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              Yes, absolutely! Our Personal Loans, Education / Coaching Loans, and Short Term Loans are
                              <strong>100% collateral-free</strong>
. Sanctions are based on automated analysis of your bank cash flow
              consistency, income track record, and credit score without requiring property or asset mortgages.
                          </p>
            </div>
          </div>
          {/* FAQ 6 */}
          <div className="faq-item">
            <div className="faq-header">
              <h4>
Whom can I contact for queries, assistance, or grievance redressal?              </h4>
              <i className="fa-solid fa-chevron-down faq-toggle-icon"></i>
            </div>
            <div className="faq-body">
              <p>

              You can reach our dedicated corporate helpdesk at                 <strong>011-45241131</strong>
, connect via WhatsApp
              at                 <strong>+91-9711669090</strong>
, or email us at                 <strong>info@prestloans.com</strong>
. In accordance
              with RBI guidelines, an appointed Principal Nodal Grievance Redressal Officer is also available at
                              <strong>nodalofficer@prestloans.com</strong>
 for escalation.
                          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==========================================================================
       FOOTER SECTION (EXACT REPLICA OF USER'S SCREENSHOT 2)
       ========================================================================== */}
    {/* ==========================================================================
       FLOATING ACTIONS (WhatsApp, Call, Apply)
       ========================================================================== */}
    {/* ==========================================================================
       MODAL 1: POLICY VIEWER MODAL
       ========================================================================== */}
    {/* ==========================================================================
       MODAL 2: MULTI-STEP LOAN APPLICATION MODAL
       ========================================================================== */}
    {/* ==========================================================================
       MODAL 3: LOGIN PORTAL (BORROWER, PARTNER, EMPLOYEE)
       ========================================================================== */}
    {/* ==========================================================================
       MODAL 4: TRACK STATUS MODAL
       ========================================================================== */}
    {/* ==========================================================================
       MODAL 5: GALLERY LIGHTBOX MODAL
       ========================================================================== */}
    {/* JAVASCRIPT LIBS & SCRIPTS */}

    </>
  );
};
