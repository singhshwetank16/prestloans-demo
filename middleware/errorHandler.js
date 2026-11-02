/**
 * Error Handling Middleware
 */

exports.notFound = (req, res, next) => {
  res.status(404).render('pages/404', {
    title: '404 - Page Not Found | Prest Loans',
    metaDesc: 'The page you requested could not be found. Return to Prest Loans home.',
    activePage: ''
  });
};

exports.serverError = (err, req, res, next) => {
  console.error('Server Error:', err.stack || err);
  const status = err.status || 500;
  res.status(status).render('pages/500', {
    title: '500 - Internal Server Error | Prest Loans',
    metaDesc: 'An unexpected server error occurred. Please try again shortly.',
    error: process.env.NODE_ENV === 'development' ? err : {},
    activePage: ''
  });
};
