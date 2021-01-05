function Character(name, energy){
    this.name = name;
    this.energy = energy;
}

Character.prototype.eat = function(food){
    this.energy += food;
    return `${this.name} Is Eating`;
}

Character.prototype.play = function(hour){
    this.energy -= hour;
    return `${this.name} Is playing`;
}

Character.prototype.sleep = function(hour){
    this.energy += hour * 2;
    return `${this.name} Is sleeping`;
}

let aditya = new Character('Aditya', 10);

// menggunakan Class

class CharacterClass {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(food){
        this.energy += food;
        return `${this.name} Is Eating`;
    }

    play(hour){
        this.energy -= hour;
        return `${this.name} Is playing`;
    }
    
    sleep(hour){
        this.energy += hour * 2;
        return `${this.name} Is Sleeping`;
    }
}

let ayesha = new CharacterClass('ayesha', 5);