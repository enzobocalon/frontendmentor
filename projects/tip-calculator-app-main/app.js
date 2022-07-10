const bill_input = document.querySelector('#bill-input')
const dollar = document.querySelector('#dollar')
const person = document.querySelector('#person')
const peoples_input = document.querySelector('#peoples-input')
const tip_result = document.querySelector('#tip-result')
const total_result = document.querySelector('#total-result')
const tip = document.querySelectorAll('.tip-percentage')
const custom = document.querySelector('.custom-tip')

// effects 

window.addEventListener('click', (event) => {
    if (event.target == bill_input){
        bill_input.classList.add('active');
        dollar.classList.add('active');
    } else{
        bill_input.classList.remove('active');
        dollar.classList.remove('active')
    }

    if (event.target == peoples_input){
        peoples_input.classList.add('active')
        person.classList.add('active')
    } else{
        peoples_input.classList.remove('active');
        person.classList.remove('active')
    }
})

tip.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        tip.forEach((current_target) => {
            current_target.classList.remove('active');
            custom.value = '';
        })
        event.target.classList.add('active');
        calcBill();
    })
})

custom.addEventListener('click', () => {
    tip.forEach((event) => {
        event.classList.remove('active');
    })
})

custom.addEventListener('input', () => {
    calcBill();
})

// error 

const error = document.querySelector('.error')

peoples_input.addEventListener('input', () => {
    if(peoples_input.value == ''){
        error.classList.remove('active');
    } else if(peoples_input.value == parseInt('0')){
        error.classList.add('active');
    } else{
        error.classList.remove('active');
        calcBill();
    }
})

//calc bill

bill_input.addEventListener('input', () => {
    if (bill_input !== ''){
        calcBill();
    }
})

function calcBill(){
    let bill_value = parseFloat(bill_input.value);
    let num_people = parseInt(peoples_input.value);
    let tip_value;

    // get tip

    tip.forEach((event) => {
        if (event.classList.contains('active')){
            tip_value = parseInt(event.textContent.slice(0, -1))/100;
        } else if(custom.value !== ''){
            tip_value = parseInt(custom.value)/100;
        } 
    })

    // calc
    
    if (!isNaN(bill_value) && !isNaN(num_people) && tip_value !== undefined){
        tip_result.textContent = `$ ${((bill_value * tip_value)/num_people).toFixed(2)}`
        total_result.textContent = `$ ${(bill_value * (tip_value + 1)/num_people).toFixed(2)}`
    }

}

// reset

const reset = document.querySelector('#reset-btn')

reset.addEventListener('click', () => {
    bill_input.value = '';

    tip.forEach((event) => {
        event.classList.remove('active');
    })

    custom.value = ''

    peoples_input.value = '';

    error.classList.remove('active')

    tip_result.textContent = '$ 0.00'
    total_result.textContent = '$ 0.00'
})