// Define the URL of the webpage you want to fetch links from
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
        // Filter unique internal links
        const uniqueInternalLinksArray = [...new Set(internalLinksArray)];

        return uniqueInternalLinksArray;
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
            let url = targetUrl;
            if (url.endsWith("/")) {
                url = url.slice(0, -1); // Remove the last character in the string
            }
            internalLinks.forEach((link) => {
                if (link != "./" && link != "#" && link != "/" && link != "../") {
                    var textarea = document.getElementById("linksTextarea");
                    textarea.value += url + "/" + link + "\n";
                    return link;
                }
            });
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

