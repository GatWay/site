let burger = document.querySelector('.burger');
let off = document.querySelector('.header_menu');

burger.onclick = function() {
    off.classList.toggle('on');
}