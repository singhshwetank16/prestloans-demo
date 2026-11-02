import React from 'react';
import { siteConfig } from '../config/site';

interface TopBarProps {
  onOpenTrackModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenTrackModal }) => {
  const handleOpenTrack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTrackModal) {
      onOpenTrackModal();
    } else if (typeof (window as any).openTrackStatusModal === 'function') {
      (window as any).openTrackStatusModal();
    }
  };

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span className="rbi-badge-pill">
            <i className="fa-solid fa-shield-halved"></i> RBI REGISTERED NBFC: {siteConfig.rbiRegNo}
          </span>
          <span className="top-link">
            <i className="fa-solid fa-building"></i> {siteConfig.legalName} (Est. {siteConfig.established})
          </span>
        </div>
        <div className="top-bar-right">
          <a href={siteConfig.contact.phones[0].href} className="top-link">
            <i className="fa-solid fa-phone"></i> {siteConfig.contact.phones[0].display}
          </a>
          <a href={`mailto:${siteConfig.contact.emails.support}`} className="top-link">
            <i className="fa-solid fa-envelope"></i> {siteConfig.contact.emails.support}
          </a>
          <a href="#track" onClick={handleOpenTrack} className="top-link" style={{ color: '#ff8c61' }}>
            <i className="fa-solid fa-location-crosshairs"></i> Track Loan Status
          </a>
          <div className="top-bar-socials">
            {siteConfig.socials.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`top-social-btn ${s.key}`}
                title={s.name}
                aria-label={s.name}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
