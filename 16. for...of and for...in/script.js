// for...of
    const people = ['Aditya Negara', 'Aura Puteri Negeri', 'Ayesha Puteri Nagari'];
    const name = "Aditya Negara";
    const pokemonList = document.getElementsByClassName('pokemon');
    function addition(){  
        let sum = 0;
        for(a of arguments){
            sum += a;
        }
        return sum;
    }

    for(const p of people){
        console.log(p);
    }

    for (const n of name){
        console.log(n);
    }

    // for of mengunakan iterasi

    for(const [i, p] of people.entries() ){
        console.log(`${p} index is ${i+1}`);
    }

    // for of untuk nodelist
    for(p of pokemonList){
        console.log(p.innerHTML);
    }

    // for of untuk argument
    console.log(addition(1,2,3,4,5,6));

// for..in
const pokemon = {
    name: 'Charizard',
    type : [
        'fire',
        'flying'
    ],
    move : [
        'fly',
        'flamethrower',
        'slash',
        'blast burn'
    ]
}

for(p in pokemon){
    console.log(p);
}