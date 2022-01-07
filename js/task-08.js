const refs = {
    loginForm: document.querySelector('form.login-form'),
    inputEmail: document.querySelector('input[type="email"]'),
    inputPassword: document.querySelector('input[type="password"]')
} 

// console.log(refs.loginForm);
// console.log(refs.inputEmail);
// console.log(refs.inputPassword);

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    
    event.preventDefault();

    // console.log('Отправка данных');

    if (refs.inputEmail.value === '' || refs.inputPassword.value === '') {
        alert('ВСЕ ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫ !');
        return;
    }
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password
    };

  console.log(formData);

    event.currentTarget.reset(); 
}
    
    

