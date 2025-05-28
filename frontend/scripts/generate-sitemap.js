const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/services/standard-web-app', changefreq: 'weekly', priority: 0.8 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.6 },
    { url: '/terms', changefreq: 'monthly', priority: 0.6 }
    // Add more routes as needed
];

const sitemap = new SitemapStream({ hostname: 'https://deftvision.io/' });

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(data => {
    createWriteStream('./public/sitemap.xml').end(data);
});
