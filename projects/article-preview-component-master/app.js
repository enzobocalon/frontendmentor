const share = document.querySelector('.share-btn');
const right_footer = document.querySelector('.right-footer')
const socials = document.querySelector('.content-socials')
const author = document.querySelector('.author')
const btn_border = document.querySelector('.button-border')
const arrow = document.querySelector('.arrow')

function onClick() {
    right_footer.classList.toggle('on')
    socials.classList.toggle('off')
    btn_border.classList.toggle('on')
    arrow.classList.toggle('on')
}

var mql = window.matchMedia('(min-width: 1000px)');

share.addEventListener('click', () => {
   if (mql.matches){
    onClick();
   } else{
    onClick();
    author.classList.toggle('off')
   }
})