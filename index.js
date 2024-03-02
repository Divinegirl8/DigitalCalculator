
const container = document.querySelector('.frontcontainer');
const open = document.querySelector('.content');
const backcontainer = document.querySelector('.container');
const off = document.querySelector('.off');
const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
const allButton = document.querySelector('#allButtons')

open.addEventListener('click', () => {
  backcontainer.style.display = 'block';

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
    container.style.display = 'block'; 
  }, 300);
});



