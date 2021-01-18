const name = 'Aditya Negara';
const age = 22;



function tryOne(strings, ...values){
    let result = '';
    strings.forEach((str, i) =>{
        result += `${str}${values[i] || ''}`;
    });
    return result;
}

function tryTwo(strings, ...values){
    return strings.reduce((result, str, i)=> `${result}${str}${values[i] || ''}`, '');
}

function highlight(strings, ...values){
    return strings.reduce((result, str, i)=> `${result}${str}<span class = "h1">${values[i] || ''}</span>`, '');
}

const str = tryOne`Hello my name is ${name} and im ${age} years old`;
const str2 = tryTwo`Hello my name is not ${name} and im ${age} years old`;
const str3 = highlight`Hello my name is not ${name} and im ${age} years old`;
document.body.innerHTML = str3;