let dolScore1 = 1;
let dolScore2 = 1;
let dolScore3 = 1;
let avergaeScoreDol = (dolScore1+dolScore2+dolScore3)/3;

let kolScore1 = 1000;
let kolScore2 = 1000;
let kolScore3 = 1000;
let avergaeScoreKol = (kolScore1+kolScore2+kolScore3)/3;



if(avergaeScoreDol>=100 && (avergaeScoreDol>avergaeScoreKol)){
    console.log(`Dolphins wins!!! with a score of  ${avergaeScoreDol}`);
}else if (avergaeScoreKol>=100 && (avergaeScoreKol>avergaeScoreDol)){
    console.log(`Kolas wins !! with a score of ${avergaeScoreKol}`);
}else if(avergaeScoreDol != 100 && avergaeScoreKol !=100){
    console.log(`No team Qualifies the winning criteria`);
    console.log(`The avergae Scores of Dolphins are ${averageScoreDol} and Kolas is ${avergaeScoreKol}`);
    if(avergaeScoreDol===avergaeScoreKol){
        console.log(`The Avergae score of the both the teams are same`);
    }
}

