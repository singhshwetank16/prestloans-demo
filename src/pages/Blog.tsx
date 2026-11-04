import React, { useEffect } from 'react';

export const Blog: React.FC = () => {
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
          <span>Insights & Blog</span>
        </div>
        <h1 className="page-banner-title">Financial Insights & Knowledge Hub</h1>
        <p className="page-banner-sub">

        Expert perspectives, loan advisory guides, FinTech breakthroughs, CIBIL guides, and inspiring growth
        stories crafted for Indian borrowers.
              </p>
      </div>
    </section>
    {/* MAIN BLOG SECTION */}
    <section className="section" style={{"paddingTop":"50px"}}>
      <div className="container">
        {/* FEATURED SPOTLIGHT ARTICLE */}
        <div className="blog-featured-section">
          <div className="blog-featured-card">
            <div className="blog-featured-media">
              <span className="blog-featured-badge">
                <i className="fa-solid fa-star"></i>
 Featured Guide              </span>
              <img src="https://www.prestloans.com/Content/images/Blog/638594102649346554CLCSS-10-8-18.jpg" alt="Credit Linked Capital Subsidy for Technology Upgradation" className="blog-featured-img" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-featured-content">
              <div className="blog-featured-meta">
                <span className="blog-meta-item">
                  <i className="fa-solid fa-tag"></i>
 MSME Schemes                </span>
                <span className="blog-meta-item">
                  <i className="fa-regular fa-calendar"></i>
 19 December 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h2 className="blog-featured-title">
Credit Linked Capital Subsidy Scheme (CLCSS) for Technology Upgradation              </h2>
              <p className="blog-featured-desc">

              Micro, Small and Medium Enterprises (MSMEs) drive India's economic growth. Discover how the government's
              15% upfront capital subsidy empowers small manufacturers to induct modern machinery without working
              capital stress.
                          </p>
              <div className="blog-featured-actions">
                <button className="btn-primary" onClick={(event) => { try { (new Function('event', "openArticleModal(30)")).call(event.currentTarget, event); } catch(e) {} }}>
                  <i className="fa-solid fa-book-open-reader"></i>
 Read Full Article
                              </button>
                <a href="/products" className="btn-outline-purple">
                  <i className="fa-solid fa-paper-plane"></i>
 Explore Loan Products
                              </a>
              </div>
            </div>
          </div>
        </div>
        {/* INTERACTIVE CONTROLS BAR: SEARCH & CATEGORY CHIPS */}
        <div className="blog-controls-wrapper">
          <div className="blog-controls-top">
            {/* Search Input */}
            <div className="blog-search-box">
              <i className="fa-solid fa-magnifying-glass blog-search-icon"></i>
              <input type="text" id="blog-search-input" className="blog-search-input" placeholder="Search articles by title, scheme, topic or keyword..." />
              <button id="blog-search-clear" className="blog-search-clear" title="Clear Search">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {/* Counter Badge */}
            <div className="blog-counter-badge" id="blog-counter-badge">
              <i className="fa-solid fa-newspaper"></i>
 Showing               <strong id="blog-shown-count">27</strong>
 of 27 Articles
                      </div>
          </div>
          {/* Filter Chips */}
          <div className="blog-chips-scroll" id="blog-chips-bar">
            <button className="blog-chip-btn active" data-category="all">
              <i className="fa-solid fa-layer-group"></i>
 All Topics               <span className="chip-count">27</span>
            </button>
            <button className="blog-chip-btn" data-category="schemes">
              <i className="fa-solid fa-landmark"></i>
 MSME Schemes & Growth               <span className="chip-count">6</span>
            </button>
            <button className="blog-chip-btn" data-category="fintech">
              <i className="fa-solid fa-chart-line"></i>
 FinTech & NBFCs               <span className="chip-count">7</span>
            </button>
            <button className="blog-chip-btn" data-category="stories">
              <i className="fa-solid fa-trophy"></i>
 Success Stories               <span className="chip-count">5</span>
            </button>
            <button className="blog-chip-btn" data-category="growth">
              <i className="fa-solid fa-hand-holding-dollar"></i>
 Taxes & Credit Tips               <span className="chip-count">4</span>
            </button>
            <button className="blog-chip-btn" data-category="regulations">
              <i className="fa-solid fa-scale-balanced"></i>
 RBI & Policies               <span className="chip-count">2</span>
            </button>
            <button className="blog-chip-btn" data-category="hindi">
              <i className="fa-solid fa-language"></i>
 हिंदी लेख               <span className="chip-count">3</span>
            </button>
          </div>
        </div>
        {/* ARTICLES GRID */}
        <div className="blog-grid" id="blog-articles-grid">
          {/* ARTICLE 30 */}
          <article className="blog-card" data-category="schemes" data-id="30">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-schemes">MSME Schemes</span>
              <img src="https://www.prestloans.com/Content/images/Blog/638594102649346554CLCSS-10-8-18.jpg" alt="Credit Linked Capital Subsidy for Technology Upgradation" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 19 Dec 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Credit Linked Capital Subsidy for Technology Upgradation</h3>
              <p className="blog-card-desc">

              How the Ministry of MSME's CLCSS scheme offers a 15% upfront capital subsidy up to ₹15 Lakhs for inducting
              modern and energy-efficient manufacturing machinery.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(30)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(30, 'Credit Linked Capital Subsidy for Technology Upgradation')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 29 */}
          <article className="blog-card" data-category="stories" data-id="29">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-stories">Success Stories</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636808259396272500grocery-2932906_1920.jpg" alt="A grocery owner’s dream comes true!" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/testimonials/customer-story.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 19 Dec 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 4 min read                </span>
              </div>
              <h3 className="blog-card-title">A Grocery Owner’s Dream Comes True in Karol Bagh</h3>
              <p className="blog-card-desc">

              Ramesh revived his late grandfather's neighborhood retail store into a modern supermarket with POS
              technology and wholesale inventories using fast capital from Prest Loans.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(29)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(29, 'A Grocery Owner’s Dream Comes True')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 28 */}
          <article className="blog-card" data-category="regulations" data-id="28">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-regulations">RBI Regulations</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636808258471741250RBI.jpeg" alt="RBI Directive: P2P Lending Platforms" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/about/award.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 19 Dec 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 6 min read                </span>
              </div>
              <h3 className="blog-card-title">
RBI Directive: Peer-to-Peer (P2P) Lending & Credit Governance              </h3>
              <p className="blog-card-desc">

              Understanding the Reserve Bank of India's regulatory frameworks for alternative digital lending
              marketplaces, credit reporting obligations, and borrower safeguards.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(28)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(28, 'RBI Directive: P2P Lending Platforms')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 27 */}
          <article className="blog-card" data-category="fintech" data-id="27">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636808278474397500CREDIT%20DEFLICT.jpg" alt="NBFCs: Solving the credit deficit for growing MSME sector in India" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 19 Dec 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">NBFCs: Solving the MSME Credit Deficit in India</h3>
              <p className="blog-card-desc">

              Over 51 million small enterprises grapple with credit bottlenecks. How tech-driven NBFCs are deploying
              alternate data and fast approvals to bridge the MSME funding gap.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(27)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(27, 'NBFCs: Solving the MSME Credit Deficit')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 26 */}
          <article className="blog-card" data-category="stories" data-id="26">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-stories">Success Stories</span>
              <img src="https://www.prestloans.com/Content/images/Blog/63680825700830375036864584_472641183147716_3090973622311845888_n.jpg" alt="Fulfilling the Dreams even when the Dreamers have lost hope" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/testimonials/customer-story.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 19 Dec 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 4 min read                </span>
              </div>
              <h3 className="blog-card-title">Fulfilling Dreams Even When Dreamers Have Lost Hope</h3>
              <p className="blog-card-desc">

              Why Indian consumers trust their neighborhood Kirana store, and how micro-loans empower small retail
              shopkeepers to outcompete modern hypermarkets.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(26)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(26, 'Fulfilling Dreams for Kirana Stores')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 25 */}
          <article className="blog-card" data-category="stories" data-id="25">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-stories">Success Stories</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636791742949663750money-2696234_1920.jpg" alt="Prest Loans gives wings to Karate school owners" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/testimonials/customer-story.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 30 Nov 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 4 min read                </span>
              </div>
              <h3 className="blog-card-title">Prest Loans Gives Wings to Karate School Owners</h3>
              <p className="blog-card-desc">

              How two sports trainers turned a small martial arts venture into an expansive three-branch academy with
              fast business expansion financing from Prest Loans.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(25)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(25, 'Prest Loans Gives Wings to Karate School')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 24 */}
          <article className="blog-card" data-category="fintech" data-id="24">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/6367917417631012502018-09-20.jpg" alt="Non-banking financial companies (NBFCs)- Surging ahead" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 30 Nov 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Non-Banking Financial Companies (NBFCs): Surging Ahead</h3>
              <p className="blog-card-desc">

              Delving into how RBI-regulated NBFCs are outpacing traditional commercial banks through customized
              underwriting, quick turnaround, and deep credit penetration.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(24)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(24, 'NBFCs Surging Ahead')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 23 */}
          <article className="blog-card" data-category="stories" data-id="23">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-stories">Special Feature</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636682373879803750PL%202018%2007%2026.jpg" alt="Happy Kargil Vijay Diwas!" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/about/award.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 26 Jul 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 3 min read                </span>
              </div>
              <h3 className="blog-card-title">Honoring Kargil Vijay Diwas: Courage & Nation Building</h3>
              <p className="blog-card-desc">

              Saluting the immortal valor and sacrifice of our armed forces on Kargil Vijay Diwas, reaffirming our
              commitment to supporting resilient enterprises across India.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(23)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(23, 'Honoring Kargil Vijay Diwas')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 22 */}
          <article className="blog-card" data-category="growth" data-id="22">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-growth">Business Growth</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636657937652190000June%20blog4_MSME%20Logo.PNG" alt="Advent of quick and easy financing" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 28 Jun 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 4 min read                </span>
              </div>
              <h3 className="blog-card-title">Advent of Quick & Easy Financing for Retailers</h3>
              <p className="blog-card-desc">

              How Suresh’s bakery upgraded ovens and cafe ambience in 72 hours, proving that rapid unsecured loans are
              essential for competitive retail dominance.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(22)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(22, 'Advent of Quick Financing')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 21 */}
          <article className="blog-card" data-category="growth" data-id="21">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-growth">Taxes & Credit</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636649498102467968Prest%20Logo_2.png" alt="Intricate relation between Taxes and credit limits" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/logo/logo.png';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 18 Jun 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Taxes, GST & Credit Limits: Unlocking Higher Limits</h3>
              <p className="blog-card-desc">

              Why on-time GST and Income Tax filings not only save penalties but also unlock lower interest rates,
              higher loan amounts, and tax deduction on interest paid.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(21)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(21, 'Taxes and Credit Limits')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 20 */}
          <article className="blog-card" data-category="stories" data-id="20">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-stories">Success Stories</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636649208902643750fathers%20day.jpg" alt="Happy Father's Day - Story of Veena's Style!" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/testimonials/customer-story.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 18 Jun 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 4 min read                </span>
              </div>
              <h3 className="blog-card-title">Story of Veena’s Style: Women Entrepreneurship</h3>
              <p className="blog-card-desc">

              From a small town in Muzaffarnagar to running an upscale designer boutique: how parental trust and
              accessible capital empower women entrepreneurs to excel.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(20)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(20, 'Story of Veena’s Style Boutique')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 19 */}
          <article className="blog-card" data-category="schemes" data-id="19">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-schemes">MSME Schemes</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636649180194987500June2%20blog%20pic.jpg" alt="Enabling MSME Business in India" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 18 Jun 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Enabling MSME Business in India: Fueling Jobs & GDP</h3>
              <p className="blog-card-desc">

              Why micro, small, and medium enterprises are the true employment engines of Bharat, and how institutional
              credit empowerment is accelerating regional manufacturing.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(19)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(19, 'Enabling MSME Business in India')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 18 */}
          <article className="blog-card" data-category="schemes" data-id="18">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-schemes">MSME Schemes</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636649160246237500MUDRA%20Logo.PNG" alt="Transforming lives of the poor hard working Indian class through PMMY" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 18 Jun 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Transforming Lives with PMMY: Pradhan Mantri MUDRA Yojana</h3>
              <p className="blog-card-desc">

              Complete breakdown of Shishu, Kishor, and Tarun MUDRA loans, and how last-mile NBFCs deliver funding
              directly to small shopkeepers and service artisans.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(18)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(18, 'Transforming Lives through PMMY')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 17 */}
          <article className="blog-card" data-category="growth" data-id="17">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-growth">Credit & CIBIL</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636632747784418750Blog%20may1.jpg" alt="How to get a loan despite Negative CIBIL score" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 30 May 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">How to Secure a Loan with Low or Negative CIBIL</h3>
              <p className="blog-card-desc">

              Actionable advice on how small businesses can demonstrate strong daily cash flows and banking velocity to
              secure loan approval even if past credit scores are low.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(17)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(17, 'How to Get a Loan Despite Negative CIBIL')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 16 */}
          <article className="blog-card" data-category="hindi" data-id="16">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-hindi">हिंदी लेख</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636618081637048750Prest%20Logo_2.png" alt="MSMEs पर डिजिटलाइज़ेशन का प्रभाव" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/logo/logo.png';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 13 May 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">MSMEs पर डिजिटलाइज़ेशन का क्रांतिकारी प्रभाव</h3>
              <p className="blog-card-desc">

              भारतीय अर्थव्यवस्था में लघु एवं मध्यम उद्यमों (MSMEs) के लिए डिजिटलाइजेशन वरदान साबित हो रहा है। डिजिटल
              लेनदेन और ऋण प्रक्रिया से व्यापार में नई गति।
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(16)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(16, 'MSMEs पर डिजिटलाइज़ेशन का प्रभाव')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 15 */}
          <article className="blog-card" data-category="regulations" data-id="15">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-regulations">RBI Regulations</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636618055262830000Prest%20Logo_2.png" alt="Impact of RBI guidelines on NBFCs" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/about/award.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 13 May 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Impact of RBI Regulatory Guidelines on NBFCs</h3>
              <p className="blog-card-desc">

              A comprehensive review of the Reserve Bank of India’s Ombudsman schemes, scale-based regulation, and fair
              practice codes driving transparency in lending.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(15)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(15, 'Impact of RBI Guidelines on NBFCs')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 14 */}
          <article className="blog-card" data-category="hindi" data-id="14">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-hindi">हिंदी लेख</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636594157481425000April%20-2%20Hindi_msme.jpg" alt="एम एस एम ई (MSME) – लघु उद्योगों के लिए सरकार का वेब पोर्टल क्या है?" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 15 Apr 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">लघु उद्योगों के लिए सरकार का उद्यम वेब पोर्टल क्या है?</h3>
              <p className="blog-card-desc">

              भारत सरकार के उद्यम पोर्टल (Udyam Portal) पर मुफ्त रजिस्ट्रेशन, सरकारी टेंडरों में प्राथमिकता, और प्राथमिक
              क्षेत्र के तहत रियायती दरों पर ऋण की सम्पूर्ण जानकारी।
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(14)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(14, 'MSME सरकारी वेब पोर्टल')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 13 */}
          <article className="blog-card" data-category="fintech" data-id="13">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636594150845175000April_Blog1_The%20trends.jpg" alt="The trends in industrial Micro-finance" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 15 Apr 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">The Emerging Trends in Industrial Micro-Finance</h3>
              <p className="blog-card-desc">

              How invoice-based advances and purchase-order credit are transforming small machine shops and ancillary
              fabrication units at the bottom of the pyramid.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(13)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(13, 'Trends in Industrial Micro-Finance')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 12 */}
          <article className="blog-card" data-category="growth" data-id="12">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-growth">Business Growth</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636574106616170000Mar%204_PZBP5JP.jpg" alt="Are structured loans the best way to go for growing enterprises?" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 23 Mar 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Are Structured Loans the Best Way Forward for Growth?</h3>
              <p className="blog-card-desc">

              Why equity-diluting investors may not be optimal for enterprises, and why structured loans
              allow entrepreneurs to retain 100% company ownership.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(12)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(12, 'Structured Loans for Growth')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 11 */}
          <article className="blog-card" data-category="fintech" data-id="11">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636573228850232500March%203.jpg" alt="Traditional vs new age finance in the modern age" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 22 Mar 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Traditional vs New-Age Finance: The Modern Evolution</h3>
              <p className="blog-card-desc">

              Analyzing the transition from slow branch-centric banking with rigid collateral requirements to
              algorithm-driven paperless finance customized for MSMEs.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(11)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(11, 'Traditional vs New Age Finance')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 10 */}
          <article className="blog-card" data-category="fintech" data-id="10">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636568145736653750Mar-2.jpg" alt="Why FinTech will disrupt the lending sector in India?" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 16 Mar 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Why FinTech Will Disrupt SME Lending in India</h3>
              <p className="blog-card-desc">

              India Stack, Account Aggregator frameworks, and AI underwriting algorithms are unlocking seamless credit
              access for millions of underserved borrowers.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(10)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(10, 'Why FinTech Will Disrupt SME Lending')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 9 */}
          <article className="blog-card" data-category="growth" data-id="9">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-growth">Taxes & Credit</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636562983968785000gst%20blog.png" alt="What can MSMEs do to stay ahead in the age of dual GST?" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 10 Mar 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Staying Ahead in GST Compliance & Input Tax Credits</h3>
              <p className="blog-card-desc">

              Practical invoicing strategies, supplier reconciliation, and digital tools that help MSMEs maximize Input
              Tax Credits and optimize operational liquidity.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(9)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(9, 'Staying Ahead in GST Compliance')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 8 */}
          <article className="blog-card" data-category="regulations" data-id="8">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-regulations">RBI Regulations</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636554319548511250648.jpg" alt="Facts about the online lending landscape" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/about/award.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 28 Feb 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Crucial Facts About the Online Lending Landscape</h3>
              <p className="blog-card-desc">

              How to verify authentic RBI-registered NBFCs versus predatory apps, ensuring Key Fact Statement (KFS)
              transparency and total customer data privacy.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(8)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(8, 'Facts About Online Lending')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 5 */}
          <article className="blog-card" data-category="fintech" data-id="5">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-fintech">FinTech & NBFCs</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636540318169506250Blog1_Image.jpg" alt="Role of NBFCs in the growth of micro enterprises" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 12 Feb 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">Role of NBFCs in the Growth of Micro Enterprises</h3>
              <p className="blog-card-desc">

              How flexible ticket sizes from ₹50,000 to ₹10 Lakhs allow family-owned shops and artisans to purchase bulk
              stock, multiplying local economic velocity.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(5)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(5, 'Role of NBFCs in Micro Enterprises')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 4 */}
          <article className="blog-card" data-category="schemes" data-id="4">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-schemes">MSME Growth</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636528421907070000SME%20blog%20pic.jpg" alt="NBFCs and beyond: The smart way to get loans for SMEs" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 29 Jan 2018                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">NBFCs & Beyond: The Smart Way to Get Loans</h3>
              <p className="blog-card-desc">

              Best practices for borrowers: streamlining bank statements, managing receivables, and choosing
              specialized institutional credit partners.
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(4)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(4, 'The Smart Way to Get Loans')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 3 */}
          <article className="blog-card" data-category="hindi" data-id="3">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-hindi">हिंदी लेख</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636386548250970000_MG_4896.JPG" alt="जीएसटी (GST) को बनायें फ़ायदे का सौदा" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/products/personal-loan.jpg';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 18 Aug 2017                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">जीएसटी (GST) को बनाएं अपने व्यापार के लिए फायदे का सौदा</h3>
              <p className="blog-card-desc">

              छोटे व्यापारी किस तरह जीएसटी रजिस्ट्रेशन के माध्यम से इनपुट टैक्स क्रेडिट (ITC) बचाकर अपना मुनाफा बढ़ा
              सकते हैं और बैंकों से आसानी से ऋण प्राप्त कर सकते हैं।
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(3)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(3, 'जीएसटी को बनाएं फायदे का सौदा')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* ARTICLE 2 */}
          <article className="blog-card" data-category="hindi" data-id="2">
            <div className="blog-card-media">
              <span className="blog-card-tag tag-hindi">हिंदी लेख</span>
              <img src="https://www.prestloans.com/Content/images/Blog/636347731640782500logo.png" alt="छोटे व्यापारियों की समस्याएँ व समाधान" className="blog-card-img" loading="lazy" onError={(event) => { try { (new Function('event', "this.onerror=null; this.src='assets/logo/logo.png';")).call(event.currentTarget, event); } catch(e) {} }} />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>
                  <i className="fa-regular fa-calendar"></i>
 04 Jul 2017                </span>
                <span className="blog-read-pill">
                  <i className="fa-regular fa-clock"></i>
 5 min read                </span>
              </div>
              <h3 className="blog-card-title">छोटे व्यापारियों की वित्तीय समस्याएं व उनका त्वरित समाधान</h3>
              <p className="blog-card-desc">

              सुबह की चाय से लेकर किराना दुकान तक: छोटे व्यापारियों की वर्किंग कैपिटल किल्लत, साहूकारों के भारी ब्याज के
              चंगुल से मुक्ति और आसान डिजिटल समाधान।
                          </p>
              <div className="blog-card-footer">
                <button className="btn-read-modal" onClick={(event) => { try { (new Function('event', "openArticleModal(2)")).call(event.currentTarget, event); } catch(e) {} }}>

                Read Full Article                   <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn-share-icon" onClick={(event) => { try { (new Function('event', "shareArticle(2, 'छोटे व्यापारियों की समस्याएं व समाधान')")).call(event.currentTarget, event); } catch(e) {} }} title="Share Article">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </article>
          {/* EMPTY STATE (Shows when search or filter matches 0 items) */}
          <div id="blog-empty-state" className="blog-empty-state" style={{"display":"none"}}>
            <div className="blog-empty-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3 style={{"fontSize":"1.4rem","color":"#1e293b","marginBottom":"8px"}}>No matching articles found</h3>
            <p style={{"color":"#64748b","maxWidth":"480px","margin":"0 auto 20px"}}>

            We couldn't find any articles matching your search criteria. Try using different keywords or browse all
            topics.
                      </p>
            <button className="btn-primary" onClick={(event) => { try { (new Function('event', "resetBlogFilters()")).call(event.currentTarget, event); } catch(e) {} }}>
              <i className="fa-solid fa-rotate-left"></i>
 View All 27 Articles
                      </button>
          </div>
        </div>
        {/* NEWSLETTER SUBSCRIPTION BOX */}
        <div className="blog-newsletter-box">
          <div>
            <h3 className="blog-nl-title">Stay Ahead in Financial Insights & Credit Advisory</h3>
            <p className="blog-nl-desc">

            Subscribe to Prest Loans Weekly Digest for curated guides, credit score optimization
            hacks, and actionable financial intelligence.
                      </p>
          </div>
          <div>
            <form id="blog-newsletter-form" className="blog-nl-form" onSubmit={(event) => { try { (new Function('event', "handleNewsletterSubmit(event)")).call(event.currentTarget, event); } catch(e) {} }}>
              <input type="email" id="nl-email" className="blog-nl-input" placeholder="Enter your business email" required={true} />
              <button type="submit" className="blog-nl-btn">
                <i className="fa-solid fa-bell"></i>
 Subscribe Free
                          </button>
            </form>
          </div>
        </div>
        {/* BOTTOM ACTION BANNER */}
        <div style={{"background":"#ffffff","border":"1.5px solid #ede9fe","borderRadius":"var(--radius-2xl)","padding":"40px","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"24px","flexWrap":"wrap","boxShadow":"0 10px 30px rgba(112, 20, 110, 0.05)"}}>
          <div>
            <h3 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#1e1b4b","marginBottom":"8px"}}>
Ready to Expand Your
            Business?            </h3>
            <p style={{"color":"#64748b","fontSize":"0.95rem","margin":"0"}}>
Calculate your monthly EMI or apply online with
            minimal documentation in under 5 minutes.            </p>
          </div>
          <div style={{"display":"flex","gap":"14px","flexWrap":"wrap"}}>
            <a href="/calculator" className="btn-outline-purple">
              <i className="fa-solid fa-calculator"></i>
 EMI Calculator
                      </a>
            <button className="btn-primary" onClick={(event) => { try { (new Function('event', "openLoanModal()")).call(event.currentTarget, event); } catch(e) {} }}>
              <i className="fa-solid fa-bolt"></i>
 Apply Now
                      </button>
          </div>
        </div>
      </div>
    </section>
    {/* MODAL ARTICLE READER (Magazine Reading Experience) */}
    {/* TOAST NOTIFICATION */}
    <div className="blog-toast" id="blog-toast">
      <i className="fa-solid fa-circle-check"></i>
       <span id="blog-toast-msg">Link copied to clipboard!</span>
    </div>
    {/* SITE FOOTER */}
    {/* FLOATING ACTIONS */}
    {/* GLOBAL MODALS */}
    {/* SCRIPTS */}

    </>
  );
};
