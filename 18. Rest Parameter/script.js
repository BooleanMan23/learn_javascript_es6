// Rest Parameter
//  : Merepresentasikan argument pada function dengan jumlah yang tidak 
//   terbatas menjadi sebuah array

const groupOne = ['Aditya Negara', 'Pandu Pira Haskara', 'Emirsyah M Rizky', 'Milzam Rabbani'];
const [leader, viceLeader, ...member ] = groupOne;
console.log(leader);
console.log(viceLeader);
console.log(member);
const team = {
    projectManager : 'Aditya Negara',
    frontEnd : 'Harun Arrasyid Hasibuan',
    backEnd : 'Dary Ardiansyah',
    ux : 'Fachril Rachmam Zulfidar',
    android : 'Rahmatsyah'
}

const {projectManager, ...teamMember } = team;
console.log(projectManager);
console.log(teamMember);

function myFunc(...arguments){
    return arguments;
}

function sum(...argument){
    let sum = 0;
    for(a of argument){
        sum += a;
    }
    return sum;
}


console.log(sum(6,7,8,9));
console.log(myFunc(1,2,3,4,5));

// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1,2,'Aditya', false, 10, true, 'Doddy'));