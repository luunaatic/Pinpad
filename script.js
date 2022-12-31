/* PIn code


make class that contains the backspace and check function
needs button function for check 

needs rigth pin code

*/

const buttons = document.querySelectorAll('.btn');
const backspace_btn= document.querySelector('.backspace');
const check_btn = document.querySelector('.check');
const output = document.querySelector('.output');
let myPin = 1323;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
output.innerText += btn.innerText;
    })
})

backspace_btn.addEventListener('click', function(del){
    output.innerText = output.innerText.slice(0,-1)
})
check_btn.addEventListener('click', function(){
    if(myPin == output.innerText){
        alert("Correct pin");
    } else{
        alert("Not the correct pin, please try again");
    }
   
})