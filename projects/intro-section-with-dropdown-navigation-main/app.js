const featbtn = document.querySelector('#features');
const compbtn = document.querySelector('#company');
const dropdownfeat = document.querySelector('#drop-feat')
const dropdowncomp = document.querySelector('#drop-comp')
const arrow = document.querySelectorAll('.arrow');


const mobile_menu = document.querySelector('.mobile-menu')
const fade = document.querySelector('.fade');
const main_menu = document.querySelector('.main-menu')
const x = document.querySelector('.x')


var mql = window.matchMedia('(max-width: 900px)')

// desktop
    featbtn.addEventListener('click', () => {
        dropdownfeat.classList.toggle('open');
        arrow[0].classList.toggle('open')
    });

    compbtn.addEventListener('click', () => {
        dropdowncomp.classList.toggle('open');
        arrow[1].classList.toggle('open')
    });


// mobile
    if (mql.matches){
        mobile_menu.addEventListener('click', () => {
            fade.classList.toggle('active')
            main_menu.classList.toggle('open')
            x.classList.toggle('open')
        })

        x.addEventListener('click', () => {
            fade.classList.toggle('active')
            main_menu.classList.toggle('open')
            x.classList.toggle('open')
        })
    }


