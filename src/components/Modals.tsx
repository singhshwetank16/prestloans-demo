import React from 'react';

export const Modals: React.FC = () => {
  return (
    <>
    <div className="modal-backdrop" id="policy-modal">
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3 id="policy-modal-title">Regulatory Policy</h3>
            <p id="policy-modal-date">RBI Compliance Document</p>
          </div>
          <button className="modal-close-btn" onClick={(event) => { try { (new Function('event', "closePolicyModal()")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body" id="policy-modal-body">
          {/* Content injected dynamically via policies.js */}
        </div>
      </div>
    </div>

    <div className="modal-backdrop" id="loan-app-modal">
      <div className="modal-box" style={{"maxWidth":"620px"}}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3>Apply for Digital Loan</h3>
            <p>48-Hour Approval • Paperless Digital Process</p>
          </div>
          <button className="modal-close-btn" aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body">
          {/* Step Indicators */}
          <div className="application-steps-indicator">
            <div className="app-step active" id="step-ind-1">
              <span className="app-step-num">1</span>
              <span className="app-step-name">Personal Info</span>
            </div>
            <div className="app-step" id="step-ind-2">
              <span className="app-step-num">2</span>
              <span className="app-step-name">Loan Details</span>
            </div>
            <div className="app-step" id="step-ind-3">
              <span className="app-step-num">3</span>
              <span className="app-step-name">Confirmation</span>
            </div>
          </div>
          {/* Step 1 Form */}
          <div id="app-step-1-content">
            <div className="quick-input-group">
              <label className="quick-input-label">Full Name (As per PAN)</label>
              <input type="text" id="app-full-name" className="quick-input-field" placeholder="Enter Full Name" required={true} />
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"14px"}}>
              <div className="quick-input-group">
                <label className="quick-input-label">Mobile Number</label>
                <input type="tel" id="app-phone" className="quick-input-field" placeholder="10-digit number" pattern="[0-9]{10}" required={true} />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Email Address</label>
                <input type="email" id="app-email" className="quick-input-field" placeholder="name@domain.com" required={true} />
              </div>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"14px"}}>
              <div className="quick-input-group">
                <label className="quick-input-label">City / State</label>
                <input type="text" id="app-city" className="quick-input-field" placeholder="e.g. New Delhi" />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Pin Code</label>
                <input type="text" id="app-pincode" className="quick-input-field" placeholder="6-digit pincode" maxLength={6} />
              </div>
            </div>
            <button type="button" id="btn-next-step-2" className="btn-card-submit" style={{"marginTop":"14px"}}>
              <span>Next: Loan Details</span>
               <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          {/* Step 2 Form */}
          <div id="app-step-2-content" style={{"display":"none"}}>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"14px"}}>
              <div className="quick-input-group">
                <label className="quick-input-label">Select Loan Product</label>
                <select id="app-loan-product" className="quick-input-field">
                  <option value="Coaching/Skill Development/Education Loans">
Coaching/Skill Development/Education Loans
                                  </option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Short Term Personal Loan">Short Term Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Business Loan">Business Loan</option>
                </select>
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Loan Amount (₹)</label>
                <input type="number" id="app-loan-amount" className="quick-input-field" value="500000" min="50000" max="5000000" />
              </div>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"14px"}}>
              <div className="quick-input-group">
                <label className="quick-input-label">PAN Card Number</label>
                <input type="text" id="app-pan" className="quick-input-field" placeholder="ABCDE1234F" style={{"textTransform":"uppercase"}} maxLength={10} required={true} />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Employment Type</label>
                <select id="app-biz-type" className="quick-input-field">
                  <option value="Salaried">Salaried Professional</option>
                  <option value="Self-Employed">Self Employed Professional</option>
                  <option value="Student">Student / Parent</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="quick-input-group">
              <label className="quick-input-label">Annual Income (Approx ₹)</label>
              <select id="app-turnover" className="quick-input-field">
                <option value="3-6L">₹3 Lakhs - ₹6 Lakhs</option>
                <option value="6-12L">₹6 Lakhs - ₹12 Lakhs</option>
                <option value="12-25L">₹12 Lakhs - ₹25 Lakhs</option>
                <option value="25L+">Above ₹25 Lakhs</option>
              </select>
            </div>
            <div style={{"display":"flex","gap":"12px","marginTop":"14px"}}>
              <button type="button" onClick={(event) => { try { (new Function('event', "goToAppStep(1)")).call(event.currentTarget, event); } catch(e) {} }} className="btn-secondary" style={{"flex":"0.8","justifyContent":"center"}}>Back</button>
              <button type="button" id="btn-submit-loan-app" className="btn-card-submit" style={{"flex":"1.2"}}>
                <span>Submit Application</span>
                 <i className="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
          {/* Step 3 Confirmation */}
          <div id="app-step-3-content" style={{"display":"none","textAlign":"center","padding":"20px 10px"}}>
            <div style={{"width":"70px","height":"70px","background":"#dcfce7","color":"#16a34a","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"2.2rem","margin":"0 auto 20px"}}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h3 style={{"fontSize":"1.4rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>
Application Submitted
            Successfully!            </h3>
            <p style={{"color":"#64748b","fontSize":"0.9375rem","marginBottom":"20px"}}>

            Your loan application has been registered successfully. Our automated underwriting desk and credit
            specialists are currently reviewing your details.
                      </p>
            <div style={{"background":"#f8fafc","border":"1.5px dashed #cbd5e1","borderRadius":"10px","padding":"14px","marginBottom":"24px"}}>
              <span style={{"fontSize":"0.8125rem","color":"#64748b","display":"block","marginBottom":"4px"}}>
Application
              Reference Number:              </span>
              <strong id="app-generated-id" style={{"fontSize":"1.35rem","color":"#70146e","letterSpacing":"1px"}}>PL-2026-849201</strong>
            </div>
            <button type="button" className="btn-primary" style={{"margin":"0 auto"}} onClick={(event) => { try { (new Function('event', "document.getElementById('loan-app-modal').classList.remove('active'); document.body.style.overflow='';")).call(event.currentTarget, event); } catch(e) {} }}>

            Done / Close
                      </button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal-backdrop" id="login-modal">
      <div className="modal-box" style={{"maxWidth":"480px"}}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3>Prest Loans Portal</h3>
            <p>Select your user category to proceed</p>
          </div>
          <button className="modal-close-btn" aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div style={{"display":"flex","borderBottom":"1px solid #e2e8f0","background":"#f8fafc"}}>
          <button id="tab-btn-customer" className="login-tab-btn active" onClick={(event) => { try { (new Function('event', "switchLoginTab('customer')")).call(event.currentTarget, event); } catch(e) {} }} style={{"flex":"1","padding":"12px","border":"none","background":"none","fontWeight":"700","color":"#70146e","borderBottom":"3px solid #70146e","cursor":"pointer"}}>

          Borrower
                  </button>
          <button id="tab-btn-partner" className="login-tab-btn" onClick={(event) => { try { (new Function('event', "switchLoginTab('partner')")).call(event.currentTarget, event); } catch(e) {} }} style={{"flex":"1","padding":"12px","border":"none","background":"none","fontWeight":"600","color":"#64748b","cursor":"pointer"}}>

          Partner / DSA
                  </button>
          <button id="tab-btn-employee" className="login-tab-btn" onClick={(event) => { try { (new Function('event', "switchLoginTab('employee')")).call(event.currentTarget, event); } catch(e) {} }} style={{"flex":"1","padding":"12px","border":"none","background":"none","fontWeight":"600","color":"#64748b","cursor":"pointer"}}>

          Employee
                  </button>
        </div>
        <div className="modal-body">
          {/* Borrower Login */}
          <div id="tab-content-customer" className="login-tab-content">
            <form id="customer-login-form">
              <div className="quick-input-group">
                <label className="quick-input-label">Registered Mobile Number</label>
                <input type="tel" id="login-mobile" className="quick-input-field" placeholder="10-digit number" pattern="[0-9]{10}" required={true} />
              </div>
              <button type="submit" className="btn-card-submit">
                <span>Send Secure OTP</span>
                 <i className="fa-solid fa-key"></i>
              </button>
            </form>
            <p style={{"fontSize":"0.75rem","color":"#64748b","marginTop":"16px","textAlign":"center"}}>
              <i className="fa-solid fa-lock"></i>
 Protected by 256-bit bank grade encryption
                      </p>
          </div>
          {/* Partner Login */}
          <div id="tab-content-partner" className="login-tab-content" style={{"display":"none"}}>
            <div className="quick-input-group">
              <label className="quick-input-label">Partner Code / Email</label>
              <input type="text" className="quick-input-field" placeholder="e.g. DSA-DELHI-102" />
            </div>
            <div className="quick-input-group">
              <label className="quick-input-label">Password</label>
              <input type="password" className="quick-input-field" placeholder="••••••••" />
            </div>
            <button type="button" className="btn-card-submit" onClick={(event) => { try { (new Function('event', "showToast('Partner login validated. Redirecting to CRM dashboard...')")).call(event.currentTarget, event); } catch(e) {} }}>

            Partner Login
                      </button>
          </div>
          {/* Employee Login */}
          <div id="tab-content-employee" className="login-tab-content" style={{"display":"none"}}>
            <div className="quick-input-group">
              <label className="quick-input-label">Work Email (@prestloans.com)</label>
              <input type="email" className="quick-input-field" placeholder="employee@prestloans.com" />
            </div>
            <div className="quick-input-group">
              <label className="quick-input-label">Single Sign-On (SSO) Pin</label>
              <input type="password" className="quick-input-field" placeholder="••••••" />
            </div>
            <button type="button" className="btn-card-submit" onClick={(event) => { try { (new Function('event', "showToast('Employee SSO authenticated. Loading internal LOS/LMS...')")).call(event.currentTarget, event); } catch(e) {} }}>

            Employee SSO Login
                      </button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal-backdrop" id="track-status-modal">
      <div className="modal-box" style={{"maxWidth":"500px"}}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3>Track Loan Application</h3>
            <p>Get real-time updates on your loan status</p>
          </div>
          <button className="modal-close-btn" aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body">
          <form id="track-status-form">
            <div className="quick-input-group">
              <label className="quick-input-label">Application Reference ID or Mobile Number</label>
              <input type="text" id="track-input" className="quick-input-field" placeholder="e.g. PL-2026-849201 or 9876543210" required={true} />
            </div>
            <button type="submit" className="btn-card-submit">
              <i className="fa-solid fa-magnifying-glass"></i>
               <span>Search Status</span>
            </button>
          </form>
          <div id="track-result-box" style={{"display":"none"}}></div>
        </div>
      </div>
    </div>

    <div className="modal-backdrop lightbox-modal" id="gallery-lightbox-modal">
      <div className="modal-box" style={{"background":"transparent","border":"none"}}>
        <div style={{"textAlign":"right","marginBottom":"10px"}}>
          <button className="modal-close-btn" style={{"background":"rgba(255,255,255,0.2)","color":"#fff","width":"36px","height":"36px"}} aria-label="Close Lightbox">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <img src="" alt="Prest Loans Moment" id="lightbox-img" className="lightbox-img-view" />
        <div id="lightbox-caption" style={{"color":"#ffffff","textAlign":"center","marginTop":"14px","fontWeight":"700","fontSize":"1.1rem","textShadow":"0 2px 4px rgba(0,0,0,0.8)"}}></div>
      </div>
    </div>

    <div className="modal-backdrop book-modal-backdrop" id="book-modal" style={{"display":"none"}}>
      <div className="modal-box book-modal-box">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="book-modal-tag">
              <i className="fa-solid fa-book-bookmark"></i>
 Published Book • Thought Leadership            </div>
            <h3 id="book-modal-title">The Fintech Entrepreneur's Guide</h3>
            <p>
By               <strong>Ashok Mittal</strong>
 (Founder & Director, Prest Loans) • Published by BPB Publications            </p>
          </div>
          <button className="modal-close-btn" onClick={(event) => { try { (new Function('event', "closeBookModal()")).call(event.currentTarget, event); } catch(e) {} }} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body book-modal-body">
          <div className="book-modal-grid">
            {/* Left Column: 3D Book Cover & Quick Meta */}
            <div className="book-modal-left">
              <div className="book-3d-wrapper">
                <img src="/assets/about/fintech-book.jpg" alt="The Fintech Entrepreneur's Guide - Book Cover" className="book-3d-cover" />
              </div>
              <div className="book-quick-specs">
                <div className="spec-row">
                  <span className="spec-label">
                    <i className="fa-solid fa-user-pen"></i>
 Author                  </span>
                  <span className="spec-val">Ashok Mittal</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">
                    <i className="fa-solid fa-building"></i>
 Publisher                  </span>
                  <span className="spec-val">BPB Publications</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">
                    <i className="fa-solid fa-calendar-days"></i>
 Released                  </span>
                  <span className="spec-val">Nov 2022</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">
                    <i className="fa-solid fa-layer-group"></i>
 Formats                  </span>
                  <span className="spec-val">Paperback & Kindle</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">
                    <i className="fa-solid fa-language"></i>
 Language                  </span>
                  <span className="spec-val">English</span>
                </div>
              </div>
            </div>
            {/* Right Column: Details, Highlights & Functional Actions */}
            <div className="book-modal-right">
              <h4 className="book-modal-subtitle">
Strategic Blueprint for Modern Lending, NBFC Governance & Tech Scalability              </h4>
              <p className="book-modal-lead">

              Authored by Mr. Ashok Mittal, drawing from over three decades of frontline banking, regulatory compliance, and credit operations. An indispensable field guide for fintech entrepreneurs, banking professionals, and technology leaders.
                          </p>
              {/* Interactive Tabs */}
              <div className="book-tabs-nav">
                <button type="button" className="book-tab-btn active" onClick={(event) => { try { (new Function('event', "switchBookTab('overview', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-star"></i>
 Key Highlights                </button>
                <button type="button" className="book-tab-btn" onClick={(event) => { try { (new Function('event', "switchBookTab('chapters', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-list-check"></i>
 Chapters Peek                </button>
                <button type="button" className="book-tab-btn" onClick={(event) => { try { (new Function('event', "switchBookTab('author', this)")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-feather"></i>
 About Author                </button>
              </div>
              {/* Tab 1: Key Highlights */}
              <div className="book-tab-pane active" id="book-tab-overview">
                <ul className="book-highlights-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                      <strong>Algorithmic Underwriting:</strong>
 Designing alternative data scoring & automated decision matrices for MSME lending.
                                      </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                      <strong>Prudential NBFC Governance:</strong>
 Aligning operational technology with RBI Master Directions & digital lending guidelines.
                                      </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                      <strong>Fintech Unit Economics:</strong>
 Building sustainable credit platforms with low NPAs and disciplined capital management.
                                      </div>
                  </li>
                </ul>
              </div>
              {/* Tab 2: Chapters Sneak Peek */}
              <div className="book-tab-pane" id="book-tab-chapters" style={{"display":"none"}}>
                <div className="chapter-pills-list">
                  <div className="chapter-item">
                    <span className="chapter-num">01</span>
                    <div className="chapter-text">
                      <strong>The Evolution of Digital Credit:</strong>
 Transition from collateral-heavy legacy banking to algorithmic micro-credit.
                                      </div>
                  </div>
                  <div className="chapter-item">
                    <span className="chapter-num">02</span>
                    <div className="chapter-text">
                      <strong>Underwriting Beyond Traditional Collateral:</strong>
 Alternate data, GST returns, and cash-flow proxy scoring.
                                      </div>
                  </div>
                  <div className="chapter-item">
                    <span className="chapter-num">03</span>
                    <div className="chapter-text">
                      <strong>Collections & Risk Containment:</strong>
 Ethical recovery frameworks and automated customer grievance redressal.
                                      </div>
                  </div>
                  <div className="chapter-item">
                    <span className="chapter-num">04</span>
                    <div className="chapter-text">
                      <strong>The Future of RegTech:</strong>
 Scale, AI underwriting, Account Aggregators, and compliant co-lending partnerships.
                                      </div>
                  </div>
                </div>
              </div>
              {/* Tab 3: About Author */}
              <div className="book-tab-pane" id="book-tab-author" style={{"display":"none"}}>
                <div className="author-modal-bio">
                  <p>
                    <strong>Ashok Mittal</strong>
 is a Harvard Business School Executive Alumnus and University Gold Medallist with CAIIB & MBM credentials. Prior to founding Prest Loans (Lord Krishna Financial Services Ltd), he served in core leadership positions at leading commercial banks (Union Bank of India, UCO Bank) and prominent financial institutions.
                                  </p>
                </div>
              </div>
              {/* Action Buttons Box */}
              <div className="book-modal-cta-box">
                <div className="book-cta-label">Available online on leading bookstore portals:</div>
                <div className="book-cta-buttons">
                  <a href="https://www.amazon.in/Fintech-Entrepreneurs-Guide-Successful-Scalability-ebook/dp/B0BJYSF5F3" target="_blank" rel="noopener" className="btn-book-cta btn-amazon">
                    <i className="fa-brands fa-amazon"></i>
                     <span>Order on Amazon</span>
                  </a>
                  <a href="https://in.bpbonline.com/products/the-fintech-entrepreneurs-guide?_pos=1&_sid=124923941&_ss=r" target="_blank" rel="noopener" className="btn-book-cta btn-bpb">
                    <i className="fa-solid fa-book-open"></i>
                     <span>Order on BPB Online</span>
                  </a>
                  <button type="button" className="btn-book-cta btn-share" onClick={(event) => { try { (new Function('event', "shareBookInfo(this)")).call(event.currentTarget, event); } catch(e) {} }}>
                    <i className="fa-solid fa-share-nodes"></i>
                     <span>Share Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="career-modal-backdrop" id="careerApplyModal">
      <div className="career-modal-box">
        {/* Modal Header */}
        <div className="career-modal-header">
          <div>
            <div className="career-modal-title" id="applyModalRoleTitle">Apply for Position</div>
            <div className="career-modal-sub">Prest Loans • Lord Krishna Financial Services Ltd</div>
          </div>
          <button className="career-modal-close" onClick={(event) => { try { (new Function('event', "closeCareerApplyModal()")).call(event.currentTarget, event); } catch(e) {} }} title="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="career-modal-body">
          {/* STEP 1: FORM */}
          <form id="careerApplicationForm">
            <input type="hidden" id="applyJobRoleInput" name="JobRole" />
            <input type="hidden" id="applyJobLocationInput" name="JobLocation" />
            <div id="careerModalStepForm">
              <h4 style={{"fontWeight":"700","color":"#0f172a","fontSize":"1.1rem","marginBottom":"16px"}}>

              Fill Your Complete Details
                          </h4>
              <div className="career-form-grid">
                <div className="career-field-wrap">
                  <label className="career-label">
First Name                     <span>*</span>
                  </label>
                  <input type="text" id="careerFirstName" className="career-input" placeholder="First Name" required={true} />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Middle Name</label>
                  <input type="text" id="careerMiddleName" className="career-input" placeholder="Middle Name" />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">
Last Name                     <span>*</span>
                  </label>
                  <input type="text" id="careerLastName" className="career-input" placeholder="Last Name" required={true} />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">
Email ID                     <span>*</span>
                  </label>
                  <input type="email" id="careerEmail" className="career-input" placeholder="name@example.com" required={true} />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">
Mobile Number                     <span>*</span>
                  </label>
                  <input type="tel" id="careerPhone" className="career-input" placeholder="10-digit Mobile" pattern="[0-9]{10}" maxLength={10} required={true} />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">
Experience Type                     <span>*</span>
                  </label>
                  <select id="careerExperience" className="career-select" onChange={(event) => { try { (new Function('event', "handleCareerExpChange(this)")).call(event.currentTarget, event); } catch(e) {} }} required={true}>
                    <option value="Fresher">Fresher</option>
                    <option value="Experience">Experienced</option>
                  </select>
                </div>
                <div className="career-field-wrap full-width">
                  <label className="career-label">
Address                     <span>*</span>
                  </label>
                  <input type="text" id="careerAddress" className="career-input" placeholder="Current Residential Address, City, State" required={true} />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Total Exp (Years)</label>
                  <select id="careerExpYears" className="career-select" disabled={true}>
                    <option value="0">0 Years</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6+ Years</option>
                  </select>
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Total Exp (Months)</label>
                  <select id="careerExpMonths" className="career-select" disabled={true}>
                    <option value="0">0 Months</option>
                    <option value="2">2 Months</option>
                    <option value="4">4 Months</option>
                    <option value="6">6 Months</option>
                    <option value="8">8 Months</option>
                    <option value="10">10 Months</option>
                  </select>
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Current Company</label>
                  <input type="text" id="careerCurrentCompany" className="career-input" placeholder="e.g. Current Employer" />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Current CTC (₹)</label>
                  <input type="text" id="careerCurrentCTC" className="career-input" placeholder="e.g. 3,50,000 P.A." />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Expected CTC (₹)</label>
                  <input type="text" id="careerExpectedCTC" className="career-input" placeholder="e.g. 4,50,000 P.A." />
                </div>
                <div className="career-field-wrap">
                  <label className="career-label">Notice Period</label>
                  <select id="careerNoticePeriod" className="career-select">
                    <option value="Immediate">Immediate Joiner</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="45+ Days">45+ Days</option>
                  </select>
                </div>
                <div className="career-field-wrap full-width">
                  <label className="career-label">
Upload Resume (PDF, DOC, DOCX)                     <span>*</span>
                  </label>
                  <div className="career-file-dropzone" onClick={(event) => { try { (new Function('event', "document.getElementById('careerResumeFile').click()")).call(event.currentTarget, event); } catch(e) {} }}>
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    <div className="career-file-text" id="careerResumeLabel">Click to browse or drag and drop your CV</div>
                    <div className="career-file-hint">Supported formats: PDF, DOC, DOCX (Max size: 5MB)</div>
                    <input type="file" id="careerResumeFile" accept=".pdf,.doc,.docx" style={{"display":"none"}} onChange={(event) => { try { (new Function('event', "if(this.files[0]) document.getElementById('careerResumeLabel').innerText = this.files[0].name;")).call(event.currentTarget, event); } catch(e) {} }} />
                  </div>
                </div>
              </div>
              <div className="career-modal-footer" style={{"marginTop":"24px"}}>
                <button type="button" className="btn-secondary" onClick={(event) => { try { (new Function('event', "closeCareerApplyModal()")).call(event.currentTarget, event); } catch(e) {} }}>Cancel</button>
                <button type="submit" className="btn-prest-apply" style={{"padding":"11px 36px"}}>
                  <i className="fa-solid fa-paper-plane"></i>
 Submit Application
                              </button>
              </div>
            </div>
          </form>
          {/* STEP 2: OTP VERIFICATION (MATCHING PREST LOANS OTP POPUP) */}
          <div className="career-otp-step" id="careerModalStepOtp">
            <div style={{"width":"64px","height":"64px","borderRadius":"50%","background":"#faf5ff","color":"#70146e","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.8rem","margin":"0 auto 16px"}}>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3 style={{"fontSize":"1.4rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>OTP Verification</h3>
            <p style={{"color":"#64748b","fontSize":"0.92rem","maxWidth":"420px","margin":"0 auto 16px"}}>

            We have sent a 6-digit OTP verification code to your mobile number               <strong id="otpPhoneDisplay" style={{"color":"#0f172a"}}>+91-XXXXXXXXXX</strong>
            </p>
            <div className="otp-box-input">
              <input type="text" maxLength={1} className="otp-digit" value="5" autoFocus={true} />
              <input type="text" maxLength={1} className="otp-digit" value="2" />
              <input type="text" maxLength={1} className="otp-digit" value="8" />
              <input type="text" maxLength={1} className="otp-digit" value="4" />
              <input type="text" maxLength={1} className="otp-digit" value="1" />
              <input type="text" maxLength={1} className="otp-digit" value="9" />
            </div>
            <div style={{"marginBottom":"24px"}}>
              <a href="javascript:void(0)" onClick={(event) => { try { (new Function('event', "resendCareerOtp()")).call(event.currentTarget, event); } catch(e) {} }} style={{"color":"#70146e","fontWeight":"600","fontSize":"0.875rem","textDecoration":"underline"}}>

              Resend OTP
                          </a>
            </div>
            <button type="button" className="btn-prest-apply" style={{"padding":"12px 40px"}} onClick={(event) => { try { (new Function('event', "verifyCareerOtp()")).call(event.currentTarget, event); } catch(e) {} }}>
              <i className="fa-solid fa-check"></i>
 Verify & Confirm
                      </button>
          </div>
          {/* STEP 3: SUCCESS CONFIRMATION (MATCHING PREST LOANS APPLIED POPUP) */}
          <div className="career-success-step" id="careerModalStepSuccess">
            <div style={{"width":"72px","height":"72px","borderRadius":"50%","background":"#ecfdf5","color":"#10b981","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"2.2rem","margin":"0 auto 16px","boxShadow":"0 10px 25px rgba(16, 185, 129, 0.2)"}}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h3 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#0f172a","marginBottom":"8px"}}>
Successfully Applied!
                      </h3>
            <p style={{"color":"#64748b","fontSize":"0.95rem","maxWidth":"480px","margin":"0 auto 18px","lineHeight":"1.6"}}>

            Thank you for applying to Prest Loans. Your application has been logged into our recruitment database.
                      </p>
            <div style={{"background":"#f8fafc","border":"1px solid #e2e8f0","borderRadius":"8px","padding":"12px 20px","display":"inline-block","marginBottom":"24px"}}>
              <span style={{"fontSize":"0.8125rem","color":"#64748b"}}>Application Reference ID:</span>
              <strong id="careerAppIdDisplay" style={{"color":"#70146e","fontSize":"1.1rem","letterSpacing":"0.5px"}}>PL-JOB-984210</strong>
            </div>
            <div>
              <button type="button" className="btn-primary" onClick={(event) => { try { (new Function('event', "closeCareerApplyModal()")).call(event.currentTarget, event); } catch(e) {} }}>

              Done & Return to Careers
                          </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="blog-modal-backdrop" id="article-reader-modal" onClick={(event) => { try { (new Function('event', "handleReaderBackdrop(event)")).call(event.currentTarget, event); } catch(e) {} }}>
      <div className="blog-modal-box" id="article-reader-box">
        <button className="blog-modal-close" onClick={(event) => { try { (new Function('event', "closeArticleModal()")).call(event.currentTarget, event); } catch(e) {} }} title="Close (Esc)">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="blog-modal-hero">
          <span className="blog-modal-tag" id="reader-category">MSME Schemes</span>
          <h2 className="blog-modal-title" id="reader-title">Article Title</h2>
          <div className="blog-modal-meta-row">
            <span className="blog-meta-item">
              <i className="fa-regular fa-calendar"></i>
               <span id="reader-date">
19 Dec
              2018              </span>
            </span>
            <span className="blog-meta-item">
              <i className="fa-regular fa-clock"></i>
               <span id="reader-time">
5 min
              read              </span>
            </span>
            <span className="blog-meta-item">
              <i className="fa-solid fa-user-pen"></i>
               <span id="reader-author">
Prest Loans
              Insights Team              </span>
            </span>
            <button className="btn-read-modal" id="reader-share-btn" style={{"marginLeft":"auto"}} onClick={(event) => { try { (new Function('event', "shareCurrentArticle()")).call(event.currentTarget, event); } catch(e) {} }}>
              <i className="fa-solid fa-share-nodes"></i>
 Share
                      </button>
          </div>
        </div>
        <div className="blog-modal-body" id="reader-body">
          {/* Injected dynamically by JavaScript */}
        </div>
      </div>
    </div>


    </>
  );
};
