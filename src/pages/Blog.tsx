import React from 'react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const articles = [
    {
      title: 'How to Improve Your CIBIL Score Before Applying for a Loan',
      category: 'Credit Advisory',
      readTime: '5 min read',
      date: 'October 2026',
      summary: 'Essential strategies for managing your credit utilization ratio, correcting bureau errors, and establishing a healthy repayment track record.'
    },
    {
      title: 'Understanding Digital Lending Guidelines & Key Fact Statements (KFS)',
      category: 'RBI Compliance',
      readTime: '6 min read',
      date: 'September 2026',
      summary: 'Why borrowers should always inspect the Key Fact Statement for APR, late payment charges, and cooling-off periods before accepting a loan offer.'
    },
    {
      title: 'MSME Working Capital: 5 Signs Your Business Needs an Urgent Credit Line',
      category: 'Business Growth',
      readTime: '4 min read',
      date: 'August 2026',
      summary: 'From managing seasonal inventory spikes to maintaining supplier discounts, learn how structured credit accelerates enterprise scale.'
    },
    {
      title: 'Education Loans for Skill Development: Unlocking High-Paying Tech Careers',
      category: 'Skill Loans',
      readTime: '5 min read',
      date: 'July 2026',
      summary: 'How career-linked credit allows ambitious students to enroll in top coding bootcamps and certification academies without financial stress.'
    }
  ];

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Blog &amp; Insights</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Insights, Guides &amp; Financial Literacy</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Actionable credit education, regulatory knowledge, and borrowing tips curated by Prest Loans experts.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {articles.map((art, idx) => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ background: '#fff1ec', color: '#f05a28', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{art.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#1e293b', fontWeight: 700, margin: '8px 0 12px', lineHeight: 1.4 }}>
                    {art.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {art.summary}
                  </p>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{art.date}</span>
                  <span style={{ color: '#f05a28', fontWeight: 600, fontSize: '0.9rem' }}>Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
