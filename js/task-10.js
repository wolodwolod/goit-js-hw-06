const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('div#boxes')
  } 
// console.log(refs.input);
// console.log(refs.createBtn);
// console.log(refs.destroyBtn);
// console.log(refs.boxesDiv);

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {

  const amount = refs.input.value;
  // console.log(amount);

  let htmlString = ``;
  for (let i = 0; i < amount; i += 1) {
     htmlString += `<div style = "width:${30 + i * 10}px; height:${30 + i * 10}px; background-color: ${getRandomHexColor()}"></div>\n`
  }
  // console.log(htmlString);
  refs.boxesDiv.insertAdjacentHTML('beforeend', htmlString);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
}