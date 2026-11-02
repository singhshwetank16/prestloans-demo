/**
 * Page Controller - Prest Loans Portal
 */

exports.getHome = (req, res) => {
  res.render('pages/index', {
    title: 'Prest Loans | Digital Lending Platform | RBI Registered NBFC',
    metaDesc: 'Prest Loans (Lord Krishna Financial Services Ltd) is an RBI registered NBFC providing fast, paperless business loans, home loans, education loans, and personal loans across India.',
    activePage: 'home',
    extraScripts: '<script src="/js/calculator.js"></script>'
  });
};

exports.getAbout = (req, res) => {
  res.render('pages/about', {
    title: 'About Us | Prest Loans - Lord Krishna Financial Services Ltd',
    metaDesc: 'Discover Prest Loans (Lord Krishna Financial Services Ltd), an RBI-registered NBFC incorporated in 1992. Over three decades of trusted digital financial services.',
    activePage: 'about'
  });
};

exports.getProducts = (req, res) => {
  res.render('pages/products', {
    title: 'Loan Products & Credit Solutions | Prest Loans',
    metaDesc: 'Explore customized loan products from Prest Loans: Business Loans, Personal Loans, Home Loans, Short Term Personal Loans, and Education Loans.',
    activePage: 'products'
  });
};

exports.getCalculator = (req, res) => {
  res.render('pages/calculator', {
    title: 'Loan EMI Calculator | Prest Loans - How Much Do You Need?',
    metaDesc: 'Calculate your loan EMI, total interest, and complete amortization schedule online with Prest Loans EMI Calculator.',
    activePage: 'calculator',
    extraScripts: '<script src="/js/calculator.js"></script>'
  });
};

exports.getCustomersStories = (req, res) => {
  res.render('pages/customers-stories', {
    title: "Customers' Stories & Reviews | Prest Loans",
    metaDesc: 'Read authentic customer success stories from homeowners, students, entrepreneurs, and salaried professionals across India who achieved their dreams with Prest Loans.',
    activePage: 'customers-stories'
  });
};

exports.getMedia = (req, res) => {
  res.render('pages/media', {
    title: 'Media, News & Press Releases | Prest Loans',
    metaDesc: 'Read the latest news coverage, press releases, and media mentions highlighting Prest Loans fintech innovation and credit inclusion milestones.',
    activePage: 'media'
  });
};

exports.getGallery = (req, res) => {
  res.render('pages/gallery', {
    title: 'Photo Gallery & Corporate Moments | Prest Loans',
    metaDesc: 'View official photos of Prest Loans: team culture, corporate events, annual meets, awards, and employee celebrations.',
    activePage: 'media'
  });
};

exports.getBlog = (req, res) => {
  res.render('pages/blog', {
    title: 'Insights & Blog | Credit Solutions, FinTech & Loan Advisory | Prest Loans',
    metaDesc: 'Explore actionable financial insights, credit improvement guides, loan advisory tips, and MSME growth strategies on the official Prest Loans blog.',
    activePage: 'media'
  });
};

exports.getFaq = (req, res) => {
  res.render('pages/faq', {
    title: 'Frequently Asked Questions (FAQ) | Prest Loans',
    metaDesc: 'Find answers to common questions about home loans, education loans, personal loans, interest rates, eligibility criteria, and documents required.',
    activePage: 'faq'
  });
};

exports.getContact = (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us & Office Locations | Prest Loans',
    metaDesc: 'Contact Prest Loans (Lord Krishna Financial Services Ltd). Registered office at Asaf Ali Road, New Delhi. Call 011-45241131 or WhatsApp +91-9711669090.',
    activePage: 'contact'
  });
};
