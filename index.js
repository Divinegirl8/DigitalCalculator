
const container = document.querySelector('.frontcontainer');
const open = document.querySelector('.content');
const backcontainer = document.querySelector('.container');
const off = document.querySelector('.off');
const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
const allButton = document.querySelector('#allButtons')
const hide = document.querySelector(".typing-animation");
const operator = document.querySelector(".operator");



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
      hide.style.display = 'none';
    container.style.display = 'block'; 
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
  }


  if(event.target.className == "clr"){
    if(event.target.textContent == "C"){
    hide.textContent = "";
    hide.style.padding = "15px 10px";
  }}

  if(event.target.className == "del"){
    if(event.target.textContent == "ce"){
      hide.textContent = hide.textContent.slice(0,-1);
      if(hide.textContent == ""){
      hide.style.padding = "15px 10px";
    }}
  }

  
  if(event.target.className == "operator"){
    if(event.target.textContent == "+"){
      alert(true)
    }
    else if (event.target.textContent == "%"){
      alert(true)
    }
  }

})


