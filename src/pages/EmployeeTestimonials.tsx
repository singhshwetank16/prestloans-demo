import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { employeeTestimonials } from '../data/employees';

export const EmployeeTestimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredEmployees = filter === 'all'
    ? employeeTestimonials
    : employeeTestimonials.filter((e) => e.category === filter);

  return (
    <>
      {/* PAGE BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/career" style={{ color: '#cbd5e1' }}>Career</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Employee Testimonials</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Employee Testimonials &amp; Culture</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Discover authentic career experiences, workplace empowerment, and growth stories from the Prest Loans family.
          </p>
        </div>
      </section>

      {/* FILTER TABS & STORIES GRID */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { id: 'all', label: 'All Stories' },
              { id: 'it', label: 'Technology & IT' },
              { id: 'ops', label: 'Operations & Collections' },
              { id: 'sales', label: 'Customer Success' },
              { id: 'management', label: 'Leadership' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '50px',
                  border: '1px solid',
                  borderColor: filter === tab.id ? '#f05a28' : '#e2e8f0',
                  background: filter === tab.id ? '#f05a28' : '#ffffff',
                  color: filter === tab.id ? '#ffffff' : '#475569',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {filteredEmployees.map((emp) => (
              <div
                key={emp.name}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    {emp.photo ? (
                      <img
                        src={emp.photo}
                        alt={emp.name}
                        style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff1ec' }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #f05a28, #3b82f6)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '1.3rem'
                        }}
                      >
                        {emp.initials || emp.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>{emp.name}</h3>
                      <div style={{ color: '#f05a28', fontWeight: 600, fontSize: '0.9rem' }}>{emp.designation}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{emp.department}</div>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                    “{emp.quote}”
                  </p>
                </div>
                {emp.experience && (
                  <div style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '14px', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
                    <i className="fa-solid fa-award" style={{ color: '#f05a28', marginRight: '6px' }}></i>
                    {emp.experience}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Join Us Banner */}
          <div style={{ marginTop: '60px', background: 'linear-gradient(135deg, #fff1ec, #fff7ed)', border: '1px solid #fed7aa', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: 800, marginBottom: '10px' }}>
              Want to Build Your Story With Us?
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 24px' }}>
              We are always on the lookout for driven leaders, underwriters, and technologists. Explore our available positions and start your journey.
            </p>
            <Link to="/career#openings" className="btn-primary" style={{ padding: '12px 32px', borderRadius: '50px' }}>
              View Career Openings →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
