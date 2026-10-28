const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let decodedPath;
  try {
    decodedPath = decodeURI(req.url.split('?')[0]);
  } catch (e) {
    decodedPath = req.url.split('?')[0];
  }
  let filePath = path.join(__dirname, decodedPath === '/' ? 'index.html' : decodedPath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

const os = require('os');

function getNetworkIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  const networkIp = getNetworkIp();
  console.log('\n======================================================');
  console.log('  🚀 Prest Loans Portal Server Running');
  console.log('======================================================');
  console.log(`  ➜  Local:    http://localhost:${PORT}/`);
  if (networkIp) {
    console.log(`  ➜  Network:  http://${networkIp}:${PORT}/`);
    console.log('------------------------------------------------------');
    console.log('  📱 Same Wi-Fi / LAN Share Link for Client/Mobile:');
    console.log(`  👉 http://${networkIp}:${PORT}/`);
  }
  console.log('------------------------------------------------------');
  console.log('  🌐 Need to access from ANOTHER Network (No Deploy)?');
  console.log('  👉 In a new terminal, run: npm run share');
  console.log(`     (or run: npx localtunnel --port ${PORT})`);
  console.log('======================================================\n');
});

