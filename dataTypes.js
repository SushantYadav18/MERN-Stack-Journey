


//Main Primative datatypes . it's reguraly  used datatypes 
// check a datatypes  than use typeof operator.....

let firstName = "sushant";
console.log(firstName);
console.log(typeof firstName); //checked datatypes

let age = 23;
console.log(age);

let isStudent = true;
console.log(isStudent);

let selectedUser = null ;
console.log(selectedUser);
console.log(typeof selectedUser);

let bigNumber = 12932939939n;
console.log(bigNumber);


let id= Symbol("id");
console.log(id)



//Object and Array

//object: strores realted info as keyvalue pairs

const names ={

    name:"sushant",
    adrress:"Kathmandu",
    age:23,
    isMale:true
}

console.log(names);  
console.log(typeof names);  // checked datatypes :it's object
console.log(names.adrress);
console.log(typeof names.adrress); //checked datatypes specific one



//Arrays: stores an ordered collecction of values


const marks = [2,4,56,6,32,3,]
    
console.log(marks);
console.log(marks[3]); //Array indexes start at 0 ,not 1.
console.log(typeof marks);