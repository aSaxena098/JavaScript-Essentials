"use strict";
document.querySelector(".play-again").classList.remove("slds-button_success");
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".random-number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const checkNumber = Number(document.querySelector(".number").value);
  let currentScore = Number(
    document.querySelector(".current-score").textContent
  );
  let highScore = Number(document.querySelector(".high-score").textContent);

  if (checkNumber != 0) {
    if (checkNumber > randomNumber && currentScore > 0) {
      document.querySelector(".hints").textContent = "Enter a Lower Number!!";
      document.querySelector(".current-score").textContent = currentScore - 1;
    } else if (checkNumber < randomNumber && currentScore > 0) {
      document.querySelector(".hints").textContent = "Enter a Higher Number!!";
      document.querySelector(".current-score").textContent = currentScore - 1;
    } else if (currentScore > 0 && checkNumber == randomNumber) {
      document.querySelector(".hints").textContent =
        "You Guessed the Right Number!!";
      document
        .querySelector(".play-again")
        .classList.add("slds-button_success");
    } else if (currentScore == 0) {
      document.querySelector(".hints").textContent =
        "You have Lost the Game !!";
      document
        .querySelector(".play-again")
        .classList.add("slds-button_success");
    }
  } else {
    document.querySelector(".hints").textContent =
      "Please Enter the Number between 1 and 20";
  }
});

document.querySelector(".play-again").addEventListener("click", function () {
  document.querySelector(".hints").textContent = "Start Guessing!!";
  document.querySelector(".play-again").classList.remove("slds-button_success");
  document.querySelector(".current-score").textContent = 20;
  document.querySelector(".number").value = 0;
});


