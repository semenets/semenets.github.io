;document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    endGame("Ви покинули вкладку браузера");
  }
});
