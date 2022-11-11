const wed = document.getElementById('wed');
const thu = document.getElementById('thu');

const toggleClass = childVar => {
  for (const child of childVar.children) {
    if (child.classList.contains('active')){
      child.classList.remove('active')
    } else {
      child.classList.add('active')      
    }
  }
}

wed.addEventListener('click', () => {
  toggleClass(wed);
})

thu.addEventListener('click', () => {
  toggleClass(thu);
})

