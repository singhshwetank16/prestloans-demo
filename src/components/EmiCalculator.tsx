import React, { useState } from 'react';

export const EmiCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(200000);
  const [rate, setRate] = useState<number>(16);
  const [tenure, setTenure] = useState<number>(24);

  // Monthly EMI Calculation
  const monthlyRate = rate / (12 * 100);
  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
  );
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const principalPercent = Math.round((amount / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return (
    <div className="calculator-widget-card" style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
      <div className="calculator-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
        {/* Controls Column */}
        <div className="calc-controls">
          {/* Amount Slider */}
          <div className="calc-group" style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontWeight: 700, color: '#1e293b' }}>Loan Amount</label>
              <span style={{ fontWeight: 800, color: '#f05a28', fontSize: '1.2rem' }}>₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="2500000"
              step="5000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f05a28', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              <span>₹10,000</span>
              <span>₹25,00,000</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="calc-group" style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontWeight: 700, color: '#1e293b' }}>Interest Rate (p.a.)</label>
              <span style={{ fontWeight: 800, color: '#f05a28', fontSize: '1.2rem' }}>{rate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="36"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f05a28', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              <span>10%</span>
              <span>36%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="calc-group" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontWeight: 700, color: '#1e293b' }}>Loan Tenure</label>
              <span style={{ fontWeight: 800, color: '#f05a28', fontSize: '1.2rem' }}>{tenure} Months ({Math.floor(tenure / 12)}Y {tenure % 12 ? `${tenure % 12}M` : ''})</span>
            </div>
            <input
              type="range"
              min="3"
              max="60"
              step="3"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f05a28', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              <span>3 Months</span>
              <span>60 Months</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="calc-results" style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>Estimated Monthly EMI</span>
          <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', margin: '8px 0 20px', lineHeight: 1 }}>
            ₹{emi.toLocaleString('en-IN')}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px', textAlign: 'left' }}>
            <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Total Interest</span>
              <strong style={{ fontSize: '1.1rem', color: '#f05a28' }}>₹{totalInterest.toLocaleString('en-IN')}</strong>
            </div>
            <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Total Amount</span>
              <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>₹{totalPayment.toLocaleString('en-IN')}</strong>
            </div>
          </div>

          {/* Visual Bar */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden', background: '#e2e8f0' }}>
              <div style={{ width: `${principalPercent}%`, background: '#f05a28', transition: 'width 0.3s ease' }}></div>
              <div style={{ width: `${interestPercent}%`, background: '#3b82f6', transition: 'width 0.3s ease' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
              <span><i className="fa-solid fa-circle" style={{ color: '#f05a28', fontSize: '0.6rem', marginRight: '4px' }}></i> Principal ({principalPercent}%)</span>
              <span><i className="fa-solid fa-circle" style={{ color: '#3b82f6', fontSize: '0.6rem', marginRight: '4px' }}></i> Interest ({interestPercent}%)</span>
            </div>
          </div>

          <button
            className="btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: '50px' }}
            onClick={() => (window as any).openQuickApplyModal && (window as any).openQuickApplyModal()}
          >
            <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i> Apply For This Loan
          </button>
        </div>
      </div>
    </div>
  );
};
