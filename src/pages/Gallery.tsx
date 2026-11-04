import React, { useEffect } from 'react';

export const Gallery: React.FC = () => {
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
           <a href="/media">Media</a>
           <i className="fa-solid fa-chevron-right" style={{"fontSize":"0.65rem"}}></i>
           <span>Photo Gallery</span>
        </div>
        <h1 className="page-banner-title">Prest Loans Moments</h1>
        <p className="page-banner-sub">

        A visual showcase of our people, leadership forums, branch expansions, and memorable celebrations.
              </p>
      </div>
    </section>
    {/* GALLERY WITH REAL ASSETS */}
    <section className="section">
      <div className="container">
        <div className="gallery-filters">
          <button className="gallery-filter-btn active" data-filter="all">All Photos</button>
          <button className="gallery-filter-btn" data-filter="culture">Team & Culture</button>
          <button className="gallery-filter-btn" data-filter="events">Customer Meets & Awards</button>
          <button className="gallery-filter-btn" data-filter="office">Head Office & Branches</button>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/1.jpg', 'Corporate Team & Leadership Meet')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/1.jpg" alt="Corporate Team Meet" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Corporate Team Meet</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/2.jpg', 'Customer Felicitation Ceremony')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/2.jpg" alt="Customer Felicitation" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Customer Felicitation Ceremony</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/3.jpeg', 'Head Office Operations & Credit Desk')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/3.jpeg" alt="Credit Desk" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Credit Desk & Operations</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/4.jpg', 'Team Collaboration Session')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/4.jpg" alt="Team Session" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Team Collaboration Session</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/5.jpg', 'Annual Awards & Recognition')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/5.jpg" alt="Annual Awards" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Annual Awards & Recognition</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/6.jpg', 'Branch Network Launch')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/6.jpg" alt="Branch Network" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Branch Network Expansion</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/7.jpg', 'Fintech Training Workshop')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/7.jpg" alt="Training Workshop" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Fintech Training Workshop</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/8.jpg', 'Borrower Outreach Program')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/8.jpg" alt="Borrower Outreach" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Borrower Outreach Program</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/9.jpg', 'Underwriting Team Floor')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/9.jpg" alt="Underwriting Floor" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Underwriting Team Floor</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/10.jpg', 'Cultural Celebrations at Office')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/10.jpg" alt="Celebrations" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Cultural Celebrations</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/11.jpg', 'Strategic Partner Tie-up Launch')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/11.jpg" alt="Partner Tie-up Launch" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Strategic Partner Tie-up Launch</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/13.jpg', 'Prest Loans Leadership Address')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/13.jpg" alt="Leadership Address" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Leadership Address</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/14.jpg', 'Client Reception at New Delhi HQ')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/14.jpg" alt="Client Reception" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">New Delhi HQ Lounge</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
          <div className="gallery-item" data-category="events" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/15.jpg', 'Borrower Success Milestone')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/15.jpg" alt="Borrower Milestone" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Borrower Success Milestone</span>
              <span className="gallery-item-cat">Customer Meets & Awards</span>
            </div>
          </div>
          <div className="gallery-item" data-category="culture" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/16.jpg', 'All-Hands Tech & Risk Meeting')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/16.jpg" alt="Tech & Risk Meeting" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">All-Hands Tech & Risk Meeting</span>
              <span className="gallery-item-cat">Team & Culture</span>
            </div>
          </div>
          <div className="gallery-item" data-category="office" onClick={(event) => { try { (new Function('event', "openGalleryLightbox('assets/gallery/photo_gallery/17.jpg', 'Customer Relationship Center')")).call(event.currentTarget, event); } catch(e) {} }}>
            <img src="/assets/gallery/photo_gallery/17.jpg" alt="Customer Center" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-item-title">Customer Relationship Center</span>
              <span className="gallery-item-cat">Head Office & Branches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* LIGHTBOX MODAL */}
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
