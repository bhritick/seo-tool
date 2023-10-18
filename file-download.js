
function downloadFile() {
    // Create a Blob (Binary Large Object) with your file content
    const fileContent = "This is the content of the file you want to download.";
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create an object URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element for downloading the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example.txt'; // Set the file name here

    // Simulate a click to trigger the download
    a.click();

    // Clean up: Revoke the Object URL
    window.URL.revokeObjectURL(url);
}