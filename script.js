function generateLogo() {
    var brandName = document.getElementById('brandName').value;
    
    // You can customize the logo creation logic based on your needs
    var logoHTML = `<h2>Your Logo: ${brandName}</h2>`;
    
    document.getElementById('logoContainer').innerHTML = logoHTML;
}
