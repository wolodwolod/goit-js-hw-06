const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredsEl = document.querySelector('ul#ingredients');
console.log(ingredsEl);

const makeIngredsEl = options => {
  return options.map(option => {
    const liEl = document.createElement('li');
    
    liEl.classList.add('item');
    liEl.textContent = option;
    
    return liEl;
  });
};

const elements = makeIngredsEl(ingredients);
ingredsEl.append(...elements);