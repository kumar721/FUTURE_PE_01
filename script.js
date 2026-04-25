// ===== SET CURRENT DATE =====
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        dateElement.textContent = formattedDate;
    }
});

// ===== PRINT / SAVE AS PDF =====
function printDocument() {
    window.print();
}

// ===== COPY DOCUMENT CONTENT =====
function copyContent() {
    const content = document.querySelector(".container").innerText;

    navigator.clipboard.writeText(content)
        .then(() => {
            alert("Document copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy content.");
        });
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ===== ADD SIMPLE NAV HIGHLIGHT =====
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("h2");
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===== DOWNLOAD AS TEXT FILE =====
function downloadText() {
    const content = document.querySelector(".container").innerText;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "website-copy.txt";
    link.click();
}
