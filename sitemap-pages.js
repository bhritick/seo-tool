// Define the URL of the webpage you want to fetch links from
// const targetUrl = 'https://nivesguru.in';
// const targetUrl = document.getElementById("site-url").value;

// Function to fetch and parse internal links from a webpage
async function fetchInternalLinks(url) {
    try {
        // Fetch the HTML content of the webpage
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const html = await response.text();

        // Create a DOMParser to parse the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Select all anchor (a) elements with an href attribute
        const anchorElements = doc.querySelectorAll('a[href]');

        // Filter out internal links
        const internalLinks = Array.from(anchorElements).filter((link) => {
            const href = link.getAttribute('href');
            // Check if the link is internal by comparing the hostname with the target URL's hostname
            return href.startsWith('/') || new URL(href, url).hostname === new URL(url).hostname;
        });

        // Extract and return the href attribute of internal links
        const internalLinksArray = Array.from(internalLinks).map((link) => link.getAttribute('href'));

        return internalLinksArray;
    } catch (error) {
        console.error('Error fetching and parsing the webpage:', error);
        return [];
    }
}
function getUrl() {
    const targetUrl = document.getElementById("site-url").value;
    // Call the function and log the internal links
    fetchInternalLinks(targetUrl)
        .then((internalLinks) => {
            const uniqueArray = [...new Set(internalLinks)];
            uniqueArray.forEach((link) => {
                if (link.length > 2) {
                    console.log(link);

                    var textarea = document.getElementById("linksTextarea");
                    textarea.value += link + "\n";
                    // textarea.value += targetUrl + "/" + link + "\n";
                }
            });
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

