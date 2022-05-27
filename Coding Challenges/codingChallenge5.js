// Functions
`use strict`;

const averageScoreCalculator = (score1,score2,score3) => (score1+score2+score3)/3
const checkWinner = function(Dolscore1,Dolscore2,Dolscore3,Kolscore1,Kolscore2,Kolscore3){
    const avgDolphins = averageScoreCalculator(Dolscore1,Dolscore2,Dolscore3);
    const avgKoalas = averageScoreCalculator(Kolscore1,Kolscore2,Kolscore3);
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas} 😘`);
    }else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins} 🙌`);
    }else{
        console.log(`Neither of the team wins 😂`)
    }
}
checkWinner(41,54,850,23,34,57);