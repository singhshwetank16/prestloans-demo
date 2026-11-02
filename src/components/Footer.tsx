import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', location: '', message: '' });
    }, 4000);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main-grid">
          {/* Column 1: Registered Office */}
          <div className="footer-col">
            <h4 className="footer-col-title">Registered Office</h4>
            <div className="footer-logo-badge">
              <img src="/assets/logo/logo.png" alt="Prest Loans Logo" />
            </div>
            <ul className="office-info-list">
              <li className="office-info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>M5-M6, Essel House,<br />10 Asaf Ali Road,<br />New Delhi - 110002</span>
              </li>
              <li className="office-info-item">
                <i className="fa-solid fa-envelope"></i>
                <a href={`mailto:${siteConfig.contact.emails.support}`}>{siteConfig.contact.emails.support}</a>
              </li>
              <li className="office-info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  {siteConfig.contact.phones.map((p) => (
                    <React.Fragment key={p.display}>
                      <a href={p.href}>{p.display}</a><br />
                    </React.Fragment>
                  ))}
                </div>
              </li>
              <li className="office-info-item whatsapp-link">
                <i className="fa-brands fa-whatsapp"></i>
                <a href={siteConfig.contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  {siteConfig.contact.whatsapp.display}
                </a>
              </li>
            </ul>
            <div className="footer-social-wrap">
              <span className="footer-social-title">Follow Us</span>
              <div className="footer-social-links">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-btn ${s.key}`}
                    title={s.name}
                    aria-label={s.name}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Useful Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/calculator">EMI Calculator</Link></li>
              <li><Link to="/customers-stories">Customers' Stories</Link></li>
              <li><Link to="/career#testimonials">Employee Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/public-notice">Public Notice</Link></li>
              <li><a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer">Sachet RBI</a></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="footer-col">
            <h4 className="footer-col-title">Policies</h4>
            <ul className="footer-links-list">
              <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><Link to="/terms-of-use">Terms Of Use</Link></li>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/fair-practices-code">Fair Practices Code</Link></li>
              <li><Link to="/penal-charges-policy">Penal Charges Policy</Link></li>
              <li><Link to="/kyc-and-aml">KYC &amp; AML</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/grievance-redressal">Grievance Redressal Mechanism</Link></li>
              <li><Link to="/regulatory-certifications">Regulatory Certifications</Link></li>
              <li><Link to="/interest-rate-model">Interest Rate Model and Schedule of Charges</Link></li>
            </ul>
          </div>

          {/* Column 4: Enquiry Form */}
          <div className="footer-col">
            <h4 className="footer-col-title">Enquiry Form</h4>
            {submitted ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', color: '#22c55e', padding: '16px', borderRadius: '10px', fontSize: '0.9rem', textAlign: 'center' }}>
                <i className="fa-solid fa-check-circle" style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'block' }}></i>
                Thank you! Your enquiry has been received. Our loan advisor will call you shortly.
              </div>
            ) : (
              <form id="footer-enquiry-form" className="footer-enquiry-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="footer-enq-name"
                  className="form-control-dark"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  id="footer-enq-phone"
                  className="form-control-dark"
                  placeholder="Contact Number"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="email"
                  id="footer-enq-email"
                  className="form-control-dark"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  id="footer-enq-location"
                  className="form-control-dark"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                <textarea
                  id="footer-enq-msg"
                  className="form-control-dark"
                  placeholder="Enquiry"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button type="submit" className="btn-footer-submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="footer-bottom-bar">
          <p className="rbi-disclaimer-text">
            Prest Loans is a trade name of “{siteConfig.legalName}” a Non-Banking Finance Company registered with RBI.
          </p>
          <p className="copyright-sub">
            CIN: {siteConfig.cin} | RBI Certificate of Registration: {siteConfig.rbiRegNo} | © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
