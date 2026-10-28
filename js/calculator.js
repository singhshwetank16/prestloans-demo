/**
 * PREST LOANS - OFFICIAL NEO-FINTECH EMI CALCULATOR
 * Realtime reducing-balance EMI, dynamic SVG analytics donut,
 * live slider fills, preset chips, product switcher, and amortization schedule.
 */

(function () {
  'use strict';

  // Format currency in Indian Rupees format (e.g., ₹ 1,50,000)
  function formatINR(number) {
    if (isNaN(number) || number === null) return '₹ 0.00';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(number);
  }

  // Parse raw number from input string
  function cleanNumber(str) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    const cleaned = String(str).replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
  }

  // Elements
  const loanAmountInput = document.getElementById('calc-amount-input');
  const loanAmountSlider = document.getElementById('calc-amount-slider');

  const interestRateInput = document.getElementById('calc-rate-input');
  const interestRateSlider = document.getElementById('calc-rate-slider');

  const tenureYearsInput = document.getElementById('calc-tenure-input');
  const tenureYearsSlider = document.getElementById('calc-tenure-slider');

  const emiDisplay = document.getElementById('calc-emi-result');
  const totalInterestDisplay = document.getElementById('calc-interest-result');
  const totalPaymentDisplay = document.getElementById('calc-total-result');
  const principalDisplay = document.getElementById('calc-principal-display');
  const tenureMonthsBadge = document.getElementById('calc-tenure-months');

  // SVG Donut Elements
  const donutPrincipal = document.getElementById('donut-principal-circle');
  const donutInterest = document.getElementById('donut-interest-circle');
  const donutRatioText = document.getElementById('donut-center-ratio');

  // Legacy bar elements (kept for safety)
  const barPrincipal = document.getElementById('breakdown-bar-p');
  const barInterest = document.getElementById('breakdown-bar-i');
  const ratioPDisplay = document.getElementById('ratio-p');
  const ratioIDisplay = document.getElementById('ratio-i');

  const applyBtn = document.getElementById('calc-apply-btn');
  const amortizationTbody = document.getElementById('amortization-tbody');

  // Update slider gradient fill track
  function updateSliderFill(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const percent = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
    slider.style.setProperty('--slider-fill', percent + '%');
  }

  // Generate Year-by-Year Amortization Schedule if table is present
  function updateAmortizationSchedule(P, annualRate, years, emi) {
    if (!amortizationTbody) return;

    let balance = P;
    const monthlyRate = (annualRate / 12) / 100;
    let html = '';

    for (let yr = 1; yr <= years; yr++) {
      const openBal = balance;
      let yrPrincipal = 0;
      let yrInterest = 0;

      for (let m = 1; m <= 12; m++) {
        if (balance <= 0) break;
        const mInterest = balance * monthlyRate;
        const mPrincipal = Math.min(balance, emi - mInterest);
        yrInterest += mInterest;
        yrPrincipal += mPrincipal;
        balance -= mPrincipal;
      }

      const annualEmi = yrPrincipal + yrInterest;
      const closeBal = Math.max(0, balance);

      html += `
        <tr>
          <td><strong>Year ${yr}</strong></td>
          <td>${formatINR(Math.round(openBal))}</td>
          <td>${formatINR(Math.round(annualEmi))}</td>
          <td style="color: #10b981; font-weight: 700;">${formatINR(Math.round(yrPrincipal))}</td>
          <td style="color: #f05a28; font-weight: 700;">${formatINR(Math.round(yrInterest))}</td>
          <td>${formatINR(Math.round(closeBal))}</td>
        </tr>
      `;
    }

    amortizationTbody.innerHTML = html;
  }

  function calculateEMI() {
    const P = cleanNumber(loanAmountInput ? loanAmountInput.value : 500000);
    const annualRate = cleanNumber(interestRateInput ? interestRateInput.value : 14);
    const years = cleanNumber(tenureYearsInput ? tenureYearsInput.value : 3);

    // Update Slider visual fills
    updateSliderFill(loanAmountSlider);
    updateSliderFill(interestRateSlider);
    updateSliderFill(tenureYearsSlider);

    // Tenure months badge
    if (tenureMonthsBadge) {
      tenureMonthsBadge.textContent = `(${Math.round(years * 12)} Mo)`;
    }

    if (P <= 0 || annualRate <= 0 || years <= 0) {
      if (emiDisplay) emiDisplay.textContent = '₹ 0.00';
      if (totalInterestDisplay) totalInterestDisplay.textContent = '₹ 0.00';
      if (totalPaymentDisplay) totalPaymentDisplay.textContent = '₹ 0.00';
      if (principalDisplay) principalDisplay.textContent = '₹ 0.00';
      return;
    }

    const monthlyRate = (annualRate / 12) / 100;
    const months = years * 12;

    // Standard reducing balance EMI formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - P;

    const pPercent = Math.max(1, Math.min(99, Math.round((P / totalPayment) * 100)));
    const iPercent = 100 - pPercent;

    if (emiDisplay) emiDisplay.textContent = formatINR(Math.round(emi));
    if (totalInterestDisplay) totalInterestDisplay.textContent = formatINR(Math.round(totalInterest));
    if (totalPaymentDisplay) totalPaymentDisplay.textContent = formatINR(Math.round(totalPayment));
    if (principalDisplay) principalDisplay.textContent = formatINR(Math.round(P));

    // Update SVG Donut (Circumference with radius=42 is ~263.89)
    const circumference = 2 * Math.PI * 42;
    if (donutPrincipal) {
      const pFraction = P / totalPayment;
      const offset = circumference * (1 - pFraction);
      donutPrincipal.style.strokeDashoffset = offset;
    }
    if (donutRatioText) {
      donutRatioText.textContent = `${pPercent}%`;
    }

    // Ratio pill badges
    if (ratioPDisplay) ratioPDisplay.textContent = `${pPercent}%`;
    if (ratioIDisplay) ratioIDisplay.textContent = `${iPercent}%`;

    // Legacy bar (if present)
    if (barPrincipal && barInterest) {
      barPrincipal.style.width = pPercent + '%';
      barInterest.style.width = iPercent + '%';
    }

    // Update Amortization schedule if on calculator.html
    updateAmortizationSchedule(P, annualRate, years, emi);
  }

  // Setup Event Listeners for Amount
  if (loanAmountSlider && loanAmountInput) {
    loanAmountSlider.addEventListener('input', function () {
      loanAmountInput.value = this.value;
      updateActiveChip('amount', this.value);
      calculateEMI();
    });

    loanAmountInput.addEventListener('input', function () {
      const val = cleanNumber(this.value);
      if (val >= 10000 && val <= 10000000) {
        loanAmountSlider.value = val;
      }
      updateActiveChip('amount', val);
      calculateEMI();
    });
  }

  // Setup Event Listeners for Interest Rate
  if (interestRateSlider && interestRateInput) {
    interestRateSlider.addEventListener('input', function () {
      interestRateInput.value = this.value;
      updateActiveChip('rate', this.value);
      calculateEMI();
    });

    interestRateInput.addEventListener('input', function () {
      const val = cleanNumber(this.value);
      if (val >= 8 && val <= 36) {
        interestRateSlider.value = val;
      }
      updateActiveChip('rate', val);
      calculateEMI();
    });
  }

  // Setup Event Listeners for Tenure
  if (tenureYearsSlider && tenureYearsInput) {
    tenureYearsSlider.addEventListener('input', function () {
      tenureYearsInput.value = this.value;
      updateActiveChip('tenure', this.value);
      calculateEMI();
    });

    tenureYearsInput.addEventListener('input', function () {
      const val = cleanNumber(this.value);
      if (val >= 1 && val <= 15) {
        tenureYearsSlider.value = val;
      }
      updateActiveChip('tenure', val);
      calculateEMI();
    });
  }

  // Quick Preset Chips Interaction
  function updateActiveChip(category, value) {
    const chipContainer = document.querySelector(`.calc-preset-chips[data-target="${category}"]`);
    if (!chipContainer) return;
    const chips = chipContainer.querySelectorAll('.calc-chip-btn');
    chips.forEach(chip => {
      const chipVal = parseFloat(chip.getAttribute('data-val'));
      if (Math.abs(chipVal - parseFloat(value)) < 0.01) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.calc-chip-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const parent = this.closest('.calc-preset-chips');
      if (!parent) return;
      const target = parent.getAttribute('data-target');
      const val = this.getAttribute('data-val');

      if (target === 'amount') {
        if (loanAmountInput) loanAmountInput.value = val;
        if (loanAmountSlider) loanAmountSlider.value = val;
        updateActiveChip('amount', val);
      } else if (target === 'rate') {
        if (interestRateInput) interestRateInput.value = val;
        if (interestRateSlider) interestRateSlider.value = val;
        updateActiveChip('rate', val);
      } else if (target === 'tenure') {
        if (tenureYearsInput) tenureYearsInput.value = val;
        if (tenureYearsSlider) tenureYearsSlider.value = val;
        updateActiveChip('tenure', val);
      }
      calculateEMI();
    });
  });

  // Loan Product Switcher Tabs Interaction
  document.querySelectorAll('.calc-product-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.calc-product-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const rate = this.getAttribute('data-rate');
      const tenure = this.getAttribute('data-tenure');

      if (rate && interestRateInput && interestRateSlider) {
        interestRateInput.value = rate;
        interestRateSlider.value = rate;
        updateActiveChip('rate', rate);
      }
      if (tenure && tenureYearsInput && tenureYearsSlider) {
        tenureYearsInput.value = tenure;
        tenureYearsSlider.value = tenure;
        updateActiveChip('tenure', tenure);
      }
      calculateEMI();
    });
  });

  // Connect "Apply For Loan" button
  if (applyBtn) {
    applyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const amount = cleanNumber(loanAmountInput ? loanAmountInput.value : 500000);
      const tenure = cleanNumber(tenureYearsInput ? tenureYearsInput.value : 3);
      if (window.openLoanApplicationModal) {
        window.openLoanApplicationModal({ amount, tenure });
      } else {
        const modal = document.getElementById('apply-loan-modal');
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }

  // Expose global init function
  window.initLoanCalculator = function () {
    if (loanAmountInput && !loanAmountInput.value) {
      loanAmountInput.value = "500000";
      if (loanAmountSlider) loanAmountSlider.value = "500000";
    }
    if (interestRateInput && !interestRateInput.value) {
      interestRateInput.value = "14";
      if (interestRateSlider) interestRateSlider.value = "14";
    }
    if (tenureYearsInput && !tenureYearsInput.value) {
      tenureYearsInput.value = "3";
      if (tenureYearsSlider) tenureYearsSlider.value = "3";
    }
    calculateEMI();
  };

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initLoanCalculator);
  } else {
    window.initLoanCalculator();
  }
})();
