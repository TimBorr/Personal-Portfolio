document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if dark mode is already enabled (stored in local storage)
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;  // Set the slider to checked
    }

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Dark Mode Logic
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dynamic Project Cards
    const projects = [
        { title: 'Project 1', description: 'Brief description of your project.', link: '#' },
        { title: 'Project 2', description: 'Another cool project.', link: '#' },
        { title: 'Project 3', description: 'Yet another awesome project.', link: '#' }
    ];

    const projectContainer = document.querySelector('.row');

    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>`;
        projectContainer.innerHTML += projectCard;
    });
});