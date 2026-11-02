import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';

interface HeaderProps {
  onOpenLoginModal?: (tab?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLoginModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLoginClick = () => {
    if (onOpenLoginModal) {
      onOpenLoginModal('customer');
    } else if (typeof (window as any).openLoginModal === 'function') {
      (window as any).openLoginModal('customer');
    }
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo-wrap" title="Prest Loans - Digital Lending Platform" onClick={closeMobile}>
          <img src="/assets/logo/logo.png" alt="Prest Loans - RBI Registered NBFC" className="brand-logo-img" />
        </Link>

        {/* Navigation Menu */}
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`} id="main-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                About
              </NavLink>
            </li>
            <li className={`nav-item dropdown ${location.pathname.startsWith('/products') ? 'active' : ''}`}>
              <a href="#products" className="nav-link" onClick={(e) => e.preventDefault()}>
                Products <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75rem' }}></i>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/products#education-loan" onClick={closeMobile}>
                    <i className="fa-solid fa-graduation-cap"></i> Coaching/Skill Development/Education Loans
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/products#personal-loan" onClick={closeMobile}>
                    <i className="fa-solid fa-user-shield"></i> Personal Loan
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/products#short-term-personal-loan" onClick={closeMobile}>
                    <i className="fa-solid fa-clock-rotate-left"></i> Short Term Personal Loan
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/products#home-loan" onClick={closeMobile}>
                    <i className="fa-solid fa-house-chimney"></i> Home Loan
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/products#business-loan" onClick={closeMobile}>
                    <i className="fa-solid fa-briefcase"></i> Business Loan
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`nav-item dropdown ${['/media', '/gallery', '/blog'].includes(location.pathname) ? 'active' : ''}`}>
              <a href="#media" className="nav-link" onClick={(e) => e.preventDefault()}>
                Media <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75rem' }}></i>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/media" onClick={closeMobile}>
                    <i className="fa-solid fa-newspaper"></i> Press Releases & Coverage
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/gallery" onClick={closeMobile}>
                    <i className="fa-solid fa-images"></i> Photo Gallery
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/blog" onClick={closeMobile}>
                    <i className="fa-solid fa-newspaper"></i> Insights & Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/customers-stories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                Customers' Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/career" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                FAQ
              </NavLink>
            </li>
            <li className="nav-item mobile-only-socials">
              <div className="mobile-nav-socials">
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
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-login" onClick={handleLoginClick}>
            Login
          </button>

          <div className="lang-select-wrap">
            <select id="lang-select" className="lang-select" aria-label="Select Language" defaultValue="en">
              <option value="en">Select Language ▼</option>
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
            <i className="fa-solid fa-globe"></i>
          </div>

          <button
            className="mobile-toggle"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};
