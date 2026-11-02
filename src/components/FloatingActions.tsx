import React from 'react';
import { siteConfig } from '../config/site';

export const FloatingActions: React.FC = () => {
  return (
    <div className="floating-actions">
      <a
        href={siteConfig.contact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        title="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a
        href={siteConfig.contact.phones[0].href}
        className="floating-btn floating-call"
        title="Call Customer Helpline"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
};
