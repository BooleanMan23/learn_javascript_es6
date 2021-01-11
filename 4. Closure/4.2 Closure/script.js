alert("connected");

// Lexical Scope
// Closure = fungsi yang menggunakan variable dari parentnya
// function init(){
//     let name = 'Aditya';  //<--- local variable
//     function showName(){ //<--- inner function (closure)
//         console.log(name)  //<--- akses ke parent variable
//     }
//     showName();
// }

// init();


// contoh 2
// function greet(time){
//     return function(name){
//         console.log(`Greeting ${name}, good ${time}, have a nice day`);
//     }
// }

// let goodMorning = greet('Morning');
// let goodEvening = greet('Evening');
// let goodNight = greet('Night');
// goodEvening('Aditya');

// contoh 3
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());