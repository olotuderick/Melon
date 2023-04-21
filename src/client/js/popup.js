const openBtn = document.querySelectorAll('#openBtn')
const background = document.querySelectorAll('#background')
const closebtn = document.querySelectorAll('#closer')

function toggleModal() {
  document.body.classList.toggle('open')
}

openBtn.forEach((open) => open.addEventListener('click', toggleModal))
background.forEach((popup) => popup.addEventListener('click', toggleModal))
closebtn.forEach((button) => button.addEventListener('click', toggleModal))
