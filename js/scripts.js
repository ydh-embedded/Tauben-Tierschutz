// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const menuLinks = document.querySelectorAll('.jw-menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Example: Change header background on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(52, 152, 219, 0.8)'; // Change to a semi-transparent color
        } else {
            header.style.backgroundColor = 'rgba(52, 152, 219, 1)'; // Change back to original color
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Check if the current URL ends with "index.html"
    if (window.location.pathname.endsWith("index.html")) {
        // Select the "Startseite" menu item and hide it
        const startseiteMenuItem = document.querySelector('.jw-menu-item a[href="/"]');
        if (startseiteMenuItem) {
            startseiteMenuItem.parentElement.style.display = 'none';
        }
    }
});