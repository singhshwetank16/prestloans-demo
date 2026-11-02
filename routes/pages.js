const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.getHome);
router.get('/about', pageController.getAbout);
router.get('/products', pageController.getProducts);
router.get('/calculator', pageController.getCalculator);
router.get('/customers-stories', pageController.getCustomersStories);
router.get('/media', pageController.getMedia);
router.get('/gallery', pageController.getGallery);
router.get('/blog', pageController.getBlog);
router.get('/faq', pageController.getFaq);
router.get('/contact', pageController.getContact);

module.exports = router;
