import React, { useEffect } from 'react';

export const Calculator: React.FC = () => {
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
           <span>EMI Calculator</span>
        </div>
        <h1 className="page-banner-title">Interactive Loan Calculator</h1>
        <p className="page-banner-sub">

        Plan your loan finances with accuracy. Calculate exact equated monthly installments, total interest, and repayment schedules in real-time.
              </p>
      </div>
    </section>
    {/* ==========================================================================
       LOAN CALCULATOR SECTION (MATCHING SCREENSHOT 3)
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
            <button type="button" className="calc-product-tab active" data-loan-type="education" data-rate="12" data-tenure="2">
              <i className="fa-solid fa-graduation-cap"></i>
 Education Loan (12%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="personal" data-rate="18" data-tenure="1">
              <i className="fa-solid fa-user-shield"></i>
 Personal Loan (18%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="short-term" data-rate="24" data-tenure="1">
              <i className="fa-solid fa-clock-rotate-left"></i>
 Short Term Personal Loan
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="home" data-rate="9.5" data-tenure="10">
              <i className="fa-solid fa-house-chimney"></i>
 Home Loan (9.5%)
                      </button>
            <button type="button" className="calc-product-tab" data-loan-type="business" data-rate="14" data-tenure="3">
              <i className="fa-solid fa-briefcase"></i>
 Business Loan (14%)
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
                    <label htmlFor="calc-rate-input" className="calc-field-title">Interest Rate (% p.a.)</label>
                  </div>
                  <div className="calc-val-badge">
                    <input type="text" id="calc-rate-input" className="calc-input-field" placeholder="9.5" value="9.5" />
                    <span className="percent-symbol">%</span>
                  </div>
                </div>
                {/* Slider */}
                <div className="slider-wrapper">
                  <input type="range" id="calc-rate-slider" className="slider-range" min="8" max="30" step="0.5" value="9.5" />
                  <div className="slider-limits">
                    <span>8% Minimum</span>
                    <span>30% Maximum</span>
                  </div>
                </div>
                {/* Quick Rate Chips */}
                <div className="calc-preset-chips" data-target="rate">
                  <button type="button" className="calc-chip-btn active" data-val="9.5">9.5% (Home)</button>
                  <button type="button" className="calc-chip-btn" data-val="12">12%</button>
                  <button type="button" className="calc-chip-btn" data-val="14">14%</button>
                  <button type="button" className="calc-chip-btn" data-val="18">18%</button>
                  <button type="button" className="calc-chip-btn" data-val="24">24%</button>
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
                    <input type="text" id="calc-tenure-input" className="calc-input-field" placeholder="10" value="10" />
                    <span className="tenure-unit">Years</span>
                    <span className="tenure-months-badge" id="calc-tenure-months">(120 Mo)</span>
                  </div>
                </div>
                {/* Slider */}
                <div className="slider-wrapper">
                  <input type="range" id="calc-tenure-slider" className="slider-range" min="1" max="20" step="1" value="10" />
                  <div className="slider-limits">
                    <span>1 Year</span>
                    <span>20 Years</span>
                  </div>
                </div>
                {/* Quick Tenure Chips */}
                <div className="calc-preset-chips" data-target="tenure">
                  <button type="button" className="calc-chip-btn" data-val="1">1 Year</button>
                  <button type="button" className="calc-chip-btn" data-val="3">3 Years</button>
                  <button type="button" className="calc-chip-btn" data-val="5">5 Years</button>
                  <button type="button" className="calc-chip-btn active" data-val="10">10 Years</button>
                  <button type="button" className="calc-chip-btn" data-val="20">20 Years</button>
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
    {/* TENURE COMPARISON & AMORTIZATION TABLE */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Smart Financial Planning</span>
          <h2 className="section-title">Loan Amortization & Tenure Breakdown</h2>
          <p className="section-desc">
Observe how choosing different tenures affects your monthly outflow and total cumulative interest cost.          </p>
        </div>
        {/* Amortization Schedule Table */}
        <div className="amortization-wrap">
          <h3 style={{"fontSize":"1.25rem","fontWeight":"800","color":"#0f172a","marginBottom":"16px"}}>
            <i className="fa-solid fa-table-list" style={{"color":"var(--primary-purple)"}}></i>
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
              <tr>
                <td>
                  <strong>Year 1</strong>
                </td>
                <td>₹ 5,00,000</td>
                <td>₹ 2,05,068</td>
                <td>₹ 1,42,200</td>
                <td>₹ 62,868</td>
                <td>₹ 3,57,800</td>
              </tr>
              <tr>
                <td>
                  <strong>Year 2</strong>
                </td>
                <td>₹ 3,57,800</td>
                <td>₹ 2,05,068</td>
                <td>₹ 1,63,550</td>
                <td>₹ 41,518</td>
                <td>₹ 1,94,250</td>
              </tr>
              <tr>
                <td>
                  <strong>Year 3</strong>
                </td>
                <td>₹ 1,94,250</td>
                <td>₹ 2,05,068</td>
                <td>₹ 1,94,250</td>
                <td>₹ 10,818</td>
                <td>₹ 0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* EMI Formula Explanation */}
        <div style={{"background":"#f8fafc","borderRadius":"var(--radius-lg)","border":"1px solid #e2e8f0","padding":"32px","marginTop":"40px"}}>
          <h3 style={{"fontSize":"1.25rem","fontWeight":"800","color":"#0f172a","marginBottom":"10px"}}>
            <i className="fa-solid fa-calculator" style={{"color":"var(--primary-orange)"}}></i>
 Standard EMI Mathematical Formula
                  </h3>
          <p style={{"color":"#475569","fontSize":"0.9375rem","lineHeight":"1.8","marginBottom":"14px"}}>

          All Indian banks and RBI-registered NBFCs compute standard Equated Monthly Installment (EMI) using the reducing balance method formula:
                  </p>
          <div style={{"background":"#ffffff","border":"1.5px solid #cbd5e1","borderRadius":"var(--radius-md)","padding":"14px 20px","fontFamily":"monospace","fontSize":"1.1rem","color":"#70146e","fontWeight":"700","display":"inline-block","marginBottom":"14px"}}>

          EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
                  </div>
          <p style={{"color":"#64748b","fontSize":"0.875rem"}}>

          Where             <strong>P</strong>
 = Principal Loan Amount,             <strong>R</strong>
 = Monthly Interest Rate (Annual Rate / 12 / 100), and             <strong>N</strong>
 = Number of monthly installments.
                  </p>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS */}
    {/* MODALS */}

    </>
  );
};
