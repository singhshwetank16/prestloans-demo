import React, { useEffect } from 'react';

export const Career: React.FC = () => {
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
    <section className="career-hero">
      <div className="container">
        <div className="career-hero-content">
          <div className="breadcrumbs" style={{"justifyContent":"center","marginBottom":"16px"}}>
            <a href="/" style={{"color":"#cbd5e1"}}>Home</a>
            <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem","color":"#94a3b8"}}></i>
            <span style={{"color":"#f97316"}}>Careers</span>
          </div>
          <div className="career-pill-badge">
            <i className="fa-solid fa-bolt"></i>
 Join India's Leading Digital NBFC
                  </div>
          <h1 className="career-hero-title">

          Build Your Career at             <span className="gradient-text-alt">Prest Loans</span>
          </h1>
          <p className="career-hero-sub">

          Work with visionary leadership, cutting-edge credit algorithms, and mission-driven colleagues empowering over
          25,000+ borrowers and customers across India.
                  </p>
          <div className="career-hero-actions">
            <a href="#openings" className="btn-primary" style={{"boxShadow":"0 8px 25px rgba(240, 90, 40, 0.4)"}}>
              <i className="fa-solid fa-briefcase"></i>
 View Available Positions
                      </a>
            <a href="/employee-testimonials" className="btn-secondary" style={{"background":"rgba(255, 255, 255, 0.12)","color":"#ffffff","borderColor":"rgba(255, 255, 255, 0.3)"}}>
              <i className="fa-solid fa-comments"></i>
 Employee Testimonials
                      </a>
          </div>
          {/* Trust Stats Strip */}
          <div className="career-stats-strip">
            <div className="career-stat-item">
              <span className="career-stat-num">
100                <span>+</span>
              </span>
              <div className="career-stat-lbl">Talented Team Members</div>
            </div>
            <div className="career-stat-item">
              <span className="career-stat-num">RBI</span>
              <div className="career-stat-lbl">Registered NBFC: B-14.02019</div>
            </div>
            <div className="career-stat-item">
              <span className="career-stat-num">Asaf Ali</span>
              <div className="career-stat-lbl">Head Office, New Delhi</div>
            </div>
            <div className="career-stat-item">
              <span className="career-stat-num">
10,000                <span>+</span>
              </span>
              <div className="career-stat-lbl">Enterprises Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* LIFE AT PREST LOANS (CULTURE & PERKS) */}
    <section className="section" style={{"background":"#f8fafc"}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Life @ Prest Loans</span>
          <h2 className="section-title">Where Ambition Meets Opportunity</h2>
          <p className="section-desc">
We foster a supportive, merit-driven culture where innovation is celebrated, leadership
          is approachable, and career growth is rapid.          </p>
        </div>
        <div className="culture-grid">
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#faf5ff","color":"#70146e"}}>
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="culture-card-title">Fast-Track Career Growth</h3>
            <p className="culture-card-desc">
Meritocratic performance reviews, transparent promotion tracks, and accelerated
            advancement for passionate, high-impact performers.            </p>
          </div>
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#fff7ed","color":"#f05a28"}}>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3 className="culture-card-title">Cutting-Edge FinTech Stack</h3>
            <p className="culture-card-desc">
Experience real-world digital lending infrastructure — automated risk engines,
            alternate credit data models, and frictionless API systems.            </p>
          </div>
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#ecfdf5","color":"#10b981"}}>
              <i className="fa-solid fa-people-roof"></i>
            </div>
            <h3 className="culture-card-title">Supportive & Co-operative Team</h3>
            <p className="culture-card-desc">
{`Praised by our employees as a welcoming "work family" with accessible
            supervisors, hands-on mentorship, and active teamwork.`}            </p>
          </div>
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#eff6ff","color":"#2563eb"}}>
              <i className="fa-solid fa-shield-heart"></i>
            </div>
            <h3 className="culture-card-title">Comprehensive Health & Wellness</h3>
            <p className="culture-card-desc">
Holistic family health coverage, accidental policies, flexible leaves, and
            wellness initiatives that put your well-being first.            </p>
          </div>
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#fefce8","color":"#ca8a04"}}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="culture-card-title">Skill Training & Mentorship</h3>
            <p className="culture-card-desc">
Regular workshops on advanced underwriting, financial analysis, regulatory
            compliance, and digital productivity tools.            </p>
          </div>
          <div className="culture-card">
            <div className="culture-icon-box" style={{"background":"#fdf2f8","color":"#db2777"}}>
              <i className="fa-solid fa-trophy"></i>
            </div>
            <h3 className="culture-card-title">Attractive Rewards & CTC</h3>
            <p className="culture-card-desc">
Industry-competitive salaries, performance-linked monthly incentives, recognition
            galas, and festival celebrations.            </p>
          </div>
        </div>
      </div>
    </section>
    {/* CURRENT JOB OPENINGS (ACCORDION MATCHING OFFICIAL PREST LOANS SITE) */}
    <section className="section" id="openings">
      <div className="container">
        <div className="section-header text-center" style={{"marginBottom":"24px"}}>
          <span className="section-tag">Career Opportunities</span>
          <h2 className="section-title">Available Positions</h2>
          <p className="section-desc">
Explore current career opportunities and join our high-growth fintech credit team.
                  </p>
        </div>
        <div className="job-board-wrap">
          {/* CURRENT POSITION: MANAGER – CREDIT (PRODUCTS) */}
          <div className="prest-accordion-item open" id="job-credit-manager" data-department="credit">
            <div className="prest-accordion-header" onClick={(event) => { try { (new Function('event', "togglePrestJob('job-credit-manager')")).call(event.currentTarget, event); } catch(e) {} }}>
              <div className="prest-accordion-title">
                <i className="fa-solid fa-briefcase"></i>
                <span>Available Position – Manager – Credit (Products)</span>
              </div>
              <div className="prest-accordion-arrow">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div className="prest-accordion-body">
              <div className="job-meta-badges">
                <span className="job-meta-badge location">
                  <i className="fa-solid fa-location-dot"></i>
 Asaf Ali Road (Central Delhi)                </span>
                <span className="job-meta-badge" style={{"background":"#fdf2f8","color":"#70146e","borderColor":"#fbcfe8"}}>
                  <i className="fa-solid fa-building-columns"></i>
 Department: Credit                </span>
                <span className="job-meta-badge">
                  <i className="fa-solid fa-user-tie"></i>
 Experience: 5 to 7 Years                </span>
                <span className="job-meta-badge">
                  <i className="fa-solid fa-clock"></i>
 Full Time                </span>
                <span className="job-meta-badge" style={{"background":"#ecfdf5","color":"#065f46","borderColor":"#a7f3d0"}}>
                  <i className="fa-solid fa-bolt" style={{"color":"#059669"}}></i>
 Immediate / Early Joiners Preferred                </span>
              </div>
              <h4 className="job-section-label">
                <i className="fa-solid fa-list-check" style={{"color":"#70146e"}}></i>
 Key Responsibilities:
                          </h4>
              <ul className="job-resp-list">
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Manage credit underwriting and risk assessment for Personal Loans (Unsecured Loans) and Skill Development Loan products.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Review loan applications and take underwriting decisions as per approved credit policies and risk parameters.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Develop, review, and revise credit policies based on product requirements and business objectives.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Design and implement product-specific credit programs and eligibility criteria.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Monitor portfolio performance and recommend policy enhancements to improve asset quality and business growth.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Collaborate with Operations, Risk, Business, and Technology teams for effective product implementation.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Drive digital lending initiatives and automated credit decision-making processes.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Analyze market trends, customer segments, and competitor offerings for product enhancement.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Ensure compliance with regulatory guidelines and internal risk frameworks.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Prepare Credit MIS, portfolio analysis reports, and management presentations.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
Improve underwriting processes, approval TAT, and overall customer experience.                  </span>
                </li>
              </ul>
              <h4 className="job-section-label" style={{"marginTop":"24px"}}>
                <i className="fa-solid fa-user-check" style={{"color":"#f05a28"}}></i>
 Ideal Candidate Profile:
                          </h4>
              <ul className="job-resp-list">
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Strong expertise in Credit Underwriting and Risk Assessment.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Sound knowledge of Personal Loans, Unsecured Lending, and Skill Development Loan products.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Experience in Credit Policy Formulation and Product Development.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Understanding of Digital Lending Platforms and Fintech Ecosystem.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Strong analytical, decision-making, and portfolio monitoring capabilities.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Excellent communication, stakeholder management, and leadership skills.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Proficiency in MIS Reporting, Data Analysis, and Risk Monitoring.                  </span>
                </li>
                <li className="job-resp-item">
                  <i className="fa-solid fa-circle-check" style={{"color":"#f05a28"}}></i>
                  <span>
Candidates with relevant experience in NBFC, Banking, Financial Institutions, or Fintech companies will be preferred.                  </span>
                </li>
              </ul>
              <div className="job-highlight-box">
                <div className="job-highlight-title">
                  <i className="fa-solid fa-location-crosshairs"></i>
 Location & Joining Details:                </div>
                <div className="job-highlight-desc">
                  <strong>Location:</strong>
 Asaf Ali Road (Central Delhi) — Lord Krishna Financial Services Ltd (Prest Loans)                  <br />
                  <strong>Experience:</strong>
 5 to 7 Years  |                    <strong>Working:</strong>
 Full Time  |                    <strong>Joining:</strong>
 Immediate / Early Joiners Preferred
                              </div>
              </div>
              <div className="job-actions-row">
                <button className="btn-prest-apply" onClick={(event) => { try { (new Function('event', "openCareerApplyModal('Manager – Credit (Products)', 'Asaf Ali Road (Central Delhi)')")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-paper-plane"></i>
 Apply Now
                              </button>
                <button className="btn-job-share" onClick={(event) => { try { (new Function('event', "window.showToast('Job details copied to clipboard!')")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-share-nodes"></i>
 Share Opening
                              </button>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Talent Box */}
        <div style={{"background":"linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%)","borderRadius":"var(--radius-xl)","border":"1px solid #e2e8f0","padding":"40px 30px","textAlign":"center","maxWidth":"980px","margin":"40px auto 0","boxShadow":"0 4px 20px rgba(0,0,0,0.03)"}}>
          <div style={{"width":"56px","height":"56px","borderRadius":"50%","background":"#ffffff","color":"#70146e","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.5rem","margin":"0 auto 16px","boxShadow":"0 4px 14px rgba(112, 20, 110, 0.15)"}}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <h3 style={{"fontSize":"1.35rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>
Didn't Find a Matching
          Opening?          </h3>
          <p style={{"color":"#64748b","fontSize":"0.95rem","maxWidth":"640px","margin":"0 auto 24px","lineHeight":"1.6"}}>

          We are constantly growing! Send your resume to our HR Talent Acquisition team at             <strong style={{"color":"#70146e"}}>humans@prestloans.com</strong>
 or drop your application into our talent pool.
                  </p>
          <div style={{"display":"flex","gap":"14px","justifyContent":"center","flexWrap":"wrap"}}>
            <a href="mailto:humans@prestloans.com" className="btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"8px"}}>
              <i className="fa-solid fa-envelope"></i>
 Email Your Resume
                      </a>
            <button className="btn-secondary" onClick={(event) => { try { (new Function('event', "openCareerApplyModal('General Talent Pool', 'Any Location')")).call(event.currentTarget, event); } catch(e) {} }}>
              <i className="fa-solid fa-user-plus"></i>
 Submit General Application
                      </button>
          </div>
        </div>
      </div>
    </section>
    {/* EMPLOYEE'S TESTIMONIALS (ULTRA-ATTRACTIVE & ANIMATED SHOWCASE) */}
    <section className="testimonial-section-elevated" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{"marginBottom":"20px"}}>
          <div className="emp-testi-tag">
            <i className="fa-solid fa-medal"></i>
 Verified Workplace Culture • 4.9 / 5.0
                  </div>
          <h2 className="emp-testi-title">
            <strong>Employee's</strong>
            <span className="highlight-gold">Testimonials & Stories</span>
          </h2>
          <p className="emp-testi-subtitle">

          Hear firsthand from our real team members across IT, Operations, Risk, Sales, and Collections about
          mentorship, meritocracy, and growth at Prest Loans.
                  </p>
        </div>
        {/* Interactive Colleague Avatar Ribbon (Click any colleague to view) */}
        <div className="emp-ribbon-wrapper">
          <div className="emp-ribbon-label">
            <i className="fa-solid fa-users"></i>
 Meet Our Team             <span>• Click any profile to view</span>
          </div>
          <div className="emp-ribbon-track" id="empRibbonTrack">
            <button type="button" className="emp-ribbon-item active" onClick={(event) => { try { (new Function('event', "setEmpSlide(0)")).call(event.currentTarget, event); } catch(e) {} }} title="Ravi Shanker Singh">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638617409647967189Ravi.jpeg" alt="Ravi" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Ravi S.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(1)")).call(event.currentTarget, event); } catch(e) {} }} title="Shwetank Singh">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/Shwetank Singh.png" alt="Shwetank" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Shwetank S.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(2)")).call(event.currentTarget, event); } catch(e) {} }} title="Shumaila">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638594064256074464Shumaila.jpg" alt="Shumaila" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Shumaila</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(3)")).call(event.currentTarget, event); } catch(e) {} }} title="Nitish Kumar">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638592323501454725IMG-20230513-WA0006.jpg" alt="Nitish" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Nitish K.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(4)")).call(event.currentTarget, event); } catch(e) {} }} title="Radhika Rautela">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638592323130324277IMG-20231111-WA0031.jpg" alt="Radhika" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Radhika R.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(5)")).call(event.currentTarget, event); } catch(e) {} }} title="Sharmin Khan">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638592322661684147sharmin khan.jpeg" alt="Sharmin" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Sharmin K.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(6)")).call(event.currentTarget, event); } catch(e) {} }} title="Priyanka Kumari">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638278698838370661Priyanka.jpg" alt="Priyanka" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Priyanka K.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(7)")).call(event.currentTarget, event); } catch(e) {} }} title="Poonam Tiwari">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/637342324521757329lal.jpg" alt="Poonam Tiwari" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Poonam T.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(8)")).call(event.currentTarget, event); } catch(e) {} }} title="Deepika">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/638594052872023421Deepika.jpg" alt="Deepika" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Deepika</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(9)")).call(event.currentTarget, event); } catch(e) {} }} title="Sandeep Saini">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/636451437167585000sandeep.jpg" alt="Sandeep Saini" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Sandeep S.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(10)")).call(event.currentTarget, event); } catch(e) {} }} title="Prakash Soni">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/Soni.jpeg" alt="Prakash Soni" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Prakash S.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(11)")).call(event.currentTarget, event); } catch(e) {} }} title="Rana Pratap">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/Rana.jpeg" alt="Rana Pratap" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Rana P.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(12)")).call(event.currentTarget, event); } catch(e) {} }} title="Gagan Deep">
              <div className="emp-ribbon-thumb-wrap">
                <div className="emp-ribbon-thumb-initials">GD</div>
              </div>
              <span className="emp-ribbon-name">Gagan D.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(13)")).call(event.currentTarget, event); } catch(e) {} }} title="Mukesh Chaurasiya">
              <div className="emp-ribbon-thumb-wrap">
                <img src="/assets/employee/Mukesh.jpeg" alt="Mukesh Chaurasiya" className="emp-ribbon-thumb" />
              </div>
              <span className="emp-ribbon-name">Mukesh C.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(14)")).call(event.currentTarget, event); } catch(e) {} }} title="Roshan Vishwakarma">
              <div className="emp-ribbon-thumb-wrap">
                <div className="emp-ribbon-thumb-initials">RV</div>
              </div>
              <span className="emp-ribbon-name">Roshan V.</span>
            </button>
            <button type="button" className="emp-ribbon-item" onClick={(event) => { try { (new Function('event', "setEmpSlide(15)")).call(event.currentTarget, event); } catch(e) {} }} title="Vinay Rohilla">
              <div className="emp-ribbon-thumb-wrap">
                <div className="emp-ribbon-thumb-initials">VR</div>
              </div>
              <span className="emp-ribbon-name">Vinay R.</span>
            </button>
          </div>
        </div>
        {/* Testimonial Showcase Slider Wrapper (With Pause-On-Hover) */}
        <div className="testimonial-carousel-wrapper" id="empSliderWrapper">
          {/* Navigation Buttons */}
          <button className="carousel-nav-btn prev" onClick={(event) => { try { (new Function('event', "prevEmpSlide()")).call(event.currentTarget, event); } catch(e) {} }} title="Previous Colleague">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="carousel-nav-btn next" onClick={(event) => { try { (new Function('event', "nextEmpSlide()")).call(event.currentTarget, event); } catch(e) {} }} title="Next Colleague">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <div className="testimonial-slider-container">
            <div className="testimonial-track" id="empTestimonialTrack">
              {/* Slide 1: Ravi Shanker Singh (MATCHES SCREENSHOT 3 EXACTLY) */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638617409647967189Ravi.jpeg" alt="Ravi Shanker Singh" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Leader                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-server"></i>
 IT & Infrastructure                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Working with Prest Loans has been a truly fulfilling experience. The organization has provided me
                    an empowering platform to accelerate my career within a dynamic and forward-thinking fintech
                    environment. Our leadership fosters innovation, and my colleagues are exceptionally collaborative.
                    It is truly an inspiring place to build a long-term professional journey.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Ravi Shanker Singh</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Manager - IT                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-award"></i>
 Leadership Support                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-bolt"></i>
 High Efficiency                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2: Shwetank Singh */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/Shwetank Singh.png" alt="Shwetank Singh" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Manager                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-laptop-code"></i>
 IT and Technical
                    Expert                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “I recently joined PrestLoans as a Web Developer, and it has been a great experience so far. My responsibilities include website development, maintenance, performance optimization, and managing technical operations. I am excited to contribute my technical skills, explore innovative solutions, and grow professionally while supporting the company's digital growth and success.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Shwetank Singh</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Deputy Manager - IT                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-code"></i>
 Web Developer                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-server"></i>
 Tech Operations                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3: Shumaila */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638594064256074464Shumaila.jpg" alt="Shumaila" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Executive                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-hand-holding-dollar"></i>
 Recovery &
                    Collections                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Prest Loans fosters an exceptionally collaborative and encouraging workplace. The organization
                    actively invests in employee upskilling and continuous development, giving each of us the guidance
                    needed to excel. I take immense pride in our team’s collective success and look forward to a long
                    and rewarding association here.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Shumaila</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Executive - Collections                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-heart"></i>
 Co-operative Culture                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-graduation-cap"></i>
 Skill Development                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 4: Nitish Kumar */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638592323501454725IMG-20230513-WA0006.jpg" alt="Nitish Kumar" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Leader                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-shield-halved"></i>
 Audit & Risk                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “My journey as Assistant Manager in Audit & Risk at Prest Loans has been transformative. The
                    leadership team empowers professionals with autonomy and trust, while our cross-functional teams
                    offer constant encouragement. Being part of the Prest Loans family has truly elevated my
                    professional standards.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Nitish Kumar</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        AM - Audit & Risk                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-users"></i>
 PrestLoans Family                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-brain"></i>
 Continuous Learning                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 5: Radhika Rautela */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638592323130324277IMG-20231111-WA0031.jpg" alt="Radhika Rautela" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Senior Management                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-file-invoice-dollar"></i>
 Finance &
                    Accounts                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “It is a privilege to lead within Prest Loans’ Finance & Accounts division. What stands out most is
                    our forward-looking corporate governance and visionary leadership that consistently inspires teams
                    to pioneer innovative financial processes and deliver operational excellence.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Radhika Rautela</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Senior Manager - F & A                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-lightbulb"></i>
 Freedom to Innovate                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-trophy"></i>
 Motivating Leadership                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 6: Sharmin Khan */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638592322661684147sharmin khan.jpeg" alt="Sharmin Khan" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Executive                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-money-bill-transfer"></i>
 Collections                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Prest Loans is one of India’s fastest-growing, forward-thinking NBFCs. The positive work culture
                    and transparent mentorship here have helped me conquer new challenges, sharpen my professional
                    competencies, and build unshakeable confidence. I take great pride in contributing to our ongoing
                    expansion.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Sharmin Khan</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Executive - Collections                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-star"></i>
 Boosted Confidence                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-building"></i>
 Fastest Growing NBFC                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 7: Priyanka Kumari */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638278698838370661Priyanka.jpg" alt="Priyanka Kumari" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 HR & People Team                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-user-group"></i>
 HR & Administration                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Working with the People & Culture team at Prest Loans since June 2022 has been profoundly
                    rewarding. The executive leadership and colleagues are remarkably encouraging, fostering a daily
                    culture of knowledge sharing and mutual respect. It is an outstanding environment for ambitious
                    professionals.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">PRIYANKA KUMARI</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        EXECUTIVE – HR & Admin                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-heart"></i>
 Daily Learning                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-handshake-angle"></i>
 Supportive Seniors                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 8: Poonam Tiwari */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/637342324521757329lal.jpg" alt="Poonam Tiwari" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Channel Sales                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-network-wired"></i>
 Channel Sales &
                    Growth                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Joining Prest Loans has been one of the most rewarding decisions of my career. The workplace
                    radiates positive energy, camaraderie, and genuine warmth where team members support one another
                    like family. Our leadership provides unmatched mentorship and encouragement every single day.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Poonam Tiwari</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Assistant Manager                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-face-smile"></i>
 Joyful Workplace                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-house-chimney"></i>
 Family-Like Bond                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 9: Deepika */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/638594052872023421Deepika.jpg" alt="Deepika" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Verified Leader                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-gears"></i>
 Ops, Audit & Risk                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Being a part of Prest Loans for over two years has been a remarkable milestone. Our organization
                    unites brilliant talent, ethical governance, and a vibrant culture that actively celebrates
                    innovation and merit. Prest Loans is a premier workplace for those who aspire to lead and make an
                    impact.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Deepika</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Manager - Ops, Audit & Risk                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-sparkles"></i>
 Recognition of Merit                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-shield"></i>
 2+ Years Strong                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 10: Sandeep Saini */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/636451437167585000sandeep.jpg" alt="Sandeep Saini" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Director                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-chess-king"></i>
 Leadership & Governance                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Prest Loans exemplifies what modern corporate culture should be: transparent leadership,
                    constructive mentorship, and the flexibility to innovate in how we deliver results. Our teams are
                    open, approachable, and driven by a shared vision of financial inclusion. It is truly a world-class
                    workplace.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Sandeep Saini</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Director                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-hands-holding-circle"></i>
 Approachable
                        Leaders                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-shield-heart"></i>
 Work Flexibility                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 11: Prakash Soni */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/Soni.jpeg" alt="Prakash Soni" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Collections Leader                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-headset"></i>
 Collections & Recovery                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “The collaborative work culture, mutual trust, and teamwork have played an important role in my professional development. Working together towards common goals not only strengthens the organization but also provides valuable opportunities to learn, grow, and improve.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Prakash Soni</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Deputy Manager – Collections                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-handshake"></i>
 Mutual Trust                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-users"></i>
 Teamwork & Growth                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 12: Rana Pratap */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/Rana.jpeg" alt="Rana Pratap" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 9+ Yrs Veteran                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-building-user"></i>
 Administration                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “It has been a wonderful journey of nine years with this company. I joined as a fresher, and these years have given me so much learning, growth, and unforgettable memories. Time has truly flown by! What makes this company special is that we are not just colleagues, but one big family. I am proud to be part of this family and will always give my best to contribute to the company's continued growth and success.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Rana Pratap</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Admin                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-heart"></i>
 One Big Family                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-calendar-check"></i>
 9 Years Journey                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 13: Gagan Deep */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <div className="emp-halo-initials">GD</div>
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Operations Team                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-gears"></i>
 Loan Operations                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Having been associated with Prest Loans for over 6 months, I have gained valuable professional experience and enhanced my skills in loan operations, credit management, and financial processes. The supportive work environment, collaborative team, and continuous learning opportunities have helped me grow professionally and contribute towards the company's success.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Gagan Deep</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Operation Executive                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-graduation-cap"></i>
 Skill Enhancement                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-award"></i>
 Loan Operations                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 14: Mukesh Chaurasiya */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <img src="/assets/employee/Mukesh.jpeg" alt="Mukesh Chaurasiya" />
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Operations Team                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-gears"></i>
 Loan Operations                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Prest Loans is a great organization that provides excellent opportunities for professional growth and career development. The company offers a positive, supportive, and challenging work environment where employees can enhance their knowledge. The leadership team is supportive, and colleagues are always cooperative and helpful. It is truly a great place to learn, grow, and build a successful career. I feel proud to be a part of Prest Loans.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Mukesh Chaurasiya</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Operation Executive                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-briefcase"></i>
 Career Development                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-thumbs-up"></i>
 Cooperative Team                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 15: Roshan Vishwakarma */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <div className="emp-halo-initials">RV</div>
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Operations Team                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-gears"></i>
 Loan Operations                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Prest Loans is a recognized, RBI-registered company with fair and transparent policies. Working in the operations department has been a great experience. The entire experienced management is supportive and helpful. I have had wonderful learning opportunities here that helped me grow professionally. It is a great place to work.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Roshan Vishwakarma</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Operation Executive                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-scale-balanced"></i>
 Fair Policies                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-lightbulb"></i>
 Learning Opportunities                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 16: Vinay Rohilla */}
              <div className="emp-testimonial-slide">
                <div className="emp-testimonial-card">
                  <div className="emp-profile-col">
                    <div className="emp-halo-ring">
                      <div className="emp-halo-img-inner">
                        <div className="emp-halo-initials">VR</div>
                      </div>
                    </div>
                    <div className="verified-emp-badge">
                      <i className="fa-solid fa-circle-check"></i>
 Operations Team                    </div>
                    <div className="emp-stars-row">★★★★★</div>
                    <span className="emp-dept-pill">
                      <i className="fa-solid fa-gears"></i>
 Loan Operations                    </span>
                  </div>
                  <div className="emp-story-col">
                    <div className="emp-floating-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="emp-story-text">

                    “Working at Prest Loans has been a great experience, providing me with a positive work environment and opportunities to learn and grow professionally. I truly appreciate the supportive management, teamwork, and continuous learning opportunities that help me improve my skills every day.”
                                      </p>
                    <div className="emp-story-footer">
                      <div className="emp-name-tagline">
                        <span className="emp-full-name">Vinay Rohilla</span>
                        <span className="emp-full-designation">
                          <i className="fa-solid fa-briefcase" style={{"color":"#f05a28"}}></i>

                        Operation Executive                        </span>
                      </div>
                      <div className="emp-culture-chips">
                        <span className="emp-chip">
                          <i className="fa-solid fa-handshake"></i>
 Supportive Management                        </span>
                        <span className="emp-chip">
                          <i className="fa-solid fa-chart-line"></i>
 Daily Skill Growth                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="carousel-pagination-dots" id="empPaginationDots" style={{"marginTop":"28px"}}>
            <button className="carousel-dot active" onClick={(event) => { try { (new Function('event', "setEmpSlide(0)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 1"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(1)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 2"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(2)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 3"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(3)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 4"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(4)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 5"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(5)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 6"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(6)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 7"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(7)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 8"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(8)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 9"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(9)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 10"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(10)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 11"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(11)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 12"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(12)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 13"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(13)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 14"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(14)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 15"></button>
            <button className="carousel-dot" onClick={(event) => { try { (new Function('event', "setEmpSlide(15)")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Slide 16"></button>
          </div>
        </div>
        {/* Culture Trust Metrics Strip Below Showcase */}
        <div className="emp-trust-metrics-strip">
          <div className="emp-trust-metric-box">
            <div className="emp-trust-icon">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div>
              <div className="emp-trust-val">94%</div>
              <div className="emp-trust-lbl">Team Retention Rate</div>
            </div>
          </div>
          <div className="emp-trust-metric-box">
            <div className="emp-trust-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div>
              <div className="emp-trust-val">4.9 / 5.0</div>
              <div className="emp-trust-lbl">Culture & Satisfaction</div>
            </div>
          </div>
          <div className="emp-trust-metric-box">
            <div className="emp-trust-icon">
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <div>
              <div className="emp-trust-val">100%</div>
              <div className="emp-trust-lbl">Transparent Meritocracy</div>
            </div>
          </div>
          <div className="emp-trust-metric-box">
            <div className="emp-trust-icon">
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div>
              <div className="emp-trust-val">100+ Minds</div>
              <div className="emp-trust-lbl">Pan-India FinTech Force</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4-STEP HIRING PROCESS */}
    <section className="section" style={{"background":"#f8fafc"}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Hiring Roadmap</span>
          <h2 className="section-title">Our Transparent Recruitment Process</h2>
          <p className="section-desc">
We respect your time. Here is what you can expect from the moment you submit your
          application.          </p>
        </div>
        <div className="hiring-process-grid">
          <div className="hiring-step-card">
            <div className="hiring-step-num">1</div>
            <h3 className="hiring-step-title">Apply Online</h3>
            <p className="hiring-step-desc">
Submit your profile and resume. Our recruitment team reviews every profile within
            24-48 business hours.            </p>
          </div>
          <div className="hiring-step-card">
            <div className="hiring-step-num">2</div>
            <h3 className="hiring-step-title">HR Screening</h3>
            <p className="hiring-step-desc">
A brief telephonic call to understand your career aspirations, key skills, notice
            period, and cultural alignment.            </p>
          </div>
          <div className="hiring-step-card">
            <div className="hiring-step-num">3</div>
            <h3 className="hiring-step-title">Functional Interview</h3>
            <p className="hiring-step-desc">
In-depth discussion with Department Heads and Team Leads covering role
            responsibilities and scenario testing.            </p>
          </div>
          <div className="hiring-step-card">
            <div className="hiring-step-num">4</div>
            <h3 className="hiring-step-title">Offer & Welcome</h3>
            <p className="hiring-step-desc">
Formal offer letter rollout, streamlined digital onboarding, and an exciting
            welcome to the Prest Loans family!            </p>
          </div>
        </div>
      </div>
    </section>
    {/* INTERACTIVE APPLICATION MODAL (MATCHING EXACT PREST LOANS FIELDS) */}
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
