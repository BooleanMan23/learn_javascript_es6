// Synchronous callback

// function sayHello(name){
//     alert(`Hello, ${name}`);
// }

// function getNameFromUser(callback){
//     const name = prompt('Insert your name : ');
//     callback(name);
// }

// getNameFromUser(sayHello);

// asynchronous callback
function getStudentData(url, success, error){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response);
            }else if(xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
function success(result){
  const student = JSON.parse(result);
  student.forEach(s => {
      console.log(s.name);
  });
}

function error(){

}

console.log("Mulai");
getStudentData('student.json', success, error);
console.log("Selesai");

// using jquery
console.log("Mulai 2");
$.ajax({
    url: `student.json`,
    success: (result) =>{
        result.forEach(s => {
            console.log(s.name);
        });
    },
    error: (e) =>{
        console.log(e.responseText);
    }
});
console.log("Selesai 2");