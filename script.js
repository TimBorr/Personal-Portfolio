document.addEventListener('DOMContentLoaded', function() 
    console.log('Page loaded!');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Page loaded!');
    
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
    
        // Check if dark mode is already enabled (stored in local storage)
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        }
    
        themeToggle.addEventListener('change', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    });