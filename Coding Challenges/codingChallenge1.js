// BMI calaculator
let Markmass = 78;
let Markheight =1.69;
let MarkBmi = Markmass/(Markheight**2);
let Johnmass = 92;
let Johnheight = 1.95;
let JohnBmi = Johnmass/(Johnheight**2);

if(MarkBmi>JohnBmi){
    console.log(`Mark's Bmi is higher than John's Bmi by ${MarkBmi-JohnBmi}`);
}else{
    console.log(`John's Bmi is higher than Mark's Bmi by ${JohnBmi-MarkBmi}`);

}


