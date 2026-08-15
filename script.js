// ========================================
// KUSHEEN BHAT — INTERACTIVE WEBSITE
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // Smooth reveal animation for sections
  const sections = document.querySelectorAll(".section, .quote-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });


  // Add a subtle cursor glow
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });


  // Interactive feature cards
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;

      card.style.transform =
        `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });


  // Current year in footer
  const footerYear = document.querySelector("footer p");

  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} Kusheen Bhat`;
  }

});
