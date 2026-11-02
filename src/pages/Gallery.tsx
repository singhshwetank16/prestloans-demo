import React from 'react';
import { Link } from 'react-router-dom';

export const Gallery: React.FC = () => {
  const images = [
    { src: '/assets/gallery/Annual Day Celebration 2025/001.jpeg', title: 'Annual Day Celebration' },
    { src: '/assets/gallery/Annual Day Celebration 2025/002.jpeg', title: 'Team Awards & Recognitions' },
    { src: '/assets/gallery/79th Independence Day celebrations 2025/001.jpeg', title: 'Independence Day Celebrations' },
    { src: '/assets/gallery/79th Independence Day celebrations 2025/002.jpeg', title: 'Patriotic Spirit at Prest Loans' },
    { src: '/assets/gallery/Diwali_2025/001.jpeg', title: 'Diwali Festive Celebrations' },
    { src: '/assets/gallery/Birthday_Celebration 05082026/001.jpeg', title: 'Team Milestone Celebrations' }
  ];

  const handleImageClick = (src: string, title: string) => {
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
            <Link to="/media" style={{ color: '#cbd5e1' }}>Media</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Photo Gallery</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Corporate Photo Gallery</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Moments, culture, team celebrations, and corporate milestones at Prest Loans.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleImageClick(img.src, img.title)}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: 700, margin: 0 }}>{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
