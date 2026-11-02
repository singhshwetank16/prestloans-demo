/**
 * Server Entrypoint - Prest Loans Web Application
 */

const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.log('================================================================');
  console.log('  🚀 Prest Loans - Node.js Express Application Running');
  console.log(`  🌐 Local Access:    http://localhost:${PORT}`);
  console.log(`  🌐 Network Access:  http://${HOST}:${PORT}`);
  console.log(`  ⚡ Environment:     ${process.env.NODE_ENV || 'development'}`);
  console.log('================================================================');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server.');
  server.close(() => {
    console.log('HTTP server closed.');
  });
});
