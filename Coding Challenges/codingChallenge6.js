const calTip = function(amount){
    if(amount>=50 && amount<=300){
        return amount*0.15;
    }else{
        return amount*0.20;
    }
}
const tips = [calTip(100),calTip(200),calTip(12),calTip(500)];
console.log(tips);
const totalBill = function(amount){
    const tip = calTip(amount);
    return amount+tip;
}
const total = [totalBill(100),totalBill(200),totalBill(12),totalBill(500)];
console.log(total);
