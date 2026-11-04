import React, { useEffect } from 'react';

export const Media: React.FC = () => {
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
           <span>
Media
          & Press          </span>
        </div>
        <h1 className="page-banner-title">Media & News Coverage</h1>
        <p className="page-banner-sub">

        Explore how national media, business publications, and fintech journals chronicle our milestones and market
        leadership.
              </p>
      </div>
    </section>
    {/* NATIONAL PRESS COVERAGE & RELEASES SECTION */}
    <section className="section" id="press-coverage">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-bullhorn"></i>
 In The National Spotlight          </span>
          <h2 className="section-title">Prest Loans in National Media & Press Coverage</h2>
          <p className="section-desc">

          Official archives chronicling our fintech milestones, strategic alliances, credit expansions, and
          leadership announcements across India's premier financial dailies and digital platforms.
                  </p>
        </div>
        {/* Institutional Metrics Banner */}
        <div className="media-stats-grid">
          <div className="media-stat-card">
            <div className="media-stat-icon">
              <i className="fa-solid fa-newspaper"></i>
            </div>
            <div>
              <div className="media-stat-num">26+</div>
              <div className="media-stat-label">National Press Features</div>
            </div>
          </div>
          <div className="media-stat-card">
            <div className="media-stat-icon">
              <i className="fa-solid fa-landmark"></i>
            </div>
            <div>
              <div className="media-stat-num">15+</div>
              <div className="media-stat-label">Premier Media Houses</div>
            </div>
          </div>
          <div className="media-stat-card">
            <div className="media-stat-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div>
              <div className="media-stat-num">₹500+ Cr</div>
              <div className="media-stat-label">Disbursal Milestones</div>
            </div>
          </div>
          <div className="media-stat-card">
            <div className="media-stat-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <div className="media-stat-num">100%</div>
              <div className="media-stat-label">Verified Media Archives</div>
            </div>
          </div>
        </div>
        {/* Quick Publication Icons Bar (Click to filter list) */}
        <div style={{"marginBottom":"25px"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"14px","flexWrap":"wrap","gap":"10px"}}>
            <h3 style={{"fontSize":"1.15rem","fontWeight":"800","color":"#1e293b","display":"flex","alignItems":"center","gap":"8px"}}>
              <i className="fa-solid fa-filter" style={{"color":"var(--primary-purple)"}}></i>
 Click Any Publication Icon to View
            News List:
                      </h3>
            <span style={{"fontSize":"0.85rem","color":"#64748b","fontWeight":"600"}}>
              <i className="fa-solid fa-hand-pointer" style={{"color":"var(--primary-orange)"}}></i>
 Click icon below to filter
            articles
                      </span>
          </div>
          <div className="press-grid">
            <button type="button" className="press-interactive-item active" title="View all news articles" data-pub="all">
              <span className="press-item-badge">All 19</span>
              <div style={{"fontWeight":"800","fontSize":"0.95rem","color":"var(--primary-purple)","display":"flex","alignItems":"center","justifyContent":"center","gap":"8px"}}>
                <i className="fa-solid fa-layer-group" style={{"fontSize":"1.15rem","color":"var(--primary-orange)"}}></i>
 All
              Media
                          </div>
            </button>
            <button type="button" className="press-interactive-item" title="Click to view The Economic Times news list" data-pub="economic-times">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/econonictimes-logo.jpg" alt="The Economic Times" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view Business Standard news list" data-pub="business-standard">
              <span className="press-item-badge">5 News</span>
              <img src="/assets/press/Business Standard.png" alt="Business Standard" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view ANI News news list" data-pub="ani-news">
              <span className="press-item-badge">2 News</span>
              <img src="/assets/press/ANI News.jpg" alt="ANI News" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view ThePrint news list" data-pub="theprint">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/the_print_logo.png" alt="ThePrint" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view The Week news list" data-pub="the-week">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/THE WEEK.png" alt="The Week" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view Outlook Magazine news list" data-pub="outlook">
              <span className="press-item-badge">2 News</span>
              <img src="/assets/press/Outlook_magazine.jpg" alt="Outlook Magazine" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view PTI News news list" data-pub="pti">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/pti.gif" alt="PTI News" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view Business World news list" data-pub="business-world">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/business_world.png" alt="Business World" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view VCCircle news list" data-pub="vccircle">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/vccircle.png" alt="VCCircle" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view SME Times news list" data-pub="sme-times">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/SME.jpg" alt="SME Times" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view SME Post news list" data-pub="sme-post">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/SMEpost.png" alt="SME Post" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view DNA India news list" data-pub="dna">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/DNA.png" alt="DNA India" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view Sourcing Hardware news list" data-pub="sourcing-hardware">
              <span className="press-item-badge">1 News</span>
              <img src="/assets/press/Sourcing Hardware.gif" alt="Sourcing Hardware" />
            </button>
            <button type="button" className="press-interactive-item" title="Click to view ANI Multimedia news list" data-pub="ani-news">
              <span className="press-item-badge">2 News</span>
              <img src="/assets/press/ANI Multimedia.png" alt="ANI Multimedia" />
            </button>
          </div>
        </div>
        {/* Press Coverage Grid (All 19 News Articles) */}
        <div className="press-coverage-grid" id="press-articles-container">
          {/* Item 1: PTI NEWS */}
          <article className="press-card" data-category="partnership" data-pub="pti" id="article-1">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.ptinews.com/pressrelease/prest-loans-and-u-gro-capital-join-hands" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open PTI News Coverage">
                  <img src="/assets/press/pti.gif" alt="PTI News" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-partnership">Strategic Partnership</span>
              <h3 className="press-card-title">
                <a href="https://www.ptinews.com/pressrelease/prest-loans-and-u-gro-capital-join-hands" target="_blank" rel="noopener noreferrer">

                Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities
                              </a>
              </h3>
              <p className="press-card-desc">

              Prest Loans partners with BSE-listed technology-enabled NBFC U GRO Capital to offer 'GRO Micro' credit
              solutions, addressing urgent liquidity needs for underserved micro-enterprises in tier-3 and tier-4
              regions.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 PTI News              </span>
              <a href="https://www.ptinews.com/pressrelease/prest-loans-and-u-gro-capital-join-hands" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 2: THE PRINT */}
          <article className="press-card" data-category="msme" data-pub="theprint" id="article-5">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://theprint.in/ani-press-releases/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities/705002/" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open ThePrint Coverage">
                  <img src="/assets/press/the_print_logo.png" alt="ThePrint" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-msme">MSME Credit</span>
              <h3 className="press-card-title">
                <a href="https://theprint.in/ani-press-releases/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities/705002/" target="_blank" rel="noopener noreferrer">

                Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities
                              </a>
              </h3>
              <p className="press-card-desc">

              Deploying proprietary 'Prest Score' underwriting algorithms and non-financial data parameters to extend
              collateral-backed business capital to unserved retail traders.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 ThePrint              </span>
              <a href="https://theprint.in/ani-press-releases/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities/705002/" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 3: THE WEEK */}
          <article className="press-card" data-category="msme" data-pub="the-week" id="article-7">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.theweek.in/wire-updates/business/2021/07/28/pwr31-prest-loans" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open The Week Coverage">
                  <img src="/assets/press/THE WEEK.png" alt="The Week" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-msme">MSME Credit</span>
              <h3 className="press-card-title">
                <a href="/https://www.theweek.in/wire-updates/business/2021/07/28/pwr31-prest-loans" target="_blank" rel="noopener noreferrer">

                Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities
                              </a>
              </h3>
              <p className="press-card-desc">

              Expanding credit access across semi-urban trade corridors by removing heavy audited balance sheet
              constraints for small business owners in tier-3 and 4 towns.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 The Week              </span>
              <a href="/https://www.theweek.in/wire-updates/business/2021/07/28/pwr31-prest-loans" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 4: OUTLOOK MAGAZINE */}
          <article className="press-card" data-category="msme" data-pub="outlook" id="article-9">
            <div className="press-card-body">
              <div className="press-card-header">
                <div className="press-card-logo-link" style={{"cursor":"default"}} title="Outlook Magazine">
                  <img src="/assets/press/Outlook_magazine.jpg" alt="Outlook Magazine" className="press-card-logo-img" />
                </div>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-msme">MSME Credit</span>
              <h3 className="press-card-title">

              Prest Loans and U GRO Capital join hands to solve the MSME credit gap in Tier 3 and 4 cities
                          </h3>
              <p className="press-card-desc">

              Scaling co-lending outreach in tier-3 and tier-4 hubs with small-ticket secured loans tailored for
              grassroots commercial enterprises.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Outlook Magazine              </span>
              <span className="btn-read-coverage" style={{"background":"#f1f5f9","color":"#64748b !important","boxShadow":"none","cursor":"default","border":"1px solid #e2e8f0","pointerEvents":"none"}}>
                <span>Media Archive</span>
                 <i className="fa-regular fa-newspaper" style={{"color":"#94a3b8"}}></i>
              </span>
            </div>
          </article>
          {/* Item 5: BUSINESS STANDARD */}
          <article className="press-card" data-category="msme" data-pub="business-standard" id="article-11">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities-121072801171_1" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business Standard Coverage">
                  <img src="/assets/press/Business Standard.png" alt="Business Standard" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-msme">MSME Credit</span>
              <h3 className="press-card-title">
                <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities-121072801171_1" target="_blank" rel="noopener noreferrer">

                Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities
                              </a>
              </h3>
              <p className="press-card-desc">

              Leveraging technology and local market presence to disburse secured business funding without requiring
              traditional ITRs or audited reports.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business Standard              </span>
              <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities-121072801171_1" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 6: ANI NEWS MULTIMEDIA */}
          <article className="press-card" data-category="msme" data-pub="ani-news" id="article-13">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.aninews.in/news/business/business/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities20210728164218/" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open ANI News Multimedia Coverage">
                  <img src="/assets/press/ANI Multimedia.png" alt="ANI News Multimedia" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 28 Jul 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-msme">MSME Credit</span>
              <h3 className="press-card-title">
                <a href="https://www.aninews.in/news/business/business/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities20210728164218/" target="_blank" rel="noopener noreferrer">

                Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities
                              </a>
              </h3>
              <p className="press-card-desc">

              Prest Loans and U GRO Capital announce strategic fintech alliance to disburse 'GRO Micro' credit solutions
              to unserved businesses across western and central India.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 ANI News Multimedia              </span>
              <a href="https://www.aninews.in/news/business/business/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities20210728164218/" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 14: OUTLOOK */}
          <article className="press-card" data-category="advisory" data-pub="outlook" id="article-14">
            <div className="press-card-body">
              <div className="press-card-header">
                <div className="press-card-logo-link" style={{"cursor":"default"}} title="Outlook">
                  <img src="/assets/press/outlook-logo.png" alt="Outlook" className="press-card-logo-img" />
                </div>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Jun 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-advisory">Advisory Board</span>
              <h3 className="press-card-title">

              Prest Loans Engages Mr. Rajeev Kishore Dubey (Ex CMD-Canara Bank) as Strategic Advisor on its Advisory
              Board
                          </h3>
              <p className="press-card-desc">

              Veteran banker and former Canara Bank Chairman Mr. Rajeev Kishore Dubey joins Prest Loans to guide
              corporate governance, banking relationships, and credit scaling.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Outlook              </span>
              <span className="btn-read-coverage" style={{"background":"#f1f5f9","color":"#64748b !important","boxShadow":"none","cursor":"default","border":"1px solid #e2e8f0","pointerEvents":"none"}}>
                <span>Media Archive</span>
                 <i className="fa-regular fa-newspaper" style={{"color":"#94a3b8"}}></i>
              </span>
            </div>
          </article>
          {/* Item 15: BUSINESS STANDARD */}
          <article className="press-card" data-category="advisory" data-pub="business-standard" id="article-15">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board-121040601085_1" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business Standard Coverage">
                  <img src="/assets/press/Business Standard.png" alt="Business Standard" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Jun 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-advisory">Advisory Board</span>
              <h3 className="press-card-title">
                <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board-121040601085_1" target="_blank" rel="noopener noreferrer">

                Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board
                              </a>
              </h3>
              <p className="press-card-desc">

              Strategic induction strengthens board oversight and risk-governance frameworks as the digital lending
              platform expands its balance sheet.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business Standard              </span>
              <a href="/https://www.business-standard.com/content/press-releases-ani/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board-121040601085_1" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 16: BUSINESS WORLD */}
          <article className="press-card" data-category="advisory" data-pub="business-world" id="article-16">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.businessworld.in/article/Prest-Loans-Engages-Rajeev-Kishore-Dubey-Ex-CMD-Canara-Bank-As-Strategic-Advisor-On-Its-Advisory-Board/25-06-2021-394468/" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business World Coverage">
                  <img src="/assets/press/business_world.png" alt="Business World" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Jun 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-advisory">Advisory Board</span>
              <h3 className="press-card-title">
                <a href="https://www.businessworld.in/article/Prest-Loans-Engages-Rajeev-Kishore-Dubey-Ex-CMD-Canara-Bank-As-Strategic-Advisor-On-Its-Advisory-Board/25-06-2021-394468/" target="_blank" rel="noopener noreferrer">

                Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board
                              </a>
              </h3>
              <p className="press-card-desc">

              Eminent public sector banking leader joins fintech board to drive strategic partnerships, regulatory
              alignment, and nationwide SME portfolio growth.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business World              </span>
              <a href="https://www.businessworld.in/article/Prest-Loans-Engages-Rajeev-Kishore-Dubey-Ex-CMD-Canara-Bank-As-Strategic-Advisor-On-Its-Advisory-Board/25-06-2021-394468/" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 17: ANI NEWS */}
          <article className="press-card" data-category="advisory" data-pub="ani-news" id="article-17">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.aninews.in/news/business/business/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board20210406171107/" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open ANI News Coverage">
                  <img src="/assets/press/ANI News.jpg" alt="ANI News" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Jun 2021                </span>
              </div>
              <span className="press-card-cat-badge cat-advisory">Advisory Board</span>
              <h3 className="press-card-title">
                <a href="https://www.aninews.in/news/business/business/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board20210406171107/" target="_blank" rel="noopener noreferrer">

                Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board
                              </a>
              </h3>
              <p className="press-card-desc">

              Former Canara Bank CMD brings decades of commercial banking acumen to accelerate Prest Loans' mission of
              financial inclusion and digital credit access.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 ANI News              </span>
              <a href="https://www.aninews.in/news/business/business/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board20210406171107/" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 18: SOURCING HARDWARE */}
          <article className="press-card" data-category="spotlight" data-pub="sourcing-hardware" id="article-18">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="http://sourcinghardware.net/2018/06/16/prest-loans-comes-rescue-underbanked-traders/" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Sourcing Hardware Coverage">
                  <img src="/assets/press/Sourcing Hardware.gif" alt="Sourcing Hardware" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 16 Jun 2018                </span>
              </div>
              <span className="press-card-cat-badge cat-spotlight">Industry Spotlight</span>
              <h3 className="press-card-title">
                <a href="http://sourcinghardware.net/2018/06/16/prest-loans-comes-rescue-underbanked-traders/" target="_blank" rel="noopener noreferrer">

                Prest Loans comes rescue underbanked traders
                              </a>
              </h3>
              <p className="press-card-desc">

              Special feature examining how Prest Loans provides rapid unsecured business credit to hardware dealers,
              building material suppliers, and retail trade enterprises.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Sourcing Hardware              </span>
              <a href="http://sourcinghardware.net/2018/06/16/prest-loans-comes-rescue-underbanked-traders/" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 19: SME TIMES */}
          <article className="press-card" data-category="funding" data-pub="sme-times" id="article-19">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.smetimes.in/smetimes/news/pr_newswire/2017/Nov/02/FinTech-NBFC-Prest-Loans-Raises-Equity-from-Existing-Investors" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open SME Times Coverage">
                  <img src="/assets/press/SME.jpg" alt="SME Times" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Nov 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-funding">Funding & Equity</span>
              <h3 className="press-card-title">
                <a href="/https://www.smetimes.in/smetimes/news/pr_newswire/2017/Nov/02/FinTech-NBFC-Prest-Loans-Raises-Equity-from-Existing-Investors" target="_blank" rel="noopener noreferrer">

                FinTech NBFC 'Prest Loans' Raises Equity from Existing Investors
                              </a>
              </h3>
              <p className="press-card-desc">

              Digital lender Prest Loans secures fresh equity infusion of ₹3.7 Crore from angel investors and promoters
              to scale its tech platform and expand underwriting capacity.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 SME Times              </span>
              <a href="/https://www.smetimes.in/smetimes/news/pr_newswire/2017/Nov/02/FinTech-NBFC-Prest-Loans-Raises-Equity-from-Existing-Investors" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 20: VCCIRCLE */}
          <article className="press-card" data-category="funding" data-pub="vccircle" id="article-20">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.vccircle.com/former-karvy-execs-nbfc-prest-loans-raises-fresh-capital?utm_source=facebook&utm_medium=social&utm_campaign=Former_Karvy_exec" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open VCCircle Coverage">
                  <img src="/assets/press/vccircle.png" alt="VCCircle" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Nov 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-funding">Funding & Equity</span>
              <h3 className="press-card-title">
                <a href="https://www.vccircle.com/former-karvy-execs-nbfc-prest-loans-raises-fresh-capital?utm_source=facebook&utm_medium=social&utm_campaign=Former_Karvy_exec" target="_blank" rel="noopener noreferrer">

                Former Karvy exec’s NBFC Prest Loans raises fresh capital
                              </a>
              </h3>
              <p className="press-card-desc">

              Venture capital and private equity intelligence portal chronicles capital raise by Ashok Mittal-led
              FinTech NBFC to support aggressive loan book expansion.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 VCCircle              </span>
              <a href="https://www.vccircle.com/former-karvy-execs-nbfc-prest-loans-raises-fresh-capital?utm_source=facebook&utm_medium=social&utm_campaign=Former_Karvy_exec" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 21: THE ECONOMIC TIMES */}
          <article className="press-card" data-category="funding" data-pub="economic-times" id="article-21">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/fintech-nbfc-prest-loans-raises-equity-from-existing-investors/articleshow/61463133.cms" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open The Economic Times Coverage">
                  <img src="/assets/press/THe Economic times.png" alt="The Economic Times" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Nov 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-funding">Funding & Equity</span>
              <h3 className="press-card-title">
                <a href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/fintech-nbfc-prest-loans-raises-equity-from-existing-investors/articleshow/61463133.cms" target="_blank" rel="noopener noreferrer">

                Fintech NBFC Prest Loans raises equity from existing investors
                              </a>
              </h3>
              <p className="press-card-desc">

              Leading business daily details Prest Loans' equity raise, technology investments, and proprietary scoring
              models driving fast-track digital disbursements.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 The Economic Times              </span>
              <a href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/fintech-nbfc-prest-loans-raises-equity-from-existing-investors/articleshow/61463133.cms" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 22: SME POST */}
          <article className="press-card" data-category="expansion" data-pub="sme-post" id="article-22">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://smepost.com/news/prest-loans-expands-operations-to-rajasthan-targets-to-disburse-rs-100-cr-loans-for-msmes/24434" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open SME Post Coverage">
                  <img src="/assets/press/SMEpost.png" alt="SME Post" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Aug 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-expansion">Regional Expansion</span>
              <h3 className="press-card-title">
                <a href="https://smepost.com/news/prest-loans-expands-operations-to-rajasthan-targets-to-disburse-rs-100-cr-loans-for-msmes/24434" target="_blank" rel="noopener noreferrer">

                Prest Loans expands operations to Rajasthan, targets to disburse Rs 100 cr loans for MSMEs
                              </a>
              </h3>
              <p className="press-card-desc">

              Prest Loans sets up regional presence in Jaipur, earmarking ₹100 Crores in targeted loan disbursements for
              state's underserved MSMEs, handicraft, and trade units.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 SME Post              </span>
              <a href="https://smepost.com/news/prest-loans-expands-operations-to-rajasthan-targets-to-disburse-rs-100-cr-loans-for-msmes/24434" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 23: DNA INDIA */}
          <article className="press-card" data-category="funding" data-pub="dna" id="article-23">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="https://www.dnaindia.com/business/report-fintech-nbfc-prest-loans-2540491" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open DNA India Coverage">
                  <img src="/assets/press/DNA.png" alt="DNA India" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Nov 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-funding">Funding & Equity</span>
              <h3 className="press-card-title">
                <a href="https://www.dnaindia.com/business/report-fintech-nbfc-prest-loans-2540491" target="_blank" rel="noopener noreferrer">

                Fintech NBFC Prest Loans raises equity from existing investors
                              </a>
              </h3>
              <p className="press-card-desc">

              Digital lender Prest Loans secures equity funding to expand its balance sheet, proprietary algorithms, and
              SME credit reach across priority hubs.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 DNA India              </span>
              <a href="https://www.dnaindia.com/business/report-fintech-nbfc-prest-loans-2540491" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 24: BUSINESS STANDARD */}
          <article className="press-card" data-category="funding" data-pub="business-standard" id="article-24">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-raises-equity-from-existing-investors-117110200779_1#.WfrvOIoRU_Y.twitter" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business Standard Coverage">
                  <img src="/assets/press/Business Standard.png" alt="Business Standard" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Nov 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-funding">Funding & Equity</span>
              <h3 className="press-card-title">
                <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-raises-equity-from-existing-investors-117110200779_1#.WfrvOIoRU_Y.twitter" target="_blank" rel="noopener noreferrer">

                Fintech NBFC Prest Loans raises equity from existing investors
                              </a>
              </h3>
              <p className="press-card-desc">

              Capital infusion bolsters balance sheet strength and enables leverage of debt facilities to meet growing
              borrower demand across North India.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business Standard              </span>
              <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-raises-equity-from-existing-investors-117110200779_1#.WfrvOIoRU_Y.twitter" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 25: BUSINESS STANDARD */}
          <article className="press-card" data-category="milestone" data-pub="business-standard" id="article-25">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.business-standard.com/article/news-ani/ashok-mittal-buys-nbfc-lord-krishna-to-convert-into-fintech-nbfc-rebranded-as-prest-loans-117080201329_1" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business Standard Coverage">
                  <img src="/assets/press/Business Standard.png" alt="Business Standard" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 02 Aug 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-milestone">Corporate Milestone</span>
              <h3 className="press-card-title">
                <a href="/https://www.business-standard.com/article/news-ani/ashok-mittal-buys-nbfc-lord-krishna-to-convert-into-fintech-nbfc-rebranded-as-prest-loans-117080201329_1" target="_blank" rel="noopener noreferrer">

                Ashok Mittal buys NBFC Lord Krishna to convert into FinTech NBFC, rebranded as Prest Loans
                              </a>
              </h3>
              <p className="press-card-desc">

              Milestone acquisition and transformation of 25-year-old RBI-registered NBFC Lord Krishna Financial
              Services into a new-age digital lending company.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business Standard              </span>
              <a href="/https://www.business-standard.com/article/news-ani/ashok-mittal-buys-nbfc-lord-krishna-to-convert-into-fintech-nbfc-rebranded-as-prest-loans-117080201329_1" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
          {/* Item 26: BUSINESS STANDARD */}
          <article className="press-card" data-category="expansion" data-pub="business-standard" id="article-26">
            <div className="press-card-body">
              <div className="press-card-header">
                <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-forays-its-operations-in-rajasthan-117082500319_1" target="_blank" rel="noopener noreferrer" className="press-card-logo-link" title="Open Business Standard Coverage">
                  <img src="/assets/press/Business Standard.png" alt="Business Standard" className="press-card-logo-img" />
                </a>
                <span className="press-card-date-badge">
                  <i className="fa-regular fa-calendar-days"></i>
 25 Aug 2017                </span>
              </div>
              <span className="press-card-cat-badge cat-expansion">Regional Expansion</span>
              <h3 className="press-card-title">
                <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-forays-its-operations-in-rajasthan-117082500319_1" target="_blank" rel="noopener noreferrer">
{`
                Fintech NBFC "Prest Loans" forays its operations in Rajasthan
              `}                </a>
              </h3>
              <p className="press-card-desc">

              Dedicated Jaipur branch established to disburse customized financial solutions for local commercial
              establishments and trading businesses.
                          </p>
            </div>
            <div className="press-card-footer">
              <span className="press-card-pub-name">
                <i className="fa-solid fa-circle-check"></i>
 Business Standard              </span>
              <a href="/https://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-forays-its-operations-in-rajasthan-117082500319_1" target="_blank" rel="noopener noreferrer" className="btn-read-coverage">
                <span>Read Full News</span>
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
        </div>
        {/* Empty Filter State (Shown when search has 0 matches) */}
        <div id="press-empty-msg" className="press-empty-state" style={{"display":"none","marginTop":"20px"}}>
          <div className="press-empty-icon">
            <i className="fa-solid fa-newspaper"></i>
          </div>
          <h3 style={{"fontSize":"1.25rem","fontWeight":"800","color":"#1e293b","marginBottom":"8px"}}>
No Matching Coverage Found
                  </h3>
          <p style={{"color":"#64748b","fontSize":"0.95rem","maxWidth":"500px","margin":"0 auto 20px"}}>

          We couldn't find any news articles matching your search criteria. Try a different keyword or reset filters.
                  </p>
          <button onClick={(event) => { try { (new Function('event', "resetPressFilters()")).call(event.currentTarget, event); } catch(e) {} }} className="btn-primary" style={{"padding":"10px 22px"}}>
            <i className="fa-solid fa-rotate-left"></i>
 View All 19 Press Articles
                  </button>
        </div>
        {/* Media Kit & Photo Gallery Banner */}
        <div style={{"background":"linear-gradient(135deg, #f8fafc 0%, #fcf7fc 100%)","borderRadius":"var(--radius-xl)","border":"1.5px dashed rgba(112, 20, 110, 0.25)","padding":"36px","marginTop":"55px","display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"20px","boxShadow":"0 4px 16px rgba(0,0,0,0.02)"}}>
          <div>
            <span style={{"fontSize":"0.75rem","color":"var(--primary-orange)","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.5px"}}>
Corporate
            Media Kit            </span>
            <h3 style={{"fontSize":"1.35rem","fontWeight":"800","color":"#0f172a","margin":"4px 0 6px"}}>
Looking for Photos &
            Moments?            </h3>
            <p style={{"color":"#64748b","fontSize":"0.9375rem","maxWidth":"650px"}}>

            Explore our high-resolution corporate photo gallery depicting milestones, ground-level borrower
            interactions, leadership forums, and team culture at Prest Loans.
                      </p>
          </div>
          <a href="/gallery" className="btn-primary" style={{"boxShadow":"0 4px 14px rgba(112, 20, 110, 0.25)"}}>
            <i className="fa-solid fa-images"></i>
 View Photo Gallery
                  </a>
        </div>
      </div>
    </section>
    {/* FOOTER (Matching Screenshot 2) */}
    {/* FLOATING ACTIONS & MODALS */}

    </>
  );
};
