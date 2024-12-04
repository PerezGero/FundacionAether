const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Roma"],
    answer: 1
  },
  {
    question: "¿Cuánto es 5 + 3?",
    options: ["6", "8", "10"],
    answer: 1
  },
  {
    question: "¿Qué planeta es conocido como el planeta rojo?",
    options: ["Venus", "Marte", "Júpiter"],
    answer: 1
  },
  {
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    options: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda"],
    answer: 0
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Pacífico"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const gameDiv = document.getElementById("game");
  const quizDiv = document.getElementById("quiz");
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const resultDiv = document.getElementById("result");
  const finalMessageDiv = document.getElementById("finalMessage");
  const playerNameInput = document.getElementById("playerName");

  startButton.addEventListener("click", () => {
    playerName = playerNameInput.value.trim();
    if (playerName === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    gameDiv.classList.add("hidden");
    quizDiv.classList.remove("hidden");
    showQuestion();
  });

  restartButton.addEventListener("click", restartGame);

  function showQuestion() {
    if (currentQuestion < questions.length) {
      const questionData = questions[currentQuestion];
      questionDiv.textContent = questionData.question;
      optionsDiv.innerHTML = "";
      questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsDiv.appendChild(button);
      });
    } else {
      endGame();
    }
  }

  function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    showQuestion();
  }

  function endGame() {
    quizDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    if (score === 5) {
      finalMessageDiv.innerHTML = `<h1>¡Felicidades ${playerName}, ganaste!</h1>`;
    } else {
      finalMessageDiv.innerHTML = `Lo siento ${playerName}, obtuviste ${score} puntos. ¡Intenta nuevamente!`;
    }
  }

  function restartGame() {
    currentQuestion = 0;
    score = 0;
    playerName = "";
    playerNameInput.value = "";
    gameDiv.classList.remove("hidden");
    quizDiv.classList.add("hidden");
    resultDiv.classList.add("hidden");
  }
});
