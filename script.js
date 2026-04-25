// ===============================
// DOCUMENT INITIALIZATION
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    setCurrentDate();
    setupButtons();
    setupScrollHighlight();
});

// ===============================
// SET CURRENT DATE
// ===============================
function setCurrentDate() {
    const el = document.getElementById("current-date");
    if (!el) return;

    const today = new Date();
    const formatted = today.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    el.textContent = formatted;
}

// ===============================
// PRINT / SAVE AS PDF
// ===============================
function printDocument() {
    window.print();
}

// ===============================
// COPY CONTENT TO CLIPBOARD
// ===============================
function copyContent() {
    const container = document.querySelector(".container");

    if (!container) {
        showToast("Content not found");
        return;
    }

    navigator.clipboard.writeText(container.innerText)
        .then(() => showToast("Copied to clipboard"))
        .catch(() => showToast("Copy failed"));
}

// ===============================
// DOWNLOAD AS TEXT FILE
// ===============================
function downloadText() {
    const content = document.querySelector(".container")?.innerText;

    if (!content) {
        showToast("Nothing to download");
        return;
    }

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "website-copy.txt";
    link.click();
}

// ===============================
// SMOOTH SCROLL TO SECTION
// ===============================
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ===============================
// NAVIGATION HIGHLIGHT ON SCROLL
// ===============================
function setupScrollHighlight() {
    const sections = document.querySelectorAll("h2");
    const navLinks = document.querySelectorAll(".nav a");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}

// ===============================
// BUTTON SETUP (OPTIONAL UI ENHANCEMENT)
// ===============================
function setupButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.opacity = "0.85";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.opacity = "1";
        });
    });
}

// ===============================
// TOAST NOTIFICATION SYSTEM
// ===============================
function showToast(message) {
    let toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.padding = "10px 15px";
    toast.style.borderRadius = "5px";
    toast.style.fontSize = "14px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}
