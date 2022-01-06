let counterValue = 0;
const counterValueSpan = document.querySelector('span#value');

const decremBtn = document.querySelector('[data-action="decrement"]');
const incremBtn = document.querySelector('[data-action="increment"]');
decremBtn.addEventListener('click', () => {
    if (counterValue >= 1) { counterValue -= 1 };
    // console.log(counterValue);
    counterValueSpan.textContent = counterValue;
});
incremBtn.addEventListener('click', () => {
    counterValue += 1;
    // console.log(counterValue);
    counterValueSpan.textContent = counterValue;
});


