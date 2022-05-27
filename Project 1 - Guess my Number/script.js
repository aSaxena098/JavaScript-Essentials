"use strict";
const correctNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".check").addEventListener("click", function () {
  let startScore = Number(document.querySelector(".score").textContent);
  let bestScore = Number(document.querySelector(".highscore").textContent);
  const num = Number(document.querySelector(".guess").value);
  if (startScore > 0) {
    if (!num) {
      document.querySelector(".message").textContent = "😶 No Number";
    } else if (num < correctNumber) {
      document.querySelector(".message").textContent = "Try a higher number";
      document.querySelector(".score").textContent = startScore - 1;
    } else if (num > correctNumber) {
      document.querySelector(".message").textContent = "Try a lower number";
      document.querySelector(".score").textContent = startScore - 1;
    } else {
      document.querySelector(".message").textContent =
        "You guessed the correct number!!!!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = correctNumber;
      if (startScore > bestScore) {
        document.querySelector(".highscore").textContent = startScore;
      } else {
        document.querySelector(".highscroe").textContent = bestScore;
      }
    }
  } else {
    document.querySelector(".message").textContent =
      "😥 You Have Lost The Game";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = null;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
