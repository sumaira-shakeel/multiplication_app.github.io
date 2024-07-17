let score = 0;
let currentQuestion = {
  num1: 1,
  num2: 1,
  answer: 1
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const questionElement = document.getElementById("question");
  const scoreElement = document.getElementById("score");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userAnswer = parseInt(input.value);
    if (userAnswer === currentQuestion.answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    generateNewQuestion();
    input.value = "";
  });

  generateNewQuestion();

  function generateNewQuestion() {
    currentQuestion.num1 = Math.floor(Math.random() * 10) + 1;
    currentQuestion.num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion.answer = currentQuestion.num1 * currentQuestion.num2;
    questionElement.textContent = `What is ${currentQuestion.num1} multiplied by ${currentQuestion.num2}?`;
  }
});