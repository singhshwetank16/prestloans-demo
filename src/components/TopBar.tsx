import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <>
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span className="rbi-badge-pill">
            <i className="fa-solid fa-shield-halved"></i>
 RBI REGISTERED NBFC: B-14.02019
                  </span>
          <span className="top-link">
            <i className="fa-solid fa-building"></i>
 Lord Krishna Financial Services Ltd (Est. 1992)
                  </span>
        </div>
        <div className="top-bar-right">
          <a href="tel:+911145241131" className="top-link">
            <i className="fa-solid fa-phone"></i>
 011-45241131          </a>
          <a href="mailto:info@prestloans.com" className="top-link">
            <i className="fa-solid fa-envelope"></i>

          info@prestloans.com          </a>
          <a href="javascript:void(0)" onClick={(event) => { try { (new Function('event', "openTrackStatusModal()")).call(event.currentTarget, event); } catch(e) {} }} className="top-link" style={{"color":"#ff8c61"}}>
            <i className="fa-solid fa-location-crosshairs"></i>
 Track Loan Status
                  </a>
          <div className="top-bar-socials">
            <a href="https://www.facebook.com/Prestloans/" target="_blank" rel="noopener noreferrer" className="top-social-btn fb" title="Facebook" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com/prestloans" target="_blank" rel="noopener noreferrer" className="top-social-btn x" title="X (Twitter)" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/prestloans/" target="_blank" rel="noopener noreferrer" className="top-social-btn in" title="LinkedIn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/@prestloans" target="_blank" rel="noopener noreferrer" className="top-social-btn yt" title="YouTube" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/prestloans/" target="_blank" rel="noopener noreferrer" className="top-social-btn ig" title="Instagram" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};
