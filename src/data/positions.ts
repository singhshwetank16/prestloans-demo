export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  joining: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'manager-credit-products',
    title: 'Manager – Credit (Products)',
    department: 'Credit',
    location: 'Asaf Ali Road (Central Delhi)',
    experience: '5 to 7 Years',
    type: 'Full Time',
    joining: 'Immediate / Early Joiners Preferred',
    responsibilities: [
      'Manage credit underwriting and risk assessment for Personal Loans (Unsecured Loans) and Skill Development Loan products.',
      'Review loan applications and take underwriting decisions as per approved credit policies and risk parameters.',
      'Develop, review, and revise credit policies based on product requirements and business objectives.',
      'Design and implement product-specific credit programs and eligibility criteria.',
      'Monitor portfolio performance and recommend policy enhancements to improve asset quality and business growth.',
      'Collaborate with Operations, Risk, Business, and Technology teams for effective product implementation.',
      'Drive digital lending initiatives and automated credit decision-making processes.',
      'Analyze market trends, customer segments, and competitor offerings for product enhancement.',
      'Ensure compliance with regulatory guidelines and internal risk frameworks.',
      'Prepare Credit MIS, portfolio analysis reports, and management presentations.',
      'Improve underwriting processes, approval TAT, and overall customer experience.'
    ],
    qualifications: [
      'Strong expertise in Credit Underwriting and Risk Assessment.',
      'Sound knowledge of Personal Loans, Unsecured Lending, and Skill Development Loan products.',
      'Experience in Credit Policy Formulation and Product Development.',
      'Understanding of Digital Lending Platforms and Fintech Ecosystem.',
      'Strong analytical, decision-making, and portfolio monitoring capabilities.',
      'Excellent communication, stakeholder management, and leadership skills.',
      'Proficiency in MIS Reporting, Data Analysis, and Risk Monitoring.',
      'Candidates with relevant experience in NBFC, Banking, Financial Institutions, or Fintech companies will be preferred.'
    ]
  }
];
