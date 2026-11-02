/**
 * Career Controller - Prest Loans Portal
 */

exports.getCareer = (req, res) => {
  res.render('pages/career', {
    title: 'Careers & Opportunities | Prest Loans',
    metaDesc: 'Explore exciting career opportunities at Prest Loans (Lord Krishna Financial Services Ltd). Join a fast-growing, RBI registered NBFC with a dynamic and inclusive culture.',
    activePage: 'career'
  });
};

exports.getEmployeeTestimonials = (req, res) => {
  res.render('pages/employee-testimonials', {
    title: 'Employee Testimonials & Culture | Prest Loans',
    metaDesc: 'Discover authentic employee testimonials, workplace culture, and career experiences from the team driving financial inclusion and digital credit access at Prest Loans.',
    activePage: 'career'
  });
};

exports.applyJob = (req, res) => {
  const { role, name, email, phone, experience, noticePeriod, message } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and phone number are required.'
    });
  }

  // In production, this can forward to humans@prestloans.com or save to DB
  console.log(`[Job Application Received] Role: ${role || 'General'} | Applicant: ${name} (${phone}, ${email})`);

  return res.json({
    success: true,
    message: 'Your job application has been successfully received! Our HR team will reach out shortly.',
    applicationRef: 'PL-HR-' + Date.now().toString(36).toUpperCase()
  });
};
