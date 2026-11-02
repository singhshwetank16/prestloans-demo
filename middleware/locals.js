const site = require('../config/site');

module.exports = (req, res, next) => {
  res.locals.site = site;
  res.locals.currentPath = req.path;
  res.locals.year = new Date().getFullYear();
  // Helper to test if a nav link is active
  res.locals.isActive = (pageKey) => {
    if (res.locals.activePage === pageKey) return 'active';
    return '';
  };
  next();
};
