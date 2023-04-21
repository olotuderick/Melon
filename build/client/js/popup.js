"use strict";

var openBtn = document.querySelectorAll('#openBtn');
var background = document.querySelectorAll('#background');
var closebtn = document.querySelectorAll('#closer');
function toggleModal() {
  document.body.classList.toggle('open');
}
openBtn.forEach(function (open) {
  return open.addEventListener('click', toggleModal);
});
background.forEach(function (popup) {
  return popup.addEventListener('click', toggleModal);
});
closebtn.forEach(function (button) {
  return button.addEventListener('click', toggleModal);
});