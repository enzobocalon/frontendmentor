const quest = document.querySelectorAll('.question');


quest.forEach(question =>{
    question.addEventListener('click', onClick);
})


function onClick(event){
    event.target.parentNode.classList.toggle('active');
}
