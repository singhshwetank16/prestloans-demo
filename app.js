/**
 * Express Application Configuration
 * Prest Loans (Lord Krishna Financial Services Ltd)
 */

require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

const localsMiddleware = require('./middleware/locals');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// Security Headers (Configured to allow FontAwesome, Google Fonts, and CDNs)
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// Performance Compression
app.use(compression());

// Cross-Origin Resource Sharing
app.use(cors());

// Request Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}

// Request Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template Engine Configuration (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Custom Locals Middleware
app.use(localsMiddleware);

// Static Assets
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0
}));

// Application Routes
app.use('/', routes);

// 404 & 500 Error Handlers
app.use(errorHandler.notFound);
app.use(errorHandler.serverError);

module.exports = app;
