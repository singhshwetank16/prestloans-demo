export interface DiaryPhoto {
  id: string;
  src: string;
  title: string;
  caption?: string;
}

export interface DiaryEvent {
  id: string;
  name: string;
  date: string;
  location?: string;
  category: string;
  badge?: string;
  coverImage: string;
  description: string;
  photos: DiaryPhoto[];
}

/**
 * PRESTLOANS DIARIES DATA
 * 
 * Aap yahan naye events add kar sakte hain ya existing events mein images add/modify kar sakte hain.
 * Har event mein uska name, date, coverImage aur photos array hota hai.
 */
export const DIARY_EVENTS: DiaryEvent[] = [
  {
    id: 'annual-leadership-meet-2024',
    name: 'Annual Leadership & Strategy Summit',
    date: 'January 2024',
    location: 'New Delhi Corporate HQ',
    category: 'Leadership',
    badge: 'Annual Summit',
    coverImage: '/assets/gallery/photo_gallery/1.jpg',
    description: 'All-hands leadership convention charting digital underwriting growth, FinTech product roadmaps, and portfolio expansion milestones for FY 2024-25.',
    photos: [
      {
        id: 'summit-1',
        src: '/assets/gallery/photo_gallery/1.jpg',
        title: 'Leadership Strategy Keynote',
        caption: 'Director & senior management reviewing credit performance'
      },
      {
        id: 'summit-2',
        src: '/assets/gallery/photo_gallery/16.jpg',
        title: 'All-Hands Tech & Risk Meeting',
        caption: 'Credit risk algorithm review with the operations team'
      },
      {
        id: 'summit-3',
        src: '/assets/gallery/photo_gallery/4.jpg',
        title: 'Interactive Strategy Session',
        caption: 'Cross-functional alignment across IT, Risk, and Collections'
      },
      {
        id: 'summit-4',
        src: '/assets/gallery/photo_gallery/7.jpg',
        title: 'Fintech Transformation Workshop',
        caption: 'Deep dive into paperless loan verification and e-NACH flow'
      }
    ]
  },
  {
    id: 'customer-felicitation-ceremony',
    name: 'Borrower Felicitation & MSME Excellence Awards',
    date: 'March 2024',
    location: 'Jaipur & Delhi Hubs',
    category: 'Awards & Meets',
    badge: 'Customer Milestone',
    coverImage: '/assets/gallery/photo_gallery/2.jpg',
    description: 'Celebrating high-performing MSME entrepreneurs, self-employed business owners, and women borrowers achieving scale with Prest Loans capital.',
    photos: [
      {
        id: 'award-1',
        src: '/assets/gallery/photo_gallery/2.jpg',
        title: 'Customer Felicitation Ceremony',
        caption: 'Honoring micro-entrepreneurs on successful loan repayment cycles'
      },
      {
        id: 'award-2',
        src: '/assets/gallery/photo_gallery/5.jpg',
        title: 'Annual Recognition & Trophy Distribution',
        caption: 'Prest Loans borrower achievements award ceremony'
      },
      {
        id: 'award-3',
        src: '/assets/gallery/photo_gallery/8.jpg',
        title: 'Grassroots Borrower Outreach',
        caption: 'Community meeting with local retail traders and craftspeople'
      },
      {
        id: 'award-4',
        src: '/assets/gallery/photo_gallery/15.jpg',
        title: 'Borrower Success Milestone',
        caption: 'Commemorating 25,000+ happy borrowers across India'
      }
    ]
  },
  {
    id: 'branch-expansion-launch',
    name: 'Regional Branch Network Expansion Launch',
    date: 'July 2024',
    location: 'Rajasthan & North India',
    category: 'Milestones',
    badge: 'Expansion',
    coverImage: '/assets/gallery/photo_gallery/6.jpg',
    description: 'Inauguration of dedicated commercial credit centers and physical hubs to support localized underwriting and tier-2 market financial inclusion.',
    photos: [
      {
        id: 'branch-1',
        src: '/assets/gallery/photo_gallery/6.jpg',
        title: 'Branch Network Expansion Ribbon Cutting',
        caption: 'Opening new regional lending hub with the local team'
      },
      {
        id: 'branch-2',
        src: '/assets/gallery/photo_gallery/3.jpeg',
        title: 'Central Operations & Underwriting Desk',
        caption: 'High-speed credit processing unit at Essel House, Asaf Ali Road'
      },
      {
        id: 'branch-3',
        src: '/assets/gallery/photo_gallery/9.jpg',
        title: 'Underwriting Team Operations',
        caption: 'Paperless appraisal desk reviewing loan applications'
      },
      {
        id: 'branch-4',
        src: '/assets/gallery/photo_gallery/10.jpg',
        title: 'Customer Support Desk',
        caption: 'Dedicated helpline staff resolving borrower queries'
      }
    ]
  },
  {
    id: 'team-culture-celebrations',
    name: 'Diwali & Festival Celebrations at Office',
    date: 'November 2024',
    location: 'Head Office, New Delhi',
    category: 'Culture & Festivals',
    badge: 'Celebrations',
    coverImage: '/assets/gallery/photo_gallery/11.jpg',
    description: 'Joyful festival festivities, team building activities, office decor, and celebration of the vibrant Prest Loans family spirit.',
    photos: [
      {
        id: 'fest-1',
        src: '/assets/gallery/photo_gallery/11.jpg',
        title: 'Office Festive Celebrations',
        caption: 'Staff and management celebrating togetherness at Head Office'
      },
      {
        id: 'fest-2',
        src: '/assets/gallery/photo_gallery/13.jpg',
        title: 'Team Bonding & Sweet Distribution',
        caption: 'Cultural afternoon with cross-department colleagues'
      },
      {
        id: 'fest-3',
        src: '/assets/gallery/photo_gallery/14.jpg',
        title: 'Group Photo & Festive Cheers',
        caption: 'Prest Loans team members sharing warm festival greetings'
      },
      {
        id: 'fest-4',
        src: '/assets/gallery/photo_gallery/17.jpg',
        title: 'Executive Fellowship & Dinner',
        caption: 'Evening celebration with directors, managers, and team'
      }
    ]
  }
];
