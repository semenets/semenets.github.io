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
});

