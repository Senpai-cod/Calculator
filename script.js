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
    case "x":
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

let operator= "undefined";
let text = "";
let a1 = "";
let b1 = "";
let result = "undefined";
buttons.forEach((button) =>{
    
    button.addEventListener("click", ()=>{
        if(button.textContent == "="){
           
          a1 = Number(a1);
          b1 = Number(b1);
          result =  operate(a1,operator,b1); 
          if(toString(result).length > 8){
            result = Math.round(Number(result));
          }
          operator = "undefined";
          b1 = "";     
        }     
        screen.style.color = "black";

if(operator == "undefined"){
    if(result != "undefined"){
        a1 = result;
        
    }
    else if((button.textContent >= "0" && button.textContent <= "9" )|| button.textContent == "."){
        
         a1 += button.textContent
    }
}
    if(button.textContent == "+" ||
    button.textContent == "-" ||
    button.textContent == "x" ||
    button.textContent == "/" ){
        operator = button.textContent;
    }
    if(operator != "undefined"){
            if((button.textContent >= "0" && button.textContent <= "9" )|| button.textContent == "."){
        b1 += button.textContent
    }}












        if(button.textContent == "="){
            text = result;
        }
        else if(button.textContent == "Clear"){
         text= "";
         operator= "undefined";
         a1 = "";
         b1 = "";
         result = "undefined";
         screen.value = "calculate";
         screen.style.color = "gray";
        }
        else text = text + button.textContent ;
         
        if(button.textContent != "Clear")screen.value = text ;


        result = "undefined";
    })

})