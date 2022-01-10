const refs = {
  input: document.querySelector('input#number'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('div#boxes')
  } 



refs.buttonCreate.addEventListener('click', createBoxes);



function createBoxes(amount) {
const amount = refs.input.value;
  let boxes = ``;
  for (let i = 0; i < amount; i += 1) {
    return boxes += `<div style = "width: ${30 + i * 10}px ; height:${30 + i * 10}px"></div>`
  }
  console.log(boxes);
  refs.divBoxes = boxes;
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
