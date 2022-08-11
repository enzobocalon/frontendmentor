// DISPLAY CREDIT CARD

const display_number = document.querySelector('#card-number')
const display_name = document.querySelector('#cardholder-name')
const display_month = document.querySelector('#month-date')
const display_year = document.querySelector('#year-date')
const display_cvc = document.querySelector('#cvc')

// INPUT FIELD

const input_number = document.querySelector('#input-number')
const input_name = document.querySelector('#input-name')
const input_month = document.querySelector('#input-month')
const input_year = document.querySelector('#input-year')
const input_cvc = document.querySelector('#input-cvc')

// BUTTON

const confirmbtn = document.querySelector('#confirm')
const continuebtn = document.querySelector('#continue')

// ERROR

const name_error = document.querySelector('#name_error')
const number_error = document.querySelector('#number_error')
const month_error = document.querySelector('#month-error') 
const year_error = document.querySelector('#year-error')
const cvc_error = document.querySelector('#cvc-error')

// CONTAINERS

const right = document.querySelector('.right-container')
const completed = document.querySelector('.complete-state-container')
const left = document.querySelector('.left-container')

// REGEX
    const letter = /[a-zA-Z]/
// 



input_name.addEventListener('input', () => {
    if (input_name.value === ''){
        name_error.textContent = "Can't be blank"
        display_name.textContent = 'JANE APPLESEED'
    } else {
        display_name.textContent = input_name.value
        name_error.textContent = ''
    }
})


input_number.addEventListener('input', () => {
    if (input_number.value.match(letter)){
        number_error.textContent = "Wrong format, numbers only!"
        display_number.textContent = '0000 0000 0000 0000'
    } else if(input_number.value === '') {
        display_number.textContent = '0000 0000 0000 0000'
        number_error.textContent = "Can't be blank"
    } else{
        display_number.textContent = input_number.value
        number_error.textContent = ""
    }

    const updateInput = input_number.value.split(" ").join("") 


    input_number.value = updateInput.match(/.{1,4}/g).join(' ')
})

input_month.addEventListener('input', () => {
    if (input_month.value > 12 || input_month.value <= 0){
        input_month.value = '';
        month_error.textContent = 'Wrong format!'
        display_month.textContent = '00/'
    } else if(input_month.value === ''){
        month_error.textContent = "Can't be blank"
        display_month.textContent = '00/'
    }
    else{
        month_error.textContent = ''
        display_month.textContent = `${input_month.value < 10 ? "0" + input_month.value : input_month.value}/`
    }
})

input_year.addEventListener('input', () => {
    if (input_year.value > 99 || input_year.value < 22){
        year_error.textContent = 'Provide a valid year.'
        display_year.textContent = '00'
    } else {
        year_error.textContent = ''
        display_year.textContent = input_year.value
    }
})

input_cvc.addEventListener('input', () => {
    if (input_cvc.value.match(letter)){
        cvc_error.textContent = 'Wrong format!'
        display_cvc.textContent = '000'
    } else if (input_cvc.value === ''){
        cvc_error.textContent = "Can't be blank!"
        display_cvc.textContent = '000'
    } else{
        cvc_error.textContent = ''
        display_cvc.textContent = input_cvc.value
    }
})

confirmbtn.addEventListener('click', () => {
    if (input_name.value === '') {
        name_error.textContent = "Can't be blank"
        display_name.textContent = 'JANE APPLESEED'
    } else {
        name_error.textContent = ''
    }

    if (input_number.value === ''){
        display_number.textContent = '0000 0000 0000 0000'
        number_error.textContent = "Can't be blank"
    } else{
        number_error.textContent = ''
    }

    if (input_month.value === ''){
        display_month.textContent = '00/'
        month_error.textContent = "Can't be blank"
    } else {
        month_error.textContent = ''
    }

    if (input_year.value === ''){
        display_year.textContent = '00'
        year_error.textContent = "Can't be blank"
    } else {
        year_error.textContent = ''
    }

    if (input_cvc.value === ''){
        display_cvc.textContent = '000'
        cvc_error.textContent = "Can't be blank"
    } else {
        cvc_error.textContent = ''
    }

    if (input_name.value !== '' && input_number.value !== '' && input_month.value !== '' && input_year.value !== '' && input_cvc.value !== ''){
        right.style.display = 'none';
        completed.classList.remove('hidden');
        left.classList.add('completed');
    }
})

continuebtn.addEventListener('click', () => {
    right.style.display = 'flex'
    completed.classList.add('hidden')
    display_year.textContent = '00'
    display_cvc.textContent = '000'
    display_month.textContent = '00/'
    display_number.textContent = '0000 0000 0000 0000'
    display_name.textContent = 'JANE APPLESEED'
    input_cvc.value = '';
    input_month.value = '';
    input_year.value = '';
    input_name.value = '';
    input_number.value = ''
    left.classList.remove('completed');
})