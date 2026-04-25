document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for button links
  const buttons = document.querySelectorAll('a[href^="#"]');

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Show alert when call button is clicked
  const callButton = document.querySelector('.cta .btn');

  if (callButton) {
    callButton.addEventListener("click", function () {
      alert("Thank you for choosing Alika The Salon! We will connect with you shortly.");
    });
  }

  // Service card hover animation effect
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  // Dynamic greeting based on time
  const header = document.querySelector("header h1");

  const hour = new Date().getHours();

  if (header) {
    if (hour < 12) {
      header.innerText = "Good Morning! Feel Confident Every Time You Walk Out";
    } else if (hour < 18) {
      header.innerText = "Good Afternoon! Feel Confident Every Time You Walk Out";
    } else {
      header.innerText = "Good Evening! Feel Confident Every Time You Walk Out";
    }
  }

});
