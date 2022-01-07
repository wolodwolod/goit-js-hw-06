const refs = {
    input: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text')
} 
// console.log(refs.input);
// console.log(refs.text);


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {

    console.log(event.currentTarget.value);

        refs.text.style.fontSize = `${event.currentTarget.value}px`;
   }
  
