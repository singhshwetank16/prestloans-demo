import React, { useEffect } from 'react';
import { EmiCalculator } from '../components/EmiCalculator';

export const Calculator: React.FC = () => {
  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
  }, []);

  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <span>EMI Calculator</span>
          </div>
          <h1 className="page-banner-title">Interactive Loan Calculator</h1>
          <p className="page-banner-sub">
            Plan your loan finances with accuracy. Calculate exact equated monthly installments, total interest, and repayment schedules in real-time.
          </p>
        </div>
      </section>

      {/* REACTIVE CALCULATOR & AMORTIZATION TABLE */}
      <EmiCalculator showAmortizationTable={true} />
    </>
  );
};
