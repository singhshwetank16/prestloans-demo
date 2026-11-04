import React, { useEffect } from 'react';

export const CustomersStories: React.FC = () => {
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
          <span>Customers' Stories</span>
        </div>
        <h1 className="page-banner-title">Customers' Stories</h1>
        <p className="page-banner-sub">

        Real stories of resilience, family aspirations, and personal dreams from across India, powered by Prest
        Loans.
              </p>
      </div>
    </section>
    {/* TESTIMONIALS GRID (WITH AUTHENTIC BORROWER PHOTOS) */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">25,000+ Satisfied Borrowers</span>
          <h2 className="section-title">In Their Own Words</h2>
          <p className="section-desc">
See how rapid access to capital created tangible impact on turnover, employment, and
          profitability.          </p>
        </div>
        <div className="testimonials-grid">
          {/* Story 1: Rajeev Khetan */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "Ahead of the festive peak season, our distribution enterprise urgently required ₹15 Lakhs in rapid
            liquidity to secure bulk inventory from primary manufacturers. Prest Loans' algorithmic digital underwriting
            evaluated our GST turnover velocity instantly, depositing funds into our corporate account within 48 hours.
            This timely infusion enabled us to double our seasonal revenue!"
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/636345295057086250Rajeevkhetan.jpg" alt="Rajeev Khetan" className="author-avatar" />
              <div className="author-info">
                <h4>Rajeev Khetan</h4>
                <p>Wholesale Trader • Delhi NCR</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Story 2: Parmeshwar Sharma */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "Traditional commercial lenders kept us trapped in tedious bureaucratic cycles for months demanding
            immovable property mortgages. A dedicated Relationship Manager from Prest Loans visited our manufacturing
            facility, evaluated our healthy cash flows, and sanctioned an ₹8 Lakh collateral-free working capital loan
            within days. A true growth catalyst for industrial manufacturers!"
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/636345295405992500parmeshwar.png" alt="Parmeshwar Sharma" className="author-avatar" />
              <div className="author-info">
                <h4>Parmeshwar Sharma</h4>
                <p>Industrial Parts Fabricator • Haryana</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Story 3: Rajesh Kumar Patwa */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "Operating a fast-moving retail enterprise means working capital frequently gets tied up in customer credit
            cycles. Prest Loans offered us flexible amortizations and competitive monthly installments, giving us
            crucial liquidity breathing room. We immediately expanded our second billing counter and introduced
            lucrative high-margin merchandise."
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/63639621804852875010036 Rajehs kumar patwa.jpg" alt="Rajesh Kumar Patwa" className="author-avatar" />
              <div className="author-info">
                <h4>Rajesh Kumar Patwa</h4>
                <p>Retail Enterprise Merchant • Rajasthan</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Story 4: Raj Kumar */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "Prest Loans upholds 100% transparency throughout documentation. The interest rates, processing fees, and
            terms outlined in our initial sanction letter were exact, with zero hidden surcharges or surprise
            deductions. Thanks to this credit line, our auto-components fabrication capacity increased by 40%."
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/63639622708290375010051 raj kumar.jpg" alt="Raj Kumar" className="author-avatar" />
              <div className="author-info">
                <h4>Raj Kumar</h4>
                <p>Auto Workshop & Fabrication • Punjab</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Story 5: Shiv Narayan Paul */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "We applied for commercial financing to expand our transport and delivery fleet operations. Prest Loans
            provided high financing with minimal down payment and an amortization model that perfectly
            matched our revenue cycle. Today, we operate a growing logistics fleet with our net monthly
            earnings tripling."
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/63639623573587250010059 shiv narayan Paul.jpg" alt="Shiv Narayan Paul" className="author-avatar" />
              <div className="author-info">
                <h4>Shiv Narayan Paul</h4>
                <p>Fleet & Logistics Operator • Uttar Pradesh</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Story 6: Rajesh Sharma */}
          <div className="testimonial-card">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            <p className="testimonial-text">
{`
            "Because Lord Krishna Financial Services (Prest Loans) is an established RBI-registered NBFC, their
            operational ethics and compliance standards are exemplary. We experienced zero harassment, total dignity,
            and utmost courtesy from their professional credit desk. A modern lender every entrepreneur can rely on."
          `}            </p>
            <div className="testimonial-author">
              <img src="/assets/testimonials/63639623935352875010033 rajesh same.jpg" alt="Rajesh Sharma" className="author-avatar" />
              <div className="author-info">
                <h4>Rajesh Sharma</h4>
                <p>Textile Merchant • Delhi Chandni Chowk</p>
                <div className="author-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Share Your Story CTA Box */}
        <div style={{"background":"var(--calc-gradient)","color":"#fff","borderRadius":"var(--radius-xl)","padding":"40px","marginTop":"50px","textAlign":"center"}}>
          <h3 style={{"fontSize":"1.8rem","fontWeight":"800","marginBottom":"12px"}}>Are You a Prest Loans Borrower?</h3>
          <p style={{"fontSize":"1rem","opacity":"0.9","maxWidth":"600px","margin":"0 auto 24px"}}>

          Share your entrepreneurial milestone with us and be featured in our national Prest Loans Borrower Spotlight
          series.
                  </p>
          <button className="btn-primary" style={{"background":"#ffffff","color":"#70146e"}} onClick={(event) => { try { (new Function('event', "window.showToast('Please email your story with photo to stories@prestloans.com!')")).call(event.currentTarget, event); } catch(e) {} }}>
            <i className="fa-solid fa-pen-to-square"></i>
 Share Your Feedback
                  </button>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
