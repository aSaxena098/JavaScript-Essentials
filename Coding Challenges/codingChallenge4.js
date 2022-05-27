const billValue = 275;
const tip1 = 0.15*billValue;
const tip2 = 0.20*billValue;
const tip = (billValue>=50 && billValue<=100) ? tip1 : tip2;

console.log(`The final tip is: ${tip} and the final bill is ${billValue+tip}`);

// let a = prompt("enter your name");
// console.log(a);