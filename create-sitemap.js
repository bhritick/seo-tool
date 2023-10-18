// const fs = require('fs');

function generateSitemap(domain, pages) {
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

  // Create a temporary download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';

  // Trigger a click event to initiate the download
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();

  // Remove the temporary download link
  document.body.removeChild(a);

  // You can't automatically delete the file due to security restrictions
  // Instruct the user to manually delete the file
  // alert('File has been downloaded. Please manually delete it when done.');
}

// Example usage
const domain = document.getElementById("site-url").value;
const pages = [
  '/',
  '/about',
  '/services',
  '/contact',
];

generateSitemap(domain, pages);
