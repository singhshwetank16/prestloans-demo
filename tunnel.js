const { exec } = require('child_process');
const https = require('https');

console.log('\n======================================================');
console.log('  🌐 Starting Public Tunnel for Cross-Network Access');
console.log('======================================================');

https.get('https://loca.lt/mytunnelpassword', (res) => {
  let ip = '';
  res.on('data', (chunk) => { ip += chunk; });
  res.on('end', () => {
    const password = ip.trim();
    console.log(`  🔑 Tunnel Friendly Password / Endpoint IP: ${password}`);
    console.log('  ℹ️  When someone opens the URL on another network,');
    console.log('      they may be asked for this password on first visit.');
    console.log('------------------------------------------------------');
    const uniqueSubdomain = `prestloans-${Math.floor(1000 + Math.random() * 9000)}`;
    console.log(`  🌐 Requesting Unique Tunnel URL: https://${uniqueSubdomain}.loca.lt`);
    console.log('  Connecting to Localtunnel server...\n');

    const child = exec(`npx localtunnel --port 3000 --subdomain ${uniqueSubdomain}`);
    child.stdout.on('data', (data) => process.stdout.write(data));
    child.stderr.on('data', (data) => process.stderr.write(data));
  });
}).on('error', (err) => {
  const uniqueSubdomain = `prestloans-${Math.floor(1000 + Math.random() * 9000)}`;
  console.log(`  Starting localtunnel with unique subdomain: ${uniqueSubdomain}...\n`);
  const child = exec(`npx localtunnel --port 3000 --subdomain ${uniqueSubdomain}`);
  child.stdout.on('data', (data) => process.stdout.write(data));
  child.stderr.on('data', (data) => process.stderr.write(data));
});
