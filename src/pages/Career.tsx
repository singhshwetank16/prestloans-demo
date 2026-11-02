import React from 'react';
import { Link } from 'react-router-dom';
import { jobOpenings } from '../data/positions';
import { employeeTestimonials } from '../data/employees';

export const Career: React.FC = () => {
  const opening = jobOpenings[0];

  const handleApply = (role: string) => {
    if (typeof (window as any).openCareerApplyModal === 'function') {
      (window as any).openCareerApplyModal(role);
    }
  };

  return (
    <>
      {/* CAREER HERO SECTION */}
      <section className="career-hero-pro" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '80px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <span style={{ background: 'rgba(240, 90, 40, 0.2)', border: '1px solid rgba(240, 90, 40, 0.4)', color: '#ff8c61', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: '20px' }}>
            <i className="fa-solid fa-briefcase"></i> Careers at Prest Loans
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            Build Your Career at <span style={{ background: 'linear-gradient(90deg, #f05a28, #ff8c61)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Prest Loans</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 30px', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Work with visionary leadership, cutting-edge credit algorithms, and mission-driven colleagues empowering over 25,000+ borrowers across India.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#openings" className="btn-primary" style={{ padding: '14px 28px', borderRadius: '50px', fontWeight: 600, boxShadow: '0 8px 25px rgba(240, 90, 40, 0.4)' }}>
              <i className="fa-solid fa-briefcase"></i> View Available Positions
            </a>
            {/* Image 1: Employee Testimonials button links to /employee-testimonials */}
            <Link
              to="/employee-testimonials"
              className="btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: 600
              }}
            >
              <i className="fa-solid fa-comments"></i> Employee Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* AVAILABLE POSITIONS SECTION */}
      <section className="section" id="openings" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Current Opportunities</span>
            <h2 className="section-title">Available Positions</h2>
            <p className="section-sub">Join our team of passionate problem solvers shaping the future of digital credit in India.</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px', marginBottom: '24px' }}>
              <div>
                <span style={{ background: '#fff1ec', color: '#f05a28', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-block', marginBottom: '8px' }}>
                  {opening.department} Department
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800 }}>{opening.title}</h3>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '10px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span><i className="fa-solid fa-location-dot" style={{ color: '#f05a28', marginRight: '6px' }}></i> {opening.location}</span>
                  <span><i className="fa-solid fa-clock" style={{ color: '#f05a28', marginRight: '6px' }}></i> {opening.experience}</span>
                  <span><i className="fa-solid fa-briefcase" style={{ color: '#f05a28', marginRight: '6px' }}></i> {opening.type}</span>
                </div>
              </div>
              <button
                className="btn-primary"
                onClick={() => handleApply(opening.title)}
                style={{ padding: '12px 28px', borderRadius: '50px', fontWeight: 700 }}
              >
                Apply for this Position
              </button>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700, marginBottom: '12px' }}>
                Key Responsibilities:
              </h4>
              <ul style={{ paddingLeft: '20px', color: '#475569', lineHeight: 1.8 }}>
                {opening.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700, marginBottom: '12px' }}>
                Ideal Candidate Profile:
              </h4>
              <ul style={{ paddingLeft: '20px', color: '#475569', lineHeight: 1.8 }}>
                {opening.qualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'block' }}>Prefer sending your resume directly?</span>
                <strong style={{ color: '#1e293b', fontSize: '1.05rem' }}>humans@prestloans.com</strong>
              </div>
              <button
                className="btn-primary"
                onClick={() => handleApply(opening.title)}
                style={{ padding: '10px 24px', borderRadius: '50px' }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE TESTIMONIALS SECTION (With anchor #testimonials for Image 2) */}
      <section className="section" id="testimonials" style={{ background: '#f8fafc', padding: '80px 0', scrollMarginTop: '80px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Life at Prest Loans</span>
            <h2 className="section-title">Employee Testimonials &amp; Stories</h2>
            <p className="section-sub">Hear directly from the talented professionals driving financial inclusion every day.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {employeeTestimonials.slice(0, 6).map((emp) => (
              <div key={emp.name} style={{ background: '#ffffff', borderRadius: '20px', padding: '28px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    {emp.photo ? (
                      <img src={emp.photo} alt={emp.name} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f05a28' }} />
                    ) : (
                      <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #f05a28, #3b82f6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem' }}>
                        {emp.initials || emp.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 700, margin: 0 }}>{emp.name}</h4>
                      <span style={{ fontSize: '0.85rem', color: '#f05a28', fontWeight: 600 }}>{emp.designation}</span>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{emp.department}</div>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                    “{emp.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/employee-testimonials" className="btn-primary" style={{ padding: '12px 32px', borderRadius: '50px' }}>
              View All Employee Stories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
