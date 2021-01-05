// Cara membuat object pada javascript
// 1. Object Literal

let character = {
    name: 'Aditya Negara',
    energy: 10,
    eat: function(food){
        this.energy += food;
        console.log(`Selamat makan ${this.name}`);
    }
}

let character2 = {
    name: 'Ayesha Puteri Nagari',
    energy: 5,
    eat: function(food){
        this.energy += food;
        console.log(`Selamat makan ${this.name}`);
    }
}

// 2. Function declaration

function Character(name, energy){
    let character = {};
    character.name = name;
    character.energy = energy;
    character.eat = function(food){
        this.energy += food;
        console.log(`Enjoy your meal ${this.name}`);
    }

    character.play = function(hour){
        this.energy -= hour;
        console.log(`${this.name} is Playing`);
    }

    return character;
}

// let adit_character = Character('Aditya', 10); 
// let ayesha_character = Character('Ayesha', 5);

//3. constructor function
function CharacterConstructor(name, energy){
    this.name = name;
    this.energy = energy;

    this.eat = function(food){
        this.energy  += food;
        console.log(`Enjoy your meal ${this.name}`);
    }

    this.play = function(hour){
        this.energy -= hour;
        console.log(`${this.name} is Playing`);
    }
}

let adit_character = new CharacterConstructor('aditya', 10);
let ayesha_character = new CharacterConstructor('ayesha', 5);