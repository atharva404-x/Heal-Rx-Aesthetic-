import https from 'https';

console.log('Testing external connectivity & endpoint health...');

const testUrls = [
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Plus+Jakarta+Sans:wght@400;600&display=swap'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 }, (res) => {
      console.log(`[HTTP ${res.statusCode}] ${url.split('?')[0]}`);
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    }).on('error', (err) => {
      console.error(`[ERROR] ${url}: ${err.message}`);
      resolve(false);
    }).on('timeout', () => {
      console.warn(`[TIMEOUT] ${url}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const url of testUrls) {
    await checkUrl(url);
  }
}

run();
