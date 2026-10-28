/**
 * PREST LOANS (Lord Krishna Financial Services Ltd)
 * Interest Rate Model & Schedule of Charges Interactive Suite
 */

document.addEventListener('DOMContentLoaded', () => {
  initSocTabs();
  initSocSearch();
  initSocEstimator();
  initSocFaqs();
});

/* ==========================================================================
   1. TAB SWITCHING
   ========================================================================== */
function initSocTabs() {
  const tabButtons = document.querySelectorAll('.soc-tab-btn');
  const tabPanels = document.querySelectorAll('.soc-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Update buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panels
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.style.display = 'block';
          panel.classList.add('active-panel');
        } else {
          panel.style.display = 'none';
          panel.classList.remove('active-panel');
        }
      });

      // Clear search when changing tabs
      const searchInput = document.getElementById('soc-search-input');
      if (searchInput && searchInput.value.trim() !== '') {
        searchInput.value = '';
        resetTableFilter(targetId);
      }
    });
  });
}

/* ==========================================================================
   2. INSTANT SEARCH & FILTER
   ========================================================================== */
function initSocSearch() {
  const searchInput = document.getElementById('soc-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activePanel = document.querySelector('.soc-tab-panel.active-panel') || document.querySelector('.soc-tab-panel');
    if (!activePanel) return;

    const rows = activePanel.querySelectorAll('tbody tr');
    let visibleCount = 0;

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(query)) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    // Check no-results row
    let noResultRow = activePanel.querySelector('.no-results-row');
    if (visibleCount === 0) {
      if (!noResultRow) {
        noResultRow = document.createElement('tr');
        noResultRow.className = 'no-results-row';
        noResultRow.innerHTML = `<td colspan="3" style="text-align: center; padding: 32px 20px; color: #64748b;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem; color: #94a3b8; display: block; margin-bottom: 8px;"></i>
          No fee or charge heads matching "<strong>${query}</strong>" in this category.
        </td>`;
        activePanel.querySelector('tbody').appendChild(noResultRow);
      } else {
        noResultRow.style.display = '';
        noResultRow.querySelector('strong').textContent = query;
      }
    } else if (noResultRow) {
      noResultRow.style.display = 'none';
    }
  });
}

function resetTableFilter(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const rows = panel.querySelectorAll('tbody tr');
  rows.forEach(r => r.style.display = '');
  const noResultRow = panel.querySelector('.no-results-row');
  if (noResultRow) noResultRow.style.display = 'none';
}

/* ==========================================================================
   3. INTERACTIVE FEE & NET DISBURSAL ESTIMATOR
   ========================================================================== */
const LOAN_PRODUCT_DATA = {
  'unsecured-business': {
    name: 'Unsecured Business Loan',
    baseRate: 20.0,
    procFeeRate: 2.5,
    minProcFee: 3000,
    docHandling: 2950,
    minAmt: 100000,
    maxAmt: 5000000,
    defaultAmt: 500000,
    defaultTenor: 24
  },
  'secured-business': {
    name: 'Secured Business Loan (Property/Collateral)',
    baseRate: 16.5,
    procFeeRate: 1.5,
    minProcFee: 5000,
    docHandling: 5900,
    minAmt: 500000,
    maxAmt: 10000000,
    defaultAmt: 1500000,
    defaultTenor: 48
  },
  'education-loan': {
    name: 'Education / Skill Development Loan',
    baseRate: 14.0,
    procFeeRate: 1.0,
    minProcFee: 1000,
    docHandling: 0,
    minAmt: 50000,
    maxAmt: 1500000,
    defaultAmt: 250000,
    defaultTenor: 24
  },
  'corporate-personal': {
    name: 'Personal Loan for Corporate Employees',
    baseRate: 18.0,
    procFeeRate: 1.0,
    minProcFee: 1000,
    docHandling: 0,
    minAmt: 50000,
    maxAmt: 1000000,
    defaultAmt: 200000,
    defaultTenor: 24
  },
  'short-term-personal': {
    name: 'Short Term Personal Loan (STPL)',
    baseRate: 30.0,
    procFeeRate: 10.0,
    minProcFee: 1500,
    docHandling: 0,
    minAmt: 10000,
    maxAmt: 200000,
    defaultAmt: 50000,
    defaultTenor: 6
  }
};

function initSocEstimator() {
  const prodSelect = document.getElementById('est-product-select');
  const amtRange = document.getElementById('est-amt-range');
  const amtLabel = document.getElementById('est-amt-val');
  const tenorRange = document.getElementById('est-tenor-range');
  const tenorLabel = document.getElementById('est-tenor-val');

  if (!prodSelect || !amtRange || !tenorRange) return;

  function updateEstimator() {
    const prodKey = prodSelect.value;
    const config = LOAN_PRODUCT_DATA[prodKey] || LOAN_PRODUCT_DATA['unsecured-business'];

    const principal = parseFloat(amtRange.value);
    const tenureMonths = parseInt(tenorRange.value, 10);

    amtLabel.textContent = formatINR(principal);
    tenorLabel.textContent = `${tenureMonths} Months`;

    // Calculate Indicative Rate & EMI
    const annualRate = config.baseRate;
    const monthlyRate = annualRate / 12 / 100;
    const emi = Math.round(
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
    );

    // Calculate Fees & Deductions
    const procFeeCalculated = Math.round(principal * (config.procFeeRate / 100));
    const procFee = Math.max(procFeeCalculated, config.minProcFee);
    const gstOnProcFee = Math.round(procFee * 0.18);
    const docCharges = config.docHandling;
    const totalDeductions = procFee + gstOnProcFee + docCharges;
    const netDisbursal = Math.max(0, principal - totalDeductions);
    const totalRepayment = emi * tenureMonths;
    const totalInterest = Math.max(0, totalRepayment - principal);

    // Update UI elements
    setText('est-disp-roi', `${annualRate.toFixed(1)}% p.a.`);
    setText('est-disp-emi', formatINR(emi));
    setText('est-disp-procfee', `${formatINR(procFee)} (${config.procFeeRate}%)`);
    setText('est-disp-gst', formatINR(gstOnProcFee));
    setText('est-disp-doc', docCharges > 0 ? formatINR(docCharges) : 'NIL');
    setText('est-disp-deductions', formatINR(totalDeductions));
    setText('est-disp-net', formatINR(netDisbursal));
    setText('est-disp-total-repay', formatINR(totalRepayment));
    setText('est-disp-interest', formatINR(totalInterest));
  }

  prodSelect.addEventListener('change', () => {
    const config = LOAN_PRODUCT_DATA[prodSelect.value];
    if (config) {
      amtRange.min = config.minAmt;
      amtRange.max = config.maxAmt;
      amtRange.value = config.defaultAmt;
      tenorRange.value = config.defaultTenor;
    }
    updateEstimator();
  });

  amtRange.addEventListener('input', updateEstimator);
  tenorRange.addEventListener('input', updateEstimator);

  // Initial calculation
  updateEstimator();
}

function formatINR(num) {
  if (isNaN(num)) return '₹0';
  return '₹' + Number(num).toLocaleString('en-IN');
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initSocFaqs() {
  const faqItems = document.querySelectorAll('.soc-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.soc-faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}
