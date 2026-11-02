import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const RegulatoryCertifications: React.FC = () => {
  const certs = [
    { title: 'RBI Certificate of Registration', img: '/assets/RegulatoryCertificate/RBI Certificate-merged-images-0.jpg', authority: 'Reserve Bank of India (B-14.02019)' },
    { title: 'Certificate of Incorporation', img: '/assets/RegulatoryCertificate/Cerificate of Incorporation.jpg', authority: 'Registrar of Companies, Delhi (Est. 1992)' },
    { title: 'CIBIL Bureau Membership', img: '/assets/RegulatoryCertificate/Cibil.jpg', authority: 'TransUnion CIBIL India' },
    { title: 'Equifax Bureau Membership', img: '/assets/RegulatoryCertificate/Equifax.jpg', authority: 'Equifax Credit Information Services' },
    { title: 'Experian Bureau Membership', img: '/assets/RegulatoryCertificate/Experion.jpg', authority: 'Experian Credit Information Bureau' },
    { title: 'CRIF High Mark Membership', img: '/assets/RegulatoryCertificate/Crif.jpg', authority: 'CRIF High Mark Credit Information' },
    { title: 'Udyam Registration Certificate', img: '/assets/RegulatoryCertificate/Udyam Registration Certificate.jpg', authority: 'Ministry of MSME, Govt of India' },
    { title: 'Legal Entity Identifier (LEI)', img: '/assets/RegulatoryCertificate/LEI Certificate.jpg', authority: 'Legal Entity Identifier India Ltd' }
  ];

  const handleOpenCert = (src: string, title: string) => {
    if (typeof (window as any).openLightbox === 'function') {
      (window as any).openLightbox(src, title);
    }
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/policies" style={{ color: '#cbd5e1' }}>Policies</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Regulatory Certifications</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Regulatory Certifications &amp; Licenses</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Official regulatory registrations, RBI Certificate B-14.02019, incorporation, and credit bureau memberships.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {certs.map((c, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenCert(c.img, c.title)}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                  <img src={c.img} alt={c.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>{c.title}</h4>
                <p style={{ color: '#f05a28', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{c.authority}</p>
                <span style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '10px', display: 'inline-block' }}>Click to view full certificate</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
