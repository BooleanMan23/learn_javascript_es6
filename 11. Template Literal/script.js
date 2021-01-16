// template string

const name = 'Aditya Negara';
const age = 22;

console.log(`Hello my name is ${name} and im ${age} years old`);

// embedded expression
console.log(`${alert('hello')}`);

const x = 10;
console.log(`${(x % 2 == 0)? 'even' : 'odd'}`);

// html fragment

const people = {
    name: 'Aditya Negara',
    age: 23,
    address: 'jalan gunuk ivb nomor 72',
    email : 'aditnegara51@gmail.com'
};

const el = `<div class = "people">
            <h2>${people.name}</h2>
            <h3>${people.age}</h3>
            </div>`;

console.log(el);