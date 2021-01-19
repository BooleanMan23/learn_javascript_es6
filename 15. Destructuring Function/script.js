

function addtionMultiplication(a, b){
    return [a+b, a*b];
}

function mathematicalOperation(a,b){
    return [a+b, a-b, a*b, a/b];
}

function mathematicalOperation2(a,b){
    return {
        addition : a+b,
        subtraction: a-b,
        multiplication: a*b,
        division: a/b
    }
}

const [additionSum, multiplySum] = addtionMultiplication(2,3);
const [add,subtract, multiply, divison = 'null' ] = mathematicalOperation(4,5);
const {division, addition, multiplication, subtraction} = mathematicalOperation2(2,3);

console.log(subtraction);
 
// Destruncturing function argument

const people = {
    name: 'Aditya Negara',
    age : 22, 
    email : 'aditnegara51@gmail.com',
    attribute : {
        aglity : 70,
        strength : 80,
        inteligent : 89
    }
}

// not using destructuring
function printPeople(name, age){
    return `Hello, my name is ${name}, im ${age} years old`;
}

console.log(printPeople(people.name, people.age));

// using destructuirng


function printPeople2({name, age}){
    return `Hello, my name is ${name}, im ${age} years old 2222`;
}

function printPeople3({name, age, attribute:{aglity, strength, inteligent}}){
    return `Hello, my name is ${name}, im ${age} years old,
    and my agglity attribut is ${aglity} `;
}

console.log(printPeople2(people));
console.log(printPeople3(people));