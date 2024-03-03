
const container = document.querySelector('.frontcontainer');
const open = document.querySelector('.content');
const backcontainer = document.querySelector('.container');
const off = document.querySelector('.off');
const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
const allButton = document.querySelector('#allButtons')
const hide = document.querySelector(".typing-animation");
const operator = document.querySelectorAll(".operator");
const popButtons = document.querySelectorAll(".numbers");


//open
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

// off

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

// buttons

allButton.addEventListener('click', (event) => {
  event.preventDefault();
  let value;

  // numbers

  if (event.target.className == 'numbers') {
    value = event.target.textContent;
    hide.textContent += value;
    hide.style.fontSize = "25px";
    hide.style.padding = "5px";


    popButtons.forEach((number) => {
      number.classList.remove('clicked');
    });

   
    event.target.classList.add('clicked');

    setTimeout(() => {
      event.target.classList.remove('clicked');
    }, 500);

    operator.forEach(operators => {
      operators.classList.remove('active');
    });
  }



  // clear
  if (event.target.className == "clr") {
    if (event.target.textContent == "C") {
      hide.textContent = "";
      hide.style.padding = "15px 10px";
      operator.forEach(operators => {
        operators.classList.remove('active');
      });

      
      event.target.classList.add('clicked');
  
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 500);
  
  
    }
  }


  // delete
  if (event.target.className == "del") {
    if (event.target.textContent == "ce") {
      hide.textContent = hide.textContent.slice(0, -1);
      if (hide.textContent == "") {
        hide.style.padding = "15px 10px";
      }
      operator.forEach(operators => {
        operators.classList.remove('active');
      });

      event.target.classList.add('clicked');
  
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 500);
    }
  }

  // operator
  if (event.target.className == "operator") {
    let operatorText = event.target.textContent;

    if (operatorText == "=") {
      event.target.classList.add('clicked');
  
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 500);
  
      try {
        hide.textContent = eval(hide.textContent);
      } catch (error) {
        hide.textContent = "Error!";
      }
    } else {
      hide.textContent += operatorText;
      operator.forEach(operators => {
        operators.classList.remove('active');
      });
      event.target.classList.add('active');
      hide.style.padding = "5px";
    }
  }
});



