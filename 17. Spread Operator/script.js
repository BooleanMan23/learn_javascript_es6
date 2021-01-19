// Spread Operator
// : Memecah (expand/ unpack) iterables menjadi single element

const people = ['Aditya Negara', 'Aura Puteri Negeri', 'Ayesha Puteri Nagari'];
const people2 = ['Nina susilawati', 'Dadang Rahmat Irawan'];
console.log(...people[0]);
const family = [...people, 'Mong titi', ...people2];
console.log(family);

// copy an array
const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
const pokemonCopy = [...pokemon];
pokemon[0] = 'Useless';
console.log(pokemonCopy[0]);

// memasukan nodelist ke array
const liPokemon = document.querySelectorAll('li');
const pokemonEvolution = [...liPokemon].map(m => m.textContent);
console.log(pokemonEvolution);

const name = document.querySelector('.name');
const letter = [...name.textContent].map(l => `<span>${l}</span>`).join('');
name.innerHTML = letter;