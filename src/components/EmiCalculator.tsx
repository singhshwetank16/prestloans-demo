import React, { useState, useMemo } from 'react';

export interface EmiCalculatorProps {
  initialProduct?: string;
  initialAmount?: number;
  initialRate?: number;
  initialTenure?: number;
  showAmortizationTable?: boolean;
}

interface LoanProduct {
  id: string;
  name: string;
  icon: string;
  rate: number;
  tenure: number;
  defaultAmount: number;
}

const PRODUCTS: LoanProduct[] = [
  { id: 'business', name: 'Business Loan (14%)', icon: 'fa-solid fa-briefcase', rate: 14, tenure: 3, defaultAmount: 500000 },
  { id: 'home', name: 'Home Loan (9.5%)', icon: 'fa-solid fa-house-chimney', rate: 9.5, tenure: 10, defaultAmount: 2500000 },
  { id: 'education', name: 'Coaching/Skill Development/Education Loans (12%)', icon: 'fa-solid fa-graduation-cap', rate: 12, tenure: 5, defaultAmount: 500000 },
  { id: 'personal', name: 'Personal Loan (18%)', icon: 'fa-solid fa-user-shield', rate: 18, tenure: 3, defaultAmount: 300000 },
  { id: 'short-term', name: 'Short Term Personal Loan (24%)', icon: 'fa-solid fa-clock-rotate-left', rate: 24, tenure: 1, defaultAmount: 100000 }
];

const AMOUNT_CHIPS = [
  { label: '₹1 Lakh', value: 100000 },
  { label: '₹3 Lakh', value: 300000 },
  { label: '₹5 Lakh', value: 500000 },
  { label: '₹10 Lakh', value: 1000000 },
  { label: '₹25 Lakh', value: 2500000 },
  { label: '₹50 Lakh', value: 5000000 }
];

const RATE_CHIPS = [
  { label: '9.5% (Home)', value: 9.5 },
  { label: '12%', value: 12 },
  { label: '14% (Std)', value: 14 },
  { label: '16%', value: 16 },
  { label: '18%', value: 18 },
  { label: '24%', value: 24 }
];

const TENURE_CHIPS = [
  { label: '1 Year', value: 1 },
  { label: '2 Years', value: 2 },
  { label: '3 Years', value: 3 },
  { label: '5 Years', value: 5 },
  { label: '7 Years', value: 7 },
  { label: '10 Years', value: 10 },
  { label: '20 Years', value: 20 }
];

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  initialProduct = 'home',
  initialAmount = 500000,
  initialRate = 9.5,
  initialTenure = 10,
  showAmortizationTable = false
}) => {
  const [activeProductId, setActiveProductId] = useState<string>(initialProduct);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [rate, setRate] = useState<number>(initialRate);
  const [tenureYears, setTenureYears] = useState<number>(initialTenure);

  // Currency Formatter
  const formatINR = (val: number): string => {
    if (isNaN(val) || val === null || !isFinite(val)) return '₹ 0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.round(val));
  };

  // Standard Reducing-Balance EMI calculation
  const { emi, totalPayment, totalInterest, principalPercent, interestPercent } = useMemo(() => {
    const P = Math.max(0, amount);
    const annualRate = Math.max(0, rate);
    const years = Math.max(1, tenureYears);
    const months = years * 12;

    if (P <= 0 || annualRate <= 0) {
      return { emi: 0, totalPayment: P, totalInterest: 0, principalPercent: 100, interestPercent: 0 };
    }

    const monthlyRate = (annualRate / 12) / 100;
    const computedEmi = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const computedTotal = computedEmi * months;
    const computedInterest = Math.max(0, computedTotal - P);

    const pPct = Math.max(1, Math.min(99, Math.round((P / computedTotal) * 100)));
    const iPct = 100 - pPct;

    return {
      emi: Math.round(computedEmi),
      totalPayment: Math.round(computedTotal),
      totalInterest: Math.round(computedInterest),
      principalPercent: pPct,
      interestPercent: iPct
    };
  }, [amount, rate, tenureYears]);

  // Year-by-Year Amortization Schedule
  const amortizationSchedule = useMemo(() => {
    if (!showAmortizationTable || amount <= 0 || rate <= 0 || tenureYears <= 0) return [];
    
    let balance = amount;
    const monthlyRate = (rate / 12) / 100;
    const schedule = [];

    for (let yr = 1; yr <= tenureYears; yr++) {
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
      schedule.push({
        year: yr,
        openBal: Math.round(openBal),
        annualEmi: Math.round(annualEmi),
        yrPrincipal: Math.round(yrPrincipal),
        yrInterest: Math.round(yrInterest),
        closeBal: Math.round(closeBal)
      });
    }

    return schedule;
  }, [showAmortizationTable, amount, rate, tenureYears, emi]);

  // Handle Product Switch
  const handleSelectProduct = (product: LoanProduct) => {
    setActiveProductId(product.id);
    setRate(product.rate);
    setTenureYears(product.tenure);
    if (product.defaultAmount) {
      setAmount(product.defaultAmount);
    }
  };

  // Slider Percentage Fills for gradient visual track
  const amountSliderFill = Math.min(100, Math.max(0, ((amount - 50000) / (5000000 - 50000)) * 100));
  const rateSliderFill = Math.min(100, Math.max(0, ((rate - 8) / (30 - 8)) * 100));
  const tenureSliderFill = Math.min(100, Math.max(0, ((tenureYears - 1) / (20 - 1)) * 100));

  // Donut SVG circumference calculation (r = 42 -> 2 * PI * 42 = 263.893)
  const donutCircumference = 263.89;
  const donutPrincipalOffset = donutCircumference * (1 - (principalPercent / 100));

  // Apply Handler
  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const activeProd = PRODUCTS.find(p => p.id === activeProductId);
    const productName = activeProd ? activeProd.name : 'Loan';

    if (typeof (window as any).openLoanApplicationModal === 'function') {
      (window as any).openLoanApplicationModal({
        product: productName,
        amount,
        tenure: tenureYears,
        rate
      });
    } else {
      const modal = document.getElementById('apply-loan-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  return (
    <>
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
              Instant EMI forecasting with 100% transparent reducing-balance calculation &amp; zero hidden surprises.
            </p>

            {/* Product Selector Switcher */}
            <div className="calc-product-tabs" role="tablist">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  className={`calc-product-tab ${activeProductId === prod.id ? 'active' : ''}`}
                  onClick={() => handleSelectProduct(prod)}
                >
                  <i className={prod.icon}></i>
                  <span>{prod.name}</span>
                </button>
              ))}
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
                      <label htmlFor="calc-amount-input" className="calc-field-title">
                        Required Loan Amount
                      </label>
                    </div>
                    <div className="calc-val-badge">
                      <span className="currency-symbol">₹</span>
                      <input
                        type="number"
                        id="calc-amount-input"
                        className="calc-input-field"
                        placeholder="500000"
                        min="50000"
                        max="5000000"
                        step="25000"
                        value={amount || ''}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setAmount(val);
                        }}
                      />
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      id="calc-amount-slider"
                      className="slider-range"
                      min="50000"
                      max="5000000"
                      step="25000"
                      value={amount}
                      style={{ ['--slider-fill' as any]: `${amountSliderFill}%` }}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <div className="slider-limits">
                      <span>₹ 50 Thousand</span>
                      <span>₹ 50 Lakh</span>
                    </div>
                  </div>

                  {/* Quick Amount Chips */}
                  <div className="calc-preset-chips" data-target="amount">
                    {AMOUNT_CHIPS.map((chip) => (
                      <button
                        key={chip.value}
                        type="button"
                        className={`calc-chip-btn ${amount === chip.value ? 'active' : ''}`}
                        onClick={() => setAmount(chip.value)}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control 2: Interest Rate */}
                <div className="calc-control-group">
                  <div className="calc-control-top">
                    <div className="calc-field-info">
                      <span className="calc-field-icon">
                        <i className="fa-solid fa-percent"></i>
                      </span>
                      <label htmlFor="calc-rate-input" className="calc-field-title">
                        Interest Rate (% p.a.)
                      </label>
                    </div>
                    <div className="calc-val-badge">
                      <input
                        type="number"
                        id="calc-rate-input"
                        className="calc-input-field"
                        placeholder="9.5"
                        min="8"
                        max="30"
                        step="0.1"
                        value={rate || ''}
                        onChange={(e) => setRate(Number(e.target.value))}
                      />
                      <span className="percent-symbol">%</span>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      id="calc-rate-slider"
                      className="slider-range"
                      min="8"
                      max="30"
                      step="0.5"
                      value={rate}
                      style={{ ['--slider-fill' as any]: `${rateSliderFill}%` }}
                      onChange={(e) => setRate(Number(e.target.value))}
                    />
                    <div className="slider-limits">
                      <span>8% Minimum</span>
                      <span>30% Maximum</span>
                    </div>
                  </div>

                  {/* Quick Rate Chips */}
                  <div className="calc-preset-chips" data-target="rate">
                    {RATE_CHIPS.map((chip) => (
                      <button
                        key={chip.value}
                        type="button"
                        className={`calc-chip-btn ${Math.abs(rate - chip.value) < 0.05 ? 'active' : ''}`}
                        onClick={() => setRate(chip.value)}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control 3: Loan Tenure */}
                <div className="calc-control-group">
                  <div className="calc-control-top">
                    <div className="calc-field-info">
                      <span className="calc-field-icon">
                        <i className="fa-regular fa-calendar-check"></i>
                      </span>
                      <label htmlFor="calc-tenure-input" className="calc-field-title">
                        Loan Duration / Tenure
                      </label>
                    </div>
                    <div className="calc-val-badge">
                      <input
                        type="number"
                        id="calc-tenure-input"
                        className="calc-input-field"
                        placeholder="10"
                        min="1"
                        max="20"
                        step="1"
                        value={tenureYears || ''}
                        onChange={(e) => setTenureYears(Number(e.target.value))}
                      />
                      <span className="tenure-unit">Years</span>
                      <span className="tenure-months-badge" id="calc-tenure-months">
                        ({tenureYears * 12} Mo)
                      </span>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      id="calc-tenure-slider"
                      className="slider-range"
                      min="1"
                      max="20"
                      step="1"
                      value={tenureYears}
                      style={{ ['--slider-fill' as any]: `${tenureSliderFill}%` }}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                    />
                    <div className="slider-limits">
                      <span>1 Year</span>
                      <span>20 Years</span>
                    </div>
                  </div>

                  {/* Quick Tenure Chips */}
                  <div className="calc-preset-chips" data-target="tenure">
                    {TENURE_CHIPS.map((chip) => (
                      <button
                        key={chip.value}
                        type="button"
                        className={`calc-chip-btn ${tenureYears === chip.value ? 'active' : ''}`}
                        onClick={() => setTenureYears(chip.value)}
                      >
                        {chip.label}
                      </button>
                    ))}
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
                      MONTHLY OUTFLOW
                    </span>
                    <span className="calc-reducing-tag">Reducing Rate EMI</span>
                  </div>
                  <div className="calc-hero-amount-row">
                    <span className="calc-hero-value" id="calc-emi-result">
                      {formatINR(emi)}
                    </span>
                    <span className="calc-hero-unit">/ month</span>
                  </div>
                  <p className="calc-hero-note">
                    Zero advance installments • Direct auto-debit via e-NACH mandate
                  </p>
                </div>

                {/* Interactive Donut Breakdown */}
                <div className="calc-breakdown-card">
                  <div className="calc-donut-wrap">
                    <svg className="calc-donut-chart" viewBox="0 0 100 100">
                      <circle className="donut-bg" cx="50" cy="50" r="42"></circle>
                      <circle
                        className="donut-interest"
                        id="donut-interest-circle"
                        cx="50"
                        cy="50"
                        r="42"
                      ></circle>
                      <circle
                        className="donut-principal"
                        id="donut-principal-circle"
                        cx="50"
                        cy="50"
                        r="42"
                        style={{
                          strokeDashoffset: donutPrincipalOffset,
                          transition: 'stroke-dashoffset 0.4s ease'
                        }}
                      ></circle>
                    </svg>
                    <div className="donut-center-info">
                      <span className="donut-center-ratio" id="donut-center-ratio">
                        {principalPercent}%
                      </span>
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
                      <span className="legend-val" id="calc-principal-display">
                        {formatINR(amount)}
                      </span>
                      <span className="legend-pct" id="ratio-p">
                        {principalPercent}%
                      </span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-title">
                        <span className="legend-dot interest"></span>
                        <span>Total Interest</span>
                      </div>
                      <span className="legend-val" id="calc-interest-result">
                        {formatINR(totalInterest)}
                      </span>
                      <span className="legend-pct" id="ratio-i">
                        {interestPercent}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary Total Payable */}
                <div className="calc-total-pay-box">
                  <div className="total-pay-info">
                    <span className="total-pay-label">Total Amount Payable</span>
                    <span className="total-pay-sub">(Principal + Interest over selected tenure)</span>
                  </div>
                  <span className="total-pay-value" id="calc-total-result">
                    {formatINR(totalPayment)}
                  </span>
                </div>

                {/* Apply Button */}
                <button id="calc-apply-btn" className="btn-calc-apply" onClick={handleApply}>
                  <span>Apply For This Loan</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                {/* Trust Badges */}
                <div className="calc-trust-strip">
                  <div className="calc-trust-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>48-Hour Disbursal</span>
                  </div>
                  <div className="calc-trust-item">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>RBI Regulated NBFC</span>
                  </div>
                  <div className="calc-trust-item">
                    <i className="fa-solid fa-file-shield"></i>
                    <span>Zero Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Amortization Table Section (Used on /calculator page) */}
      {showAmortizationTable && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Smart Financial Planning</span>
              <h2 className="section-title">Loan Amortization &amp; Tenure Breakdown</h2>
              <p className="section-desc">
                Observe how choosing different tenures affects your monthly outflow and total cumulative interest cost.
              </p>
            </div>

            {/* Amortization Schedule Table */}
            <div className="amortization-wrap">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                <i className="fa-solid fa-table-list" style={{ color: 'var(--primary-purple)', marginRight: '8px' }}></i>
                Indicative Year-by-Year Repayment Schedule (For Selected Values)
              </h3>
              <table className="amortization-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Opening Balance</th>
                    <th>Annual EMI Paid</th>
                    <th>Principal Repaid</th>
                    <th>Interest Repaid</th>
                    <th>Closing Balance</th>
                  </tr>
                </thead>
                <tbody id="amortization-tbody">
                  {amortizationSchedule.map((row) => (
                    <tr key={row.year}>
                      <td>
                        <strong>Year {row.year}</strong>
                      </td>
                      <td>{formatINR(row.openBal)}</td>
                      <td>{formatINR(row.annualEmi)}</td>
                      <td style={{ color: '#10b981', fontWeight: 700 }}>{formatINR(row.yrPrincipal)}</td>
                      <td style={{ color: '#f05a28', fontWeight: 700 }}>{formatINR(row.yrInterest)}</td>
                      <td>{formatINR(row.closeBal)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* EMI Formula Explanation */}
            <div
              style={{
                background: '#f8fafc',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #e2e8f0',
                padding: '32px',
                marginTop: '40px'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                <i className="fa-solid fa-calculator" style={{ color: 'var(--primary-orange)', marginRight: '8px' }}></i>
                Standard EMI Mathematical Formula
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: '1.8', marginBottom: '14px' }}>
                All Indian banks and RBI-registered NBFCs compute standard Equated Monthly Installment (EMI) using the reducing balance method formula:
              </p>
              <div
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 20px',
                  fontFamily: 'monospace',
                  fontSize: '1.1rem',
                  color: '#70146e',
                  fontWeight: 700,
                  display: 'inline-block',
                  marginBottom: '14px'
                }}
              >
                EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
              </div>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                Where <strong>P</strong> = Principal Loan Amount, <strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100), and <strong>N</strong> = Number of monthly installments.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
