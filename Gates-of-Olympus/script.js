document.addEventListener("DOMContentLoaded", function() {
  const getButton = document.querySelector(".getbonus-button");

  // Додаємо анімацію натискання кнопки
  getButton.addEventListener("click", function() {
    getButton.style.transform = "scale(0.9)";
      setTimeout(() => {
          getButton.style.transform = "scale(1)";
          alert("Claim your bonus now!");
      }, 200);
  });

  // Додаємо ефекти появи секцій при скролі
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = "translateY(0)";
          }
      });
  }, { threshold: 0.2 });

  sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
      section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(section);
  });
});

