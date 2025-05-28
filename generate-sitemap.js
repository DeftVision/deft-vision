import fs from 'fs';
import path from 'path';

const baseUrl = 'https://deftvision.io';

const routes = [
    '/',
    '/services/business-ready',
    '/privacy',
    '/terms',
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(
    path.join('./frontend/public', 'sitemap.xml'),
    xml.trim()
);

console.log('✅ sitemap.xml generated');
