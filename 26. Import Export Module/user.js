export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printName = () =>{
        console.log(`Hello my name is ${this.name}`);
    }

    printAge = () =>{
        console.log(`i am ${this.age} years old`);
    }
}

export const helloWorld = () =>{
    console.log("hello world");
}