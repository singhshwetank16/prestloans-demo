/**
 * Prest Loans - Central Site Configuration
 * Lord Krishna Financial Services Ltd (RBI Registered NBFC: B-14.02019)
 */

module.exports = {
  name: 'Prest Loans',
  legalName: 'Lord Krishna Financial Services Ltd',
  tagline: 'Fast, Flexible & Transparent Digital Lending Platform',
  rbiRegNo: 'B-14.02019',
  cin: 'U74899DL1992PLC047069',
  established: 1992,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',

  contact: {
    phones: [
      { display: '011-45241131', href: 'tel:+911145241131' },
      { display: '011-45241123', href: 'tel:+911145241123' }
    ],
    whatsapp: {
      display: '+91-9711669090',
      href: 'https://wa.me/919711669090?text=Hello%20Prest%20Loans,%20I%20am%20interested%20in%20a%20loan.'
    },
    emails: {
      support: 'loan@prestloans.com',
      investors: 'investors@prestloans.com',
      grievance: 'nodal.officer@prestloans.com',
      careers: 'humans@prestloans.com'
    },
    timings: 'Mon - Fri: 9:30 AM - 6:00 PM | 1st, 3rd & 5th Sat: 9:30 AM - 6:00 PM',
    timingsShort: 'Mon - Sat: 9:30 AM - 6:00 PM (Closed 2nd & 4th Sat)',
    addresses: {
      registered: '1/18, 2nd Floor, Asaf Ali Road, New Delhi - 110002, India',
      corporate: 'Prest Loans Corporate Centre, Delhi NCR, India'
    }
  },

  socials: [
    { name: 'Facebook', key: 'fb', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/Prestloans/' },
    { name: 'X (Twitter)', key: 'x', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/prestloans' },
    { name: 'LinkedIn', key: 'in', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/prestloans/' },
    { name: 'YouTube', key: 'yt', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@prestloans' },
    { name: 'Instagram', key: 'ig', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/prestloans/' }
  ],

  navLinks: [
    { label: 'Home', href: '/', key: 'home' },
    { label: 'About us', href: '/about', key: 'about' },
    { label: 'Products', href: '/products', key: 'products' },
    { label: 'EMI Calculator', href: '/calculator', key: 'calculator' },
    { label: "Customers' Stories", href: '/customers-stories', key: 'customers-stories' },
    { label: 'Career', href: '/career', key: 'career' },
    { label: 'FAQ', href: '/faq', key: 'faq' }
  ],

  loanProducts: [
    {
      id: 'skill',
      name: 'Coaching / Skill Development / Education Loan',
      shortName: 'Education Loan',
      amount: 'Up to ₹5,00,000',
      tenure: '6 to 36 Months',
      interest: 'Starting @ 1.25% p.m.',
      turnaround: 'Approval in 24 hrs'
    },
    {
      id: 'personal',
      name: 'Personal Loan',
      shortName: 'Personal Loan',
      amount: 'Up to ₹3,00,000',
      tenure: '12 to 36 Months',
      interest: 'Starting @ 1.33% p.m.',
      turnaround: 'Disbursal in 48 hrs'
    },
    {
      id: 'stpl',
      name: 'Short Term Personal Loan (STPL)',
      shortName: 'STPL',
      amount: '₹10,000 to ₹1,00,000',
      tenure: '3 to 12 Months',
      interest: 'Starting @ 1.5% p.m.',
      turnaround: 'Instant Digital TAT'
    },
    {
      id: 'home',
      name: 'Home Loan / Improvement Loan',
      shortName: 'Home Loan',
      amount: 'Up to ₹25,00,000',
      tenure: 'Up to 15 Years',
      interest: 'Attractive Floating Rates',
      turnaround: 'Hassle-free Processing'
    },
    {
      id: 'business',
      name: 'Business Loan / MSME Credit',
      shortName: 'Business Loan',
      amount: 'Up to ₹20,00,000',
      tenure: '12 to 60 Months',
      interest: 'Competitive NBFC Terms',
      turnaround: 'Collateral-free Options'
    }
  ]
};
