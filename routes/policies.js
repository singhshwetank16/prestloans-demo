const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policyController');

router.get('/policies', policyController.getPolicies);
router.get('/grievance-redressal', policyController.getGrievanceRedressal);
router.get('/interest-rate-model', policyController.getInterestRateModel);
router.get('/fair-practices-code', policyController.getFairPracticesCode);
router.get('/kyc-and-aml', policyController.getKycAndAml);
router.get('/penal-charges-policy', policyController.getPenalChargesPolicy);
router.get('/regulatory-certifications', policyController.getRegulatoryCertifications);
router.get('/public-notice', policyController.getPublicNotice);
router.get('/privacy-policy', policyController.getPrivacyPolicy);
router.get('/terms-and-conditions', policyController.getTermsAndConditions);
router.get('/terms-of-use', policyController.getTermsOfUse);
router.get('/disclaimer', policyController.getDisclaimer);

module.exports = router;
