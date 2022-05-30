"use strict";
const numberClass = document.querySelectorAll(".number");
let result = document.querySelector(".result");
let expression = "";
for (let index = 0; index < numberClass.length; index++) {
  numberClass[index].addEventListener("click", (event) => {
    if (event.target.innerText == "=") {
      result.value = eval(expression);
    }else if(event.target.innerText == 'C'){
      expression='';
      result.value = expression;
    } else {
      expression += event.target.innerText;
      result.value = expression;
    }
     
  });
}

    

