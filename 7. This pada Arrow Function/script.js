// Konsep This pada arrow function

// Constructor function
const people = function(){
    this.name = 'Aditya Negara',
    this.age = '33';
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name}, and im ${this.age} years old`);
    }
}

const aditya = new people();

// Arrow Function
const peopleTwo = function (){
    this.name = 'Aditya Negara',
    this.age = 23,
    this.sayHello = () => {
        console.log(`Hello my name is ${this.name} and im ${this.age} years old`);
    }
}

const adityaTwo = new peopleTwo();

// Object Literal = arrow function tidak memiliki konsep this
const peopleThree = {
    name: 'Aditya Negara',
    age: 33,
    sayHello: () =>{
        console.log(`Hello my name is ${this.name} and im ${this.age} years old`);
    }
}
