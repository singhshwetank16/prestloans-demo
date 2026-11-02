import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const TermsOfUse: React.FC = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Terms of Use</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Website Terms of Use</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Rules, platform security, and intellectual property terms governing prestloans.com.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '950px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '14px' }}>
              Platform Access &amp; Acceptable Usage Rules
            </h2>
            <div style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p>
                Welcome to <strong>prestloans.com</strong>, operated by <strong>{siteConfig.legalName}</strong>. By accessing or using this website, you agree to comply with and be bound by these Terms of Use.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                1. Intellectual Property
              </h3>
              <p>
                All trademarks, logos, domain names, content, calculator engines, and software code on this website are the proprietary property of Lord Krishna Financial Services Ltd and protected under applicable copyright laws.
              </p>

              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
                2. Prohibited Conduct
              </h3>
              <p>
                Users are strictly prohibited from scraping data, attempting unauthorized server access, submitting fraudulent identity documents, or attempting to compromise platform cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
