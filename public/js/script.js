document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('a.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Handle root path case
        if (link.getAttribute('href') === '/' && currentPath === '/index.html') {
             // Do nothing for home, as it's not in the main nav for the home page itself in this structure
        } else if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});
