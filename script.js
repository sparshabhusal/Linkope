// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all paragraph elements within the main div
    const links = document.querySelectorAll('.text-center p');

    links.forEach(linkElement => {
        // Get the URL from the data-link attribute
        const url = linkElement.getAttribute('data-link');

        // Add click event listener to each link
        if (url) {
            linkElement.addEventListener('click', () => {
                window.open(url, '_blank'); // Open the link in a new tab
            });
        }
    });
});
