function add(a,b){
    return a + b;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
let a;
let oper;
let b;

function operate(a,oper,b){
    switch(oper){
    case '+':
     return add(a,b); 
    case'-':
     return substract(a,b); 
    case "*":
     return multiply(a,b); 
    case "/":
     return divide(a,b); 
    default :
     return "Please Enter a Valid operator";

    }
}
const screen = document.querySelector("input");
const buttons = document.querySelectorAll("button");
screen.value = "calculate";
screen.style.color = "gray";

let text = "";
let a1;
const b1 = "";
buttons.forEach((button) =>{
    
   
    button.addEventListener("click", ()=>{
        
        screen.style.color = "black";
        a1 = button.textContent;
        text = text + button.textContent ;
        screen.value = text ;
    })
    
})