import React, { useEffect } from 'react';

export const Contact: React.FC = () => {
  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
    if (typeof (window as any).initCalculators === 'function') {
      (window as any).initCalculators();
    }
  }, []);

  return (
    <>
    {/* TOP BAR */}
    {/* HEADER */}
    {/* PAGE HERO BANNER */}
    <section className="page-banner">
      <div className="container">
        <div className="breadcrumbs">
          <a href="/">Home</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
           <span>Contact Us</span>
        </div>
        <h1 className="page-banner-title">Contact & Registered Office</h1>
        <p className="page-banner-sub">

        Get in touch with our loan advisory desk, relationship managers, or visit our registered corporate headquarters in New Delhi.
              </p>
      </div>
    </section>
    {/* CONTACT GRID SECTION */}
    <section className="section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-card-box">
            <span className="section-tag" style={{"marginBottom":"12px"}}>Get In Touch</span>
            <h2 style={{"fontSize":"1.85rem","fontWeight":"800","color":"#0f172a","marginBottom":"20px"}}>Corporate & Registered Headquarters</h2>
            <p style={{"color":"#475569","fontSize":"0.9375rem","lineHeight":"1.7","marginBottom":"28px"}}>

            Whether you have an inquiry regarding home loans, personal loans, partner onboarding, or customer support, our executive team is here to assist.
                      </p>
            <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"#fdf2f8","color":"var(--primary-purple)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-building"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Corporate Office</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>

                  Lord Krishna Financial Services Ltd (Prest Loans)                    <br />

                  903, 9th Floor, Surya Kiran Building, KG Marg,                    <br />

                  Connaught Place, New Delhi - 110001
                                  </p>
                </div>
              </div>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"var(--primary-purple-light)","color":"var(--primary-purple)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Registered Office</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>

                  Lord Krishna Financial Services Ltd (Prest Loans)                    <br />

                  M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
                                  </p>
                </div>
              </div>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"var(--primary-orange-light)","color":"var(--primary-orange)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Customer Helpline</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>
                    <a href="tel:+911145241131" style={{"color":"#0f172a","fontWeight":"600"}}>011-45241131</a>
 / 
                                      <a href="tel:+911145241123" style={{"color":"#0f172a","fontWeight":"600"}}>011-45241123</a>
                  </p>
                </div>
              </div>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"#eff6ff","color":"#2563eb","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Service Timings</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>

                  Mon - Fri (10:00 AM to 06:30 PM)                    <br />

                  Saturday (10:00 AM to 03:30 PM)                    <br />
                    <span style={{"display":"inline-block","background":"#fee2e2","color":"#dc2626","fontSize":"0.75rem","fontWeight":"700","padding":"2px 8px","borderRadius":"4px","marginTop":"4px"}}>Second Saturday Off</span>
                  </p>
                </div>
              </div>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"#ecfdf5","color":"#25d366","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","flexShrink":"0"}}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Official WhatsApp Support</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>
                    <a href="https://wa.me/919711669090?text=Hello%20Prest%20Loans,%20I%20have%20an%20inquiry." target="_blank" rel="noopener" style={{"color":"#059669","fontWeight":"700"}}>

                    +91-9711669090
                                      </a>
                  </p>
                </div>
              </div>
              <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"var(--radius-sm)","background":"#f1f5f9","color":"#334155","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","flexShrink":"0"}}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 style={{"fontWeight":"800","color":"#0f172a","fontSize":"1rem"}}>Email Support</h4>
                  <p style={{"color":"#475569","fontSize":"0.875rem","lineHeight":"1.6"}}>

                  General Queries:                     <a href="mailto:info@prestloans.com" style={{"color":"var(--primary-purple)","fontWeight":"600"}}>info@prestloans.com</a>
                    <br />

                  Grievance Desk:                     <a href="mailto:nodalofficer@prestloans.com" style={{"color":"var(--primary-purple)","fontWeight":"600"}}>nodalofficer@prestloans.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Box */}
          <div className="contact-card-box">
            <h3 style={{"fontSize":"1.4rem","fontWeight":"800","color":"#0f172a","marginBottom":"6px"}}>Send Us an Official Message</h3>
            <p style={{"color":"#64748b","fontSize":"0.875rem","marginBottom":"24px"}}>
Fill in the form below and our relationship team will reach out within 4 business hours.            </p>
            <form id="main-contact-form">
              <div className="quick-input-group">
                <label className="quick-input-label">Full Name</label>
                <input type="text" id="contact-name" className="quick-input-field" placeholder="Enter Your Name" required={true} />
              </div>
              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"14px"}}>
                <div className="quick-input-group">
                  <label className="quick-input-label">Contact Number</label>
                  <input type="tel" id="contact-phone" className="quick-input-field" placeholder="10-digit mobile number" pattern="[0-9]{10}" required={true} />
                </div>
                <div className="quick-input-group">
                  <label className="quick-input-label">Email Address</label>
                  <input type="email" id="contact-email" className="quick-input-field" placeholder="name@domain.com" required={true} />
                </div>
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Location / City</label>
                <input type="text" id="contact-city" className="quick-input-field" placeholder="e.g. New Delhi, Jaipur, Ludhiana" />
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Inquiry Subject</label>
                <select id="contact-subject" className="quick-input-field">
                  <option value="Business Loan Inquiry">Business Loan Inquiry</option>
                  <option value="Home Loan Inquiry">Home Loan Inquiry</option>
                  <option value="Education Loan Inquiry">Education Loan Inquiry</option>
                  <option value="Personal Loan Inquiry">Personal Loan Inquiry</option>
                  <option value="Short Term Loan Inquiry">Short Term Personal Loan Inquiry</option>
                  <option value="Partnership / DSA">DSA & Partner Registration</option>
                  <option value="Customer Support">Existing Loan Support / Statement</option>
                  <option value="Grievance">Grievance / Feedback</option>
                </select>
              </div>
              <div className="quick-input-group">
                <label className="quick-input-label">Message / Details</label>
                <textarea id="contact-msg" className="quick-input-field" style={{"minHeight":"90px","resize":"vertical"}} placeholder="Tell us how we can help you..."></textarea>
              </div>
              <button type="submit" className="btn-card-submit">
                <span>Send Message</span>
                 <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
