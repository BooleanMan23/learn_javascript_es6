// Fungsi normal

function showMessage(name){
    alert('Hello From Normal Function ' + name);
}

showMessage('Aditya Negara');

// Functional Ekspression

let showMessageTwo = function(name){
    alert('Hello From Functional Ekspression ' + name);
}

showMessageTwo('Aditya Negara 2');

// Arrow Function : New Form of function ekspression that is shorter

let showMesseageArrow = (name) =>{
    alert('Hello From Arrow Fucntion ' + name);
}

showMesseageArrow('Aditya Negara');

const whatTimeIsIt =  (cityName, time) => {
    return 'In '+ cityName + ' its ' + time + ' o Clock';
}

console.log(whatTimeIsIt('Jakarta', '5'));

// Implicit return
const whatTimeIsItTwo = (cityName, time) =>  'In '+ cityName + ' its ' + time + ' o Clock';

console.log(whatTimeIsItTwo('Bandung', '10'));

// Contoh  normal function
let people = ['Adita Negara', 'Aura Putri Negeri', 'Ayesha Puteri Nagari'];
let countLetter = people.map(function(name){
    return name.length;
});
console.log(countLetter);

// Contoh arrow function
let countLetterTwo = people.map(name=>name.length);
console.log(countLetterTwo);

// contoh arrow function mengembalikan object
let countLetterThree = people.map(name => ({name : name, letterCount : name.length}));
console.table(countLetterThree);