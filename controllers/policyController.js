/**
 * Policy & Statutory Compliance Controller - Prest Loans Portal
 */

exports.getPolicies = (req, res) => {
  res.render('pages/policies', {
    title: 'Policies & Regulatory Compliance | Prest Loans - RBI Registered NBFC',
    metaDesc: 'Official regulatory policies, Fair Practices Code, Penal Charges Policy, KYC/AML norms, and statutory disclosures of Lord Krishna Financial Services Ltd.',
    activePage: 'policies'
  });
};

exports.getGrievanceRedressal = (req, res) => {
  res.render('pages/grievance-redressal', {
    title: 'Grievance Redressal Mechanism | Prest Loans - RBI Registered NBFC',
    metaDesc: 'Official Grievance Redressal Mechanism of Lord Krishna Financial Services Ltd (Prest Loans). 4-Tier escalating grievance hierarchy, Principal Nodal Officer details, RBI Ombudsman Portal.',
    activePage: 'policies',
    extraScripts: '<script src="/js/grievance-redressal.js"></script>'
  });
};

exports.getInterestRateModel = (req, res) => {
  res.render('pages/interest-rate-model', {
    title: 'Interest Rate Model & Schedule of Charges | Prest Loans - RBI Registered NBFC',
    metaDesc: 'Official Interest Rate Model, Reference Base Rate (18% p.a.), risk gradation, annualized APR calculator, and complete Schedule of Charges for Prest Loans.',
    activePage: 'policies',
    extraScripts: '<script src="/js/interest-rate-model.js"></script>'
  });
};

exports.getFairPracticesCode = (req, res) => {
  res.render('pages/fair-practices-code', {
    title: 'Fair Practices Code (FPC) | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Official Fair Practices Code of Lord Krishna Financial Services Ltd ensuring transparency, non-discriminatory lending, fair loan appraisal, and ethical recovery.',
    activePage: 'policies'
  });
};

exports.getKycAndAml = (req, res) => {
  res.render('pages/kyc-and-aml', {
    title: 'KYC & AML Policy | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Official Know Your Customer (KYC) Norms & Anti-Money Laundering Measures Policy adopted by Lord Krishna Financial Services Ltd under RBI Master Directions.',
    activePage: 'policies'
  });
};

exports.getPenalChargesPolicy = (req, res) => {
  res.render('pages/penal-charges-policy', {
    title: 'Penal Charges Policy | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Official Penal Charges Policy in Loan Accounts adopted by Lord Krishna Financial Services Ltd in compliance with RBI circulars.',
    activePage: 'policies'
  });
};

exports.getRegulatoryCertifications = (req, res) => {
  res.render('pages/regulatory-certifications', {
    title: 'Regulatory Certifications & Licenses | Prest Loans - RBI Registered NBFC',
    metaDesc: 'Official regulatory certifications, RBI Certificate of Registration (B-14.02019), CIBIL membership, CKYC integration, and statutory compliance status.',
    activePage: 'policies'
  });
};

exports.getPublicNotice = (req, res) => {
  res.render('pages/public-notice', {
    title: 'Public Notices & Statutory Disclosures | Prest Loans',
    metaDesc: 'Official public notices, caution advisories against fake loan apps, and statutory disclosures of Lord Krishna Financial Services Ltd.',
    activePage: 'policies'
  });
};

exports.getPrivacyPolicy = (req, res) => {
  res.render('pages/privacy-policy', {
    title: 'Privacy Policy | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Official Privacy Policy and Data Protection standards of Prest Loans (Lord Krishna Financial Services Ltd) under the Digital Personal Data Protection Act.',
    activePage: 'policies'
  });
};

exports.getTermsAndConditions = (req, res) => {
  res.render('pages/terms-and-conditions', {
    title: 'Terms & Conditions | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Official Terms & Conditions governing loan applications, digital credit processing, and platform usage with Prest Loans.',
    activePage: 'policies'
  });
};

exports.getTermsOfUse = (req, res) => {
  res.render('pages/terms-of-use', {
    title: 'Terms of Use | Prest Loans (Lord Krishna Financial Services Ltd)',
    metaDesc: 'Website Terms of Use and platform access rules for prestloans.com, operated by Lord Krishna Financial Services Ltd.',
    activePage: 'policies'
  });
};

exports.getDisclaimer = (req, res) => {
  res.render('pages/disclaimer', {
    title: 'Disclaimer & Public Fraud Alert | Prest Loans',
    metaDesc: 'Official Website Disclaimer and Public Caution Notice against fraudulent websites and unauthorized loan agents of Prest Loans.',
    activePage: 'policies'
  });
};
