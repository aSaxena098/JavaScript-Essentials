'use strict';
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score01El = document.getElementById("score--0");
const score02El = document.getElementById("score--1");
const currentScore01El = document.getElementById("current--0");
const currentScore02El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

score01El.textContent = 0;
score02El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore01 = 0;
let currentScore02 = 0;

btnRoll.addEventListener("click", function () {
   const diceNumber = Math.trunc(Math.random() * 6) + 1;
   console.log(diceNumber);
   diceEl.classList.remove("hidden");
   diceEl.src = `dice-${diceNumber}.png`;

   if (diceNumber !== 1) {

      if (player0El.classList.contains("player--active")) {
         currentScore01 += diceNumber;
         currentScore01El.textContent = currentScore01;
      } else {
         currentScore02 += diceNumber;
         currentScore02El.textContent = currentScore02;
      }
   } else {
      if (player0El.classList.contains("player--active")) {
         player0El.classList.remove("player--active");
         player1El.classList.add("player--active");
         currentScore01 = 0
         currentScore01El.textContent = currentScore01;
      } else {
         player0El.classList.add("player--active");
         player1El.classList.remove("player--active");
         currentScore02 = 0
         currentScore02El.textContent = currentScore02;
      }
   }

});
let saveScore01 = 0;
let saveScore02 = 0;

btnHold.addEventListener("click", function () {
   if (player0El.classList.contains("player--active")) {
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
      saveScore01 = Number(score01El.textContent);
      saveScore01 += currentScore01;
      score01El.textContent = saveScore01;
      currentScore01 = 0;
      currentScore01El.textContent = currentScore01;
   } else {
      player0El.classList.add("player--active");
      player1El.classList.remove("player--active");
      saveScore02 = Number(score02El.textContent);
      saveScore02 += currentScore02;
      score02El.textContent = saveScore02;
      currentScore02 = 0;
      currentScore02El.textContent = currentScore02;
   }
});

btnNew.addEventListener("click", function () {
   if (!player0El.classList.contains("player--active")) {
      player0El.classList.add("player--active");
      player1El.classList.remove("player--active");
   }
   diceEl.classList.add("hidden");
   currentScore01El.textContent = 0;
   currentScore02El.textContent = 0;
   score01El.textContent = 0;
   score02El.textContent = 0;
})





