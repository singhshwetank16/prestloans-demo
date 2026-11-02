import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const GrievanceRedressal: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Grievance Redressal</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Grievance Redressal Mechanism</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            RBI Master Directions Compliant • 4-Tier Escalation Hierarchy • RB-IOS 2026 Integrated
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px', marginBottom: '24px' }}>
              <span style={{ background: '#fff1ec', color: '#f05a28', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>Statutory Disclosure</span>
              <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, margin: '10px 0 6px' }}>Customer Grievance Redressal Policy</h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Lord Krishna Financial Services Ltd (Prest Loans) - RBI Reg: {siteConfig.rbiRegNo}</p>
            </div>

            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <h3 style={{ color: '#1e293b', fontSize: '1.3rem', fontWeight: 700, marginTop: '24px', marginBottom: '12px' }}>
                1. Objective and Framework
              </h3>
              <p>
                In compliance with the Reserve Bank of India Master Direction on Non-Banking Financial Company - Systemically Important Non-Deposit taking Company and Deposit taking Company (Reserve Bank) Directions, 2016, and the RBI Digital Lending Guidelines, Prest Loans has instituted a structured, four-tier escalating Grievance Redressal Mechanism to ensure that all customer complaints are addressed promptly, fairly, and transparently.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.3rem', fontWeight: 700, marginTop: '28px', marginBottom: '12px' }}>
                2. 4-Tier Escalation Matrix
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
                {/* Level 1 */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #f05a28' }}>
                  <h4 style={{ color: '#1e293b', margin: '0 0 6px', fontSize: '1.1rem' }}>Level 1: Customer Care Helpdesk</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    Borrowers can register complaints via email at <strong>loan@prestloans.com</strong> or call our official helplines <strong>011-45241131 / 011-45241123</strong> (Mon–Fri: 9:30 AM to 6:00 PM; 1st, 3rd, 5th Sat: 9:30 AM to 6:00 PM). Expected turnaround time: <strong>7 business days</strong>.
                  </p>
                </div>

                {/* Level 2 */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #3b82f6' }}>
                  <h4 style={{ color: '#1e293b', margin: '0 0 6px', fontSize: '1.1rem' }}>Level 2: Grievance Redressal Officer (GRO)</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    If the complaint is not resolved within 7 days, or the resolution is unsatisfactory, write to our Grievance Redressal Officer at <strong>nodal.officer@prestloans.com</strong>. Expected turnaround time: <strong>7 business days</strong>.
                  </p>
                </div>

                {/* Level 3 */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #16a34a' }}>
                  <h4 style={{ color: '#1e293b', margin: '0 0 6px', fontSize: '1.1rem' }}>Level 3: Principal Nodal Officer (PNO)</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    Borrowers may escalate to the Principal Nodal Officer at corporate headquarters: Lord Krishna Financial Services Ltd, M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002. Email: <strong>pno@prestloans.com</strong>.
                  </p>
                </div>

                {/* Level 4 */}
                <div style={{ background: '#fff7ed', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #ea580c' }}>
                  <h4 style={{ color: '#1e293b', margin: '0 0 6px', fontSize: '1.1rem' }}>Level 4: Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2026)</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    If the complaint is not resolved by the NBFC within <strong>30 calendar days</strong>, the borrower may appeal directly to the RBI Ombudsman online at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" style={{ color: '#ea580c', fontWeight: 700 }}>cms.rbi.org.in</a> or by calling the toll-free helpline <strong>14448</strong> (9:30 AM to 5:15 PM). Physical complaints can be sent to: Centralised Receipt and Processing Centre (CRPC), Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
