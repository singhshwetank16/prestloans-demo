import React, { useState, useEffect } from 'react';

interface PressArticle {
  id: number;
  dateRaw: string;
  dateDisplay: string;
  pubName: string;
  pubKey: string;
  logo: string;
  title: string;
  url: string;
  category: string;
  catClass: string;
  desc: string;
}

const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 1,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'PTI News',
    pubKey: 'pti',
    logo: '/assets/press/pti.gif',
    title: 'Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities',
    url: 'http://www.ptinews.com/pressrelease/48536_press-subPrest-Loans-and-U-GRO-Capital-Join-Hands-to-Solve-the-MSME-Credit-Gap-in-Tier-3-and-4-Cities',
    category: 'Strategic Partnership',
    catClass: 'cat-partnership',
    desc: "Prest Loans partners with BSE-listed technology-enabled NBFC U GRO Capital to offer 'GRO Micro' credit solutions, addressing urgent liquidity needs for underserved micro-enterprises in tier-3 and tier-4 regions."
  },
  {
    id: 2,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'Dailyhunt',
    pubKey: 'dailyhunt',
    logo: '/assets/press/dailyhunt.png',
    title: 'Digital Lender "Prest Loans" Forays into Electrical Vehicle (EV) Financing Segment; Collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/digital+lender+prest+loans+forays+into+electrical+vehicle+ev+financing+segment+collaborates+with+eqaro+guarantees+and+terra+motors-newsid-n295069824',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: 'Fintech NBFC Prest Loans partners with Eqaro Guarantees and Terra Motors to roll out specialized clean mobility financing for commercial electric 3-wheelers across India.'
  },
  {
    id: 3,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'The Economic Times',
    pubKey: 'economic-times',
    logo: '/assets/press/econonictimes-logo.jpg',
    title: 'Prest Loans forays into EV financing segment; collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://auto.economictimes.indiatimes.com/news/auto-finance/prest-loans-forays-into-ev-financing-segment-collaborates-with-eqaro-guarantees-and-terra-motors/84088074',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: "The Economic Times highlights Prest Loans' strategic venture into green mobility and commercial electric vehicle loans in alliance with Terra Motors and Eqaro Guarantees."
  },
  {
    id: 4,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'ThePrint',
    pubKey: 'theprint',
    logo: '/assets/press/the_print_logo.png',
    title: 'Digital Lender “Prest Loans” forays into electrical vehicle (EV) financing segment; collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://theprint.in/ani-press-releases/digital-lender-prest-loans-forays-into-electrical-vehicle-ev-financing-segment-collaborates-with-eqaro-guarantees-and-terra-motors/689097/',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: 'Digital lender Prest Loans joins forces with Japanese EV giant Terra Motors and Eqaro Guarantees to provide frictionless credit access to commercial EV drivers.'
  },
  {
    id: 5,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'ThePrint',
    pubKey: 'theprint',
    logo: '/assets/press/the_print_logo.png',
    title: 'Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities',
    url: 'https://theprint.in/ani-press-releases/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities/705002/',
    category: 'MSME Credit',
    catClass: 'cat-msme',
    desc: "Deploying proprietary 'Prest Score' underwriting algorithms and non-financial data parameters to extend collateral-backed business capital to unserved retail traders."
  },
  {
    id: 6,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'The Week',
    pubKey: 'the-week',
    logo: '/assets/press/THE WEEK.png',
    title: 'Digital Lender "Prest Loans" Forays into Electrical Vehicle EV Financing Segment Collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://www.theweek.in/wire-updates/business/2021/07/02/pwr14-prest-loans.html',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: "The Week covers Prest Loans' foray into electric vehicle lending, offering structured credit guarantees and digital onboarding for green mobility entrepreneurs."
  },
  {
    id: 7,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'The Week',
    pubKey: 'the-week',
    logo: '/assets/press/THE WEEK.png',
    title: 'Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities',
    url: 'https://www.theweek.in/wire-updates/business/2021/07/28/pwr31-prest-loans.html',
    category: 'MSME Credit',
    catClass: 'cat-msme',
    desc: 'Expanding credit access across semi-urban trade corridors by removing heavy audited balance sheet constraints for small business owners in tier-3 and 4 towns.'
  },
  {
    id: 8,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'Outlook Magazine',
    pubKey: 'outlook',
    logo: '/assets/press/Outlook_magazine.jpg',
    title: 'Digital Lender "Prest Loans" Forays into Electrical Vehicle (EV) Financing Segment; Collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://www.outlookindia.com/newsscroll/digital-lender-prest-loans-forays-into-electrical-vehicle-ev-financing-segment-collaborates-with-eqaro-guarantees-and-terra-motors/2113360',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: "Outlook Magazine highlights Prest Loans' nationwide EV financial initiative providing flexible credit support to last-mile electric commercial transport drivers."
  },
  {
    id: 9,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'Outlook Magazine',
    pubKey: 'outlook',
    logo: '/assets/press/Outlook_magazine.jpg',
    title: 'Prest Loans and U GRO Capital join hands to solve the MSME credit gap in Tier 3 and 4 cities',
    url: 'https://www.outlookindia.com/newsscroll/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities/2129921',
    category: 'MSME Credit',
    catClass: 'cat-msme',
    desc: 'Scaling co-lending outreach in tier-3 and tier-4 hubs with small-ticket secured loans tailored for grassroots commercial enterprises.'
  },
  {
    id: 10,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Digital Lender "Prest Loans" forays into electrical vehicle (EV) financing segment; collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://www.business-standard.com/content/press-releases-ani/digital-lender-prest-loans-forays-into-electrical-vehicle-ev-financing-segment-collaborates-with-eqaro-guarantees-and-terra-motors-121070201099_1.html',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: 'Business Standard reports on Prest Loans partnering with Eqaro Guarantees and EV maker Terra Motors to provide swift collateral-free loan packages for electric 3-wheelers.'
  },
  {
    id: 11,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities',
    url: 'https://www.business-standard.com/content/press-releases-ani/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities-121072801171_1.html',
    category: 'MSME Credit',
    catClass: 'cat-msme',
    desc: 'Leveraging technology and local market presence to disburse secured business funding without requiring traditional ITRs or audited reports.'
  },
  {
    id: 12,
    dateRaw: '02/07/2021',
    dateDisplay: '02 Jul 2021',
    pubName: 'ANI News Multimedia',
    pubKey: 'ani-news',
    logo: '/assets/press/ANI Multimedia.png',
    title: 'Digital Lender "Prest Loans" forays into electrical vehicle (EV) financing segment; collaborates with Eqaro Guarantees and Terra Motors',
    url: 'https://www.aninews.in/news/business/business/digital-lender-prest-loans-forays-into-electrical-vehicle-ev-financing-segment-collaborates-with-eqaro-guarantees-and-terra-motors20210702173502/',
    category: 'EV Financing',
    catClass: 'cat-partnership',
    desc: "Comprehensive multimedia release detailing Prest Loans' collaboration with Terra Motors and Eqaro Guarantees for green energy commercial vehicle financing."
  },
  {
    id: 13,
    dateRaw: '28/07/2021',
    dateDisplay: '28 Jul 2021',
    pubName: 'ANI News Multimedia',
    pubKey: 'ani-news',
    logo: '/assets/press/ANI Multimedia.png',
    title: 'Prest Loans and U GRO Capital Join Hands to Solve the MSME Credit Gap in Tier 3 and 4 Cities',
    url: 'https://www.aninews.in/news/business/business/prest-loans-and-u-gro-capital-join-hands-to-solve-the-msme-credit-gap-in-tier-3-and-4-cities20210728164218/',
    category: 'MSME Credit',
    catClass: 'cat-msme',
    desc: "Prest Loans and U GRO Capital announce strategic fintech alliance to disburse 'GRO Micro' credit solutions to unserved businesses across western and central India."
  },
  {
    id: 14,
    dateRaw: '25/06/2021',
    dateDisplay: '25 Jun 2021',
    pubName: 'Outlook',
    pubKey: 'outlook',
    logo: '/assets/press/outlook-logo.png',
    title: 'Prest Loans Engages Mr. Rajeev Kishore Dubey (Ex CMD-Canara Bank) as Strategic Advisor on its Advisory Board',
    url: 'https://www.outlookindia.com/newsscroll/prest-loans-engages-mr-rajeev-kishore-dubey-ex-cmdcanara-bank-as-strategic-advisor-on-its-advisory-board/2059829',
    category: 'Advisory Board',
    catClass: 'cat-advisory',
    desc: 'Veteran banker and former Canara Bank Chairman Mr. Rajeev Kishore Dubey joins Prest Loans to guide corporate governance, banking relationships, and credit scaling.'
  },
  {
    id: 15,
    dateRaw: '25/06/2021',
    dateDisplay: '25 Jun 2021',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board',
    url: 'https://www.business-standard.com/content/press-releases-ani/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board-121040601085_1.html',
    category: 'Advisory Board',
    catClass: 'cat-advisory',
    desc: 'Strategic induction strengthens board oversight and risk-governance frameworks as the digital lending platform expands its balance sheet.'
  },
  {
    id: 16,
    dateRaw: '25/06/2021',
    dateDisplay: '25 Jun 2021',
    pubName: 'Business World',
    pubKey: 'business-world',
    logo: '/assets/press/business_world.png',
    title: 'Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board',
    url: 'http://www.businessworld.in/article/Prest-Loans-Engages-Mr-Rajeev-Kishore-Dubey-Ex-CMD-Canara-Bank-As-Strategic-Advisor-On-Its-Advisory-Board/07-04-2021-385780/',
    category: 'Advisory Board',
    catClass: 'cat-advisory',
    desc: 'Eminent public sector banking leader joins fintech board to drive strategic partnerships, regulatory alignment, and nationwide SME portfolio growth.'
  },
  {
    id: 17,
    dateRaw: '25/06/2021',
    dateDisplay: '25 Jun 2021',
    pubName: 'ANI News',
    pubKey: 'ani-news',
    logo: '/assets/press/ANI News.jpg',
    title: 'Prest Loans engages Rajeev Kishore Dubey (Ex CMD-Canara Bank) as strategic advisor on its advisory board',
    url: 'https://www.aninews.in/news/business/business/prest-loans-engages-rajeev-kishore-dubey-ex-cmd-canara-bank-as-strategic-advisor-on-its-advisory-board20210406171107/',
    category: 'Advisory Board',
    catClass: 'cat-advisory',
    desc: "Former Canara Bank CMD brings decades of commercial banking acumen to accelerate Prest Loans' mission of financial inclusion and digital credit access."
  },
  {
    id: 18,
    dateRaw: '16/06/2018',
    dateDisplay: '16 Jun 2018',
    pubName: 'Sourcing Hardware',
    pubKey: 'sourcing-hardware',
    logo: '/assets/press/Sourcing Hardware.gif',
    title: 'Prest Loans comes rescue underbanked traders',
    url: 'https://sourcinghardware.net/2018/06/16/prest-loans-comes-rescue-underbanked-traders/',
    category: 'Industry Spotlight',
    catClass: 'cat-spotlight',
    desc: 'Special feature examining how Prest Loans provides rapid unsecured business credit to hardware dealers, building material suppliers, and retail trade enterprises.'
  },
  {
    id: 19,
    dateRaw: '02/11/2017',
    dateDisplay: '02 Nov 2017',
    pubName: 'SME Times',
    pubKey: 'sme-times',
    logo: '/assets/press/SME.jpg',
    title: "FinTech NBFC 'Prest Loans' Raises Equity from Existing Investors",
    url: 'http://www.smetimes.in/smetimes/news/pr_newswire/2017/Nov/02/FinTech-NBFC-Prest-Loans-Raises-Equity-from-Existing-Investors.html',
    category: 'Funding & Equity',
    catClass: 'cat-funding',
    desc: 'Digital lender Prest Loans secures fresh equity infusion of ₹3.7 Crore from angel investors and promoters to scale its tech platform and expand underwriting capacity.'
  },
  {
    id: 20,
    dateRaw: '02/11/2017',
    dateDisplay: '02 Nov 2017',
    pubName: 'VCCircle',
    pubKey: 'vccircle',
    logo: '/assets/press/vccircle.png',
    title: 'Former Karvy exec’s NBFC Prest Loans raises fresh capital',
    url: 'https://www.vccircle.com/former-karvy-execs-nbfc-prest-loans-raises-fresh-capital/?utm_source=facebook&utm_medium=social&utm_campaign=Former_Karvy_exec',
    category: 'Funding & Equity',
    catClass: 'cat-funding',
    desc: 'Venture capital and private equity intelligence portal chronicles capital raise by Ashok Mittal-led FinTech NBFC to support aggressive loan book expansion.'
  },
  {
    id: 21,
    dateRaw: '02/11/2017',
    dateDisplay: '02 Nov 2017',
    pubName: 'The Economic Times',
    pubKey: 'economic-times',
    logo: '/assets/press/econonictimes-logo.jpg',
    title: 'Fintech NBFC Prest Loans raises equity from existing investors',
    url: 'https://cfo.economictimes.indiatimes.com/news/fintech-nbfc-prest-loans-raises-equity-from-existing-investors/61463215',
    category: 'Funding & Equity',
    catClass: 'cat-funding',
    desc: "Leading business daily details Prest Loans' equity raise, technology investments, and proprietary scoring models driving fast-track digital disbursements."
  },
  {
    id: 22,
    dateRaw: '25/08/2017',
    dateDisplay: '25 Aug 2017',
    pubName: 'SME Post',
    pubKey: 'sme-post',
    logo: '/assets/press/SMEpost.png',
    title: 'Prest Loans expands operations to Rajasthan, targets to disburse Rs 100 cr loans for MSMEs',
    url: 'http://smepost.com/news/prest-loans-expands-operations-to-rajasthan-targets-to-disburse-rs-100-cr-loans-for-msmes/25564',
    category: 'Regional Expansion',
    catClass: 'cat-expansion',
    desc: "Prest Loans sets up regional presence in Jaipur, earmarking ₹100 Crores in targeted loan disbursements for state's underserved MSMEs, handicraft, and trade units."
  },
  {
    id: 23,
    dateRaw: '25/08/2017',
    dateDisplay: '25 Aug 2017',
    pubName: 'DNA India',
    pubKey: 'dna',
    logo: '/assets/press/DNA.png',
    title: 'Prest Loans forays into Rajasthan',
    url: 'http://www.dnaindia.com/business/report-fintech-nbfc-prest-loans-2540491',
    category: 'Regional Expansion',
    catClass: 'cat-expansion',
    desc: 'Digital lender Prest Loans announces geographic expansion into Rajasthan to cater to small traders, merchants, and emerging micro-enterprises.'
  },
  {
    id: 24,
    dateRaw: '02/11/2017',
    dateDisplay: '02 Nov 2017',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Fintech NBFC Prest Loans raises equity from existing investors',
    url: 'http://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-raises-equity-from-existing-investors-117110200779_1.html#.WfrvOIoRU_Y.twitter',
    category: 'Funding & Equity',
    catClass: 'cat-funding',
    desc: 'Capital infusion bolsters balance sheet strength and enables leverage of debt facilities to meet growing borrower demand across North India.'
  },
  {
    id: 25,
    dateRaw: '02/08/2017',
    dateDisplay: '02 Aug 2017',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Ashok Mittal buys NBFC Lord Krishna to convert into FinTech NBFC, rebranded as Prest Loans',
    url: 'http://www.business-standard.com/article/news-ani/ashok-mittal-buys-nbfc-lord-krishna-to-convert-into-fintech-nbfc-rebranded-as-prest-loans-117080201329_1.html',
    category: 'Corporate Milestone',
    catClass: 'cat-milestone',
    desc: 'Milestone acquisition and transformation of 25-year-old RBI-registered NBFC Lord Krishna Financial Services into a new-age digital lending company.'
  },
  {
    id: 26,
    dateRaw: '25/08/2017',
    dateDisplay: '25 Aug 2017',
    pubName: 'Business Standard',
    pubKey: 'business-standard',
    logo: '/assets/press/Business Standard.png',
    title: 'Fintech NBFC "Prest Loans" forays its operations in Rajasthan',
    url: 'http://www.business-standard.com/article/news-ani/fintech-nbfc-prest-loans-forays-its-operations-in-rajasthan-117082500319_1.html',
    category: 'Regional Expansion',
    catClass: 'cat-expansion',
    desc: 'Dedicated Jaipur branch established to disburse customized financial solutions for local commercial establishments and trading businesses.'
  }
];

interface PubFilter {
  key: string;
  name: string;
  logo?: string;
  isAll?: boolean;
}

const PUB_FILTERS: PubFilter[] = [
  { key: 'all', name: 'All Media', isAll: true },
  { key: 'business-standard', name: 'Business Standard', logo: '/assets/press/Business Standard.png' },
  { key: 'economic-times', name: 'The Economic Times', logo: '/assets/press/econonictimes-logo.jpg' },
  { key: 'ani-news', name: 'ANI News', logo: '/assets/press/ANI News.jpg' },
  { key: 'theprint', name: 'ThePrint', logo: '/assets/press/the_print_logo.png' },
  { key: 'the-week', name: 'The Week', logo: '/assets/press/THE WEEK.png' },
  { key: 'outlook', name: 'Outlook Magazine', logo: '/assets/press/Outlook_magazine.jpg' },
  { key: 'dailyhunt', name: 'Dailyhunt', logo: '/assets/press/dailyhunt.png' },
  { key: 'pti', name: 'PTI News', logo: '/assets/press/pti.gif' },
  { key: 'business-world', name: 'Business World', logo: '/assets/press/business_world.png' },
  { key: 'sourcing-hardware', name: 'Sourcing Hardware', logo: '/assets/press/Sourcing Hardware.gif' },
  { key: 'sme-times', name: 'SME Times', logo: '/assets/press/SME.jpg' },
  { key: 'vccircle', name: 'VCCircle', logo: '/assets/press/vccircle.png' },
  { key: 'sme-post', name: 'SME Post', logo: '/assets/press/SMEpost.png' },
  { key: 'dna', name: 'DNA India', logo: '/assets/press/DNA.png' }
];

export const Media: React.FC = () => {
  const [selectedPub, setSelectedPub] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
    if (typeof (window as any).initCalculators === 'function') {
      (window as any).initCalculators();
    }
  }, []);

  // Filtered articles based on publication and search query
  const filteredArticles = PRESS_ARTICLES.filter((article) => {
    const matchesPub = selectedPub === 'all' || article.pubKey === selectedPub;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.pubName.toLowerCase().includes(q) ||
      article.desc.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.dateDisplay.toLowerCase().includes(q);
    return matchesPub && matchesSearch;
  });

  const getPubCount = (key: string): number => {
    if (key === 'all') return PRESS_ARTICLES.length;
    return PRESS_ARTICLES.filter((a) => a.pubKey === key).length;
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    // If user clicked directly on an anchor or button inside the card, let default anchor behavior take place
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <span>Media &amp; Press</span>
          </div>
          <h1 className="page-banner-title">Media &amp; News Coverage</h1>
          <p className="page-banner-sub">
            Explore how national media, business publications, and fintech journals chronicle our milestones and market leadership.
          </p>
        </div>
      </section>

      {/* NATIONAL PRESS COVERAGE & RELEASES SECTION */}
      <section className="section" id="press-coverage">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-tag">
              <i className="fa-solid fa-bullhorn"></i> In The National Spotlight
            </span>
            <h2 className="section-title">Prest Loans in National Media &amp; Press Coverage</h2>
            <p className="section-desc">
              Official archives chronicling our fintech milestones, strategic alliances, credit expansions, and leadership announcements across India&apos;s premier financial dailies and digital platforms.
            </p>
          </div>

          {/* Institutional Metrics Banner */}
          <div className="media-stats-grid">
            <div className="media-stat-card">
              <div className="media-stat-icon">
                <i className="fa-solid fa-newspaper"></i>
              </div>
              <div>
                <div className="media-stat-num">{PRESS_ARTICLES.length}</div>
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
          <div style={{ marginBottom: '25px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa-solid fa-filter" style={{ color: 'var(--primary-purple)' }}></i>
                Filter by Media House ({filteredArticles.length} of {PRESS_ARTICLES.length} Articles):
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ position: 'relative' }}>
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#94a3b8',
                      fontSize: '0.85rem'
                    }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Search articles or headlines..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      padding: '8px 14px 8px 34px',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      fontSize: '0.85rem',
                      outline: 'none',
                      width: '240px'
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: '#94a3b8',
                        padding: '4px'
                      }}
                      title="Clear search"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
                {selectedPub !== 'all' && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPub('all');
                      setSearchQuery('');
                    }}
                    className="btn-outline-primary"
                    style={{ padding: '6px 14px', fontSize: '0.82rem', height: '36px' }}
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Publication Filter Tabs */}
            <div className="press-grid">
              {PUB_FILTERS.map((pub) => {
                const count = getPubCount(pub.key);
                const isActive = selectedPub === pub.key;
                return (
                  <button
                    key={pub.key}
                    type="button"
                    className={`press-interactive-item ${isActive ? 'active' : ''}`}
                    title={`Click to view ${pub.name} articles (${count})`}
                    onClick={() => setSelectedPub(pub.key)}
                  >
                    <span className="press-item-badge">
                      {pub.isAll ? `All ${count}` : `${count} News`}
                    </span>
                    {pub.isAll ? (
                      <div
                        style={{
                          fontWeight: '800',
                          fontSize: '0.95rem',
                          color: 'var(--primary-purple)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        <i className="fa-solid fa-layer-group" style={{ fontSize: '1.15rem', color: 'var(--primary-orange)' }}></i>
                        All Media
                      </div>
                    ) : (
                      <img src={pub.logo} alt={pub.name} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Press Coverage Grid (All 26 Verified News Articles) */}
          {filteredArticles.length > 0 ? (
            <div className="press-coverage-grid" id="press-articles-container">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="press-card"
                  data-category={article.catClass}
                  data-pub={article.pubKey}
                  id={`article-${article.id}`}
                  style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                  onClick={(e) => handleCardClick(article.url, e)}
                  title={`Click anywhere on card to open news on ${article.pubName}`}
                >
                  <div className="press-card-body">
                    <div className="press-card-header">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-card-logo-link"
                        title={`Open ${article.pubName} Coverage in New Tab`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src={article.logo} alt={article.pubName} className="press-card-logo-img" />
                      </a>
                      <span className="press-card-date-badge">
                        <i className="fa-regular fa-calendar-days"></i> {article.dateDisplay}
                      </span>
                    </div>

                    <span className={`press-card-cat-badge ${article.catClass}`}>{article.category}</span>

                    <h3 className="press-card-title">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`Open "${article.title}" in New Tab`}
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p className="press-card-desc">{article.desc}</p>
                  </div>

                  <div className="press-card-footer">
                    <span className="press-card-pub-name">
                      <i className="fa-solid fa-circle-check"></i> {article.pubName}
                    </span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-read-coverage"
                      onClick={(e) => e.stopPropagation()}
                      title={`Open article link on ${article.pubName} in New Tab`}
                    >
                      <span>Read Full News</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty Filter State */
            <div id="press-empty-msg" className="press-empty-state" style={{ marginTop: '20px', display: 'block' }}>
              <div className="press-empty-icon">
                <i className="fa-solid fa-newspaper"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                No Matching Coverage Found
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 20px' }}>
                We couldn&apos;t find any news articles matching your current search or filter criteria. Try resetting the filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedPub('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
                style={{ padding: '10px 22px' }}
              >
                <i className="fa-solid fa-rotate-left"></i> View All {PRESS_ARTICLES.length} Press Articles
              </button>
            </div>
          )}

          {/* Media Kit & Photo Gallery Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #fcf7fc 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px dashed rgba(112, 20, 110, 0.25)',
              padding: '36px',
              marginTop: '55px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--primary-orange)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Corporate Media Kit
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '4px 0 6px' }}>
                Looking for Photos &amp; Moments?
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', maxWidth: '650px' }}>
                Explore our high-resolution corporate photo gallery depicting milestones, ground-level borrower interactions, leadership forums, and team culture at Prest Loans.
              </p>
            </div>
            <a href="/gallery" className="btn-primary" style={{ boxShadow: '0 4px 14px rgba(112, 20, 110, 0.25)' }}>
              <i className="fa-solid fa-images"></i> View Photo Gallery
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
