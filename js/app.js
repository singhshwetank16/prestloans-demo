/**
 * PREST LOANS - MAIN APPLICATION LOGIC
 * Navigation, Modals, Lightbox, Application Process, Form Handlers & Toasts
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. STICKY HEADER & SCROLL EFFECTS ---
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. MOBILE MENU & ACCESSIBILITY ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    function toggleMobileMenu(open) {
      const shouldOpen = typeof open === 'boolean' ? open : !mainNav.classList.contains('active');
      mainNav.classList.toggle('active', shouldOpen);
      document.body.classList.toggle('mobile-menu-open', shouldOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (shouldOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    }

    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Mobile dropdown accordion handling (Products, Media, etc.)
    const dropdownToggles = mainNav.querySelectorAll('.nav-item.dropdown > a');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const parentItem = this.parentElement;
          const wasActive = parentItem.classList.contains('active');
          // Close other open dropdowns
          mainNav.querySelectorAll('.nav-item.dropdown.active').forEach(item => {
            if (item !== parentItem) item.classList.remove('active');
          });
          parentItem.classList.toggle('active', !wasActive);
        }
      });
    });

    // Close mobile menu when a leaf link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // If clicking a dropdown parent toggle on mobile/tablet, don't close menu
        if (link.parentElement.classList.contains('dropdown') && window.innerWidth <= 1024) {
          return;
        }
        toggleMobileMenu(false);
      });
    });

    // Close when clicking outside of nav and toggle
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        toggleMobileMenu(false);
      }
    });

    // Auto-close on resize back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && mainNav.classList.contains('active')) {
        toggleMobileMenu(false);
      }
    });
  }

  // --- 3. TOAST NOTIFICATION UTILITY ---
  window.showToast = function (message, type = 'success') {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    toast.className = `toast-notice ${type} show`;
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  // --- 4. MODALS SYSTEM ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Attach modal close buttons
  document.querySelectorAll('.modal-close-btn, .modal-backdrop-close').forEach(btn => {
    btn.addEventListener('click', function () {
      const modal = this.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal when clicking outside modal-box
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // --- 5. LOGIN MODAL TABS & HANDLERS ---
  window.openLoginModal = function (tab = 'customer') {
    openModal('login-modal');
    switchLoginTab(tab);
  };

  window.switchLoginTab = function (tabName) {
    const tabs = document.querySelectorAll('.login-tab-btn');
    const contents = document.querySelectorAll('.login-tab-content');

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');

    const activeTab = document.getElementById(`tab-btn-${tabName}`);
    const activeContent = document.getElementById(`tab-content-${tabName}`);

    if (activeTab) activeTab.classList.add('active');
    if (activeContent) activeContent.style.display = 'block';
  };

  // Login form handler
  const customerLoginForm = document.getElementById('customer-login-form');
  if (customerLoginForm) {
    customerLoginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const mobile = document.getElementById('login-mobile').value;
      closeModal('login-modal');
      window.showToast(`OTP successfully sent to +91 ${mobile}! Check your SMS.`);
    });
  }

  // --- 6. LOAN APPLICATION MODAL & MULTI-STEP WORKFLOW ---
  window.openLoanApplicationModal = function (prefill = {}) {
    const modal = document.getElementById('loan-app-modal');
    if (!modal) return;

    if (prefill.amount) {
      const amountInput = document.getElementById('app-loan-amount');
      if (amountInput) amountInput.value = prefill.amount;
    }
    if (prefill.product) {
      const productSelect = document.getElementById('app-loan-product');
      if (productSelect) productSelect.value = prefill.product;
    }

    // Reset to step 1
    goToAppStep(1);
    openModal('loan-app-modal');
  };

  window.goToAppStep = function (stepNumber) {
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

  // Step 1 to Step 2 validation
  const nextToStep2Btn = document.getElementById('btn-next-step-2');
  if (nextToStep2Btn) {
    nextToStep2Btn.addEventListener('click', function () {
      const name = document.getElementById('app-full-name').value.trim();
      const phone = document.getElementById('app-phone').value.trim();
      const email = document.getElementById('app-email').value.trim();

      if (!name || !phone || !email) {
        alert('Please provide your Full Name, Mobile Number, and Email Address.');
        return;
      }
      if (phone.length < 10) {
        alert('Please enter a valid 10-digit mobile phone number.');
        return;
      }
      goToAppStep(2);
    });
  }

  // Step 2 to Step 3 (Submit Application)
  const submitAppBtn = document.getElementById('btn-submit-loan-app');
  if (submitAppBtn) {
    submitAppBtn.addEventListener('click', function () {
      const pan = document.getElementById('app-pan').value.trim();
      const businessType = document.getElementById('app-biz-type').value;

      if (!pan || !businessType) {
        alert('Please provide your PAN Card number and select your Business Entity Type.');
        return;
      }

      // Generate Reference ID
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const appRefId = `PL-2026-${randomNum}`;

      const refDisplay = document.getElementById('app-generated-id');
      if (refDisplay) refDisplay.textContent = appRefId;

      goToAppStep(3);
      window.showToast(`Congratulations! Application #${appRefId} submitted successfully.`);
    });
  }

  // --- 7. FOOTER ENQUIRY FORM HANDLER (MATCHING SCREENSHOT 2) ---
  const footerEnquiryForm = document.getElementById('footer-enquiry-form');
  if (footerEnquiryForm) {
    footerEnquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('footer-enq-name').value.trim();
      const phone = document.getElementById('footer-enq-phone').value.trim();

      if (!name || !phone) {
        alert('Please enter your Name and Contact Phone Number.');
        return;
      }

      footerEnquiryForm.reset();
      window.showToast(`Thank you, ${name}! The Prest Loans advisory team will contact you shortly.`);
    });
  }

  // Quick Hero Form Handler
  const heroQuickForm = document.getElementById('hero-quick-form');
  if (heroQuickForm) {
    heroQuickForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const amount = document.getElementById('hero-loan-amount').value;
      const phone = document.getElementById('hero-phone').value;
      window.openLoanApplicationModal({ amount });
    });
  }

  // --- 8. PHOTO GALLERY FILTER & LIGHTBOX ---
  const galleryFilters = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilters.forEach(btn => {
    btn.addEventListener('click', function () {
      galleryFilters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox View
  window.openGalleryLightbox = function (imgSrc, title) {
    const lightboxModal = document.getElementById('gallery-lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightboxModal && lightboxImg) {
      lightboxImg.src = imgSrc;
      if (lightboxCaption) lightboxCaption.textContent = title || 'Prest Loans Moments';
      openModal('gallery-lightbox-modal');
    }
  };

  // --- 9. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Close other open faqs
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBody = other.querySelector('.faq-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 40 + 'px';
      }
    });
  });

  // --- 10. LANGUAGE SELECTOR (ENGLISH / HINGLISH TOGGLE) ---
  const langSelector = document.getElementById('lang-select');
  if (langSelector) {
    langSelector.addEventListener('change', function () {
      const lang = this.value;
      if (lang === 'hi') {
        applyHindiTranslations();
        window.showToast('भाषा सफलतापूर्वक हिंदी में बदली गई');
      } else {
        applyEnglishTranslations();
        window.showToast('Language switched to English');
      }
    });
  }

  function applyHindiTranslations() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = 'अपने सपनों को दें नई उड़ान <span class="highlight-purple">फास्ट डिजिटल लोन</span> के साथ';
    }
    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) {
      heroDesc.textContent = 'होम लोन, शिक्षा लोन एवं पर्सनल लोन, RBI-विनियमित ऋण भागीदारों के माध्यम से। पारदर्शी प्रक्रिया एवं त्वरित वितरण।';
    }
    const calcTitle = document.querySelector('.calc-title');
    if (calcTitle) {
      calcTitle.textContent = 'आपको कितने लोन की आवश्यकता है?';
    }
  }

  function applyEnglishTranslations() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = 'Power Your Dreams with <span class="highlight-moving-gradient">Instant Digital Loans</span>';
    }
    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) {
      heroDesc.textContent = 'Home loans, education loans, and personal loans, sourced through RBI-regulated lending partners.';
    }
    const calcTitle = document.querySelector('.calc-title');
    if (calcTitle) {
      calcTitle.textContent = 'How Much Loan Capital Do You Need?';
    }
  }

  // --- 11. TRACK LOAN STATUS MODAL ---
  window.openTrackStatusModal = function () {
    openModal('track-status-modal');
  };

  const trackForm = document.getElementById('track-status-form');
  if (trackForm) {
    trackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const idOrPhone = document.getElementById('track-input').value.trim();
      const resultBox = document.getElementById('track-result-box');

      if (!idOrPhone) {
        alert('Please enter your Application Reference ID or Registered Mobile Number.');
        return;
      }

      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div style="background: #f1fbf5; border: 1.5px solid #10b981; border-radius: 10px; padding: 18px; margin-top: 16px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <strong style="color: #065f46; font-size: 1rem;"><i class="fa-solid fa-circle-check"></i> Application Found</strong>
              <span style="background: #10b981; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 2px 10px; border-radius: 999px;">DOCUMENT VERIFICATION</span>
            </div>
            <p style="font-size: 0.875rem; color: #334155; margin-bottom: 4px;"><strong>Reference:</strong> ${idOrPhone.toUpperCase()}</p>
            <p style="font-size: 0.875rem; color: #334155; margin-bottom: 4px;"><strong>Stage:</strong> Underwriting Team Review</p>
            <p style="font-size: 0.8125rem; color: #64748b;">Your application is under secure digital underwriting review. A dedicated Relationship Manager will connect with you shortly.</p>
          </div>
        `;
      }
    });
  }

  // --- 12. ANIMATED NUMBER COUNTERS (TRIGGER ON REFRESH & SCROLL) ---
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    counterElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-counter'));
      if (isNaN(target)) return;

      const prefix = el.getAttribute('data-prefix') || '';
      const isComma = el.getAttribute('data-format') === 'comma';
      const duration = parseInt(el.getAttribute('data-duration'), 10) || 2000;

      // Retain inner suffix (HTML span or text attribute)
      const innerSpan = el.querySelector('span');
      const suffixHtml = innerSpan ? innerSpan.outerHTML : (el.getAttribute('data-suffix') || '');

      // Set initial count to 0 so every refresh starts strictly from 0
      const initialNum = isComma ? (0).toLocaleString('en-IN') : 0;
      el.innerHTML = `${prefix}${initialNum}${suffixHtml}`;

      let hasAnimated = false;

      function startAnimation() {
        if (hasAnimated) return;
        hasAnimated = true;

        let startTime = null;

        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out cubic: energetic initial burst, gentle smooth landing
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          const formattedVal = isComma ? currentVal.toLocaleString('en-IN') : currentVal;
          el.innerHTML = `${prefix}${formattedVal}${suffixHtml}`;

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          } else {
            const finalVal = isComma ? target.toLocaleString('en-IN') : target;
            el.innerHTML = `${prefix}${finalVal}${suffixHtml}`;
          }
        }

        window.requestAnimationFrame(animate);
      }

      // Check visibility: animate immediately if visible, or when scrolled into view
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(startAnimation, 120);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });

        observer.observe(el);
      } else {
        setTimeout(startAnimation, 120);
      }
    });
  }

  initCounters();

  // --- 13. SCROLL-TRIGGERED REVEAL ANIMATIONS (AOS) ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.02,
        rootMargin: '100px 0px 100px 0px'
      });

      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('is-visible');
        }
        observer.observe(el);
      });
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  }

  initScrollReveal();

  // --- 14. CAREER PAGE MODULE (JOB ACCORDION, TESTIMONIALS SLIDER & APPLICATION MODAL) ---
  window.togglePrestJob = function (jobId) {
    const item = document.getElementById(jobId);
    if (!item) return;
    const isOpen = item.classList.contains('open');
    // Close other open accordions optionally or keep multiple open
    item.classList.toggle('open', !isOpen);
  };

  window.filterPrestJobs = function (dept, btn) {
    const chips = document.querySelectorAll('.job-filter-chip');
    chips.forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const jobItems = document.querySelectorAll('.prest-accordion-item');
    jobItems.forEach(item => {
      const itemDept = item.getAttribute('data-department') || 'all';
      if (dept === 'all' || itemDept === dept) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  // Testimonials Slider with pause-on-hover, colleague ribbon, progress bar & auto-play
  let currentEmpSlide = 0;
  const empTrack = document.getElementById('empTestimonialTrack');
  const empSlides = document.querySelectorAll('.emp-testimonial-slide');
  const empDots = document.querySelectorAll('.carousel-dot');
  const empRibbonItems = document.querySelectorAll('.emp-ribbon-item');
  const empProgressFill = document.getElementById('empProgressFill');
  const empHoverStatus = document.getElementById('empHoverStatus');
  const empCounter = document.getElementById('empCounterBadge');
  let empSlideInterval = null;

  function resetProgressBar() {
    if (!empProgressFill) return;
    empProgressFill.classList.remove('running');
    void empProgressFill.offsetWidth; // Force reflow
    empProgressFill.classList.add('running');
  }

  function goToEmpSlide(idx) {
    if (!empTrack || !empSlides.length) return;
    if (idx < 0) idx = empSlides.length - 1;
    if (idx >= empSlides.length) idx = 0;
    currentEmpSlide = idx;

    empTrack.style.transform = `translateX(-${currentEmpSlide * 100}%)`;

    // Update dots
    empDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === currentEmpSlide);
    });

    // Update Ribbon Items (only scrolls the horizontal ribbon container, never scrolls the window page)
    const ribbonTrack = document.getElementById('empRibbonTrack');
    empRibbonItems.forEach((btn, bIdx) => {
      const isActive = bIdx === currentEmpSlide;
      btn.classList.toggle('active', isActive);
      if (isActive && ribbonTrack) {
        const offset = btn.offsetLeft - (ribbonTrack.clientWidth / 2) + (btn.clientWidth / 2);
        ribbonTrack.scrollTo({ left: offset, behavior: 'smooth' });
      }
    });

    // Update Slide Counter
    if (empCounter) {
      const numStr = (currentEmpSlide + 1).toString().padStart(2, '0');
      const totalStr = empSlides.length.toString().padStart(2, '0');
      empCounter.innerText = `${numStr} / ${totalStr}`;
    }

    resetProgressBar();
  }

  window.nextEmpSlide = function () {
    goToEmpSlide(currentEmpSlide + 1);
  };

  window.prevEmpSlide = function () {
    goToEmpSlide(currentEmpSlide - 1);
  };

  window.setEmpSlide = function (idx) {
    goToEmpSlide(idx);
  };

  function startEmpSliderAuto() {
    if (!empTrack) return;
    stopEmpSliderAuto();
    resetProgressBar();
    if (empHoverStatus) {
      empHoverStatus.classList.remove('paused');
      empHoverStatus.innerHTML = '<i class="fa-solid fa-play"></i> Auto-playing (Hover to pause)';
    }
    empSlideInterval = setInterval(() => {
      window.nextEmpSlide();
    }, 4500);
  }

  function stopEmpSliderAuto() {
    if (empSlideInterval) {
      clearInterval(empSlideInterval);
      empSlideInterval = null;
    }
    if (empProgressFill) {
      empProgressFill.style.animationPlayState = 'paused';
    }
    if (empHoverStatus) {
      empHoverStatus.classList.add('paused');
      empHoverStatus.innerHTML = '<i class="fa-solid fa-pause"></i> Auto-play paused (Hovering)';
    }
  }

  function resumeEmpSlider() {
    if (empProgressFill) {
      empProgressFill.style.animationPlayState = 'running';
    }
    startEmpSliderAuto();
  }

  const sliderWrapper = document.getElementById('empSliderWrapper');
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', stopEmpSliderAuto);
    sliderWrapper.addEventListener('mouseleave', resumeEmpSlider);
    sliderWrapper.addEventListener('touchstart', stopEmpSliderAuto, { passive: true });
    sliderWrapper.addEventListener('touchend', resumeEmpSlider, { passive: true });
    startEmpSliderAuto();
  }


  // Job Application Modal
  window.openCareerApplyModal = function (roleTitle, roleLocation) {
    const modal = document.getElementById('careerApplyModal');
    if (!modal) return;
    const titleEl = document.getElementById('applyModalRoleTitle');
    const roleInput = document.getElementById('applyJobRoleInput');
    const locInput = document.getElementById('applyJobLocationInput');

    if (titleEl) titleEl.innerText = roleTitle ? `Apply for ${roleTitle}` : 'Apply for Career Opportunity';
    if (roleInput) roleInput.value = roleTitle || '';
    if (locInput) locInput.value = roleLocation || '';

    // Reset steps
    const stepForm = document.getElementById('careerModalStepForm');
    const stepOtp = document.getElementById('careerModalStepOtp');
    const stepSuccess = document.getElementById('careerModalStepSuccess');
    if (stepForm) stepForm.style.display = 'block';
    if (stepOtp) stepOtp.classList.remove('active');
    if (stepSuccess) stepSuccess.classList.remove('active');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCareerApplyModal = function () {
    const modal = document.getElementById('careerApplyModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Experience Toggle
  window.handleCareerExpChange = function (select) {
    const yrs = document.getElementById('careerExpYears');
    const mos = document.getElementById('careerExpMonths');
    const company = document.getElementById('careerCurrentCompany');
    const ctc = document.getElementById('careerCurrentCTC');

    const isExperienced = select.value === 'Experience';
    if (yrs) yrs.disabled = !isExperienced;
    if (mos) mos.disabled = !isExperienced;
    if (company) company.required = isExperienced;
    if (ctc) ctc.required = isExperienced;
  };

  // Submit Career Application -> Move to OTP verification step
  const careerForm = document.getElementById('careerApplicationForm');
  if (careerForm) {
    careerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const phone = document.getElementById('careerPhone').value.trim();
      if (!phone || phone.length < 10) {
        if (window.showToast) window.showToast('Please enter a valid 10-digit mobile number.');
        return;
      }

      const role = document.getElementById('applyJobRoleInput').value || 'Open Position';
      const name = document.getElementById('careerFirstName').value;

      // Show OTP Step
      const stepForm = document.getElementById('careerModalStepForm');
      const stepOtp = document.getElementById('careerModalStepOtp');
      const otpPhoneDisplay = document.getElementById('otpPhoneDisplay');
      if (otpPhoneDisplay) otpPhoneDisplay.innerText = phone;

      if (stepForm) stepForm.style.display = 'none';
      if (stepOtp) stepOtp.classList.add('active');

      if (window.showToast) window.showToast(`Verification code sent to +91 ${phone}`);
    });
  }

  // OTP Verification
  window.verifyCareerOtp = function () {
    const stepOtp = document.getElementById('careerModalStepOtp');
    const stepSuccess = document.getElementById('careerModalStepSuccess');
    const appIdDisplay = document.getElementById('careerAppIdDisplay');

    const randomId = 'PL-JOB-' + Math.floor(100000 + Math.random() * 900000);
    if (appIdDisplay) appIdDisplay.innerText = randomId;

    if (stepOtp) stepOtp.classList.remove('active');
    if (stepSuccess) stepSuccess.classList.add('active');

    if (window.showToast) window.showToast('Application verified & submitted successfully!');
  };

  window.resendCareerOtp = function () {
    if (window.showToast) window.showToast('A new 6-digit OTP has been sent to your mobile.');
  };

  // Close modal when clicking outside
  const careerModal = document.getElementById('careerApplyModal');
  if (careerModal) {
    careerModal.addEventListener('click', function (e) {
      if (e.target === careerModal) {
        window.closeCareerApplyModal();
      }
    });
  }

  // Products Page - Sticky Pill ScrollSpy
  const productPills = document.querySelectorAll('.product-nav-pill');
  if (productPills.length > 0) {
    const productSections = document.querySelectorAll('#business-loan, #home-loan, #education-loan, #personal-loan, #short-term-personal-loan');
    function updateProductScrollSpy() {
      let currentId = '';
      productSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= 220) {
          currentId = section.getAttribute('id');
        }
      });
      productPills.forEach(pill => {
        const href = pill.getAttribute('href');
        const icon = pill.querySelector('i');
        if (href === '#' + currentId) {
          pill.style.background = '#70146e';
          pill.style.color = '#ffffff';
          pill.style.borderColor = '#70146e';
          if (icon) icon.style.color = '#ffffff';
        } else {
          pill.style.background = '#f8fafc';
          pill.style.color = '#1e293b';
          pill.style.borderColor = '#e2e8f0';
          if (icon) {
            if (href && href.includes('short-term')) icon.style.color = '#f05a28';
            else icon.style.color = '#70146e';
          }
        }
      });
    }
    window.addEventListener('scroll', updateProductScrollSpy, { passive: true });
    updateProductScrollSpy();
  }

});


