

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('button.change-color'),
  colorLabel: document.querySelector('span.color')
} 

refs.button.addEventListener('click',onButtonChangeColor);


function onButtonChangeColor() {

  refs.body.style.backgroundColor =  getRandomHexColor();
  refs.colorLabel.textContent = getRandomHexColor();
  } 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





