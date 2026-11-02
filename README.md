# Prest Loans - Official Enterprise NBFC Digital Lending Portal
**Flagship Brand of Lord Krishna Financial Services Ltd (RBI-Registered NBFC: B-14.02019)**

---

## 🌟 Overview
**Prest Loans** is a full-stack Node.js & Express digital lending portal engineered for retail borrowers, home buyers, students, MSMEs, and working professionals seeking rapid, transparent, and paperless credit solutions across India.

The platform follows a clean Model-View-Controller (MVC) architecture with reusable EJS partials, modular routing, REST API controllers, helmet security headers, and compression middleware.

---

## 📁 Clean Folder Structure

```
prestloans/
├── config/
│   └── site.js                  # Central site metadata, contact info, social links, loan products
├── controllers/
│   ├── pageController.js        # Standard website page renders (home, about, products, media, blog)
│   ├── careerController.js      # Career portal, available openings, employee testimonials, application handler
│   ├── policyController.js      # Regulatory policies, grievance redressal, interest model, statutory notices
│   └── apiController.js         # REST endpoints for live loan tracking, quick apply, EMI calculation, enquiries
├── middleware/
│   ├── errorHandler.js          # Custom 404 Not Found & 500 Server Error handlers
│   └── locals.js                # Injects site config, active path, and navigation helpers into res.locals
├── public/
│   ├── assets/                  # Logos, banners, team/employee pictures, documents
│   ├── css/
│   │   └── style.css            # Responsive styles and color themes
│   ├── js/
│   │   ├── app.js               # Global client-side interactions, navigation & modals
│   │   ├── calculator.js        # Dynamic EMI slider calculation & visual breakdown
│   │   ├── policies.js          # Statutory policy modal popup logic
│   │   ├── interest-rate-model.js # APR calculator & risk gradation model
│   │   └── grievance-redressal.js # 4-Tier grievance escalation hierarchy
│   ├── robots.txt               # Search engine crawler instructions
│   └── sitemap.xml              # XML Sitemap for SEO discovery
├── routes/
│   ├── index.js                 # Main router mounting sub-routes & 301 legacy .html redirects
│   ├── pages.js                 # Clean page routes (/, /about, /products, /calculator, /contact, etc.)
│   ├── career.js                # Career routes (/career, /employee-testimonials, /career/apply)
│   ├── policies.js              # Statutory policy routes (/policies, /grievance-redressal, etc.)
│   └── api.js                   # JSON API endpoints (/api/track, /api/enquiry, /api/calculate-emi)
├── views/
│   ├── pages/                   # 24 modular EJS page templates + 404 and 500 error views
│   └── partials/
│       ├── _head.ejs            # Common meta tags, Google fonts, FontAwesome 6, CSS
│       ├── _topbar.ejs          # RBI registration pill, customer care phones, social links
│       ├── _header.ejs          # Sticky navigation bar with active state pills and mobile drawer
│       ├── _footer.ejs          # 4-Column responsive footer with office info, links, policies, and enquiry
│       ├── _modals.ejs          # Reusable modals: Policy viewer, Loan apply, Login, Track status, Lightbox
│       ├── _floating.ejs        # Floating WhatsApp and Phone quick action buttons
│       └── _scripts.ejs         # Global scripts tag includes
├── .env                         # Local environment configuration
├── .env.example                 # Example template for deployment
├── .gitignore                   # Git ignore patterns
├── app.js                       # Express application initialization & middleware setup
├── package.json                 # Node.js project manifest & dependencies
├── README.md                    # Project documentation
├── server.js                    # HTTP server startup entrypoint
└── tunnel.js                    # Remote testing tunnel helper
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

### 3. Environment Configuration
Copy `.env.example` to `.env` and set your preferred port:
```bash
PORT=3000
NODE_ENV=development
BASE_URL=http://localhost:3000
```

### 4. Running the Application
```bash
# Start Node.js server
npm start

# Or with dev script
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🔗 Key Routes & Navigation
- **Homepage**: `/`
- **About Us**: `/about`
- **Products**: `/products`
- **EMI Calculator**: `/calculator`
- **Customers' Stories**: `/customers-stories`
- **Career Portal**: `/career`
- **Employee Testimonials**: `/employee-testimonials`
- **Media & Press**: `/media`
- **Photo Gallery**: `/gallery`
- **Blog**: `/blog`
- **FAQ**: `/faq`
- **Contact Us**: `/contact`
- **Regulatory Policies**: `/policies`
- **Grievance Redressal (RB-IOS 2026)**: `/grievance-redressal`
- **Interest Rate Model**: `/interest-rate-model`

*Legacy URLs ending in `.html` (e.g. `/career.html`, `/about.html`, `/index.html`) automatically issue a 301 Permanent Redirect to their clean URL counterpart.*

---

## 🛡️ Statutory Regulatory Disclosures
Prest Loans is the trade name of **Lord Krishna Financial Services Ltd**, a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India:
- **RBI Registration No.**: B-14.02019
- **Corporate Identity Number (CIN)**: U65993DL1992PLC049609 / U74899DL1992PLC047069
- **Registered Office**: M5-M6, Essel House, 10 Asaf Ali Road, New Delhi - 110002
- **Helpline Numbers**: `011-45241131` | `011-45241123`
- **WhatsApp Support**: `+91-9711669090`
- **Support Email**: `loan@prestloans.com`
- **HR & Talent Email**: `humans@prestloans.com`
- **Grievance Officer**: `nodal.officer@prestloans.com`
