import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Calculator } from './pages/Calculator';
import { Career } from './pages/Career';
import { CustomersStories } from './pages/CustomersStories';
import { EmployeeTestimonials } from './pages/EmployeeTestimonials';
import { Media } from './pages/Media';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { Faq } from './pages/Faq';
import { Contact } from './pages/Contact';
import { Policies } from './pages/Policies';
import { GrievanceRedressal } from './pages/GrievanceRedressal';
import { InterestRateModel } from './pages/InterestRateModel';
import { FairPracticesCode } from './pages/FairPracticesCode';
import { KycAndAml } from './pages/KycAndAml';
import { PenalChargesPolicy } from './pages/PenalChargesPolicy';
import { RegulatoryCertifications } from './pages/RegulatoryCertifications';
import { PublicNotice } from './pages/PublicNotice';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { TermsOfUse } from './pages/TermsOfUse';
import { Disclaimer } from './pages/Disclaimer';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="career" element={<Career />} />
        <Route path="customers-stories" element={<CustomersStories />} />
        <Route path="employee-testimonials" element={<EmployeeTestimonials />} />
        <Route path="media" element={<Media />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="policies" element={<Policies />} />
        <Route path="grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="interest-rate-model" element={<InterestRateModel />} />
        <Route path="fair-practices-code" element={<FairPracticesCode />} />
        <Route path="kyc-and-aml" element={<KycAndAml />} />
        <Route path="penal-charges-policy" element={<PenalChargesPolicy />} />
        <Route path="regulatory-certifications" element={<RegulatoryCertifications />} />
        <Route path="public-notice" element={<PublicNotice />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="disclaimer" element={<Disclaimer />} />

        {/* Legacy .html redirects to clean routes */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route path="products.html" element={<Navigate to="/products" replace />} />
        <Route path="calculator.html" element={<Navigate to="/calculator" replace />} />
        <Route path="career.html" element={<Navigate to="/career" replace />} />
        <Route path="customers-stories.html" element={<Navigate to="/customers-stories" replace />} />
        <Route path="employee-testimonials.html" element={<Navigate to="/employee-testimonials" replace />} />
        <Route path="media.html" element={<Navigate to="/media" replace />} />
        <Route path="gallery.html" element={<Navigate to="/gallery" replace />} />
        <Route path="blog.html" element={<Navigate to="/blog" replace />} />
        <Route path="faq.html" element={<Navigate to="/faq" replace />} />
        <Route path="contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="policies.html" element={<Navigate to="/policies" replace />} />
        <Route path="grievance-redressal.html" element={<Navigate to="/grievance-redressal" replace />} />
        <Route path="interest-rate-model.html" element={<Navigate to="/interest-rate-model" replace />} />
        <Route path="fair-practices-code.html" element={<Navigate to="/fair-practices-code" replace />} />
        <Route path="kyc-and-aml.html" element={<Navigate to="/kyc-and-aml" replace />} />
        <Route path="penal-charges-policy.html" element={<Navigate to="/penal-charges-policy" replace />} />
        <Route path="regulatory-certifications.html" element={<Navigate to="/regulatory-certifications" replace />} />
        <Route path="public-notice.html" element={<Navigate to="/public-notice" replace />} />
        <Route path="privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="terms-and-conditions.html" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="terms-of-use.html" element={<Navigate to="/terms-of-use" replace />} />
        <Route path="disclaimer.html" element={<Navigate to="/disclaimer" replace />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

