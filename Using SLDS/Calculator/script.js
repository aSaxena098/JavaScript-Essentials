"use strict";
const numberClass = document.querySelectorAll(".number");
for (let index = 0; index < numberClass.length; index++) {
    
  let arr = [];
  numberClass[index].addEventListener("click", function () {
    console.log(`you clicked ${numberClass[index].textContent}`);
    arr[0] = numberClass[index].textContent;
    document.querySelector(".result").value += arr[0];
    console.log(Number(document.querySelector(".result").value));
  });
}
