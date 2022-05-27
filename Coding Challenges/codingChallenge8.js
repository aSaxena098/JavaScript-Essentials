let obj1 = {
    firstName: 'Jonas',
    lastName: 'Saxena',
    totalFriends: ['Miachael','Anubhav','Sehar'],
    birthyear: 1991,
    calAge:function(){
        return 2037 - this.birthyear;
    },
    aggregateFriends: function(){
        return this.totalFriends.length;
    },
    firstFriend:function(){
        return this.totalFriends[0];
    }
};

console.log(obj1.aggregateFriends());
console.log(obj1.firstFriend());

const jonas = {
    firstName:'Jonas',
    lastName:'Saxena',
    birthYear:2036,
    totalFriends: ['Michael','Anubhav','Sehar'],
    calAge:function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    licenceElgibelity:function(){
        if(this.calAge()>=18){
            console.log(`Jonas is ${this.calAge()} years old and has a Driver License`);
        }else{
            console.log(`Jonas is ${this.calAge()} years old and does not have a Driver License`);
        }
    },
    friendsInformation:function(){
        console.log(`${this.firstName} has ${this.totalFriends.length} frineds but ${this.totalFriends[0]} is his best friend`);
    },
    printAllTheFreinds: function(){
        for(let i=0 ;i<this.totalFriends.length;i++){
            console.log(`${this.totalFriends[i]}`);
        }
    }
};
console.log(jonas.calAge());
jonas.licenceElgibelity();
jonas.friendsInformation();
jonas.printAllTheFreinds();