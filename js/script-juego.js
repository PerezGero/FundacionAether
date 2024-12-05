const questions = [
  {
    question: "¿Cuál es el habitat del UE-02 Pheromosa?",
    options: ["Ultrabosque", "Ultradesierto", "Ultropolis"],
    answer: 1
  },
  {
    question: "¿Cuál es el metodo de cotencion creado para los UE?",
    options: ["El repelente", "La Enteball", "la Ultraball"],
    answer: 1
  },
  {
    question: "¿Cuales son los tipos elementales del UE-04 Kartana?",
    options: ["Roca Veneno", "Planta Acero", "Bicho Lucha"],
    answer: 1
  },
  {
    question: "¿Quién es la jefa de la fundacion Æther?",
    options: ["Samina", "Polo", "Sabrina"],
    answer: 0
  },
  {
    question: "¿Cuál es la region en la que aparecieron los UE?",
    options: ["Galar", "Kalos", "Alola"],
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
      finalMessageDiv.innerHTML = `<h1>¡Felicidades ${playerName}, eres un Ultraguardian honorario!</h1>`;
      hiddenImage.classList.remove("hidden");
    } else {
      finalMessageDiv.innerHTML = `Lo lamento ${playerName}, obtuviste ${score} puntos. ¡Intenta nuevamente!`;
    }
  }

  function restartGame() {
    currentQuestion = 0;
    score = 0;
    playerName = "";
    playerNameInput.value = "";
    hiddenImage.classList.add("hidden");
    gameDiv.classList.remove("hidden");
    quizDiv.classList.add("hidden");
    resultDiv.classList.add("hidden");
  }
});
