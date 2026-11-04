import React from 'react';

export const Footer: React.FC = () => {
  return (
    <>
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main-grid">
          {/* Column 1: Registered Office (Matching Screenshot 2) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Registered Office</h4>
            <div className="footer-logo-badge">
              <img src="/assets/logo/logo.png" alt="Prest Loans Logo" />
            </div>
            <ul className="office-info-list">
              <li className="office-info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>
M5-M6, Essel House,                  <br />
10 Asaf Ali Road,                  <br />
New Delhi - 110002                </span>
              </li>
              <li className="office-info-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@prestloans.com">info@prestloans.com</a>
              </li>
              <li className="office-info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <a href="tel:+911145241131">011-45241131</a>
                  <br />
                  <a href="tel:+911145241123">011-45241123</a>
                </div>
              </li>
              <li className="office-info-item whatsapp-link">
                <i className="fa-brands fa-whatsapp"></i>
                <a href="https://wa.me/919711669090?text=Hello%20Prest%20Loans,%20I%20am%20interested%20in%20a%20loan." target="_blank" rel="noopener">+91-9711669090</a>
              </li>
            </ul>
            <div className="footer-social-wrap">
              <span className="footer-social-title">Follow Us</span>
              <div className="footer-social-links">
                <a href="https://www.facebook.com/Prestloans/" target="_blank" rel="noopener noreferrer" className="footer-social-btn fb" title="Facebook" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://x.com/prestloans" target="_blank" rel="noopener noreferrer" className="footer-social-btn x" title="X (Twitter)" aria-label="X (Twitter)">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/prestloans/" target="_blank" rel="noopener noreferrer" className="footer-social-btn in" title="LinkedIn" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/@prestloans" target="_blank" rel="noopener noreferrer" className="footer-social-btn yt" title="YouTube" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/prestloans/" target="_blank" rel="noopener noreferrer" className="footer-social-btn ig" title="Instagram" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Column 2: Useful Links (Matching Screenshot 2) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Useful Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/calculator">EMI Calculator</a>
              </li>
              <li>
                <a href="/customers-stories">Customers' Stories</a>
              </li>
              <li>
                <a href="/career#testimonials">Employee Testimonials</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/public-notice">Public Notice</a>
              </li>
              <li>
                <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener">Sachet RBI</a>
              </li>
            </ul>
          </div>
          {/* Column 3: Policies (Matching Screenshot 2) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Policies</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/terms-of-use">Terms Of Use</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy policy</a>
              </li>
              <li>
                <a href="/fair-practices-code">Fair Practices Code</a>
              </li>
              <li>
                <a href="/penal-charges-policy">Penal Charges Policy</a>
              </li>
              <li>
                <a href="/kyc-and-aml">KYC & AML</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/grievance-redressal">Grievance Redressal Mechanism</a>
              </li>
              <li>
                <a href="/regulatory-certifications">Regulatory Certifications</a>
              </li>
              <li>
                <a href="/interest-rate-model">Interest Rate Model and Schedule of Charges</a>
              </li>
            </ul>
          </div>
          {/* Column 4: Enquiry Form (Matching Screenshot 2) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Enquiry Form</h4>
            <form id="footer-enquiry-form" className="footer-enquiry-form">
              <input type="text" id="footer-enq-name" className="form-control-dark" placeholder="Name" required={true} />
              <input type="tel" id="footer-enq-phone" className="form-control-dark" placeholder="Contact Number" pattern="[0-9]{10}" required={true} />
              <input type="email" id="footer-enq-email" className="form-control-dark" placeholder="Email" required={true} />
              <input type="text" id="footer-enq-location" className="form-control-dark" placeholder="Location" />
              <textarea id="footer-enq-msg" className="form-control-dark" placeholder="Enquiry"></textarea>
              <button type="submit" className="btn-footer-submit">Submit</button>
            </form>
          </div>
        </div>
        {/* Bottom Disclaimer (Matching Screenshot 2 exactly) */}
        <div className="footer-bottom-bar">
          <p className="rbi-disclaimer-text">

          Prest Loans is a trade name of “Lord Krishna Financial Services Ltd” a Non-Banking Finance Company registered
          with RBI.
                  </p>
          <p className="copyright-sub">

          CIN: U65993DL1992PLC049609 | RBI Certificate of Registration: B-14.02019 | © 2026 Prest Loans. All Rights
          Reserved.
                  </p>
        </div>
      </div>
    </footer>

    </>
  );
};
