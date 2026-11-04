import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section style={{ padding: '120px 0 80px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '650px', margin: '0 auto', background: '#ffffff', borderRadius: '20px', padding: '48px 32px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '5rem', fontWeight: 800, color: '#f05a28', lineHeight: 1, marginBottom: '16px' }}>
            404
          </div>
          <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '14px', fontWeight: 700 }}>
            Page Not Found
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '30px' }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary" style={{ padding: '12px 28px', borderRadius: '50px', fontWeight: 600 }}>
              <i className="fa-solid fa-house" style={{ marginRight: '6px' }}></i> Return Home
            </Link>
            <Link to="/products" className="btn-secondary" style={{ padding: '12px 28px', borderRadius: '50px', fontWeight: 600, border: '1px solid #cbd5e1', color: '#334155' }}>
              <i className="fa-solid fa-layer-group" style={{ marginRight: '6px' }}></i> Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

