const stars = document.querySelectorAll('.rate-given')
const rating_state = document.querySelector('.rating-state')
const ty_state = document.querySelector('.thank-you')
const given_stars = document.querySelector('.given-stars')

var rate = ''

//rating rate

stars.forEach (btn => {
    btn.addEventListener('click', onClick)
})

function onClick(event){
    stars.forEach(btn => {
        btn.classList.remove('selected')
    });
    event.target.classList.add('selected')
    rate = event.target.textContent
}

//sent state

const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    if (rate == ''){
        const error = document.querySelector('.error')
        error.classList.remove('hidden')
    } else{
        rating_state.classList.add('hidden')
        ty_state.classList.remove('hidden')
        given_stars.textContent = `You selected ${rate} out of 5.`
    }
})
    

