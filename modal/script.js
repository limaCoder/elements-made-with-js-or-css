const modal = document.getElementById('mymodal')
const button = document.querySelector('button')
const closeButton = document.querySelector('.close') 

button.addEventListener('click', () => {
  modal.classList.add('modal-active')
})

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal-active')
})