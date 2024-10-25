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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuModal = document.getElementById('menu-modal');
    const closeButton = document.querySelector('.close-button');

    // Open the modal when the menu toggle button is clicked
    menuToggle.addEventListener('click', function() {
        menuModal.style.display = 'block'; // Show the modal
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        menuModal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === menuModal) {
            menuModal.style.display = 'none'; // Hide the modal
        }
    });
});