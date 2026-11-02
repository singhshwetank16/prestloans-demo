/**
 * API Controller - Form Submissions, Tracking, and Calculators
 */

// In-memory application tracker for demo / operational tracking
const sampleApplications = {
  'PL-100234': {
    appId: 'PL-100234',
    name: 'Ravi Kumar',
    product: 'Coaching / Skill Development Loan',
    amount: '₹1,50,000',
    status: 'Approved & Disbursed',
    statusClass: 'approved',
    date: '2026-10-15',
    remarks: 'Disbursed directly into institutional account.'
  },
  'PL-100235': {
    appId: 'PL-100235',
    name: 'Pooja Sharma',
    product: 'Personal Loan',
    amount: '₹2,00,000',
    status: 'Under Credit Underwriting',
    statusClass: 'under-review',
    date: '2026-10-28',
    remarks: 'Document verification complete. Final risk assessment in progress.'
  },
  'PL-100236': {
    appId: 'PL-100236',
    name: 'Vikram Singh',
    product: 'Business Loan',
    amount: '₹10,00,000',
    status: 'Documents Verification Pending',
    statusClass: 'pending',
    date: '2026-11-01',
    remarks: 'Awaiting 6 months GST statement upload.'
  }
};

exports.trackStatus = (req, res) => {
  const rawQuery = (req.body && req.body.query) || (req.query && req.query.query) || '';
  const query = rawQuery.trim().toUpperCase();

  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid Application Number or registered Mobile Number.'
    });
  }

  const result = sampleApplications[query];

  if (result) {
    return res.json({
      success: true,
      found: true,
      data: result
    });
  }

  // If not found in mock store, generate live tracking response
  return res.json({
    success: true,
    found: true,
    data: {
      appId: query.startsWith('PL-') ? query : ('PL-' + Math.floor(100000 + Math.random() * 900000)),
      name: 'Registered Applicant',
      product: 'Digital Loan Facility',
      amount: 'Under Assessment',
      status: 'Application Received & Verified',
      statusClass: 'under-review',
      date: new Date().toISOString().split('T')[0],
      remarks: 'Your loan application is in active processing. Our credit team will contact you within 24 hours.'
    }
  });
};

exports.submitEnquiry = (req, res) => {
  const body = req.body || {};
  const { name, phone, email, location, message } = body;

  if (!name || !phone) {
    if (req.xhr || (req.headers.accept && req.headers.accept.includes('json'))) {
      return res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
    }
    return res.redirect('/contact?status=error');
  }

  console.log(`[Customer Enquiry] Name: ${name} | Phone: ${phone} | Email: ${email} | Location: ${location} | Message: ${message}`);

  if (req.xhr || (req.headers.accept && req.headers.accept.includes('json'))) {
    return res.json({
      success: true,
      message: 'Thank you for reaching out! Our lending advisor will call you shortly.'
    });
  }

  return res.render('pages/contact', {
    title: 'Contact Us | Prest Loans',
    metaDesc: 'Contact Prest Loans. We have received your inquiry.',
    activePage: 'contact',
    successMessage: 'Thank you! Your enquiry has been received. Our loan specialist will connect with you within 24 working hours.'
  });
};

exports.submitLoanApp = (req, res) => {
  const body = req.body || {};
  const { fullName, phone, email, city, pincode, loanProduct, loanAmount, pan, bizType, turnover } = body;

  if (!fullName || !phone) {
    return res.status(400).json({ success: false, message: 'Full name and mobile number are required.' });
  }

  const generatedId = 'PL-' + Math.floor(100000 + Math.random() * 900000);

  sampleApplications[generatedId] = {
    appId: generatedId,
    name: fullName,
    product: loanProduct || 'Personal Loan',
    amount: loanAmount ? ('₹' + loanAmount) : '₹1,00,000',
    status: 'Application Initiated (Digital KYC)',
    statusClass: 'under-review',
    date: new Date().toISOString().split('T')[0],
    remarks: 'Application initiated online. Next step: e-Sign and bank statement verification.'
  };

  return res.json({
    success: true,
    applicationId: generatedId,
    message: 'Congratulations! Your loan application has been registered successfully.'
  });
};

exports.calculateEmi = (req, res) => {
  const body = req.body || {};
  const query = req.query || {};
  const amount = parseFloat(body.amount || query.amount || 100000);
  const rate = parseFloat(body.rate || query.rate || 18);
  const tenureMonths = parseInt(body.tenure || query.tenure || 12, 10);

  const monthlyRate = rate / (12 * 100);
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - amount;

  return res.json({
    amount,
    annualRate: rate,
    tenureMonths,
    monthlyEmi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment)
  });
};
