const categItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categItems.length}`);

categItems.forEach(item => {
    
    console.log(
        `Category: ${item.querySelector('h2').textContent}\nElements: ${item.querySelectorAll('li').length}`)
      })

