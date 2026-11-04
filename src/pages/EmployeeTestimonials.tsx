import React, { useEffect } from 'react';

export const EmployeeTestimonials: React.FC = () => {
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
          <a href="/career">Career</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
          <span>Employee Testimonials</span>
        </div>
        <h1 className="page-banner-title">Employee Testimonials</h1>
        <p className="page-banner-sub">

        Voices of Prest Loans — Hear firsthand from our real team members across IT, Risk, Finance, Operations, and
        Sales
        about our culture, mentorship, and career growth.
              </p>
      </div>
    </section>
    {/* TESTIMONIALS CONTENT SECTION */}
    <section className="section">
      <div className="container">
        {/* DUAL-TAB SWITCHER (CUSTOMERS' STORIES VS EMPLOYEE TESTIMONIALS) */}
        <div className="stories-tabs-wrapper">
          <div className="stories-tabs-pills">
            <a href="/customers-stories" className="stories-tab-pill">
              <i className="fa-solid fa-users"></i>
              <span>
Customers' Stories                 <small className="stories-count-badge">25K+ Borrowers</small>
              </span>
            </a>
            <a href="/employee-testimonials" className="stories-tab-pill active">
              <i className="fa-solid fa-user-tie"></i>
              <span>
Employee Testimonials                 <small className="stories-count-badge">Team Speak</small>
              </span>
            </a>
          </div>
        </div>
        {/* KEY CULTURE & TRUST METRICS BANNER */}
        <div className="emp-stats-highlight-row">
          <div className="emp-stat-highlight-card">
            <div className="emp-stat-icon-wrap">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="emp-stat-val">100+</div>
            <div className="emp-stat-lbl">Talented Team Members</div>
          </div>
          <div className="emp-stat-highlight-card">
            <div className="emp-stat-icon-wrap">
              <i className="fa-solid fa-shield-heart"></i>
            </div>
            <div className="emp-stat-val">94%</div>
            <div className="emp-stat-lbl">Annual Retention Rate</div>
          </div>
          <div className="emp-stat-highlight-card">
            <div className="emp-stat-icon-wrap">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-stat-val">4.8 / 5</div>
            <div className="emp-stat-lbl">Employee Satisfaction</div>
          </div>
          <div className="emp-stat-highlight-card">
            <div className="emp-stat-icon-wrap">
              <i className="fa-solid fa-venus-mars"></i>
            </div>
            <div className="emp-stat-val">40%+</div>
            <div className="emp-stat-lbl">Women in Workforce</div>
          </div>
        </div>
        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-quote-left"></i>
 Real Experiences          </span>
          <h2 className="section-title">Life at Prest Loans in Their Own Words</h2>
          <p className="section-desc">

          Our team is the heartbeat of Prest Loans. Here is what our colleagues across different verticals say about
          mentorship, professional freedom, and working in a fast-growing RBI-registered fintech NBFC.
                  </p>
        </div>
        {/* EMPLOYEE CARDS GRID */}
        <div className="employee-cards-grid" id="empCardsGrid">
          {/* Employee 1: Ravi Shanker Singh */}
          <div className="emp-card-pro" data-category="it">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag it">
                <i className="fa-solid fa-code"></i>
 IT & Systems              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638617409647967189Ravi.jpeg" alt="Ravi Shanker Singh" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Ravi Shanker Singh</h3>
                <div className="emp-role-title">Manager - IT</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Since 2021 • 3+ Yrs at Prest                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Working with Prest Loans is my absolute pleasure. Prest Loans has given me the opportunity to build my
              career in digital fintech systems. The challenging and professional environment is helping me in
              increasing
              my efficiency and technical skills. I am very thankful to our leadership and all colleagues who are
              extremely
              cooperative. Truly a great place to work."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-microchip"></i>
 IT Infrastructure & LMS              </span>
              <span>New Delhi HQ</span>
            </div>
          </div>
          {/* Employee 2: Shwetank Singh */}
          <div className="emp-card-pro" data-category="it">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag it">
                <i className="fa-solid fa-code"></i>
 Technology & Dev              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/Shwetank Singh.png" alt="Shwetank Singh" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Shwetank Singh</h3>
                <div className="emp-role-title">Deputy Manager - IT</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Web & Tech Operations                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "I recently joined PrestLoans as a Web Developer, and it has been a great experience so far. My
              responsibilities include website development, maintenance, performance optimization, and managing
              technical operations. I am excited to contribute my technical skills, explore innovative solutions, and
              grow professionally while supporting the company's digital growth and success."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-server"></i>
 Web & Tech Operations              </span>
              <span>New Delhi HQ</span>
            </div>
          </div>
          {/* Employee 3: Ashish Kumar Singh */}
          <div className="emp-card-pro" data-category="sales">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag sales">
                <i className="fa-solid fa-chart-line"></i>
 Business Development              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638594095212619073Ashish.jpg" alt="Ashish Kumar Singh" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Ashish Kumar Singh</h3>
                <div className="emp-role-title">Manager - Business Development</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Since 2022 • Strategic Growth                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "I have been working with Prest Loans since 2022, and it has provided me a great career path by offering
              ample opportunities to enhance my strategic skills, build channel partnerships, and drive institutional
              growth. The open-door management and dynamic team culture make achieving ambitious milestones exciting."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-handshake"></i>
 Channel Alliances              </span>
              <span>Pan-India BD</span>
            </div>
          </div>
          {/* Employee 4: Nitish Kumar */}
          <div className="emp-card-pro" data-category="risk">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag risk">
                <i className="fa-solid fa-scale-balanced"></i>
 Audit & Risk              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638592323501454725IMG-20230513-WA0006.jpg" alt="Nitish Kumar" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Nitish Kumar</h3>
                <div className="emp-role-title">Assistant Manager - Audit & Risk</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Audit & Risk Specialist                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "It has been a wonderful journey since I joined Lord Krishna Financial Services Ltd (Prest Loans). As
              Assistant Manager in Audit & Risk, I have learned a tremendous amount about rigorous credit evaluation and
              RBI regulatory compliance. The leadership here is deeply supportive, and I am very happy to be a part of
              the
              Prest Loans family."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
 Risk Assessment              </span>
              <span>New Delhi HQ</span>
            </div>
          </div>
          {/* Employee 5: Radhika Rautela */}
          <div className="emp-card-pro" data-category="finance">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag finance">
                <i className="fa-solid fa-coins"></i>
 Finance & Accounts              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638592323130324277IMG-20231111-WA0031.jpg" alt="Radhika Rautela" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Radhika Rautela</h3>
                <div className="emp-role-title">Senior Manager - Finance & Accounts</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Senior Management                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "It is a great pleasure to be associated with Prest Loans. The best thing about Prest Loans is the
              transparent corporate culture and progressive leadership which constantly inspires me and other team
              members
              to innovate new ideas and execute our duties with top-notch financial diligence and efficiency."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-file-invoice-dollar"></i>
 Financial Diligence              </span>
              <span>Corporate Office</span>
            </div>
          </div>
          {/* Employee 6: Deepika */}
          <div className="emp-card-pro" data-category="risk">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag risk">
                <i className="fa-solid fa-scale-balanced"></i>
 Ops, Audit & Risk              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638594052872023421Deepika.jpg" alt="Deepika" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Deepika</h3>
                <div className="emp-role-title">Manager - Operations, Audit & Risk</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 2+ Years with Prest                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Joining Prest Loans has been one of the best decisions of my career! I have been part of Prest Loans for
              over two years now. It is a fantastic workplace with diverse talent, great leadership, and supervisors who
              are always accessible to provide guidance. The organization rewards hard work and continuous innovation."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-gears"></i>
 Operations & Governance              </span>
              <span>New Delhi HQ</span>
            </div>
          </div>
          {/* Employee 7: Priyanka Kumari */}
          <div className="emp-card-pro" data-category="hr">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag hr">
                <i className="fa-solid fa-user-group"></i>
 HR & Administration              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638278698838370661Priyanka.jpg" alt="Priyanka Kumari" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Priyanka Kumari</h3>
                <div className="emp-role-title">Executive – HR & Administration</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Since June 2022                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "I am working with Prest Loans since June 2022. My experience with the company and my seniors has been
              really
              great. Everybody is so supportive and they teach me new skills every single day. The joyful, respectful
              workplace culture makes Prest Loans a standout employer in the NBFC sector."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-heart"></i>
 People & Talent Culture              </span>
              <span>Corporate Office</span>
            </div>
          </div>
          {/* Employee 8: Poonam Tiwari */}
          <div className="emp-card-pro" data-category="sales">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag sales">
                <i className="fa-solid fa-bullhorn"></i>
 Channel Sales              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/637342324521757329lal.jpg" alt="Poonam Tiwari" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Poonam Tiwari</h3>
                <div className="emp-role-title">Assistant Manager</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Sales & Distribution                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Joining Prest Loans has been one of the best decisions of my life. Our company has a friendly and
              positive
              work environment; the team here is like family and it is a true joy to come to work each day. I am deeply
              grateful to my leadership for all their support, guidance, and faith in my potential."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-network-wired"></i>
 Partner Network Expansion              </span>
              <span>Channel Sales</span>
            </div>
          </div>
          {/* Employee 9: Sandeep Saini */}
          <div className="emp-card-pro" data-category="leadership">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag leadership">
                <i className="fa-solid fa-chess-king"></i>
 Leadership              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/636451437167585000sandeep.jpg" alt="Sandeep Saini" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Sandeep Saini</h3>
                <div className="emp-role-title">Director</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Leadership & Governance                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Prest Loans exemplifies what modern corporate culture should be: transparent leadership, constructive
              mentorship, and the flexibility to innovate in how we deliver results. All my colleagues are very
              approachable, helpful, and driven by a shared vision of financial inclusion. Truly a fabulous workplace to
              advance your career."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-shield-halved"></i>
 Governance & Strategy              </span>
              <span>New Delhi HQ</span>
            </div>
          </div>
          {/* Employee 10: Shumaila */}
          <div className="emp-card-pro" data-category="collections">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-headset"></i>
 Collections & Relations              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638594064256074464Shumaila.jpg" alt="Shumaila" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Shumaila</h3>
                <div className="emp-role-title">Executive - Collections</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Customer Engagement                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "I am working with Prest Loans, and our overall company culture and staff members are remarkably
              cooperative.
              Here I have been provided with an excellent platform for my skill development, professional confidence,
              and
              customer empathy. I am looking forward to a long-term, fruitful career here."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-phone-volume"></i>
 Client Portfolio Care              </span>
              <span>Collections Vertical</span>
            </div>
          </div>
          {/* Employee 11: Sharmin Khan */}
          <div className="emp-card-pro" data-category="collections">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-headset"></i>
 Collections & Recovery              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/638592322661684147sharmin khan.jpeg" alt="Sharmin Khan" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Sharmin Khan</h3>
                <div className="emp-role-title">Executive - Collections</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Recovery Operations                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Prest Loans is one of India's fastest-growing NBFCs with branches expanding actively. The working culture
              is vibrant and positive. While the responsibilities were challenging initially, the extensive mentorship
              and
              warm support increased my confidence significantly. I always feel proud to be part of Prest Loans."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-comments"></i>
 Borrower Advisory              </span>
              <span>Operations Team</span>
            </div>
          </div>
          {/* Employee 12: Prakash Soni */}
          <div className="emp-card-pro" data-category="collections">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-headset"></i>
 Collections              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/Soni.jpeg" alt="Prakash Soni" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Prakash Soni</h3>
                <div className="emp-role-title">Deputy Manager – Collections</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Collections & Recovery                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "The collaborative work culture, mutual trust, and teamwork have played an important role in my
              professional development. Working together towards common goals not only strengthens the organization but
              also provides valuable opportunities to learn, grow, and improve."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-users"></i>
 Teamwork & Portfolio Growth              </span>
              <span>Collections Vertical</span>
            </div>
          </div>
          {/* Employee 13: Rana Pratap */}
          <div className="emp-card-pro" data-category="admin">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag admin">
                <i className="fa-solid fa-building-user"></i>
 Administration              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/Rana.jpeg" alt="Rana Pratap" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Rana Pratap</h3>
                <div className="emp-role-title">Admin</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 9+ Years at Prest • Family Culture
                              </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "It has been a wonderful journey of nine years with this company. I joined as a fresher, and these years
              have given me so much learning, growth, and unforgettable memories. Time has truly flown by! What makes
              this company special is that we are not just colleagues, but one big family. I am proud to be part of this
              family and will always give my best to contribute to the company's continued growth and success."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-heart"></i>
 Administration & Operations              </span>
              <span>Corporate Office</span>
            </div>
          </div>
          {/* Employee 14: Gagan Deep */}
          <div className="emp-card-pro" data-category="ops">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-gears"></i>
 Loan Operations              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <div className="emp-avatar-initials">GD</div>
              </div>
              <div className="emp-info-wrap">
                <h3>Gagan Deep</h3>
                <div className="emp-role-title">Operation Executive</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 6+ Months • Loan Operations                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Having been associated with Prest Loans for over 6 months, I have gained valuable professional experience
              and enhanced my skills in loan operations, credit management, and financial processes. The supportive work
              environment, collaborative team, and continuous learning opportunities have helped me grow professionally
              and contribute towards the company's success."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-file-invoice-dollar"></i>
 Credit & Loan
              Operations              </span>
              <span>Operations Team</span>
            </div>
          </div>
          {/* Employee 15: Mukesh Chaurasiya */}
          <div className="emp-card-pro" data-category="ops">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-gears"></i>
 Loan Operations              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <img src="/assets/employee/Mukesh.jpeg" alt="Mukesh Chaurasiya" className="emp-avatar-img-pro" />
              </div>
              <div className="emp-info-wrap">
                <h3>Mukesh Chaurasiya</h3>
                <div className="emp-role-title">Operation Executive</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Loan Operations & Underwriting
                              </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Prest Loans is a great organization that provides excellent opportunities for professional growth and
              career development. The company offers a positive, supportive, and challenging work environment where
              employees can enhance their knowledge. The leadership team is supportive, and colleagues are always
              cooperative and helpful. It is truly a great place to learn, grow, and build a successful career. I feel
              proud to be a part of Prest Loans."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-chart-line"></i>
 Operations & Career Growth              </span>
              <span>Operations Team</span>
            </div>
          </div>
          {/* Employee 16: Roshan Vishwakarma */}
          <div className="emp-card-pro" data-category="ops">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-gears"></i>
 Loan Operations              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <div className="emp-avatar-initials">RV</div>
              </div>
              <div className="emp-info-wrap">
                <h3>Roshan Vishwakarma</h3>
                <div className="emp-role-title">Operation Executive</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Operations Department                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Prest Loans is a recognized, RBI-registered company with fair and transparent policies. Working in the
              operations department has been a great experience. The entire experienced management is supportive and
              helpful. I have had wonderful learning opportunities here that helped me grow professionally. It is a
              great place to work."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-scale-balanced"></i>
 Fair Policies & Operations              </span>
              <span>Operations Team</span>
            </div>
          </div>
          {/* Employee 17: Vinay Rohilla */}
          <div className="emp-card-pro" data-category="ops">
            <div className="emp-card-top">
              <span className="emp-card-dept-tag ops">
                <i className="fa-solid fa-gears"></i>
 Loan Operations              </span>
              <span className="emp-verified-badge">
                <i className="fa-solid fa-circle-check"></i>
 Team Prest              </span>
            </div>
            <div className="emp-card-profile-header">
              <div className="emp-avatar-container">
                <div className="emp-avatar-initials">VR</div>
              </div>
              <div className="emp-info-wrap">
                <h3>Vinay Rohilla</h3>
                <div className="emp-role-title">Operation Executive</div>
                <div className="emp-tenure-tag">
                  <i className="fa-solid fa-calendar-check"></i>
 Operations & Underwriting                </div>
              </div>
            </div>
            <div className="emp-stars-pro">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="emp-quote-box">
              <i className="fa-solid fa-quote-right emp-quote-icon-subtle"></i>
              <p className="emp-quote-text-pro">
{`
              "Working at Prest Loans has been a great experience, providing me with a positive work environment and
              opportunities to learn and grow professionally. I truly appreciate the supportive management, teamwork,
              and continuous learning opportunities that help me improve my skills every day."
            `}              </p>
            </div>
            <div className="emp-card-footer">
              <span className="emp-focus-tag">
                <i className="fa-solid fa-handshake"></i>
 Teamwork & Continuous Learning              </span>
              <span>Operations Team</span>
            </div>
          </div>
        </div>
        {/* WORKPLACE CULTURE & VALUES PILLARS */}
        <div className="culture-values-section">
          <div style={{"textAlign":"center","maxWidth":"680px","margin":"0 auto"}}>
            <span className="section-tag">
              <i className="fa-solid fa-sparkles"></i>
 Our Culture DNA            </span>
            <h3 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#70146e","marginBottom":"10px"}}>
Why Professionals Love
            Prest Loans            </h3>
            <p style={{"color":"#64748b","fontSize":"0.95rem","lineHeight":"1.6"}}>

            We believe that empowering our team members with autonomy, trust, and continuous learning is the cornerstone
            of responsible lending and long-term customer success.
                      </p>
          </div>
          <div className="culture-values-grid">
            <div className="culture-value-card">
              <div className="culture-value-icon">
                <i className="fa-solid fa-person-chalkboard"></i>
              </div>
              <h4>Leadership Mentorship</h4>
              <p>
Direct accessibility to leadership and department heads who actively guide your career path and skill
              expansion.              </p>
            </div>
            <div className="culture-value-card">
              <div className="culture-value-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <h4>Merit & Innovation</h4>
              <p>
Every employee has the freedom to propose new ideas. Exceptional performance and diligence are
              consistently recognized.              </p>
            </div>
            <div className="culture-value-card">
              <div className="culture-value-icon">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h4>{`Warm "Work Family"`}</h4>
              <p>
A supportive, respectful peer environment where teammates lift each other up and celebrate shared
              milestones.              </p>
            </div>
            <div className="culture-value-card">
              <div className="culture-value-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h4>Equal Opportunity</h4>
              <p>
Committed to gender diversity, fair compensation, zero bias, and professional growth for all individuals.
                          </p>
            </div>
          </div>
        </div>
        {/* CALL TO ACTION BANNER */}
        <div style={{"background":"var(--calc-gradient)","color":"#ffffff","borderRadius":"var(--radius-xl)","padding":"50px 36px","margin":"50px 0 60px","textAlign":"center","boxShadow":"0 16px 40px rgba(120, 0, 110, 0.25)"}}>
          <h2 style={{"fontSize":"clamp(1.8rem, 3.5vw, 2.3rem)","fontWeight":"800","color":"#ffffff","marginBottom":"14px"}}>
Want
          to Build Your Career with Prest Loans?          </h2>
          <p style={{"fontSize":"1.05rem","color":"rgba(255, 255, 255, 0.95)","maxWidth":"680px","margin":"0 auto 28px","lineHeight":"1.6"}}>

          We are actively hiring across IT & Software, Risk & Credit Underwriting, Operations, Legal, and
          Business Development. Join a high-impact team redefining financial inclusion in India.
                  </p>
          <div style={{"display":"flex","gap":"16px","justifyContent":"center","flexWrap":"wrap"}}>
            <a href="/career#openings" className="btn-primary" style={{"background":"#ffffff","color":"#70146e","padding":"14px 32px","fontWeight":"700","border":"none","boxShadow":"0 4px 15px rgba(0, 0, 0, 0.15)"}}>
              <i className="fa-solid fa-briefcase"></i>
 View Current Openings
                      </a>
            <a href="/career" className="btn-secondary" style={{"background":"rgba(255, 255, 255, 0.18)","color":"#ffffff","border":"1.5px solid rgba(255, 255, 255, 0.6)","padding":"14px 28px","fontWeight":"700"}}>
              <i className="fa-solid fa-building-user"></i>
 Explore Life at Prest
                      </a>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
