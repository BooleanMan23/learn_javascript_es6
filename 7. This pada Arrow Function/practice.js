const box = document.querySelector('.box');



box.addEventListener('click', function(){
    let firstClass = 'size';
let secondClass = 'caption';

if(this.classList.contains(firstClass)){
    [firstClass, secondClass] = [secondClass, firstClass];
}
    this.classList.toggle(firstClass);
    setTimeout(() =>{
        this.classList.toggle(secondClass);
    }, 600)
});