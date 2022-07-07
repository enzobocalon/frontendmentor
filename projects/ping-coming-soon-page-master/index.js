const RegEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const btn = document.querySelector('#notify')
const email = document.querySelector('#email')
const invalid = document.querySelector('.invalid-text')

btn.addEventListener('click', () =>{
    if (email.value == '' || email.value == undefined){
        invalid.textContent = 'Whoops! It looks like you forgot to add your email'
        invalid.classList.remove('valid-text')
        email.classList.remove('valid')
        email.classList.add('error')
    } else if (!email.value.match(RegEmail)){
        email.classList.add('error')
        invalid.textContent = 'Please provide a valid email address.'
        invalid.classList.remove('valid-text')
        email.classList.remove('valid')
    } 

    if (email.value.match(RegEmail)){
        email.classList.remove('error')
        email.classList.add('valid')
        invalid.classList.add('valid-text')
        invalid.textContent = "Thank you for subscribing."
    }
})