export interface DiaryPhoto {
  id: string;
  src: string;
  title: string;
  caption?: string;
}

export interface DiaryEvent {
  id: string;
  folderName: string;
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
 * Yeh data aapke 'public/assets/gallery/' ke folders se automatically synced hai.
 * Kisi bhi folder mein naye photos add karke aap isme aur images daal sakte hain.
 */
export const DIARY_EVENTS: DiaryEvent[] = [
  {
    "id": "diwali-celebration-2026",
    "folderName": "Diwali Celebration 2026",
    "name": "Diwali Celebration 2026",
    "date": "Diwali 2026",
    "location": "Head Office, New Delhi",
    "category": "Festival",
    "badge": "Festive Moments",
    "coverImage": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0038.jpg.jpeg",
    "description": "Grand Diwali 2026 celebrations at Prest Loans featuring traditional attire, office illumination, Lakshmi Puja, sweets, and joyous team celebrations.",
    "photos": [
      {
        "id": "diwali-celebration-2026-1",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0038.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 1",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-2",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0041.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 2",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-3",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0043.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 3",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-4",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0054.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 4",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-5",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0055.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 5",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-6",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0058.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 6",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-7",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0061.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 7",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-8",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0064.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 8",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-9",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0072.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 9",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-10",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0073.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 10",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-11",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0076.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 11",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-12",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0078.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 12",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-13",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0080.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 13",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-14",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0087.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 14",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-15",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0115.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 15",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-16",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0117.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 16",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-17",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0119.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 17",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-18",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0121.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 18",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-19",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0123.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 19",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-20",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0125.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 20",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-21",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0127.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 21",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-22",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0129.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 22",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-23",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0131.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 23",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-24",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0133.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 24",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-25",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0135.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 25",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-26",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0137.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 26",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-27",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0163.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 27",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-28",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0165.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 28",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-29",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0167.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 29",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-30",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0169.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 30",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-31",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0171.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 31",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-32",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0173.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 32",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-33",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0175.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 33",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-34",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0177.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 34",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-35",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0179.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 35",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-36",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0181.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 36",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-37",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0183.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 37",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-38",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0185.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 38",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-39",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0187.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 39",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-40",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0189.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 40",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-41",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0191.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 41",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-42",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0193.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 42",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-43",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0195.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 43",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-44",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0197.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 44",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-45",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0199.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 45",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-46",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0201.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 46",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-47",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0203.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 47",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-48",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0205.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 48",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-49",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0207.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 49",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-50",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0209.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 50",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-51",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0211.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 51",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-52",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0213.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 52",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-53",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0215.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 53",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-54",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0216.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 54",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-55",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0217.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 55",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-56",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0218.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 56",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-57",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0219.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 57",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-58",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0220.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 58",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-59",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0221.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 59",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-60",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0222.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 60",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-61",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0223.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 61",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-62",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0224.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 62",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-63",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0225.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 63",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-64",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0226.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 64",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-65",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0227.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 65",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-66",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0229.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 66",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-67",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0231.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 67",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-68",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0237.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 68",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-69",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0255.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 69",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-70",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0325.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 70",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-71",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0333.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 71",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-72",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0336.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 72",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-73",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0338.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 73",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-74",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0341.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 74",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-75",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0343.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 75",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-76",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0344.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 76",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-77",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0346.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 77",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-78",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0349.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 78",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-79",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0351.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 79",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-80",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0399.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 80",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-81",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0458.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 81",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-82",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0473.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 82",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-83",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0474.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 83",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-84",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0479.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 84",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-85",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0481.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 85",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-86",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0483.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 86",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-87",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0484.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 87",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-88",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0491.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 88",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-89",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0497.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 89",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-90",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0511.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 90",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-91",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0529.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 91",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-92",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0536.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 92",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-93",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0543.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 93",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-94",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0544.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 94",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-95",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0545.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 95",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-96",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0546.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 96",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-97",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0548.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 97",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-98",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0550.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 98",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-99",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0553.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 99",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-100",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261106-WA0554.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 100",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-101",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261107-WA0003.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 101",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-102",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261107-WA0004.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 102",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      },
      {
        "id": "diwali-celebration-2026-103",
        "src": "/assets/gallery/Diwali%20Celebration%202026/IMG-20261107-WA0006.jpg.jpeg",
        "title": "Diwali Celebration 2026 - Photo 103",
        "caption": "Diwali Celebration 2026 (Diwali 2026)"
      }
    ]
  },

  {
    "id": "annual-day-celebration-2025",
    "folderName": "Annual Day Celebration 2025",
    "name": "Annual Day Celebration 2025",
    "date": "2025",
    "location": "New Delhi",
    "category": "Annual Day",
    "badge": "Annual Day",
    "coverImage": "/assets/gallery/Annual%20Day%20Celebration%202025/001.jpeg",
    "description": "Prest Loans Annual Day celebration commemorating organizational growth, achievements, employee felicitation, and culture.",
    "photos": [
      {
        "id": "annual-day-celebration-2025-1",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/001.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 1",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-2",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/002.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 2",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-3",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/003.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 3",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-4",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/004.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 4",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-5",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/005.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 5",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-6",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/006.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 6",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-7",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/007.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 7",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-8",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/008.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 8",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-9",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/009.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 9",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-10",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/010.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 10",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-11",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/011.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 11",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-12",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/012.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 12",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-13",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/013.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 13",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-14",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/014.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 14",
        "caption": "Annual Day Celebration 2025 (2025)"
      },
      {
        "id": "annual-day-celebration-2025-15",
        "src": "/assets/gallery/Annual%20Day%20Celebration%202025/015.jpeg",
        "title": "Annual Day Celebration 2025 - Photo 15",
        "caption": "Annual Day Celebration 2025 (2025)"
      }
    ]
  },
  {
    "id": "diwali-2025",
    "folderName": "Diwali_2025",
    "name": "Diwali Celebration 2025",
    "date": "Diwali 2025",
    "location": "Head Office, New Delhi",
    "category": "Festival",
    "badge": "Festive Moments",
    "coverImage": "/assets/gallery/Diwali_2025/001.jpg",
    "description": "Vibrant Diwali festivities at Prest Loans office with traditional celebrations, sweets, decor, and joyous team bonding.",
    "photos": [
      {
        "id": "diwali-2025-1",
        "src": "/assets/gallery/Diwali_2025/001.jpg",
        "title": "Diwali Celebration 2025 - Photo 1",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-2",
        "src": "/assets/gallery/Diwali_2025/002.jpg",
        "title": "Diwali Celebration 2025 - Photo 2",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-3",
        "src": "/assets/gallery/Diwali_2025/003.jpg",
        "title": "Diwali Celebration 2025 - Photo 3",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-4",
        "src": "/assets/gallery/Diwali_2025/004.jpg",
        "title": "Diwali Celebration 2025 - Photo 4",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-5",
        "src": "/assets/gallery/Diwali_2025/005.jpg",
        "title": "Diwali Celebration 2025 - Photo 5",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-6",
        "src": "/assets/gallery/Diwali_2025/006.jpg",
        "title": "Diwali Celebration 2025 - Photo 6",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-7",
        "src": "/assets/gallery/Diwali_2025/007.jpg",
        "title": "Diwali Celebration 2025 - Photo 7",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-8",
        "src": "/assets/gallery/Diwali_2025/008.jpg",
        "title": "Diwali Celebration 2025 - Photo 8",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-9",
        "src": "/assets/gallery/Diwali_2025/009.jpg",
        "title": "Diwali Celebration 2025 - Photo 9",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-10",
        "src": "/assets/gallery/Diwali_2025/010.jpg",
        "title": "Diwali Celebration 2025 - Photo 10",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-11",
        "src": "/assets/gallery/Diwali_2025/011.jpg",
        "title": "Diwali Celebration 2025 - Photo 11",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-12",
        "src": "/assets/gallery/Diwali_2025/012.jpg",
        "title": "Diwali Celebration 2025 - Photo 12",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-13",
        "src": "/assets/gallery/Diwali_2025/013.jpg",
        "title": "Diwali Celebration 2025 - Photo 13",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-14",
        "src": "/assets/gallery/Diwali_2025/014.jpg",
        "title": "Diwali Celebration 2025 - Photo 14",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-15",
        "src": "/assets/gallery/Diwali_2025/015.jpg",
        "title": "Diwali Celebration 2025 - Photo 15",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-16",
        "src": "/assets/gallery/Diwali_2025/016.jpg",
        "title": "Diwali Celebration 2025 - Photo 16",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-17",
        "src": "/assets/gallery/Diwali_2025/017.jpg",
        "title": "Diwali Celebration 2025 - Photo 17",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-18",
        "src": "/assets/gallery/Diwali_2025/018.jpg",
        "title": "Diwali Celebration 2025 - Photo 18",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-19",
        "src": "/assets/gallery/Diwali_2025/019.jpg",
        "title": "Diwali Celebration 2025 - Photo 19",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-20",
        "src": "/assets/gallery/Diwali_2025/020.jpg",
        "title": "Diwali Celebration 2025 - Photo 20",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-21",
        "src": "/assets/gallery/Diwali_2025/021.jpg",
        "title": "Diwali Celebration 2025 - Photo 21",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-22",
        "src": "/assets/gallery/Diwali_2025/022.jpg",
        "title": "Diwali Celebration 2025 - Photo 22",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-23",
        "src": "/assets/gallery/Diwali_2025/023.jpg",
        "title": "Diwali Celebration 2025 - Photo 23",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-24",
        "src": "/assets/gallery/Diwali_2025/024.jpg",
        "title": "Diwali Celebration 2025 - Photo 24",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-25",
        "src": "/assets/gallery/Diwali_2025/025.jpg",
        "title": "Diwali Celebration 2025 - Photo 25",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-26",
        "src": "/assets/gallery/Diwali_2025/026.jpg",
        "title": "Diwali Celebration 2025 - Photo 26",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-27",
        "src": "/assets/gallery/Diwali_2025/027.jpg",
        "title": "Diwali Celebration 2025 - Photo 27",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-28",
        "src": "/assets/gallery/Diwali_2025/028.jpg",
        "title": "Diwali Celebration 2025 - Photo 28",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-29",
        "src": "/assets/gallery/Diwali_2025/029.jpg",
        "title": "Diwali Celebration 2025 - Photo 29",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-30",
        "src": "/assets/gallery/Diwali_2025/030.jpg",
        "title": "Diwali Celebration 2025 - Photo 30",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-31",
        "src": "/assets/gallery/Diwali_2025/031.jpg",
        "title": "Diwali Celebration 2025 - Photo 31",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-32",
        "src": "/assets/gallery/Diwali_2025/032.jpg",
        "title": "Diwali Celebration 2025 - Photo 32",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-33",
        "src": "/assets/gallery/Diwali_2025/033.jpg",
        "title": "Diwali Celebration 2025 - Photo 33",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-34",
        "src": "/assets/gallery/Diwali_2025/034.jpg",
        "title": "Diwali Celebration 2025 - Photo 34",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-35",
        "src": "/assets/gallery/Diwali_2025/035.jpg",
        "title": "Diwali Celebration 2025 - Photo 35",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-36",
        "src": "/assets/gallery/Diwali_2025/036.jpg",
        "title": "Diwali Celebration 2025 - Photo 36",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-37",
        "src": "/assets/gallery/Diwali_2025/037.jpg",
        "title": "Diwali Celebration 2025 - Photo 37",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-38",
        "src": "/assets/gallery/Diwali_2025/038.jpg",
        "title": "Diwali Celebration 2025 - Photo 38",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-39",
        "src": "/assets/gallery/Diwali_2025/039.jpg",
        "title": "Diwali Celebration 2025 - Photo 39",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-40",
        "src": "/assets/gallery/Diwali_2025/040.jpg",
        "title": "Diwali Celebration 2025 - Photo 40",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-41",
        "src": "/assets/gallery/Diwali_2025/041.jpg",
        "title": "Diwali Celebration 2025 - Photo 41",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-42",
        "src": "/assets/gallery/Diwali_2025/042.jpg",
        "title": "Diwali Celebration 2025 - Photo 42",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-43",
        "src": "/assets/gallery/Diwali_2025/043.jpg",
        "title": "Diwali Celebration 2025 - Photo 43",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-44",
        "src": "/assets/gallery/Diwali_2025/044.jpg",
        "title": "Diwali Celebration 2025 - Photo 44",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-45",
        "src": "/assets/gallery/Diwali_2025/045.jpg",
        "title": "Diwali Celebration 2025 - Photo 45",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-46",
        "src": "/assets/gallery/Diwali_2025/046.jpg",
        "title": "Diwali Celebration 2025 - Photo 46",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-47",
        "src": "/assets/gallery/Diwali_2025/047.jpg",
        "title": "Diwali Celebration 2025 - Photo 47",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-48",
        "src": "/assets/gallery/Diwali_2025/048.jpg",
        "title": "Diwali Celebration 2025 - Photo 48",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-49",
        "src": "/assets/gallery/Diwali_2025/049.jpg",
        "title": "Diwali Celebration 2025 - Photo 49",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-50",
        "src": "/assets/gallery/Diwali_2025/050.jpg",
        "title": "Diwali Celebration 2025 - Photo 50",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-51",
        "src": "/assets/gallery/Diwali_2025/051.jpg",
        "title": "Diwali Celebration 2025 - Photo 51",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-52",
        "src": "/assets/gallery/Diwali_2025/052.jpg",
        "title": "Diwali Celebration 2025 - Photo 52",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-53",
        "src": "/assets/gallery/Diwali_2025/053.jpg",
        "title": "Diwali Celebration 2025 - Photo 53",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-54",
        "src": "/assets/gallery/Diwali_2025/054.jpg",
        "title": "Diwali Celebration 2025 - Photo 54",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-55",
        "src": "/assets/gallery/Diwali_2025/055.jpg",
        "title": "Diwali Celebration 2025 - Photo 55",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      },
      {
        "id": "diwali-2025-56",
        "src": "/assets/gallery/Diwali_2025/056.jpg",
        "title": "Diwali Celebration 2025 - Photo 56",
        "caption": "Diwali Celebration 2025 (Diwali 2025)"
      }
    ]
  },
  {
    "id": "holi-2026",
    "folderName": "Holi_2026",
    "name": "Holi Celebration 2026",
    "date": "March 2026",
    "location": "Head Office, New Delhi",
    "category": "Festival",
    "badge": "Colors & Joy",
    "coverImage": "/assets/gallery/Holi_2026/001.jpg",
    "description": "Colorful Holi festival celebration bringing together colleagues for an afternoon of colors, sweets, and festive camaraderie.",
    "photos": [
      {
        "id": "holi-2026-1",
        "src": "/assets/gallery/Holi_2026/001.jpg",
        "title": "Holi Celebration 2026 - Photo 1",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-2",
        "src": "/assets/gallery/Holi_2026/002.jpg",
        "title": "Holi Celebration 2026 - Photo 2",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-3",
        "src": "/assets/gallery/Holi_2026/003.jpg",
        "title": "Holi Celebration 2026 - Photo 3",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-4",
        "src": "/assets/gallery/Holi_2026/004.jpg",
        "title": "Holi Celebration 2026 - Photo 4",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-5",
        "src": "/assets/gallery/Holi_2026/005.jpg",
        "title": "Holi Celebration 2026 - Photo 5",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-6",
        "src": "/assets/gallery/Holi_2026/006.jpg",
        "title": "Holi Celebration 2026 - Photo 6",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-7",
        "src": "/assets/gallery/Holi_2026/007.jpg",
        "title": "Holi Celebration 2026 - Photo 7",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-8",
        "src": "/assets/gallery/Holi_2026/008.jpg",
        "title": "Holi Celebration 2026 - Photo 8",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-9",
        "src": "/assets/gallery/Holi_2026/009.jpg",
        "title": "Holi Celebration 2026 - Photo 9",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-10",
        "src": "/assets/gallery/Holi_2026/010.jpg",
        "title": "Holi Celebration 2026 - Photo 10",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-11",
        "src": "/assets/gallery/Holi_2026/011.jpg",
        "title": "Holi Celebration 2026 - Photo 11",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-12",
        "src": "/assets/gallery/Holi_2026/012.jpg",
        "title": "Holi Celebration 2026 - Photo 12",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-13",
        "src": "/assets/gallery/Holi_2026/013.jpg",
        "title": "Holi Celebration 2026 - Photo 13",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-14",
        "src": "/assets/gallery/Holi_2026/014.jpg",
        "title": "Holi Celebration 2026 - Photo 14",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-15",
        "src": "/assets/gallery/Holi_2026/015.jpg",
        "title": "Holi Celebration 2026 - Photo 15",
        "caption": "Holi Celebration 2026 (March 2026)"
      },
      {
        "id": "holi-2026-16",
        "src": "/assets/gallery/Holi_2026/016.jpg",
        "title": "Holi Celebration 2026 - Photo 16",
        "caption": "Holi Celebration 2026 (March 2026)"
      }
    ]
  },
  {
    "id": "trip-to-pratapghar",
    "folderName": "Trip To Pratapghar",
    "name": "Team Outing - Trip To Pratapgarh Farms",
    "date": "2025-2026",
    "location": "Pratapgarh Farms, Haryana",
    "category": "Team Offsite",
    "badge": "Team Outing",
    "coverImage": "/assets/gallery/Trip%20To%20Pratapghar/00.jpeg",
    "description": "Fun-filled team outing to Pratapgarh Farms featuring cultural rural games, traditional cuisine, adventure activities, and bonding.",
    "photos": [
      {
        "id": "trip-to-pratapghar-1",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/00.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 1",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-2",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/001.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 2",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-3",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/002.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 3",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-4",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/003.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 4",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-5",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/004.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 5",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-6",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/005.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 6",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-7",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/007.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 7",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-8",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/008.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 8",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-9",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/009.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 9",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-10",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/010.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 10",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-11",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/011.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 11",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-12",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/012.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 12",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-13",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/013.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 13",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-14",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/014.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 14",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-15",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/015.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 15",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-16",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/016.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 16",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-17",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/017.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 17",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-18",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/018.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 18",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-19",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/019.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 19",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-20",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/020.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 20",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-21",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/021.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 21",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-22",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/022.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 22",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-23",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/023.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 23",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-24",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/024.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 24",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-25",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/025.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 25",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-26",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/026.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 26",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      },
      {
        "id": "trip-to-pratapghar-27",
        "src": "/assets/gallery/Trip%20To%20Pratapghar/027.jpeg",
        "title": "Team Outing - Trip To Pratapgarh Farms - Photo 27",
        "caption": "Team Outing - Trip To Pratapgarh Farms (2025-2026)"
      }
    ]
  },
  {
    "id": "independence-day2026",
    "folderName": "Independence_Day2026",
    "name": "Independence Day 2026",
    "date": "August 2026",
    "location": "Head Office, New Delhi",
    "category": "National Event",
    "badge": "Patriotic Pride",
    "coverImage": "/assets/gallery/Independence_Day2026/001.jpeg",
    "description": "Independence Day celebration honoring India's heritage, freedom, and national pride at Prest Loans corporate office.",
    "photos": [
      {
        "id": "independence-day2026-1",
        "src": "/assets/gallery/Independence_Day2026/001.jpeg",
        "title": "Independence Day 2026 - Photo 1",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-2",
        "src": "/assets/gallery/Independence_Day2026/002.jpeg",
        "title": "Independence Day 2026 - Photo 2",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-3",
        "src": "/assets/gallery/Independence_Day2026/003.jpeg",
        "title": "Independence Day 2026 - Photo 3",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-4",
        "src": "/assets/gallery/Independence_Day2026/004.jpeg",
        "title": "Independence Day 2026 - Photo 4",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-5",
        "src": "/assets/gallery/Independence_Day2026/005.jpeg",
        "title": "Independence Day 2026 - Photo 5",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-6",
        "src": "/assets/gallery/Independence_Day2026/006.jpeg",
        "title": "Independence Day 2026 - Photo 6",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-7",
        "src": "/assets/gallery/Independence_Day2026/007.jpeg",
        "title": "Independence Day 2026 - Photo 7",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-8",
        "src": "/assets/gallery/Independence_Day2026/008.jpeg",
        "title": "Independence Day 2026 - Photo 8",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-9",
        "src": "/assets/gallery/Independence_Day2026/009.jpeg",
        "title": "Independence Day 2026 - Photo 9",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-10",
        "src": "/assets/gallery/Independence_Day2026/010.jpeg",
        "title": "Independence Day 2026 - Photo 10",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-11",
        "src": "/assets/gallery/Independence_Day2026/011.jpeg",
        "title": "Independence Day 2026 - Photo 11",
        "caption": "Independence Day 2026 (August 2026)"
      },
      {
        "id": "independence-day2026-12",
        "src": "/assets/gallery/Independence_Day2026/012.jpeg",
        "title": "Independence Day 2026 - Photo 12",
        "caption": "Independence Day 2026 (August 2026)"
      }
    ]
  },
  {
    "id": "79th-independence-day-celebrations-2025",
    "folderName": "79th Independence Day celebrations 2025",
    "name": "79th Independence Day Celebrations 2025",
    "date": "15 August 2025",
    "location": "Head Office, New Delhi",
    "category": "National Event",
    "badge": "79th Independence Day",
    "coverImage": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/001.jpeg",
    "description": "Commemorating the 79th Independence Day of India with patriotic fervor, flag ceremony, and festive sweets.",
    "photos": [
      {
        "id": "79th-independence-day-celebrations-2025-1",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/001.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 1",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-2",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/002.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 2",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-3",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/003.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 3",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-4",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/004.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 4",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-5",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/005.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 5",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-6",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/006.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 6",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      },
      {
        "id": "79th-independence-day-celebrations-2025-7",
        "src": "/assets/gallery/79th%20Independence%20Day%20celebrations%202025/007.jpeg",
        "title": "79th Independence Day Celebrations 2025 - Photo 7",
        "caption": "79th Independence Day Celebrations 2025 (15 August 2025)"
      }
    ]
  },
  {
    "id": "christmas-2026",
    "folderName": "Christmas_2026",
    "name": "Christmas Celebration 2026",
    "date": "December 2026",
    "location": "Head Office, New Delhi",
    "category": "Celebration",
    "badge": "Holiday Spirit",
    "coverImage": "/assets/gallery/Christmas_2026/001.jpg",
    "description": "Festive Christmas celebrations at office with Santa, Secret Santa gifts, holiday music, and team cheer.",
    "photos": [
      {
        "id": "christmas-2026-1",
        "src": "/assets/gallery/Christmas_2026/001.jpg",
        "title": "Christmas Celebration 2026 - Photo 1",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-2",
        "src": "/assets/gallery/Christmas_2026/002.jpg",
        "title": "Christmas Celebration 2026 - Photo 2",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-3",
        "src": "/assets/gallery/Christmas_2026/003.jpg",
        "title": "Christmas Celebration 2026 - Photo 3",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-4",
        "src": "/assets/gallery/Christmas_2026/004.jpeg",
        "title": "Christmas Celebration 2026 - Photo 4",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-5",
        "src": "/assets/gallery/Christmas_2026/005.jpeg",
        "title": "Christmas Celebration 2026 - Photo 5",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-6",
        "src": "/assets/gallery/Christmas_2026/006.jpeg",
        "title": "Christmas Celebration 2026 - Photo 6",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-7",
        "src": "/assets/gallery/Christmas_2026/007.jpeg",
        "title": "Christmas Celebration 2026 - Photo 7",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-8",
        "src": "/assets/gallery/Christmas_2026/008.jpeg",
        "title": "Christmas Celebration 2026 - Photo 8",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-9",
        "src": "/assets/gallery/Christmas_2026/009.jpeg",
        "title": "Christmas Celebration 2026 - Photo 9",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-10",
        "src": "/assets/gallery/Christmas_2026/010.jpeg",
        "title": "Christmas Celebration 2026 - Photo 10",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-11",
        "src": "/assets/gallery/Christmas_2026/011.jpeg",
        "title": "Christmas Celebration 2026 - Photo 11",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-12",
        "src": "/assets/gallery/Christmas_2026/012.jpeg",
        "title": "Christmas Celebration 2026 - Photo 12",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-13",
        "src": "/assets/gallery/Christmas_2026/013.jpeg",
        "title": "Christmas Celebration 2026 - Photo 13",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-14",
        "src": "/assets/gallery/Christmas_2026/014.jpeg",
        "title": "Christmas Celebration 2026 - Photo 14",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-15",
        "src": "/assets/gallery/Christmas_2026/015.jpeg",
        "title": "Christmas Celebration 2026 - Photo 15",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-16",
        "src": "/assets/gallery/Christmas_2026/016.jpeg",
        "title": "Christmas Celebration 2026 - Photo 16",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-17",
        "src": "/assets/gallery/Christmas_2026/017.jpeg",
        "title": "Christmas Celebration 2026 - Photo 17",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-18",
        "src": "/assets/gallery/Christmas_2026/018.jpeg",
        "title": "Christmas Celebration 2026 - Photo 18",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-19",
        "src": "/assets/gallery/Christmas_2026/019.jpeg",
        "title": "Christmas Celebration 2026 - Photo 19",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-20",
        "src": "/assets/gallery/Christmas_2026/020.jpeg",
        "title": "Christmas Celebration 2026 - Photo 20",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-21",
        "src": "/assets/gallery/Christmas_2026/021.jpeg",
        "title": "Christmas Celebration 2026 - Photo 21",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-22",
        "src": "/assets/gallery/Christmas_2026/022.jpeg",
        "title": "Christmas Celebration 2026 - Photo 22",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-23",
        "src": "/assets/gallery/Christmas_2026/023.jpeg",
        "title": "Christmas Celebration 2026 - Photo 23",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-24",
        "src": "/assets/gallery/Christmas_2026/024%5D.jpeg",
        "title": "Christmas Celebration 2026 - Photo 24",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-25",
        "src": "/assets/gallery/Christmas_2026/025.jpeg",
        "title": "Christmas Celebration 2026 - Photo 25",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-26",
        "src": "/assets/gallery/Christmas_2026/026.jpeg",
        "title": "Christmas Celebration 2026 - Photo 26",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-27",
        "src": "/assets/gallery/Christmas_2026/027.jpeg",
        "title": "Christmas Celebration 2026 - Photo 27",
        "caption": "Christmas Celebration 2026 (December 2026)"
      },
      {
        "id": "christmas-2026-28",
        "src": "/assets/gallery/Christmas_2026/028.jpeg",
        "title": "Christmas Celebration 2026 - Photo 28",
        "caption": "Christmas Celebration 2026 (December 2026)"
      }
    ]
  },
  {
    "id": "ganesh-chaturthi-sir-bday",
    "folderName": "Ganesh_Chaturthi_Sir_Bday",
    "name": "Ganesh Chaturthi & Director's Birthday Celebration",
    "date": "September 2025",
    "location": "Head Office, New Delhi",
    "category": "Special Occasion",
    "badge": "Special Celebration",
    "coverImage": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/001.jpeg",
    "description": "Auspicious Ganesh Chaturthi pooja alongside our respected Director's birthday celebrations at Head Office.",
    "photos": [
      {
        "id": "ganesh-chaturthi-sir-bday-1",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/001.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 1",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-2",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/002.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 2",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-3",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/003.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 3",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-4",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/004.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 4",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-5",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/005.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 5",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-6",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/006.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 6",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-7",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/007.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 7",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-8",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/008.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 8",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-9",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/009.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 9",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-10",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/010.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 10",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-11",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/011.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 11",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-12",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/012.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 12",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-13",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/013.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 13",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      },
      {
        "id": "ganesh-chaturthi-sir-bday-14",
        "src": "/assets/gallery/Ganesh_Chaturthi_Sir_Bday/014.jpeg",
        "title": "Ganesh Chaturthi & Director's Birthday Celebration - Photo 14",
        "caption": "Ganesh Chaturthi & Director's Birthday Celebration (September 2025)"
      }
    ]
  },
  {
    "id": "birthday-celebration-05082026",
    "folderName": "Birthday_Celebration 05082026",
    "name": "Office Birthday Celebrations",
    "date": "August 2026",
    "location": "Head Office, New Delhi",
    "category": "Culture",
    "badge": "Birthdays",
    "coverImage": "/assets/gallery/Birthday_Celebration%2005082026/001.jpeg",
    "description": "Monthly team birthday cake cutting, warm wishes, and joyous celebrations with the Prest Loans family.",
    "photos": [
      {
        "id": "birthday-celebration-05082026-1",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/001.jpeg",
        "title": "Office Birthday Celebrations - Photo 1",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-2",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/002.jpeg",
        "title": "Office Birthday Celebrations - Photo 2",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-3",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/003.jpeg",
        "title": "Office Birthday Celebrations - Photo 3",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-4",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/004.jpeg",
        "title": "Office Birthday Celebrations - Photo 4",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-5",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/005.jpeg",
        "title": "Office Birthday Celebrations - Photo 5",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-6",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/006.jpeg",
        "title": "Office Birthday Celebrations - Photo 6",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-7",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/007.png",
        "title": "Office Birthday Celebrations - Photo 7",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-8",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/008.jpeg",
        "title": "Office Birthday Celebrations - Photo 8",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-9",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/009.jpeg",
        "title": "Office Birthday Celebrations - Photo 9",
        "caption": "Office Birthday Celebrations (August 2026)"
      },
      {
        "id": "birthday-celebration-05082026-10",
        "src": "/assets/gallery/Birthday_Celebration%2005082026/010.jpeg",
        "title": "Office Birthday Celebrations - Photo 10",
        "caption": "Office Birthday Celebrations (August 2026)"
      }
    ]
  },
  {
    "id": "international-yoga-day-celebration-2025",
    "folderName": "International Yoga Day Celebration 2025",
    "name": "International Yoga Day Celebration 2025",
    "date": "21 June 2025",
    "location": "Head Office, New Delhi",
    "category": "Wellness",
    "badge": "Health & Wellness",
    "coverImage": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/001.jpeg",
    "description": "Holistic wellness and guided yoga session for mental health, posture, and workplace mindfulness.",
    "photos": [
      {
        "id": "international-yoga-day-celebration-2025-1",
        "src": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/001.jpeg",
        "title": "International Yoga Day Celebration 2025 - Photo 1",
        "caption": "International Yoga Day Celebration 2025 (21 June 2025)"
      },
      {
        "id": "international-yoga-day-celebration-2025-2",
        "src": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/002.jpeg",
        "title": "International Yoga Day Celebration 2025 - Photo 2",
        "caption": "International Yoga Day Celebration 2025 (21 June 2025)"
      },
      {
        "id": "international-yoga-day-celebration-2025-3",
        "src": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/003.jpeg",
        "title": "International Yoga Day Celebration 2025 - Photo 3",
        "caption": "International Yoga Day Celebration 2025 (21 June 2025)"
      },
      {
        "id": "international-yoga-day-celebration-2025-4",
        "src": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/004.jpeg",
        "title": "International Yoga Day Celebration 2025 - Photo 4",
        "caption": "International Yoga Day Celebration 2025 (21 June 2025)"
      },
      {
        "id": "international-yoga-day-celebration-2025-5",
        "src": "/assets/gallery/International%20Yoga%20Day%20Celebration%202025/005.jpeg",
        "title": "International Yoga Day Celebration 2025 - Photo 5",
        "caption": "International Yoga Day Celebration 2025 (21 June 2025)"
      }
    ]
  },
  {
    "id": "awards",
    "folderName": "awards",
    "name": "Prest Loans Awards & Accolades",
    "date": "Prest Loans Milestones",
    "location": "National Forums",
    "category": "Awards",
    "badge": "Excellence",
    "coverImage": "/assets/gallery/awards/4.jpg",
    "description": "Industry awards, business felicitations, and accolades honoring Prest Loans as a leading digital lending NBFC.",
    "photos": [
      {
        "id": "awards-1",
        "src": "/assets/gallery/awards/4.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 1",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-2",
        "src": "/assets/gallery/awards/5.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 2",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-3",
        "src": "/assets/gallery/awards/6.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 3",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-4",
        "src": "/assets/gallery/awards/7.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 4",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-5",
        "src": "/assets/gallery/awards/8.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 5",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-6",
        "src": "/assets/gallery/awards/9.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 6",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-7",
        "src": "/assets/gallery/awards/10.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 7",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-8",
        "src": "/assets/gallery/awards/11.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 8",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-9",
        "src": "/assets/gallery/awards/13.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 9",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      },
      {
        "id": "awards-10",
        "src": "/assets/gallery/awards/16.jpg",
        "title": "Prest Loans Awards & Accolades - Photo 10",
        "caption": "Prest Loans Awards & Accolades (Prest Loans Milestones)"
      }
    ]
  },
  {
    "id": "photo-gallery",
    "folderName": "photo_gallery",
    "name": "Corporate Milestones & Leadership Moments",
    "date": "Corporate Archive",
    "location": "Pan-India Operations",
    "category": "Milestones",
    "badge": "Corporate",
    "coverImage": "/assets/gallery/photo_gallery/1.jpg",
    "description": "Corporate leadership meetings, branch operational desks, client interactions, and strategic forums.",
    "photos": [
      {
        "id": "photo-gallery-1",
        "src": "/assets/gallery/photo_gallery/1.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 1",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-2",
        "src": "/assets/gallery/photo_gallery/2.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 2",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-3",
        "src": "/assets/gallery/photo_gallery/3.jpeg",
        "title": "Corporate Milestones & Leadership Moments - Photo 3",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-4",
        "src": "/assets/gallery/photo_gallery/4.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 4",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-5",
        "src": "/assets/gallery/photo_gallery/5.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 5",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-6",
        "src": "/assets/gallery/photo_gallery/6.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 6",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-7",
        "src": "/assets/gallery/photo_gallery/7.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 7",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-8",
        "src": "/assets/gallery/photo_gallery/8.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 8",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-9",
        "src": "/assets/gallery/photo_gallery/9.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 9",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-10",
        "src": "/assets/gallery/photo_gallery/10.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 10",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-11",
        "src": "/assets/gallery/photo_gallery/11.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 11",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-12",
        "src": "/assets/gallery/photo_gallery/13.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 12",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-13",
        "src": "/assets/gallery/photo_gallery/14.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 13",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-14",
        "src": "/assets/gallery/photo_gallery/15.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 14",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-15",
        "src": "/assets/gallery/photo_gallery/16.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 15",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      },
      {
        "id": "photo-gallery-16",
        "src": "/assets/gallery/photo_gallery/17.jpg",
        "title": "Corporate Milestones & Leadership Moments - Photo 16",
        "caption": "Corporate Milestones & Leadership Moments (Corporate Archive)"
      }
    ]
  }
];
