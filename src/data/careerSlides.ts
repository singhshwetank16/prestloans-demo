export interface CareerSlide {
  id: number;
  name: string;
  shortName: string;
  desig: string;
  img?: string;
  initials?: string;
  badge: string;
  dept: string;
  deptIcon: string;
  quote: string;
  chips: string[];
}

export const CAREER_SLIDES: CareerSlide[] = [
  {
    id: 0,
    name: 'Ravi Shanker Singh',
    shortName: 'Ravi S.',
    desig: 'Manager - IT',
    img: '/assets/employee/638617409647967189Ravi.jpeg',
    badge: 'Verified Leader',
    dept: 'IT & Infrastructure',
    deptIcon: 'fa-solid fa-server',
    quote: 'Working with Prest Loans has been a truly fulfilling experience. The organization has provided me an empowering platform to accelerate my career within a dynamic and forward-thinking fintech environment. Our leadership fosters innovation, and my colleagues are exceptionally collaborative. It is truly an inspiring place to build a long-term professional journey.',
    chips: ['Leadership Support', 'High Efficiency']
  },
  {
    id: 1,
    name: 'Shwetank Singh',
    shortName: 'Shwetank S.',
    desig: 'Deputy Manager - IT',
    img: '/assets/employee/Shwetank Singh.png',
    badge: 'Verified Manager',
    dept: 'IT & Technical Expert',
    deptIcon: 'fa-solid fa-laptop-code',
    quote: "I recently joined PrestLoans as a Web Developer, and it has been a great experience so far. My responsibilities include website development, maintenance, performance optimization, and managing technical operations. I am excited to contribute my technical skills, explore innovative solutions, and grow professionally while supporting the company's digital growth and success.",
    chips: ['Web Developer', 'Tech Operations']
  },
  {
    id: 2,
    name: 'Shumaila',
    shortName: 'Shumaila',
    desig: 'Executive - Collections',
    img: '/assets/employee/638594064256074464Shumaila.jpg',
    badge: 'Verified Executive',
    dept: 'Recovery & Collections',
    deptIcon: 'fa-solid fa-hand-holding-dollar',
    quote: 'Prest Loans fosters an exceptionally collaborative and encouraging workplace. The organization actively invests in employee upskilling and continuous development, giving each of us the guidance needed to excel. I take immense pride in our team’s collective success and look forward to a long and rewarding association here.',
    chips: ['Co-operative Culture', 'Skill Development']
  },
  {
    id: 3,
    name: 'Nitish Kumar',
    shortName: 'Nitish K.',
    desig: 'AM - Audit & Risk',
    img: '/assets/employee/638592323501454725IMG-20230513-WA0006.jpg',
    badge: 'Verified Leader',
    dept: 'Audit & Risk',
    deptIcon: 'fa-solid fa-scale-balanced',
    quote: 'My journey as Assistant Manager in Audit & Risk at Prest Loans has been transformative. The leadership team empowers professionals with autonomy and trust, while our cross-functional teams offer constant encouragement. Being part of the Prest Loans family has truly elevated my professional standards.',
    chips: ['PrestLoans Family', 'Continuous Learning']
  },
  {
    id: 4,
    name: 'Radhika Rautela',
    shortName: 'Radhika R.',
    desig: 'Senior Manager - F & A',
    img: '/assets/employee/638592323130324277IMG-20231111-WA0031.jpg',
    badge: 'Senior Management',
    dept: 'Finance & Accounts',
    deptIcon: 'fa-solid fa-coins',
    quote: 'It is a privilege to lead within Prest Loans’ Finance & Accounts division. What stands out most is our forward-looking corporate governance and visionary leadership that consistently inspires teams to pioneer innovative financial processes and deliver operational excellence.',
    chips: ['Freedom to Innovate', 'Motivating Leadership']
  },
  {
    id: 5,
    name: 'Sharmin Khan',
    shortName: 'Sharmin K.',
    desig: 'Executive - Collections',
    img: '/assets/employee/638592322661684147sharmin khan.jpeg',
    badge: 'Verified Executive',
    dept: 'Collections',
    deptIcon: 'fa-solid fa-clipboard-check',
    quote: 'Prest Loans is one of India’s fastest-growing, forward-thinking NBFCs. The positive work culture and transparent mentorship here have helped me conquer new challenges, sharpen my professional competencies, and build unshakeable confidence. I take great pride in contributing to our ongoing expansion.',
    chips: ['Boosted Confidence', 'Fastest Growing NBFC']
  },
  {
    id: 6,
    name: 'Priyanka Kumari',
    shortName: 'Priyanka K.',
    desig: 'Executive – HR & Admin',
    img: '/assets/employee/638278698838370661Priyanka.jpg',
    badge: 'HR & People Team',
    dept: 'HR & Administration',
    deptIcon: 'fa-solid fa-users-gear',
    quote: 'Working with the People & Culture team at Prest Loans since June 2022 has been profoundly rewarding. The executive leadership and colleagues are remarkably encouraging, fostering a daily culture of knowledge sharing and mutual respect. It is an outstanding environment for ambitious professionals.',
    chips: ['Daily Learning', 'Supportive Seniors']
  },
  {
    id: 7,
    name: 'Poonam Tiwari',
    shortName: 'Poonam T.',
    desig: 'Assistant Manager',
    img: '/assets/employee/637342324521757329lal.jpg',
    badge: 'Channel Sales',
    dept: 'Channel Sales & Growth',
    deptIcon: 'fa-solid fa-chart-line',
    quote: 'Joining Prest Loans has been one of the most rewarding decisions of my career. The workplace radiates positive energy, camaraderie, and genuine warmth where team members support one another like family. Our leadership provides unmatched mentorship and encouragement every single day.',
    chips: ['Joyful Workplace', 'Family-Like Bond']
  },
  {
    id: 8,
    name: 'Deepika',
    shortName: 'Deepika',
    desig: 'Manager - Ops, Audit & Risk',
    img: '/assets/employee/638594052872023421Deepika.jpg',
    badge: 'Verified Leader',
    dept: 'Ops, Audit & Risk',
    deptIcon: 'fa-solid fa-shield-halved',
    quote: 'Being a part of Prest Loans for over two years has been a remarkable milestone. Our organization unites brilliant talent, ethical governance, and a vibrant culture that actively celebrates innovation and merit. Prest Loans is a premier workplace for those who aspire to lead and make an impact.',
    chips: ['Recognition of Merit', '2+ Years Strong']
  },
  {
    id: 9,
    name: 'Sandeep Saini',
    shortName: 'Sandeep S.',
    desig: 'Director',
    img: '/assets/employee/636451437167585000sandeep.jpg',
    badge: 'Director',
    dept: 'Leadership & Governance',
    deptIcon: 'fa-solid fa-landmark',
    quote: 'Prest Loans exemplifies what modern corporate culture should be: transparent leadership, constructive mentorship, and the flexibility to innovate in how we deliver results. Our teams are open, approachable, and driven by a shared vision of financial inclusion. It is truly a world-class workplace.',
    chips: ['Approachable Leaders', 'Work Flexibility']
  },
  {
    id: 10,
    name: 'Prakash Soni',
    shortName: 'Prakash S.',
    desig: 'Deputy Manager – Collections',
    img: '/assets/employee/Soni.jpeg',
    badge: 'Collections Leader',
    dept: 'Collections & Recovery',
    deptIcon: 'fa-solid fa-hand-holding-dollar',
    quote: 'The collaborative work culture, mutual trust, and teamwork have played an important role in my professional development. Working together towards common goals not only strengthens the organization but also provides valuable opportunities to learn, grow, and improve.',
    chips: ['Mutual Trust', 'Teamwork & Growth']
  },
  {
    id: 11,
    name: 'Rana Pratap',
    shortName: 'Rana P.',
    desig: 'Admin',
    img: '/assets/employee/Rana.jpeg',
    badge: '9+ Yrs Veteran',
    dept: 'Administration',
    deptIcon: 'fa-solid fa-building',
    quote: "It has been a wonderful journey of nine years with this company. I joined as a fresher, and these years have given me so much learning, growth, and unforgettable memories. Time has truly flown by! What makes this company special is that we are not just colleagues, but one big family. I am proud to be part of this family and will always give my best to contribute to the company's continued growth and success.",
    chips: ['One Big Family', '9 Years Journey']
  },
  {
    id: 12,
    name: 'Gagan Deep',
    shortName: 'Gagan D.',
    desig: 'Operation Executive',
    initials: 'GD',
    badge: 'Operations Team',
    dept: 'Loan Operations',
    deptIcon: 'fa-solid fa-gear',
    quote: "Having been associated with Prest Loans for over 6 months, I have gained valuable professional experience and enhanced my skills in loan operations, credit management, and financial processes. The supportive work environment, collaborative team, and continuous learning opportunities have helped me grow professionally and contribute towards the company's success.",
    chips: ['Skill Enhancement', 'Loan Operations']
  },
  {
    id: 13,
    name: 'Mukesh Chaurasiya',
    shortName: 'Mukesh C.',
    desig: 'Operation Executive',
    img: '/assets/employee/Mukesh.jpeg',
    badge: 'Operations Team',
    dept: 'Loan Operations',
    deptIcon: 'fa-solid fa-gear',
    quote: 'Prest Loans is a great organization that provides excellent opportunities for professional growth and career development. The company offers a positive, supportive, and challenging work environment where employees can enhance their knowledge. The leadership team is supportive, and colleagues are always cooperative and helpful. It is truly a great place to learn, grow, and build a successful career. I feel proud to be a part of Prest Loans.',
    chips: ['Career Development', 'Cooperative Team']
  },
  {
    id: 14,
    name: 'Roshan Vishwakarma',
    shortName: 'Roshan V.',
    desig: 'Operation Executive',
    initials: 'RV',
    badge: 'Operations Team',
    dept: 'Loan Operations',
    deptIcon: 'fa-solid fa-gear',
    quote: 'Prest Loans is a recognized, RBI-registered company with fair and transparent policies. Working in the operations department has been a great experience. The entire experienced management is supportive and helpful. I have had wonderful learning opportunities here that helped me grow professionally. It is a great place to work.',
    chips: ['Fair Policies', 'Learning Opportunities']
  },
  {
    id: 15,
    name: 'Vinay Rohilla',
    shortName: 'Vinay R.',
    desig: 'Operation Executive',
    initials: 'VR',
    badge: 'Operations Team',
    dept: 'Loan Operations',
    deptIcon: 'fa-solid fa-gear',
    quote: 'Working at Prest Loans has been a great experience, providing me with a positive work environment and opportunities to learn and grow professionally. I truly appreciate the supportive management, teamwork, and continuous learning opportunities that help me improve my skills every day.',
    chips: ['Supportive Management', 'Daily Skill Growth']
  }
];
