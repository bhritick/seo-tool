const fs = require('fs');

function generateSitemap(domain, pages) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${domain}${page}</loc>
    </url>`).join('\n')}
</urlset>`;

    // Save the sitemap to a file
    fs.writeFileSync('sitemap.xml', sitemap, 'utf-8');
}

// Example usage
const domain = 'https://example.com';
const pages = [
    '/',
    '/about',
    '/services',
    '/contact',
];

generateSitemap(domain, pages);
