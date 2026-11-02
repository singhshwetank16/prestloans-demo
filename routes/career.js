const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.get('/career', careerController.getCareer);
router.get('/employee-testimonials', careerController.getEmployeeTestimonials);
router.post('/career/apply', careerController.applyJob);

module.exports = router;
