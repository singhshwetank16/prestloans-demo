import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>About Us</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>About Prest Loans</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Three decades of integrity, financial discipline, and commitment to powering the aspirations of Indian borrowers.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <span className="section-tag">Established 1992</span>
              <h2 style={{ fontSize: '2.2rem', color: '#1e293b', fontWeight: 800, marginBottom: '16px' }}>
                Transforming Credit Access Across India
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, marginBottom: '14px' }}>
                Prest Loans is the trade name of <strong>{siteConfig.legalName}</strong>, an RBI-registered Non-Banking Financial Company (Registration No. <strong>{siteConfig.rbiRegNo}</strong>).
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                Since 1992, we have been dedicated to providing responsible, transparent, and prompt credit solutions to underserved individuals, micro-enterprises, and students. With proprietary digital scoring and rapid turnarounds, we ensure that financial support reaches those who need it most.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/regulatory-certifications" className="btn-primary" style={{ padding: '10px 24px', borderRadius: '50px' }}>
                  <i className="fa-solid fa-certificate"></i> View RBI Certifications
                </Link>
                <Link to="/contact" className="btn-secondary" style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #cbd5e1', color: '#334155' }}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/assets/about/about-1.jpeg"
                alt="Prest Loans Headquarters"
                style={{ borderRadius: '20px', maxWidth: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              />
            </div>
          </div>

          {/* Pillars of Excellence */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <i className="fa-solid fa-eye" style={{ fontSize: '2rem', color: '#f05a28', marginBottom: '14px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '8px', fontWeight: 700 }}>Our Vision</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                To become India’s most trusted, accessible, and ethical digital lending institution by fusing cutting-edge fintech with empathy.
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <i className="fa-solid fa-bullseye" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '14px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '8px', fontWeight: 700 }}>Our Mission</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Deliver rapid, transparent, and fair credit to over 100,000+ borrowers, enabling education, home security, and business prosperity.
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <i className="fa-solid fa-shield-halved" style={{ fontSize: '2rem', color: '#16a34a', marginBottom: '14px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '8px', fontWeight: 700 }}>Core Values</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Absolute compliance, statutory transparency, fair loan recovery, and zero hidden costs at every level of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
