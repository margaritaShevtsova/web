let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__nav__link');
let menuClose = document.querySelector('.header__nav__close');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

menuClose.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})