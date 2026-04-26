// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Simple booking button interaction
const bookBtn = document.querySelector("button");

if (bookBtn) {
    bookBtn.addEventListener("click", () => {
        alert("Thanks for choosing GlowNest Salon! Booking feature coming soon.");
    });
}


// Fade-in animation on scroll
const faders = document.querySelectorAll("section");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease-out";
    appearOnScroll.observe(section);
});


// Sticky header effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});


// Dynamic greeting based on time
const greeting = document.createElement("p");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning! Ready for a fresh look?";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon! Treat yourself today.";
} else {
    greeting.textContent = "Good evening! Relax and refresh with us.";
}

greeting.style.marginTop = "10px";
greeting.style.fontWeight = "500";

const header = document.querySelector("header");
if (header) {
    header.appendChild(greeting);
}
