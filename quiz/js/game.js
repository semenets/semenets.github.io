// ===== ПЕРЕЗАВАНТАЖЕННЯ СТОРІНКИ =====
if (sessionStorage.getItem("gameKilled") === "true") {
  endGame("Ви перезавантажили сторінку");
  sessionStorage.removeItem("gameKilled");
}

// ===== ЗМІННІ =====
let currentCategoryIndex = 0;
let currentQuestion = null;
let timer = 15;
let timerInterval;
let hintsLeft = 3;
let hintUsedForCurrentQuestion = false;
let correctAnswers = 0;

// ===== DOM =====
const categoryEl = document.getElementById("category");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const hintBtn = document.getElementById("hintBtn");
const hintsCountEl = document.getElementById("hintsCount");

// ===== СТАРТ ГРИ =====
function startGame() {
  sessionStorage.removeItem("gameKilled");
  loadQuestion();
}

// ===== ЗАВАНТАЖЕННЯ ПИТАННЯ =====
function loadQuestion() {
  if (currentCategoryIndex >= categories.length) {
    if (correctAnswers === categories.length) {
      winGame();
    } else {
      finishGame("Ви відповіли на всі питання");
    }
    return;
  }

  hintUsedForCurrentQuestion = false;
  hintBtn.disabled = hintsLeft === 0;

  const category = categories[currentCategoryIndex];

  categoryEl.textContent =
    `Запитання ${currentCategoryIndex + 1} з 15: ${category.name}`;

  currentQuestion =
    category.questions[Math.floor(Math.random() * category.questions.length)];

  questionEl.textContent = currentQuestion.text;
  answersEl.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });

  startTimer();
}

// ===== ПЕРЕВІРКА ВІДПОВІДІ =====
function checkAnswer(index) {
  clearInterval(timerInterval);

  if (index === currentQuestion.correct) {
    correctAnswers++;
  }

  currentCategoryIndex++;
  loadQuestion();
}

// ===== ТАЙМЕР =====
function startTimer() {
  timer = 15;
  timerEl.textContent = timer;

  timerInterval = setInterval(() => {
    timer--;
    timerEl.textContent = timer;

    if (timer === 0) {
      clearInterval(timerInterval);
      finishGame("Час вийшов");
    }
  }, 1000);
}

// ===== ПІДКАЗКА 50/50 =====
hintBtn.onclick = () => {
  if (hintsLeft === 0 || hintUsedForCurrentQuestion) return;

  hintsLeft--;
  hintUsedForCurrentQuestion = true;
  hintBtn.disabled = true;
  hintsCountEl.textContent = hintsLeft;

  const buttons = [...answersEl.children];
  const wrongButtons = buttons.filter(
    (_, i) => i !== currentQuestion.correct
  );

  wrongButtons
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
    .forEach(btn => btn.disabled = true);

  if (hintsLeft === 0) {
    hintBtn.disabled = true;
  }
};

// ===== ПРОГРАШ =====
function finishGame(reason) {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("gameOver").classList.remove("hidden");

  document.getElementById("gameOverText").textContent =
    `Гра завершена (${reason}). Ваш результат: ${correctAnswers}/15`;

  document.getElementById("prize").textContent =
    "Ваш виграш: 0 грн";
}

// ===== ПЕРЕМОГА =====
function winGame() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("gameOver").classList.remove("hidden");

  document.getElementById("gameOverText").textContent =
    "Вітаємо! Ви відповіли на всі питання!";

  document.getElementById("prize").textContent =
    "Ваш виграш: 15 000 грн";
}

// ===== АВАРІЙНЕ ЗАВЕРШЕННЯ =====
function endGame(reason) {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("gameOver").classList.remove("hidden");

  document.getElementById("gameOverText").textContent =
    `Гра завершена (${reason})`;

  document.getElementById("prize").textContent =
    "Ваш виграш: 0 грн";
}

// ===== ВІДСТЕЖЕННЯ ПЕРЕЗАВАНТАЖЕННЯ =====
window.addEventListener("beforeunload", () => {
  const gameActive =
    !document.getElementById("game").classList.contains("hidden");

  if (gameActive) {
    sessionStorage.setItem("gameKilled", "true");
  }
});

// ===== ЗАПУСК =====
startGame();
