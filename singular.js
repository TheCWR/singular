// JavaScript to add a fade-in effect for app sections
document.addEventListener('DOMContentLoaded', () => {
    const apps = document.querySelectorAll('.app');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    apps.forEach((app) => observer.observe(app));
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            const headerHeight = document.querySelector("header").offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            // Scroll to the element with offset for the fixed header
            window.scrollTo({
                top: elementPosition - headerHeight,
                behavior: "smooth"
            });
        });
    });
});