import React from 'react';
import { Link } from 'react-router-dom';

export const CustomersStories: React.FC = () => {
  const stories = [
    {
      name: 'Rajeev Khetan',
      role: 'Manufacturing Entrepreneur, Delhi',
      product: 'MSME Business Loan',
      photo: '/assets/testimonials/636345295057086250Rajeevkhetan.jpg',
      quote: 'Prest Loans provided timely capital when our machinery needed an upgrade. The entire process was conducted digitally with zero unnecessary bureaucracy. Highly recommended for small enterprises.'
    },
    {
      name: 'Parmeshwar Dayal',
      role: 'Retail Store Owner, Uttar Pradesh',
      product: 'Short Term Business Loan',
      photo: '/assets/testimonials/636345295405992500parmeshwar.png',
      quote: 'During festive stock procurement, getting a working capital infusion in under 48 hours made a massive difference to our turnover. The transparency in fee deductions was exemplary.'
    },
    {
      name: 'Rajesh Kumar Patwa',
      role: 'Small Business Owner, Madhya Pradesh',
      product: 'Commercial Expansion Credit',
      photo: '/assets/testimonials/63639621804852875010036 Rajehs kumar patwa.jpg',
      quote: 'Transparent NBFC lending at its best. No hidden interest clauses, prompt customer service, and very polite relationship officers.'
    },
    {
      name: 'Raj Kumar',
      role: 'Self-Employed Professional, Haryana',
      product: 'Personal Loan',
      photo: '/assets/testimonials/63639622708290375010051 raj kumar.jpg',
      quote: 'I needed urgent personal funds for a family health emergency. Prest Loans verified my documents online and disbursed the loan directly into my savings account within 24 hours.'
    },
    {
      name: 'Shiv Narayan Paul',
      role: 'Fabricator & Contractor, West Bengal',
      product: 'Machinery Finance',
      photo: '/assets/testimonials/63639623573587250010059 shiv narayan Paul.jpg',
      quote: 'Fair interest rates and convenient monthly EMI options. The mobile experience and digital status tracking make borrowing stress-free.'
    },
    {
      name: 'Rajesh Same',
      role: 'Wholesale Trader, Rajasthan',
      product: 'Working Capital Facility',
      photo: '/assets/testimonials/63639623935352875010033 rajesh same.jpg',
      quote: 'Over 3 years of partnership with Prest Loans has enabled our supply chain expansion. Trustworthy management and completely ethical practices.'
    }
  ];

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Customers' Stories</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Customers' Stories &amp; Success</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Discover how 25,000+ borrowers across India achieved their goals with Prest Loans credit solutions.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {stories.map((s, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                    <img
                      src={s.photo}
                      alt={s.name}
                      style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f05a28' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: '#1e293b', fontWeight: 700, margin: 0 }}>{s.name}</h4>
                      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{s.role}</span>
                      <div style={{ fontSize: '0.8rem', color: '#f05a28', fontWeight: 600 }}>{s.product}</div>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                    “{s.quote}”
                  </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', gap: '4px', color: '#f59e0b', fontSize: '0.9rem' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', textAlign: 'center', background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#1e293b', fontWeight: 800, marginBottom: '8px' }}>Ready to Write Your Success Story?</h3>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>Apply in less than 5 minutes with our completely digital application process.</p>
            <button
              className="btn-primary"
              onClick={() => (window as any).openQuickApplyModal && (window as any).openQuickApplyModal()}
              style={{ padding: '12px 32px', borderRadius: '50px' }}
            >
              Start Loan Application →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
