// Asyncronous Function
// Sebuah function yang bekerja secara asyncronous (melalui event loop),
// yang menghasilkan (implisit) promise sebagai return 
// value=nya, tapi cara penulisa code nya menggunakan penulisan yang
// syncronous(standard)

// const coba = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve('done')
//     }, 2000);
// });

function cobaPromise(){
    return new Promise((resolve, reject) =>{
        const waktu = 10000;
        if(waktu < 5000){
            setTimeout(()=> {
                resolve('done')
            }, 2000)
        }else{
            reject('too long!');
        }
    });
}

// const coba = cobaPromise();
// coba.then(()=> console.log(coba))
//     .catch(()=> console.log(coba));

async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }
    catch(err){
        console.log(err);
    }
   
}

cobaAsync();