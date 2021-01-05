// Kekurangan dari function declaration
// Tetap membuat method yang tidak digunakan
// solusinya 
const methodCharacter = {
    eat : function(food){
        this.energy += food;
        console.log(`Enjoy your meal ${this.name}`);
    },
    play :  function(hour){
        this.energy -= hour;
        console.log(`${this.name} is Playing`);
    },
    sleep : function(hour){
        this.energy += hour * 2;
        console.log(`${this.name} is Sleeping`);
    }
}
function Character(name, energy){
    // let character = {};
    // dengan menginisialisasi dengan object create tidak perlu 
    // menginisasi method hanya cukup meload di parameter object.create
    let character = Object.create(methodCharacter);
    character.name = name;
    character.energy = energy;
    return character;
}

let adit_character = Character('Aditya', 10); 

// Permasalahan diatas