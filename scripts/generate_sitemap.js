const fs = require('fs');
const pages = [
  '/', '/about', '/services', '/loans', '/industries', '/contact', '/faq',
  '/blog', '/partners', '/events', '/careers', '/resources', '/calculator', '/dashboard',
  '/onboarding', '/assistant', '/inventory', '/accounting', '/referrals', '/predictive'
];
const base = process.env.BASE_URL || 'http://localhost:3000';
const items = pages.map(p=>`<url><loc>${base}${p}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('sitemap written to public/sitemap.xml');
