const refs = {
    input: document.querySelector('input#validation-input')
} 

refs.input.addEventListener('focus', onInputFocus);   
refs.input.addEventListener('blur', onInputBlur);

function onInputFocus(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('valid', 'invalid');
    // console.log('Инпут получил фокус - событие focus');
    
    console.log(event.currentTarget.classList);
    
    }

function onInputBlur(event) {
    event.preventDefault();
    // console.log('Инпут потерял фокус - событие blur');
    
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('invalid');
    }
    else
     
        event.currentTarget.classList.add('valid');
    
   console.log(event.currentTarget.classList);
}