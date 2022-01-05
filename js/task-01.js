const numberItemEl = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${numberItemEl}`);

const liItemsEl = [...document.querySelectorAll('li.item')];

liItemsEl.map(liItem => {
    
    console.log(
        `Category: ${liItem.querySelector('h2').textContent}\nElements: ${liItem.querySelectorAll('li').length}`)
      })

