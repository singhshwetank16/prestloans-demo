import React, { useState, useEffect, useRef } from 'react';
import { CAREER_SLIDES } from '../data/careerSlides';

export const Career: React.FC = () => {
  const [currentEmpSlide, setCurrentEmpSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const ribbonTrackRef = useRef<HTMLDivElement>(null);
  const [isJobOpen, setIsJobOpen] = useState<boolean>(true);

  const goToSlide = (idx: number) => {
    let target = idx;
    if (target < 0) target = CAREER_SLIDES.length - 1;
    if (target >= CAREER_SLIDES.length) target = 0;
    setCurrentEmpSlide(target);

    if (ribbonTrackRef.current) {
      const activeBtn = ribbonTrackRef.current.children[target] as HTMLElement;
      if (activeBtn) {
        const offset = activeBtn.offsetLeft - ribbonTrackRef.current.clientWidth / 2 + activeBtn.clientWidth / 2;
        ribbonTrackRef.current.scrollTo({ left: offset, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    (window as any).setEmpSlide = (idx: number) => goToSlide(idx);
    (window as any).prevEmpSlide = () => goToSlide(currentEmpSlide - 1);
    (window as any).nextEmpSlide = () => goToSlide(currentEmpSlide + 1);
  }, [currentEmpSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToSlide(currentEmpSlide + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentEmpSlide, isPaused]);

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
            <a
              href="#testimonials"
              className="btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('testimonials');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
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
          <div className={`prest-accordion-item ${isJobOpen ? 'open' : ''}`} id="job-credit-manager" data-department="credit">
            <div className="prest-accordion-header" onClick={() => setIsJobOpen(!isJobOpen)} style={{ cursor: 'pointer' }}>
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
            <i className="fa-solid fa-users"></i> Meet Our Team
            <span>• Click any profile to view</span>
          </div>
          <div className="emp-ribbon-track" id="empRibbonTrack" ref={ribbonTrackRef}>
            {CAREER_SLIDES.map((slide, idx) => {
              const isActive = idx === currentEmpSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`emp-ribbon-item ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  title={slide.name}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="emp-ribbon-thumb-wrap">
                    {slide.img ? (
                      <img src={slide.img} alt={slide.name} className="emp-ribbon-thumb" />
                    ) : (
                      <div className="emp-ribbon-thumb-initials">
                        {slide.initials || slide.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <span className="emp-ribbon-name">{slide.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonial Showcase Slider Wrapper (With Pause-On-Hover) */}
        <div
          className="testimonial-carousel-wrapper"
          id="empSliderWrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Status & Counter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '0 8px', flexWrap: 'wrap', gap: '8px' }}>
            <span
              className={`emp-hover-status ${isPaused ? 'paused' : ''}`}
              id="empHoverStatus"
              style={{
                fontSize: '0.85rem',
                color: isPaused ? '#f97316' : 'rgba(255, 255, 255, 0.75)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600
              }}
            >
              <i className={`fa-solid ${isPaused ? 'fa-pause' : 'fa-play'}`}></i>
              {isPaused ? 'Auto-play paused (Hovering)' : 'Auto-playing (Hover to pause)'}
            </span>
            <span
              className="emp-counter-badge"
              id="empCounterBadge"
              style={{
                fontSize: '0.85rem',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '4px 12px',
                borderRadius: '12px',
                fontWeight: 700
              }}
            >
              {(currentEmpSlide + 1).toString().padStart(2, '0')} / {CAREER_SLIDES.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={() => goToSlide(currentEmpSlide - 1)}
            title="Previous Colleague"
            style={{ cursor: 'pointer' }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={() => goToSlide(currentEmpSlide + 1)}
            title="Next Colleague"
            style={{ cursor: 'pointer' }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          {/* Slider Container & Track */}
          <div className="testimonial-slider-container">
            <div
              className="testimonial-track"
              id="empTestimonialTrack"
              style={{
                transform: `translateX(-${currentEmpSlide * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1)'
              }}
            >
              {CAREER_SLIDES.map((slide) => (
                <div key={slide.id} className="emp-testimonial-slide">
                  <div className="emp-testimonial-card">
                    <div className="emp-profile-col">
                      <div className="emp-halo-ring">
                        <div className="emp-halo-img-inner">
                          {slide.img ? (
                            <img src={slide.img} alt={slide.name} />
                          ) : (
                            <div
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #70146e, #f05a28)',
                                color: '#ffffff',
                                fontSize: '2rem',
                                fontWeight: '800'
                              }}
                            >
                              {slide.initials || slide.name.split(' ').map((n) => n[0]).join('')}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="verified-emp-badge">
                        <i className="fa-solid fa-circle-check"></i> {slide.badge}
                      </div>
                      <div className="emp-stars-row">★★★★★</div>
                      <span className="emp-dept-pill">
                        <i className={slide.deptIcon}></i> {slide.dept}
                      </span>
                    </div>

                    <div className="emp-story-col">
                      <div className="emp-floating-quote-icon">
                        <i className="fa-solid fa-quote-left"></i>
                      </div>
                      <p className="emp-story-text">
                        &ldquo;{slide.quote}&rdquo;
                      </p>
                      <div className="emp-story-footer">
                        <div className="emp-name-tagline">
                          <span className="emp-full-name">{slide.name}</span>
                          <span className="emp-full-designation">
                            <i className="fa-solid fa-briefcase" style={{ color: '#f05a28' }}></i> {slide.desig}
                          </span>
                        </div>
                        <div className="emp-culture-chips">
                          {slide.chips.map((chip, cIdx) => (
                            <span key={cIdx} className="emp-chip">
                              <i className="fa-solid fa-award"></i> {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="carousel-pagination-dots" id="empPaginationDots" style={{ marginTop: '28px' }}>
            {CAREER_SLIDES.map((slide, dotIdx) => (
              <button
                key={slide.id}
                type="button"
                className={`carousel-dot ${dotIdx === currentEmpSlide ? 'active' : ''}`}
                onClick={() => goToSlide(dotIdx)}
                aria-label={`Slide ${dotIdx + 1} - ${slide.name}`}
                style={{ cursor: 'pointer' }}
              ></button>
            ))}
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
