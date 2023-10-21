// const fs = require('fs');
// function generateSitemap(domain, pages) {
function generateSitemap() {
  const domain = document.getElementById("site-url").value;
  const pages = [
    '/',
    '/about',
    '/services',
    '/contact',
  ];

  // Get the current date
  const currentDate = new Date();

  // Extract the date components
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const year = currentDate.getFullYear();

  // Define the separator you want (e.g., '-')
  const separator = '-';

  // Create a formatted date string
  const formattedDate = `${year}${separator}${month}${separator}${day}`;

  // sitemap content structure
  const fileContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Created using SEOtool.in - Free HTML and XML sitemap generator -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${domain}${page}</loc>
      <lastmod>${formattedDate}</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
    </url>`).join('\n')}
</urlset>
<!-- Created using SEOtool.in - Free HTML and XML sitemap generator -->`;

  // Save the sitemap to a file
  // fs.writeFileSync('sitemap.xml', sitemap, 'utf-8');

  const blob = new Blob([fileContent], { type: 'text/plain' });


  // Create an object URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create a link element for downloading the file
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml'; // Set the file name here

  // Simulate a click to trigger the download
  a.click();

  // Clean up: Revoke the Object URL
  window.URL.revokeObjectURL(url);
}
