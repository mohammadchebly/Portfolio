const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const projectsGrid = document.getElementById("projectsGrid");
const nextProject = document.getElementById("nextProject");
const prevProject = document.getElementById("prevProject");

nextProject.addEventListener("click", () => {
    projectsGrid.scrollBy({
        left: 370,
        behavior: "smooth"
    });
});

prevProject.addEventListener("click", () => {
    projectsGrid.scrollBy({
        left: -370,
        behavior: "smooth"
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealOnScroll.observe(element);
});