import React from 'react';

export const Header: React.FC = () => {
  return (
    <>
    <header className="main-header">
      <div className="header-container">
        {/* Logo */}
        <a href="#hero" className="brand-logo-wrap" title="Prest Loans - Digital Lending Platform">
          <img src="/assets/logo/logo.png" alt="Prest Loans - RBI Registered NBFC" className="brand-logo-img" />
        </a>
        {/* Navigation Menu */}
        <nav className="main-nav" id="main-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item dropdown">
              <a href="javascript:void(0)" className="nav-link">

              Products                 <i className="fa-solid fa-chevron-down" style={{"fontSize":"0.75rem"}}></i>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/products#education-loan">
                    <i className="fa-solid fa-graduation-cap"></i>
 Coaching/Skill Development/Education Loans
                                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/products#personal-loan">
                    <i className="fa-solid fa-user-shield"></i>
 Personal Loan
                                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/products#short-term-personal-loan">
                    <i className="fa-solid fa-clock-rotate-left"></i>
 Short Term Personal Loan
                                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/products#home-loan">
                    <i className="fa-solid fa-house-chimney"></i>
 Home Loan
                                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/products#business-loan">
                    <i className="fa-solid fa-briefcase"></i>
 Business Loan
                                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="javascript:void(0)" className="nav-link">

              Media                 <i className="fa-solid fa-chevron-down" style={{"fontSize":"0.75rem"}}></i>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/media">
                    <i className="fa-solid fa-newspaper"></i>
 Press Releases & Coverage                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/gallery">
                    <i className="fa-solid fa-images"></i>
 Photo Gallery                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/blog">
                    <i className="fa-solid fa-newspaper"></i>
 Insights & Blog                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/customers-stories" className="nav-link">Customers' Stories</a>
            </li>
            <li className="nav-item">
              <a href="/career" className="nav-link">Career</a>
            </li>
            <li className="nav-item">
              <a href="/faq" className="nav-link">FAQ</a>
            </li>
            <li className="nav-item mobile-only-socials">
              <div className="mobile-nav-socials">
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
            </li>
          </ul>
        </nav>
        {/* Actions: Login & Language Dropdown */}
        <div className="header-actions">
          <button className="btn-login" onClick={(event) => { try { (new Function('event', "openLoginModal('customer')")).call(event.currentTarget, event); } catch(e) {} }}>

          Login
                  </button>
          <div className="lang-select-wrap">
            <select id="lang-select" className="lang-select" aria-label="Select Language">
              <option value="en">Select Language ▼</option>
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
            <i className="fa-solid fa-globe"></i>
          </div>
          {/* Mobile Menu Toggle Button */}
          <button className="mobile-toggle" id="mobile-menu-toggle" aria-label="Open Menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>

    </>
  );
};
