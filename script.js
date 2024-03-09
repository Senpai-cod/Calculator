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