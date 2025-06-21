window.addEventListener("DOMContentLoaded", () => {
    const navbars = document.querySelectorAll(".navbar");
    window.addEventListener("scroll", () => {
        navbars.forEach(nav => nav.classList.toggle("scrolling", window.scrollY > 0));
    });
});