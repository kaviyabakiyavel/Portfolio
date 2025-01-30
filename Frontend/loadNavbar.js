// loadNavbar.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the navbar.html and inject it into the page
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});
