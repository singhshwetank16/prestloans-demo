const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.post('/track', apiController.trackStatus);
router.get('/track', apiController.trackStatus);
router.post('/enquiry', apiController.submitEnquiry);
router.post('/loan-apply', apiController.submitLoanApp);
router.get('/calculate-emi', apiController.calculateEmi);
router.post('/calculate-emi', apiController.calculateEmi);

module.exports = router;
