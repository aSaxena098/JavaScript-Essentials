const john = {
    firstName:'John',
    lastName:'Saxena',
    height:1.95,
    weight:92,
    calBMI:function(){
        return `${this.weight/(this.height**2)}`;
    }
};

const mark = {
    firstName:'Mark',
    lastName:'Saxena',
    height:1.69,
    weight:78,
    calBMI:function(){
        return `${this.weight/(this.height**2)}`;
    }
};

console.log(john.calBMI());
console.log(mark.calBMI());

if(john.calBMI()>mark.calBMI()){
    console.log(`john BMI is higher (${john.calBMI()}) than mark's BMI (${mark.calBMI()})`);
}else{
    console.log(`mark BMI is higher (${mark.calBMI()}) than john's BMI (${john.calBMI()})`);
}


const arr =[
    "anubhav",
    2102-1991,
    ["saxena","singh"],
    true
];
let arr1 = [];
for(let i=0;i<arr.length;i++){
    arr1.push(typeof(arr[i]));
}
console.log(arr1);