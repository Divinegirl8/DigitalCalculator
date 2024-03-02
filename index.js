
const container = document.querySelector('.frontcontainer');
const open = document.querySelector('.content');
const backcontainer = document.querySelector('.container');
const off = document.querySelector('.off');
const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
const allButton = document.querySelector('#allButtons')
const hide = document.querySelector(".typing-animation");
const operator = document.querySelectorAll(".operator");
const resultValue = document.querySelector(".result");

function addition(operand1, operand2) { return operand1 + operand2;}
function modulo(operand1,operand2){return operand1 % operand2;}
function division(operand1,operand2){
  if (operand2 == 0) return "division by zero is undefined";
  return operand1 / operand2;
}
function multiply(operand1,operand2){
  return operand1 * operand2; 
}
function minus(operand1,operand2){
  return operand1 - operand2;

}

let operand1 = "";
let operatorClicked = "";
let result;
let operand2;


open.addEventListener('click', () => {
  backcontainer.style.display = 'block';
  hide.style.display = 'block';

  const frontContainerRect = container.getBoundingClientRect();
  
  backcontainer.style.position = 'absolute';
  backcontainer.style.top = frontContainerRect.top + 'px';
  backcontainer.style.left = frontContainerRect.left + 'px';
  buttons.classList.add('slide-up');
  buttons.classList.remove('slide-down');


  container.style.display = 'none'; 
});

off.addEventListener('click', () => {
  buttons.classList.remove('slide-up');
  buttons.classList.add('slide-down');

  setTimeout(() => {
    backcontainer.style.display = 'none';
      hide.textContent = '';
      hide.style.padding = "15px 10px";
    container.style.display = 'block'; 
    operator.forEach(operators => {
      operators.classList.remove('active');
    });
  }, 300);
});

allButton.addEventListener('click',(event) =>{
  
  event.preventDefault();
  let value;
  if(event.target.className == 'numbers'){
    
    
    value = event.target.textContent;
hide.textContent += value;
hide.style.fontSize = "25px";
hide.style.padding = "5px";

operator.forEach(operators => {
  operators.classList.remove('active');
});
  }

  // clear

  if(event.target.className == "clr"){
    if(event.target.textContent == "C"){
    hide.textContent = "";
    hide.style.padding = "15px 10px";
  }}


  // delete

  if(event.target.className == "del"){
    if(event.target.textContent == "ce"){
      hide.textContent = hide.textContent.slice(0,-1);
      if(hide.textContent == ""){
      hide.style.padding = "15px 10px";
    }}
  }
  

  // addition
  if(event.target.className == "operator"){
    if(event.target.textContent == "+"){
      operand1 =  parseFloat(hide.textContent);

      operatorClicked = "+";
      hide.textContent ="";
      hide.style.padding = "15px 10px";     
      
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
    
    }

    //modulo
    else if (event.target.textContent === "%"){
      operand1 =  parseFloat(hide.textContent);
      operatorClicked = "%";
      hide.textContent ="";
      hide.style.padding = "15px 10px";     
      
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
    

    }

    // division
    else if(event.target.textContent === "/"){
    
      operand1 = parseFloat(hide.textContent)
      operatorClicked = "/";   
      hide.textContent ="";
      hide.style.padding = "15px 10px";     
      
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    // multiplication
    else if(event.target.textContent === "X"){
      operand1 = parseFloat(hide.textContent);
      operatorClicked = "X";

      hide.textContent ="";
      hide.style.padding = "15px 10px";     
      
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
    }


    // subtraction
   
    else if(event.target.textContent === "-"){
      
      operand1 = parseFloat(hide.textContent);
      operatorClicked = "-";
      hide.textContent ="";
      hide.style.padding = "15px 10px";     
      
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
  
    }


    // equals

    else if(event.target.textContent == "=" && operatorClicked){
     
      operand2 = parseFloat(hide.textContent);
    

      switch(operatorClicked){
        case "+":
             result = addition(operand1, operand2);
             break;
        case "%":
             result = modulo(operand1,operand2);
             break;    
        case "/":
             result = division(operand1,operand2);
             break;
        case "X":
             result = multiply(operand1,operand2);
             break;  
        case "-":
             result = minus(operand1,operand2);  
      }
      

      hide.textContent = result;
      operatorClicked = "";
     
    }
  }

  

})


