import React from 'react';
import { Link } from 'react-router-dom';

export const Media: React.FC = () => {
  const pressCoverage = [
    {
      source: 'The Economic Times',
      logo: '/assets/press/econonictimes-logo.jpg',
      headline: 'Prest Loans Expands Micro-Enterprise & Education Lending Portfolio',
      date: 'FinTech Coverage',
      desc: 'Lord Krishna Financial Services Ltd announces accelerated digital loan processing and AI-driven underwriting capabilities.'
    },
    {
      source: 'Outlook Magazine',
      logo: '/assets/press/outlook-logo.jpg',
      headline: 'How NBFCs Like Prest Loans Are Deepening Financial Inclusion in Tier 2/3 Cities',
      date: 'Special Industry Feature',
      desc: 'An in-depth analysis on digital NBFC credit distribution models reaching first-time formal borrowers across semi-urban India.'
    },
    {
      source: 'Business Standard',
      logo: '/assets/press/New folder/Business Standard.png',
      headline: 'Fintech NBFC Prest Loans Crosses Key Disbursal Milestones',
      date: 'Financial Markets',
      desc: 'Robust asset quality and sound underwriting framework highlight the continued expansion of Prest Loans digital credit platforms.'
    },
    {
      source: 'The Week',
      logo: '/assets/press/THE WEEK.png',
      headline: 'Prest Loans Introduces Tailored Skill Development and Education Loans',
      date: 'Education & Career',
      desc: 'Innovative zero-collateral financing programs for vocational coaching, upskilling academies, and technical career programs.'
    }
  ];

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Media &amp; Press</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Media, News &amp; Coverage</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Stay updated with Prest Loans milestones, leadership insights, press mentions, and fintech announcements.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {pressCoverage.map((p, idx) => (
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
                  <div style={{ height: '45px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={p.logo} alt={p.source} style={{ maxHeight: '40px', maxWidth: '140px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#f05a28', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{p.date}</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 700, margin: '8px 0 12px', lineHeight: 1.4 }}>{p.headline}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem' }}>
                  <span>Read Press Release <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
