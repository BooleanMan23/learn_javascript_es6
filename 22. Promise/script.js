
// using javascript es6
// fetch('http://www.omdbapi.com/?apikey=ee23d2e8&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));


// promise = object yang merepresentasikan keberhasilan atau
    // kegagalan dari event yang asynchronous yang akan terjadi
    // di masa yang akan datang

// states(fulfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch) 

// example 1
let fulfilled = true;
const promise1 = new Promise((resolve, reject) =>{
    if(fulfilled){
        resolve('Promise has been fulfilled!');
    }else{
        reject('Promise has been rejected');
    }
});

promise1.then(response => console.log('OK! : '+ response))
        .catch(response => console.log('NOT OK : '+ response));

// example 2
let fulfilled2 = true;
const promise2 = new Promise((resolve, reject)=>{
    if(fulfilled2){
        setTimeout(() => {
            resolve('Fulfilled after 2 second!');
        }, 2000);
    }else{
        setTimeout(() => {
            resolve('Not fulfilled after 2 second!');
        }, 2000);
    }
});

console.log('start');
promise2.finally(() => console.log('Done waiting!'))
        .then(response => console.log('OK! : '+ response))
        .catch(response => console.log('NOT OK : '+ response));
console.log('end');

// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            title: 'Avengers',
            director : 'Me?',
            actor : 'me'
        }])
    }, 1000);
});


const film2 = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            title: 'Harry Potter',
            director : 'u?',
            actor : 'u'
        }])
    }, 500);
});

Promise.all([film, film2]).then(response => console.log(response));