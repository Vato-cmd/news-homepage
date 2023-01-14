let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('ul');
let body = document.querySelector('body');

burgerMenu.onclick = function(){
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

