const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const today = new Date().toISOString().split('T')[0];

const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
    { url: '/services/web-app', changefreq: 'weekly', priority: 0.8, lastmod: today },
    { url: '/blog', changefreq: 'weekly', priority: 0.7, lastmod: today },
    { url: '/privacy', changefreq: 'monthly', priority: 0.6, lastmod: today },
    { url: '/terms', changefreq: 'monthly', priority: 0.6, lastmod: today }
];

const sitemap = new SitemapStream({ hostname: 'https://deftvision.io/' });

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(data => {
    createWriteStream('./public/sitemap.xml').end(data);
});
