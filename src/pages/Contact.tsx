import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Loan Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', phone: '', email: '', subject: 'General Loan Inquiry', message: '' });
    }, 4000);
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)', color: '#ffffff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#f05a28' }}>Contact Us</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Get in Touch With Us</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Our loan specialists and customer relationship team are here to assist with every inquiry.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Contact Information Cards */}
            <div>
              <span className="section-tag">Reach Out Directly</span>
              <h2 style={{ fontSize: '2rem', color: '#1e293b', fontWeight: 800, margin: '8px 0 24px' }}>
                We Are Here to Help
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: '#fff1ec', color: '#f05a28', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>Registered Office</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                      M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>Customer Care Helplines</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                      <a href="tel:+911145241131" style={{ color: '#1e293b', fontWeight: 600 }}>011-45241131</a> &nbsp;|&nbsp;
                      <a href="tel:+911145241123" style={{ color: '#1e293b', fontWeight: 600 }}>011-45241123</a>
                    </p>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
                      <i className="fa-regular fa-clock"></i> {siteConfig.contact.timings}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>WhatsApp Support</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                      <a href={siteConfig.contact.whatsapp.href} target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 700 }}>
                        {siteConfig.contact.whatsapp.display}
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 700, margin: '0 0 4px' }}>Official Email IDs</h4>
                    <div style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <div>Borrower Support: <strong>{siteConfig.contact.emails.support}</strong></div>
                      <div>HR &amp; Careers: <strong>{siteConfig.contact.emails.careers}</strong></div>
                      <div>Grievance Redressal: <strong>{siteConfig.contact.emails.grievance}</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#1e293b', fontWeight: 800, marginBottom: '8px' }}>Send Us a Message</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px' }}>Leave your details and our team will get back to you within 24 working hours.</p>

              {sent ? (
                <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#16a34a', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <i className="fa-solid fa-check-circle" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block' }}></i>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Message Received!</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Thank you for reaching out. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>Mobile Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>Subject</label>
                    <select
                      className="form-control"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Loan Inquiry">General Loan Inquiry</option>
                      <option value="Coaching / Skill Loan">Coaching / Skill Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Existing Loan Support">Existing Loan Support</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: '50px' }}>
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
