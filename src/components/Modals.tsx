import React, { useEffect } from 'react';

export const Modals: React.FC = () => {
  // Helper to safely close any modal by element ID
  const closeModalById = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      if (modalId === 'book-modal') {
        setTimeout(() => {
          if (!modal.classList.contains('active')) {
            modal.style.display = 'none';
          }
        }, 280);
      }
    }
    // If no modals remain active, restore body scrolling
    const activeModals = document.querySelectorAll(
      '.modal-backdrop.active, .career-modal-backdrop.active, .blog-modal-backdrop.active, #fraud-warning-modal.active, #careerApplyModal.active, #book-modal.active'
    );
    if (!activeModals || activeModals.length === 0) {
      document.body.style.overflow = '';
    }
  };

  // Helper to close ALL active modals across the entire site
  const closeAllModals = () => {
    const activeModals = document.querySelectorAll(
      '.modal-backdrop.active, .career-modal-backdrop.active, .blog-modal-backdrop.active, #book-modal, #careerApplyModal, #fraud-warning-modal'
    );
    activeModals.forEach((m) => {
      m.classList.remove('active');
      if (m.id === 'book-modal') {
        (m as HTMLElement).style.display = 'none';
      }
    });
    if (typeof (window as any).closeArticleModal === 'function') {
      try {
        (window as any).closeArticleModal();
      } catch (e) {}
    }
    document.body.style.overflow = '';
  };

  // Stepper navigation for loan application modal
  const goToAppStep = (stepNumber: number) => {
    const step1 = document.getElementById('app-step-1-content');
    const step2 = document.getElementById('app-step-2-content');
    const step3 = document.getElementById('app-step-3-content');

    const ind1 = document.getElementById('step-ind-1');
    const ind2 = document.getElementById('step-ind-2');
    const ind3 = document.getElementById('step-ind-3');

    if (step1) step1.style.display = stepNumber === 1 ? 'block' : 'none';
    if (step2) step2.style.display = stepNumber === 2 ? 'block' : 'none';
    if (step3) step3.style.display = stepNumber === 3 ? 'block' : 'none';

    if (ind1) {
      ind1.className = 'app-step ' + (stepNumber === 1 ? 'active' : 'completed');
    }
    if (ind2) {
      ind2.className = 'app-step ' + (stepNumber === 2 ? 'active' : stepNumber > 2 ? 'completed' : '');
    }
    if (ind3) {
      ind3.className = 'app-step ' + (stepNumber === 3 ? 'active completed' : '');
    }
  };

  // Step 1 to Step 2 handler
  const handleLoanStep1Next = () => {
    const nameInput = document.getElementById('app-full-name') as HTMLInputElement | null;
    const phoneInput = document.getElementById('app-phone') as HTMLInputElement | null;
    const emailInput = document.getElementById('app-email') as HTMLInputElement | null;

    const name = nameInput?.value.trim() || '';
    const phone = phoneInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';

    if (!name || !phone || !email) {
      alert('Please provide your Full Name, Mobile Number, and Email Address.');
      return;
    }
    if (phone.length < 10) {
      alert('Please enter a valid 10-digit mobile phone number.');
      return;
    }
    goToAppStep(2);
  };

  // Step 2 to Step 3 handler
  const handleLoanStep2Submit = () => {
    const panInput = document.getElementById('app-pan') as HTMLInputElement | null;
    const bizSelect = document.getElementById('app-biz-type') as HTMLSelectElement | null;

    const pan = panInput?.value.trim() || '';
    const businessType = bizSelect?.value || '';

    if (!pan || !businessType) {
      alert('Please provide your PAN Card number and select your Employment Type.');
      return;
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const appRefId = `PL-2026-${randomNum}`;

    const refDisplay = document.getElementById('app-generated-id');
    if (refDisplay) refDisplay.textContent = appRefId;

    goToAppStep(3);
    if (typeof (window as any).showToast === 'function') {
      (window as any).showToast(`Congratulations! Application #${appRefId} submitted successfully.`);
    }
  };

  // Switch login modal tabs
  const switchLoginTab = (tabName: string) => {
    const tabs = document.querySelectorAll('.login-tab-btn');
    const contents = document.querySelectorAll('.login-tab-content');

    tabs.forEach((t) => t.classList.remove('active'));
    contents.forEach((c) => ((c as HTMLElement).style.display = 'none'));

    const activeTab = document.getElementById(`tab-btn-${tabName}`);
    const activeContent = document.getElementById(`tab-content-${tabName}`);

    if (activeTab) activeTab.classList.add('active');
    if (activeContent) (activeContent as HTMLElement).style.display = 'block';
  };

  // Customer Login OTP Form
  const handleCustomerLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneInput = document.getElementById('login-mobile') as HTMLInputElement | null;
    const mobile = phoneInput?.value || '';
    closeModalById('login-modal');
    if (typeof (window as any).showToast === 'function') {
      (window as any).showToast(`OTP successfully sent to +91 ${mobile}! Check your SMS.`);
    }
  };

  // Track status submit
  const handleTrackStatusSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('track-input') as HTMLInputElement | null;
    const idOrPhone = input?.value.trim() || '';
    const resultBox = document.getElementById('track-result-box');

    if (!idOrPhone) {
      alert('Please enter your Application Reference ID or Registered Mobile Number.');
      return;
    }

    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: #f1fbf5; border: 1.5px solid #10b981; border-radius: 10px; padding: 18px; margin-top: 16px;">
          <div style="display: flex; align-items: center; gap: 8px; color: #16a34a; font-weight: 700; margin-bottom: 8px;">
            <i class="fa-solid fa-circle-check"></i>
            <span>Application Found & Active</span>
          </div>
          <div style="font-size: 0.875rem; color: #334155; line-height: 1.6;">
            <strong>Ref ID:</strong> ${idOrPhone.toUpperCase()}<br/>
            <strong>Status:</strong> <span style="color: #70146e; font-weight: 700;">Under Digital Verification</span><br/>
            <strong>Last Updated:</strong> Today (Realtime)<br/>
            <small style="color: #64748b;">Our underwriting officer will connect within 4 business hours.</small>
          </div>
        </div>
      `;
    }
  };

  // Book modal tabs
  const switchBookTab = (tabName: string, btnEl: HTMLElement) => {
    const modal = document.getElementById('book-modal');
    if (!modal) return;

    modal.querySelectorAll('.book-tab-btn').forEach((b) => b.classList.remove('active'));
    modal.querySelectorAll('.book-tab-pane').forEach((p) => p.classList.remove('active'));

    btnEl.classList.add('active');
    const targetPane = document.getElementById(`book-tab-${tabName}`);
    if (targetPane) {
      targetPane.classList.add('active');
      (targetPane as HTMLElement).style.display = 'block';
    }
  };

  // Share book info
  const shareBookInfo = () => {
    const url = 'https://www.prestloans.com/about#fintech-guide-book';
    const text = "Explore 'The Fintech Entrepreneur's Guide' by Ashok Mittal (Founder, Prest Loans)";
    if (navigator.share) {
      navigator.share({ title: "The Fintech Entrepreneur's Guide", text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} - ${url}`).then(() => {
        if (typeof (window as any).showToast === 'function') {
          (window as any).showToast('Book link copied to clipboard!');
        }
      });
    }
  };

  // Experience Toggle in Career Modal
  const handleCareerExpChange = (selectEl: HTMLSelectElement) => {
    const yrs = document.getElementById('careerExpYears') as HTMLSelectElement | null;
    const mos = document.getElementById('careerExpMonths') as HTMLSelectElement | null;
    const isExperienced = selectEl.value === 'Experience';
    if (yrs) yrs.disabled = !isExperienced;
    if (mos) mos.disabled = !isExperienced;
  };

  useEffect(() => {
    // 1. Expose modal controls globally on window
    (window as any).closeModal = closeModalById;
    (window as any).closeAllModals = closeAllModals;
    (window as any).closeLoanAppModal = () => closeModalById('loan-app-modal');
    (window as any).closeLoginModal = () => closeModalById('login-modal');
    (window as any).closeTrackStatusModal = () => closeModalById('track-status-modal');
    (window as any).closePolicyModal = () => closeModalById('policy-modal');
    (window as any).closeBookModal = () => closeModalById('book-modal');
    (window as any).closeCareerApplyModal = () => closeModalById('careerApplyModal');
    (window as any).closeLightboxModal = () => closeModalById('gallery-lightbox-modal');
    (window as any).goToAppStep = goToAppStep;
    (window as any).switchLoginTab = switchLoginTab;
    (window as any).switchBookTab = switchBookTab;
    (window as any).shareBookInfo = shareBookInfo;

    (window as any).openLoanApplicationModal = (prefill: any = {}) => {
      const modal = document.getElementById('loan-app-modal');
      if (!modal) return;

      if (prefill.amount) {
        const amountInput = document.getElementById('app-loan-amount') as HTMLInputElement | null;
        if (amountInput) amountInput.value = String(prefill.amount);
      }

      if (prefill.product) {
        const productSelect = document.getElementById('app-loan-product') as HTMLSelectElement | null;
        if (productSelect) productSelect.value = prefill.product;
      }

      goToAppStep(1);
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    (window as any).openLoginModal = (tab = 'customer') => {
      const modal = document.getElementById('login-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        switchLoginTab(tab);
      }
    };

    (window as any).openTrackStatusModal = () => {
      const modal = document.getElementById('track-status-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    (window as any).openBookModal = () => {
      const modal = document.getElementById('book-modal');
      if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
      }
    };

    (window as any).openFraudWarningModal = () => {
      const modal = document.getElementById('fraud-warning-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };
    (window as any).closeFraudWarningModal = () => {
      closeModalById('fraud-warning-modal');
    };

    // 2. Global ESC Keydown listener (Closes ANY active popup)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeAllModals();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 3. Global delegated Click listener for close buttons and backdrop clicks
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Close button clicked (including X icons inside close buttons)
      const closeBtn = target.closest(
        '.modal-close-btn, .career-modal-close, .blog-modal-close, [data-modal-close], .modal-backdrop-close'
      );
      if (closeBtn) {
        e.preventDefault();
        e.stopPropagation();
        const parentModal = closeBtn.closest('.modal-backdrop, .career-modal-backdrop, .blog-modal-backdrop');
        if (parentModal && parentModal.id) {
          closeModalById(parentModal.id);
        } else {
          closeAllModals();
        }
        return;
      }

      // Backdrop overlay clicked directly (outside of modal box)
      if (
        target.classList.contains('modal-backdrop') ||
        target.classList.contains('career-modal-backdrop')
      ) {
        closeModalById(target.id);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      {/* 1. POLICY MODAL */}
      <div
        className="modal-backdrop"
        id="policy-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('policy-modal');
        }}
      >
        <div className="modal-box">
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h3 id="policy-modal-title">Regulatory Policy</h3>
              <p id="policy-modal-date">RBI Compliance Document</p>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('policy-modal')}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body" id="policy-modal-body">
            {/* Content injected dynamically via policies.js */}
          </div>
        </div>
      </div>

      {/* 2. LOAN APPLICATION MODAL */}
      <div
        className="modal-backdrop"
        id="loan-app-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('loan-app-modal');
        }}
      >
        <div className="modal-box" style={{ maxWidth: '620px' }}>
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h3>Apply for Digital Loan</h3>
              <p>48-Hour Approval • Paperless Digital Process</p>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('loan-app-modal')}
              aria-label="Close modal"
              title="Close (Esc)"
            >
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
                <input
                  type="text"
                  id="app-full-name"
                  className="quick-input-field"
                  placeholder="Enter Full Name"
                  required={true}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="quick-input-group">
                  <label className="quick-input-label">Mobile Number</label>
                  <input
                    type="tel"
                    id="app-phone"
                    className="quick-input-field"
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required={true}
                  />
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Email Address</label>
                  <input
                    type="email"
                    id="app-email"
                    className="quick-input-field"
                    placeholder="name@domain.com"
                    required={true}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="quick-input-group">
                  <label className="quick-input-label">City / State</label>
                  <input type="text" id="app-city" className="quick-input-field" placeholder="e.g. New Delhi" />
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Pin Code</label>
                  <input
                    type="text"
                    id="app-pincode"
                    className="quick-input-field"
                    placeholder="6-digit pincode"
                    maxLength={6}
                  />
                </div>
              </div>
              <button
                type="button"
                id="btn-next-step-2"
                className="btn-card-submit"
                style={{ marginTop: '14px' }}
                onClick={handleLoanStep1Next}
              >
                <span>Next: Loan Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Step 2 Form */}
            <div id="app-step-2-content" style={{ display: 'none' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="quick-input-group">
                  <label className="quick-input-label">Select Loan Product</label>
                  <select id="app-loan-product" className="quick-input-field" defaultValue="Home Loan">
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
                  <input
                    type="number"
                    id="app-loan-amount"
                    className="quick-input-field"
                    defaultValue="500000"
                    min="50000"
                    max="5000000"
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="quick-input-group">
                  <label className="quick-input-label">PAN Card Number</label>
                  <input
                    type="text"
                    id="app-pan"
                    className="quick-input-field"
                    placeholder="ABCDE1234F"
                    style={{ textTransform: 'uppercase' }}
                    maxLength={10}
                    required={true}
                  />
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Employment Type</label>
                  <select id="app-biz-type" className="quick-input-field" defaultValue="Salaried">
                    <option value="Salaried">Salaried Professional</option>
                    <option value="Self-Employed">Self Employed Professional</option>
                    <option value="Student">Student / Parent</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Annual Income (Approx ₹)</label>
                <select id="app-turnover" className="quick-input-field" defaultValue="6-12L">
                  <option value="3-6L">₹3 Lakhs - ₹6 Lakhs</option>
                  <option value="6-12L">₹6 Lakhs - ₹12 Lakhs</option>
                  <option value="12-25L">₹12 Lakhs - ₹25 Lakhs</option>
                  <option value="25L+">Above ₹25 Lakhs</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={() => goToAppStep(1)}
                  className="btn-secondary"
                  style={{ flex: '0.8', justifyContent: 'center' }}
                >
                  Back
                </button>
                <button
                  type="button"
                  id="btn-submit-loan-app"
                  className="btn-card-submit"
                  style={{ flex: '1.2' }}
                  onClick={handleLoanStep2Submit}
                >
                  <span>Submit Application</span>
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            </div>

            {/* Step 3 Confirmation */}
            <div id="app-step-3-content" style={{ display: 'none', textAlign: 'center', padding: '20px 10px' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  background: '#dcfce7',
                  color: '#16a34a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  margin: '0 auto 20px'
                }}
              >
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Application Submitted Successfully!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '20px' }}>
                Your loan application has been registered successfully. Our automated underwriting desk and credit
                specialists are currently reviewing your details.
              </p>
              <div
                style={{
                  background: '#f8fafc',
                  border: '1.5px dashed #cbd5e1',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '24px'
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Application Reference Number:
                </span>
                <strong id="app-generated-id" style={{ fontSize: '1.35rem', color: '#70146e', letterSpacing: '1px' }}>
                  PL-2026-849201
                </strong>
              </div>
              <button
                type="button"
                className="btn-primary"
                style={{ margin: '0 auto' }}
                onClick={() => {
                  closeModalById('loan-app-modal');
                  goToAppStep(1);
                }}
              >
                Done / Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LOGIN MODAL */}
      <div
        className="modal-backdrop"
        id="login-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('login-modal');
        }}
      >
        <div className="modal-box" style={{ maxWidth: '480px' }}>
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h3>Prest Loans Portal</h3>
              <p>Select your user category to proceed</p>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('login-modal')}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
            <button
              type="button"
              id="tab-btn-customer"
              className="login-tab-btn active"
              onClick={() => switchLoginTab('customer')}
              style={{
                flex: '1',
                padding: '12px',
                border: 'none',
                background: 'none',
                fontWeight: 700,
                color: '#70146e',
                borderBottom: '3px solid #70146e',
                cursor: 'pointer'
              }}
            >
              Borrower
            </button>
            <button
              type="button"
              id="tab-btn-partner"
              className="login-tab-btn"
              onClick={() => switchLoginTab('partner')}
              style={{
                flex: '1',
                padding: '12px',
                border: 'none',
                background: 'none',
                fontWeight: 600,
                color: '#64748b',
                cursor: 'pointer'
              }}
            >
              Partner / DSA
            </button>
            <button
              type="button"
              id="tab-btn-employee"
              className="login-tab-btn"
              onClick={() => switchLoginTab('employee')}
              style={{
                flex: '1',
                padding: '12px',
                border: 'none',
                background: 'none',
                fontWeight: 600,
                color: '#64748b',
                cursor: 'pointer'
              }}
            >
              Employee
            </button>
          </div>
          <div className="modal-body">
            {/* Borrower Login */}
            <div id="tab-content-customer" className="login-tab-content">
              <form id="customer-login-form" onSubmit={handleCustomerLoginSubmit}>
                <div className="quick-input-group">
                  <label className="quick-input-label">Registered Mobile Number</label>
                  <input
                    type="tel"
                    id="login-mobile"
                    className="quick-input-field"
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required={true}
                  />
                </div>
                <button type="submit" className="btn-card-submit">
                  <span>Send Secure OTP</span>
                  <i className="fa-solid fa-key"></i>
                </button>
              </form>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '16px', textAlign: 'center' }}>
                <i className="fa-solid fa-lock"></i> Protected by 256-bit bank grade encryption
              </p>
            </div>
            {/* Partner Login */}
            <div id="tab-content-partner" className="login-tab-content" style={{ display: 'none' }}>
              <div className="quick-input-group">
                <label className="quick-input-label">Partner Code / Email</label>
                <input type="text" className="quick-input-field" placeholder="e.g. DSA-DELHI-102" />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Password</label>
                <input type="password" className="quick-input-field" placeholder="••••••••" />
              </div>
              <button
                type="button"
                className="btn-card-submit"
                onClick={() => {
                  closeModalById('login-modal');
                  if (typeof (window as any).showToast === 'function') {
                    (window as any).showToast('Partner login validated. Redirecting to CRM dashboard...');
                  }
                }}
              >
                Partner Login
              </button>
            </div>
            {/* Employee Login */}
            <div id="tab-content-employee" className="login-tab-content" style={{ display: 'none' }}>
              <div className="quick-input-group">
                <label className="quick-input-label">Work Email (@prestloans.com)</label>
                <input type="email" className="quick-input-field" placeholder="employee@prestloans.com" />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Single Sign-On (SSO) Pin</label>
                <input type="password" className="quick-input-field" placeholder="••••••" />
              </div>
              <button
                type="button"
                className="btn-card-submit"
                onClick={() => {
                  closeModalById('login-modal');
                  if (typeof (window as any).showToast === 'function') {
                    (window as any).showToast('Employee SSO authenticated. Loading internal LOS/LMS...');
                  }
                }}
              >
                Employee SSO Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. TRACK STATUS MODAL */}
      <div
        className="modal-backdrop"
        id="track-status-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('track-status-modal');
        }}
      >
        <div className="modal-box" style={{ maxWidth: '500px' }}>
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h3>Track Loan Application</h3>
              <p>Get real-time updates on your loan status</p>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('track-status-modal')}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <form id="track-status-form" onSubmit={handleTrackStatusSubmit}>
              <div className="quick-input-group">
                <label className="quick-input-label">Application Reference ID or Mobile Number</label>
                <input
                  type="text"
                  id="track-input"
                  className="quick-input-field"
                  placeholder="e.g. PL-2026-849201 or 9876543210"
                  required={true}
                />
              </div>
              <button type="submit" className="btn-card-submit">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search Status</span>
              </button>
            </form>
            <div id="track-result-box" style={{ display: 'none' }}></div>
          </div>
        </div>
      </div>

      {/* 5. GALLERY LIGHTBOX MODAL */}
      <div
        className="modal-backdrop lightbox-modal"
        id="gallery-lightbox-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('gallery-lightbox-modal');
        }}
      >
        <div className="modal-box" style={{ background: 'transparent', border: 'none' }}>
          <div style={{ textAlign: 'right', marginBottom: '10px' }}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('gallery-lightbox-modal')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                width: '36px',
                height: '36px'
              }}
              aria-label="Close Lightbox"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <img src="" alt="Prest Loans Moment" id="lightbox-img" className="lightbox-img-view" />
          <div
            id="lightbox-caption"
            style={{
              color: '#ffffff',
              textAlign: 'center',
              marginTop: '14px',
              fontWeight: 700,
              fontSize: '1.1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}
          ></div>
        </div>
      </div>

      {/* 6. BOOK MODAL */}
      <div
        className="modal-backdrop book-modal-backdrop"
        id="book-modal"
        style={{ display: 'none' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('book-modal');
        }}
      >
        <div className="modal-box book-modal-box">
          <div className="modal-header">
            <div className="modal-title-wrap">
              <div className="book-modal-tag">
                <i className="fa-solid fa-book-bookmark"></i>
                Published Book • Thought Leadership
              </div>
              <h3 id="book-modal-title">The Fintech Entrepreneur's Guide</h3>
              <p>
                By <strong>Ashok Mittal</strong> (Founder & Director, Prest Loans) • Published by BPB Publications
              </p>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('book-modal')}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body book-modal-body">
            <div className="book-modal-grid">
              {/* Left Column: 3D Book Cover & Quick Meta */}
              <div className="book-modal-left">
                <div className="book-3d-wrapper">
                  <img
                    src="/assets/about/fintech-book.jpg"
                    alt="The Fintech Entrepreneur's Guide - Book Cover"
                    className="book-3d-cover"
                  />
                </div>
                <div className="book-quick-specs">
                  <div className="spec-row">
                    <span className="spec-label">
                      <i className="fa-solid fa-user-pen"></i> Author
                    </span>
                    <span className="spec-val">Ashok Mittal</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">
                      <i className="fa-solid fa-building"></i> Publisher
                    </span>
                    <span className="spec-val">BPB Publications</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">
                      <i className="fa-solid fa-calendar-days"></i> Released
                    </span>
                    <span className="spec-val">Nov 2022</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">
                      <i className="fa-solid fa-layer-group"></i> Formats
                    </span>
                    <span className="spec-val">Paperback & Kindle</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">
                      <i className="fa-solid fa-language"></i> Language
                    </span>
                    <span className="spec-val">English</span>
                  </div>
                </div>
              </div>
              {/* Right Column: Details, Highlights & Functional Actions */}
              <div className="book-modal-right">
                <h4 className="book-modal-subtitle">
                  Strategic Blueprint for Modern Lending, NBFC Governance & Tech Scalability
                </h4>
                <p className="book-modal-lead">
                  Authored by Mr. Ashok Mittal, drawing from over three decades of frontline banking, regulatory
                  compliance, and credit operations. An indispensable field guide for fintech entrepreneurs, banking
                  professionals, and technology leaders.
                </p>
                {/* Interactive Tabs */}
                <div className="book-tabs-nav">
                  <button
                    type="button"
                    className="book-tab-btn active"
                    onClick={(e) => switchBookTab('overview', e.currentTarget)}
                  >
                    <i className="fa-solid fa-star"></i> Key Highlights
                  </button>
                  <button
                    type="button"
                    className="book-tab-btn"
                    onClick={(e) => switchBookTab('chapters', e.currentTarget)}
                  >
                    <i className="fa-solid fa-list-check"></i> Chapters Peek
                  </button>
                  <button
                    type="button"
                    className="book-tab-btn"
                    onClick={(e) => switchBookTab('author', e.currentTarget)}
                  >
                    <i className="fa-solid fa-feather"></i> About Author
                  </button>
                </div>
                {/* Tab 1: Key Highlights */}
                <div className="book-tab-pane active" id="book-tab-overview">
                  <ul className="book-highlights-list">
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <div>
                        <strong>Algorithmic Underwriting:</strong> Designing alternative data scoring & automated
                        decision matrices for MSME lending.
                      </div>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <div>
                        <strong>Prudential NBFC Governance:</strong> Aligning operational technology with RBI Master
                        Directions & digital lending guidelines.
                      </div>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <div>
                        <strong>Fintech Unit Economics:</strong> Building sustainable credit platforms with low NPAs
                        and disciplined capital management.
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Tab 2: Chapters Sneak Peek */}
                <div className="book-tab-pane" id="book-tab-chapters" style={{ display: 'none' }}>
                  <div className="chapter-pills-list">
                    <div className="chapter-item">
                      <span className="chapter-num">01</span>
                      <div className="chapter-text">
                        <strong>The Evolution of Digital Credit:</strong> Transition from collateral-heavy legacy banking
                        to algorithmic micro-credit.
                      </div>
                    </div>
                    <div className="chapter-item">
                      <span className="chapter-num">02</span>
                      <div className="chapter-text">
                        <strong>Underwriting Beyond Traditional Collateral:</strong> Alternate data, GST returns, and
                        cash-flow proxy scoring.
                      </div>
                    </div>
                    <div className="chapter-item">
                      <span className="chapter-num">03</span>
                      <div className="chapter-text">
                        <strong>Collections & Risk Containment:</strong> Ethical recovery frameworks and automated
                        customer grievance redressal.
                      </div>
                    </div>
                    <div className="chapter-item">
                      <span className="chapter-num">04</span>
                      <div className="chapter-text">
                        <strong>The Future of RegTech:</strong> Scale, AI underwriting, Account Aggregators, and
                        compliant co-lending partnerships.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab 3: About Author */}
                <div className="book-tab-pane" id="book-tab-author" style={{ display: 'none' }}>
                  <div className="author-modal-bio">
                    <p>
                      <strong>Ashok Mittal</strong> is a Harvard Business School Executive Alumnus and University Gold
                      Medallist with CAIIB & MBM credentials. Prior to founding Prest Loans (Lord Krishna Financial
                      Services Ltd), he served in core leadership positions at leading commercial banks (Union Bank of
                      India, UCO Bank) and prominent financial institutions.
                    </p>
                  </div>
                </div>
                {/* Action Buttons Box */}
                <div className="book-modal-cta-box">
                  <div className="book-cta-label">Available online on leading bookstore portals:</div>
                  <div className="book-cta-buttons">
                    <a
                      href="https://www.amazon.in/Fintech-Entrepreneurs-Guide-Successful-Scalability-ebook/dp/B0BJYSF5F3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-book-cta btn-amazon"
                    >
                      <i className="fa-brands fa-amazon"></i>
                      <span>Order on Amazon</span>
                    </a>
                    <a
                      href="https://in.bpbonline.com/products/the-fintech-entrepreneurs-guide?_pos=1&_sid=124923941&_ss=r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-book-cta btn-bpb"
                    >
                      <i className="fa-solid fa-book-open"></i>
                      <span>Order on BPB Online</span>
                    </a>
                    <button type="button" className="btn-book-cta btn-share" onClick={shareBookInfo}>
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

      {/* 7. CAREER APPLY MODAL */}
      <div
        className="career-modal-backdrop"
        id="careerApplyModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('careerApplyModal');
        }}
      >
        <div className="career-modal-box">
          {/* Modal Header */}
          <div className="career-modal-header">
            <div>
              <div className="career-modal-title" id="applyModalRoleTitle">
                Apply for Position
              </div>
              <div className="career-modal-sub">Prest Loans • Lord Krishna Financial Services Ltd</div>
            </div>
            <button
              type="button"
              className="career-modal-close"
              onClick={() => closeModalById('careerApplyModal')}
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="career-modal-body">
            {/* STEP 1: FORM */}
            <form
              id="careerApplicationForm"
              onSubmit={(e) => {
                e.preventDefault();
                const stepForm = document.getElementById('careerModalStepForm');
                const stepOtp = document.getElementById('careerModalStepOtp');
                const phone = (document.getElementById('careerPhone') as HTMLInputElement)?.value;
                const phoneDisplay = document.getElementById('otpPhoneDisplay');
                if (phoneDisplay && phone) phoneDisplay.textContent = `+91-${phone}`;
                if (stepForm) stepForm.style.display = 'none';
                if (stepOtp) stepOtp.style.display = 'block';
              }}
            >
              <input type="hidden" id="applyJobRoleInput" name="JobRole" />
              <input type="hidden" id="applyJobLocationInput" name="JobLocation" />
              <div id="careerModalStepForm">
                <h4 style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem', marginBottom: '16px' }}>
                  Fill Your Complete Details
                </h4>
                <div className="career-form-grid">
                  <div className="career-field-wrap">
                    <label className="career-label">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="careerFirstName"
                      className="career-input"
                      placeholder="First Name"
                      required={true}
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">Middle Name</label>
                    <input type="text" id="careerMiddleName" className="career-input" placeholder="Middle Name" />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="careerLastName"
                      className="career-input"
                      placeholder="Last Name"
                      required={true}
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">
                      Email ID <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="careerEmail"
                      className="career-input"
                      placeholder="name@example.com"
                      required={true}
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">
                      Mobile Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      id="careerPhone"
                      className="career-input"
                      placeholder="10-digit Mobile"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required={true}
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">
                      Experience Type <span>*</span>
                    </label>
                    <select
                      id="careerExperience"
                      className="career-select"
                      onChange={(e) => handleCareerExpChange(e.currentTarget)}
                      required={true}
                      defaultValue="Fresher"
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="Experience">Experienced</option>
                    </select>
                  </div>
                  <div className="career-field-wrap full-width">
                    <label className="career-label">
                      Address <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="careerAddress"
                      className="career-input"
                      placeholder="Current Residential Address, City, State"
                      required={true}
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">Total Exp (Years)</label>
                    <select id="careerExpYears" className="career-select" disabled={true} defaultValue="0">
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
                    <select id="careerExpMonths" className="career-select" disabled={true} defaultValue="0">
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
                    <input
                      type="text"
                      id="careerCurrentCompany"
                      className="career-input"
                      placeholder="e.g. Current Employer"
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">Current CTC (₹)</label>
                    <input
                      type="text"
                      id="careerCurrentCTC"
                      className="career-input"
                      placeholder="e.g. 3,50,000 P.A."
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">Expected CTC (₹)</label>
                    <input
                      type="text"
                      id="careerExpectedCTC"
                      className="career-input"
                      placeholder="e.g. 4,50,000 P.A."
                    />
                  </div>
                  <div className="career-field-wrap">
                    <label className="career-label">Notice Period</label>
                    <select id="careerNoticePeriod" className="career-select" defaultValue="Immediate">
                      <option value="Immediate">Immediate Joiner</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="45+ Days">45+ Days</option>
                    </select>
                  </div>
                  <div className="career-field-wrap full-width">
                    <label className="career-label">
                      Upload Resume (PDF, DOC, DOCX) <span>*</span>
                    </label>
                    <div
                      className="career-file-dropzone"
                      onClick={() => document.getElementById('careerResumeFile')?.click()}
                    >
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <div className="career-file-text" id="careerResumeLabel">
                        Click to browse or drag and drop your CV
                      </div>
                      <div className="career-file-hint">Supported formats: PDF, DOC, DOCX (Max size: 5MB)</div>
                      <input
                        type="file"
                        id="careerResumeFile"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          const label = document.getElementById('careerResumeLabel');
                          if (file && label) label.innerText = file.name;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="career-modal-footer" style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => closeModalById('careerApplyModal')}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-prest-apply" style={{ padding: '11px 36px' }}>
                    <i className="fa-solid fa-paper-plane"></i>
                    Submit Application
                  </button>
                </div>
              </div>
            </form>

            {/* STEP 2: OTP VERIFICATION */}
            <div className="career-otp-step" id="careerModalStepOtp" style={{ display: 'none' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#faf5ff',
                  color: '#70146e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 16px'
                }}
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                OTP Verification
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 16px' }}>
                We have sent a 6-digit OTP verification code to your mobile number{' '}
                <strong id="otpPhoneDisplay" style={{ color: '#0f172a' }}>
                  +91-XXXXXXXXXX
                </strong>
              </p>
              <div className="otp-box-input">
                <input type="text" maxLength={1} className="otp-digit" defaultValue="5" autoFocus={true} />
                <input type="text" maxLength={1} className="otp-digit" defaultValue="2" />
                <input type="text" maxLength={1} className="otp-digit" defaultValue="8" />
                <input type="text" maxLength={1} className="otp-digit" defaultValue="4" />
                <input type="text" maxLength={1} className="otp-digit" defaultValue="1" />
                <input type="text" maxLength={1} className="otp-digit" defaultValue="9" />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    if (typeof (window as any).showToast === 'function') {
                      (window as any).showToast('New OTP has been sent via SMS.');
                    }
                  }}
                  style={{
                    color: '#70146e',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'underline'
                  }}
                >
                  Resend OTP
                </a>
              </div>
              <button
                type="button"
                className="btn-prest-apply"
                style={{ padding: '12px 40px' }}
                onClick={() => {
                  const stepOtp = document.getElementById('careerModalStepOtp');
                  const stepSuccess = document.getElementById('careerModalStepSuccess');
                  if (stepOtp) stepOtp.style.display = 'none';
                  if (stepSuccess) stepSuccess.style.display = 'block';
                }}
              >
                <i className="fa-solid fa-check"></i>
                Verify & Confirm
              </button>
            </div>

            {/* STEP 3: SUCCESS CONFIRMATION */}
            <div className="career-success-step" id="careerModalStepSuccess" style={{ display: 'none' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  margin: '0 auto 16px',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.2)'
                }}
              >
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Successfully Applied!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 18px', lineHeight: '1.6' }}>
                Thank you for applying to Prest Loans. Your application has been logged into our recruitment database.
              </p>
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  display: 'inline-block',
                  marginBottom: '24px'
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>Application Reference ID: </span>
                <strong id="careerAppIdDisplay" style={{ color: '#70146e', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                  PL-JOB-984210
                </strong>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => closeModalById('careerApplyModal')}
                >
                  Done & Return to Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FRAUD WARNING ADVISORY MODAL (POPUP ON SITE OPEN) */}
      <div
        className="modal-backdrop"
        id="fraud-warning-modal"
        style={{ zIndex: 10005 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModalById('fraud-warning-modal');
        }}
      >
        <div
          className="modal-box"
          style={{
            maxWidth: '620px',
            width: '92%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Header with Purple-Orange fintech gradient */}
          <div
            style={{
              background: 'linear-gradient(135deg, #70146e 0%, #8b185b 35%, #f05a28 100%)',
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              borderBottom: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0
                }}
              >
                ⚠️
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.2px' }}>
                  Beware of Loan Fraud
                </h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.88)', fontWeight: 500 }}>
                  PrestLoans Official Security Advisory
                </p>
              </div>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => closeModalById('fraud-warning-modal')}
              aria-label="Close"
              style={{
                background: 'rgba(255, 255, 255, 0.22)',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.38)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)')}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Modal Body Content */}
          <div
            className="modal-body"
            style={{
              padding: '22px 24px',
              maxHeight: 'calc(88vh - 140px)',
              overflowY: 'auto',
              background: '#ffffff',
              fontSize: '0.92rem',
              lineHeight: 1.55,
              color: '#334155'
            }}
          >
            <div
              style={{
                background: '#fff1f2',
                borderLeft: '4px solid #e11d48',
                padding: '10px 14px',
                borderRadius: '8px',
                marginBottom: '18px',
                fontSize: '0.875rem',
                color: '#9f1239',
                fontWeight: 500,
                lineHeight: 1.5
              }}
            >
              We have identified fraudulent attempts by unauthorized entities and individuals impersonating PrestLoans representatives, sharing fake loan sanction letters or asking for upfront fees via calls, WhatsApp or email.
            </div>

            {/* Section 1: PrestLoans will never */}
            <div style={{ marginBottom: '18px' }}>
              <h4
                style={{
                  margin: '0 0 10px 0',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  color: '#be123c',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}
              >
                <i className="fa-solid fa-circle-xmark" style={{ fontSize: '1.05rem' }}></i>
                PrestLoans will never:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#e11d48',
                      background: '#ffe4e6',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✕
                  </span>
                  <span>Ask for any fee before your loan is sanctioned</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#e11d48',
                      background: '#ffe4e6',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✕
                  </span>
                  <span>Ask you to pay into a personal bank account or personal UPI ID</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#e11d48',
                      background: '#ffe4e6',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✕
                  </span>
                  <span>Ask for your OTP, UPI PIN, net-banking password or card CVV</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#e11d48',
                      background: '#ffe4e6',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✕
                  </span>
                  <span>Ask you to install a screen-sharing or remote-access app</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#e11d48',
                      background: '#ffe4e6',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✕
                  </span>
                  <span>Approve a loan over WhatsApp without a Key Fact Statement (KFS) and a signed loan agreement</span>
                </li>
              </ul>
            </div>

            {/* Section 2: Before you pay, check */}
            <div style={{ marginBottom: '18px' }}>
              <h4
                style={{
                  margin: '0 0 10px 0',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}
              >
                <i className="fa-solid fa-circle-check" style={{ fontSize: '1.05rem' }}></i>
                Before you pay, check:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#16a34a',
                      background: '#dcfce7',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✓
                  </span>
                  <span>All charges are in your KFS and are deducted from the disbursed amount or paid to the company’s own account</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#16a34a',
                      background: '#dcfce7',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✓
                  </span>
                  <span>
                    The person contacting you is genuine; In case of any concern, call{' '}
                    <a href="tel:01145241131" style={{ color: '#70146e', fontWeight: 700, textDecoration: 'underline' }}>
                      011-45241131
                    </a>{' '}
                    or email at{' '}
                    <a href="mailto:info@prestloans.com" style={{ color: '#70146e', fontWeight: 700, textDecoration: 'underline' }}>
                      info@prestloans.com
                    </a>
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      color: '#16a34a',
                      background: '#dcfce7',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✓
                  </span>
                  <span>
                    Our RBI registration (<strong>No. B-14.02019</strong>) is displayed on website and the RBI Sachet portal
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 3: Been targeted? */}
            <div
              style={{
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '12px',
                padding: '14px 16px',
                fontSize: '0.875rem',
                color: '#1e293b',
                lineHeight: 1.6
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#d97706', marginBottom: '4px' }}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>Been targeted?</span>
              </div>
              <div>
                Report it to the National Cyber Crime Helpline{' '}
                <a href="tel:1930" style={{ fontWeight: 800, color: '#0f172a', textDecoration: 'underline' }}>
                  1930
                </a>{' '}
                or at{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2563eb', fontWeight: 700, textDecoration: 'underline' }}
                >
                  cybercrime.gov.in
                </a>
                , and tell us at{' '}
                <a
                  href="mailto:nodalofficer@prestloans.com"
                  style={{ color: '#70146e', fontWeight: 700, textDecoration: 'underline' }}
                >
                  nodalofficer@prestloans.com
                </a>
                .
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div
            style={{
              padding: '14px 24px',
              background: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
              <i className="fa-solid fa-shield-halved" style={{ color: '#10b981', marginRight: '6px' }}></i>
              Your vigilance can prevent fraud!
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => closeModalById('fraud-warning-modal')}
              style={{
                background: 'linear-gradient(135deg, #70146e 0%, #f05a28 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(112, 20, 110, 0.25)',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <i className="fa-solid fa-check"></i>
              I Understand & Acknowledge
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
