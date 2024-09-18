document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if dark mode is already enabled (stored in local storage)
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Switch to Light Mode';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            themeToggle.textContent = 'Switch to Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            themeToggle.textContent = 'Switch to Dark Mode';
        }
    });
});