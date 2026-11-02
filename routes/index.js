const express = require('express');
const router = express.Router();

const pagesRoutes = require('./pages');
const careerRoutes = require('./career');
const policiesRoutes = require('./policies');
const apiRoutes = require('./api');

// Legacy .html redirects to modern clean URLs (301 Permanent)
router.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    if (req.path === '/index.html') {
      return res.redirect(301, '/');
    }
    const cleanPath = req.path.slice(0, -5);
    return res.redirect(301, cleanPath);
  }
  next();
});

// API Routes
router.use('/api', apiRoutes);

// Page & Feature Routes
router.use('/', pagesRoutes);
router.use('/', careerRoutes);
router.use('/', policiesRoutes);

module.exports = router;
