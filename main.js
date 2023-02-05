let player1Score = 0;
let player2Score = 0;
let scoreToWin = 21;

const player1NameInp = document.querySelector("#name1Input");
const player2NameInp = document.querySelector("#name2Input");
const addName1 = document.querySelector("#addN1");
const addName2 = document.querySelector("#addN2");

const player1AddBtn = document.querySelector("#addScoreP1");
const player2AddBtn = document.querySelector("#addScoreP2");
const player1ScoreText = document.querySelector("#player1Score");
const player2ScoreText = document.querySelector("#player2Score");
const player1Name = document.querySelector("#player1Name");
const player2Name = document.querySelector("#player2Name");
const winnerScore = document.querySelector("#winnerScore");
const pointsForm = document.querySelector("#form");
const resetBtn = document.querySelector("#resetBtn");

player1AddBtn.addEventListener("click", () => {
  if (
    player1Score === scoreToWin ||
    player1ScoreText.textContent === winnerScore.textContent
  ) {
    scoreToWin = 21;
    winnerScore.textContent = player1Name.textContent + " Wins";
    player1Score = 0;
    player2Score = 0;
  }
  player1Score += 1;
  player1ScoreText.textContent = player1Score;
});

player2AddBtn.addEventListener("click", () => {
  if (
    player2Score === scoreToWin ||
    player2ScoreText.textContent === winnerScore.textContent
  ) {
    winnerScore.textContent = player2Name.textContent + " Wins";
    player1Score = 0;
    player2Score = 0;
    scoreToWin = 21;
  }
  player2Score += 1;

  player2ScoreText.textContent = player2Score;
});

pointsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  scoreToWin = pointsForm.elements[0].value;
  winnerScore.textContent = scoreToWin;
});

resetBtn.addEventListener("click", () => {
  player1Score = 0;
  player2Score = 0;
  scoreToWin = 21;
  player1ScoreText.textContent = 0;
  player2ScoreText.textContent = 0;
  winnerScore.textContent = 21;
  pointsForm.elements[0].value = "";
});

addName1.addEventListener("click", () => {
  player1Name.textContent = player1NameInp.value;
  player1NameInp.value = "";
});

addName2.addEventListener("click", () => {
  player2Name.textContent = player2NameInp.value;
  player2NameInp.value = "";
});
