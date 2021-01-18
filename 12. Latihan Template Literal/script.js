const container = document.getElementsByClassName("container")[0];
const container2 = document.getElementsByClassName("container")[1];
const container3 = document.getElementsByClassName("container")[2];
const container4 = document.getElementsByClassName("container")[3];

const contact = {
    name: 'Aditya Negara',
    phoneNumber : '0811111111',
    email : 'aditnegara@gmail.com'
}

const contactElement =  `<div class="contact">
                            <h2>${contact.name}</h2>
                            <span class="phoneNumber">${contact.phoneNumber}</span>
                            <span class="email">${contact.email}</span>
                         </div>`;

                         
container.innerHTML = contactElement;


const contacts = [
    {
        name: 'Aditya Negara',
        phoneNumber : '0811111111',
        email : 'aditnegara@gmail.com'
    },
    {
        name: 'Aura Puteri Negeri',
        phoneNumber : '082222222',
        email : 'auraputeri@gmail.com'
    },
    {
        name: 'Ayesha Puteri Nagari',
        phoneNumber : '0833333',
        email : 'ayeshaputeri@gmail.com'
    }
]

const contactsElement = `<div class="contact">
                            ${contacts.map(c => `<ul>
                                <li>${c.name}</li>
                                <li>${c.phoneNumber}</li>
                                <li>${c.email}</li>
                            </ul>`).join('')}
                        </div>`;

container2.innerHTML = contactsElement;

const song = {
    title: 'My Brother is a dragonslayer!',
    singer : 'Berserk',
    feat : 'guts'
}

const songElement = `<div class="song">
                            <ul>
                                <li>${song.singer}</li>
                                <li>${song.title} ${song.feat ? `(feat. ${song.feat})` :  ``}</li>
                            </ul>
                     </div>`;
container3.innerHTML = songElement;

const house = {
    name: 'House Lannister',
    castle : 'Casterly Rock',
    member : [
        `Jaime Lannister`,
        `Tyrion Lannister`,
        `Cersei Lannister`
    ]
}

const houseElement = `<div class="house">
                        <h2>${house.name}</h2>
                        <span class="castle">${house.castle}</span>
                        <h4>House Member : </h4>
                        ${printHouseMember(house.member)}
                    </div>`;

function printHouseMember(member){
    return `<ol>${member.map(member => `<li>${member}</li>`).join('')}</ol>`
}

container4.innerHTML = houseElement;

