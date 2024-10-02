// script.js

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Toggle sidebar visibility

    // Adjust main content based on sidebar state
    const mainContent = document.querySelector('main');
    if (sidebar.classList.contains('active')) {
        mainContent.style.width = 'calc(100% - 250px)'; // Reduce width for sidebar
    } else {
        mainContent.style.width = '100%'; // Full width when sidebar is hidden
    }
}