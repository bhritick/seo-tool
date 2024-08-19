document.addEventListener("DOMContentLoaded", function() {
    const url = window.location.href;
    const title = document.title;
    const description = document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute("content") : "";
    const image = document.querySelector('meta[property="og:image"]') ? document.querySelector('meta[property="og:image"]').getAttribute("content") : "";

    const socialButtons = document.getElementById("social-buttons");

    const socialLinks = [
        { class: "fa-facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
        { class: "fa-linkedin", url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}` },
        { class: "fa-twitter", url: `https://twitter.com/intent/tweet?url=${url}&text=${title}` },
        { class: "fa-instagram", url: `https://www.instagram.com/?url=${url}` },
        { class: "fa-pinterest", url: `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${description}` }
    ];

    socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = `fa ${link.class}`;
        socialButtons.appendChild(a);
    });

    // Add styles
    const style = document.createElement("style");
    style.innerHTML = `
        .social-buttons {
            display: flex;
            gap: 10px;
        }
        .social-buttons a {
            text-decoration: none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
        }
        .fa-facebook { background: #3B5998; }
        .fa-linkedin { background: #0077B5; }
        .fa-twitter { background: #1DA1F2; }
        .fa-instagram { background: #E4405F; }
        .fa-pinterest { background: #BD081C; }
    `;
    document.head.appendChild(style);
});
