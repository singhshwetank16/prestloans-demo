# Prest Loans - Digital Lending Portal (React + Vite + TypeScript)
**Flagship Digital Platform of Lord Krishna Financial Services Ltd (RBI-Registered NBFC: B-14.02019)**

---

## 🌟 Overview
**Prest Loans** is an enterprise-grade digital lending Single Page Application (SPA) built with **React**, **Vite**, **TypeScript (`.tsx`)**, and **React Router**.

The platform is designed in strict compliance with **Reserve Bank of India (RBI)** digital lending directives, featuring instant EMI calculations, multi-product credit appraisal, real-time application tracking, corporate photo galleries, and statutory policy disclosures.

---

## 📁 Clean & Modular Folder Structure

```
prestloans/
├── public/
│   ├── assets/                      # Official logos, team photos, gallery images, PDFs
│   ├── css/
│   │   └── style.css                # Global responsive stylesheets
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # XML sitemap
│   └── favicon.ico                  # Site favicon
├── src/
│   ├── components/                  # Reusable UI Components (.tsx)
│   │   ├── TopBar.tsx               # Top statutory bar with RBI pill, helplines & social links
│   │   ├── Header.tsx               # Main sticky navigation, dropdowns & mobile drawer
│   │   ├── Footer.tsx               # 4-Column responsive footer, office info & enquiry form
│   │   ├── Layout.tsx               # Global page layout wrapping TopBar, Header, Footer & Modals
│   │   ├── FloatingActions.tsx      # Floating WhatsApp & Phone quick-action buttons
│   │   ├── Modals.tsx               # Loan application, Login, Track status, Lightbox & Career modals
│   │   ├── EmiCalculator.tsx        # Interactive dynamic loan EMI calculator widget
│   │   └── ScrollToTop.tsx          # Smooth route & anchor (#testimonials) scrolling
│   ├── config/
│   │   └── site.ts                  # Central site branding, contact numbers, social media & loan products
│   ├── data/
│   │   ├── employees.ts             # Employee testimonials data (quotes, designations, photos/badges)
│   │   └── positions.ts             # Career job openings (Manager – Credit Products)
│   ├── pages/                       # 25 Complete Page Components (.tsx)
│   │   ├── Home.tsx                 # /
│   │   ├── About.tsx                # /about
│   │   ├── Products.tsx             # /products (#education-loan, #personal-loan, etc.)
│   │   ├── Calculator.tsx           # /calculator
│   │   ├── Career.tsx               # /career (#openings, #testimonials)
│   │   ├── CustomersStories.tsx     # /customers-stories
│   │   ├── EmployeeTestimonials.tsx # /employee-testimonials
│   │   ├── Media.tsx                # /media
│   │   ├── Gallery.tsx              # /gallery
│   │   ├── Blog.tsx                 # /blog
│   │   ├── Faq.tsx                  # /faq
│   │   ├── Contact.tsx              # /contact
│   │   ├── Policies.tsx             # /policies
│   │   ├── GrievanceRedressal.tsx   # /grievance-redressal (RB-IOS 2026)
│   │   ├── InterestRateModel.tsx    # /interest-rate-model (18% Base Rate & Charges)
│   │   ├── FairPracticesCode.tsx    # /fair-practices-code
│   │   ├── KycAndAml.tsx            # /kyc-and-aml
│   │   ├── PenalChargesPolicy.tsx   # /penal-charges-policy
│   │   ├── RegulatoryCertifications.tsx # /regulatory-certifications
│   │   ├── PublicNotice.tsx         # /public-notice
│   │   ├── PrivacyPolicy.tsx        # /privacy-policy
│   │   ├── TermsAndConditions.tsx   # /terms-and-conditions
│   │   ├── TermsOfUse.tsx           # /terms-of-use
│   │   ├── Disclaimer.tsx           # /disclaimer
│   │   └── NotFound.tsx             # 404 Catch-All
│   ├── App.tsx                      # React Router routes & legacy .html redirects
│   ├── main.tsx                     # React DOM client entrypoint
│   └── vite-env.d.ts                # TypeScript Vite client environment types
├── index.html                       # Vite HTML root template
├── package.json                     # React, Vite, TypeScript & React Router dependencies
├── tsconfig.json                    # TypeScript compiler configuration
├── tsconfig.node.json
└── vite.config.ts                   # Vite configuration with @vitejs/plugin-react
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
npm install
```

### 3. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
# or
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Type-check with `tsc` and create an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🔗 Key Navigation & Link Behaviors

1. **Career Hero Pill Button (`💬 Employee Testimonials`)**:
   - In `src/pages/Career.tsx`: Links directly to `/employee-testimonials` ("Employee's Testimonials & Stories" page).
2. **Footer Link (`Employee Testimonials`)**:
   - In `src/components/Footer.tsx`: Links to `/career#testimonials` (Career page testimonials section with smooth scrolling).
3. **Available Positions**:
   - Configured in `src/data/positions.ts` with the single opening: `Manager – Credit (Products)`.
   - Contact email: `humans@prestloans.com`.
4. **Social Media Links**:
   - Official Facebook, X, LinkedIn, YouTube, and Instagram links configured across Header top bar, mobile menu, and Footer.

---

## 🛡️ Statutory NBFC Disclosures
Prest Loans is the trade name of **Lord Krishna Financial Services Ltd**:
- **RBI Registration No.**: B-14.02019
- **Registered Office**: M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
- **Helplines**: `011-45241131` | `011-45241123`
- **WhatsApp Support**: `+91-9711669090`
- **Customer Support**: `loan@prestloans.com`
- **Talent Acquisition**: `humans@prestloans.com`
