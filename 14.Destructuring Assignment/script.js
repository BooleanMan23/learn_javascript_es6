const children = ['aditya', 'aura', 'ayesha'];
const [a,b,c] = children;
console.log(a);
console.log(b);
console.log(c);

// skipping
const number = ['one', 'two', 'three', 'four'];
const[d, ,f] = number;
console.log(d);
console.log(f);

const people = {
    name: 'Aditya Negara',
    age : 22,
    email: 'aditya@gmail.com'
};

const {name, age, email} = people;
console.log(name);
console.log(age);
console.log(email);

// swap item
let swapOne = 'swapOne';
let swapTwo = 'swapTwo';
[swapOne,swapTwo] = [swapTwo,swapOne];
console.log(swapOne);
console.log(swapTwo);

// return value pada function

function coba(){
    return ['coba1','coba2'];
}

const[returnOne, returnTwo] = coba();
console.log(returnOne);

// rest parameter
const [rest1, ...rest] = [1,2,3,4,5];
console.log(rest);

// assignment tanpa deklarasi object
({namaAye : nA, umurAye : uY} = {
    namaAye : 'Ayesha Puteri Nagari',
    umurAye : 4
});

console.log(nA);

// memberikan default value
const cat = {
    name: 'mongtiti',
    age: 0.6
}

const {catName, catAge, catColor = 'brown'} = cat;
console.log(catColor);


// mengirim filed pada object setelah dikirim sebagai parameter untuk function
const dog = {
    id : 123,
    name : 'ruufus',
    age : 2,
    color : 'brown'
}

function getDogColor({ color}){
    return color;
}

console.log(getDogColor(dog));
