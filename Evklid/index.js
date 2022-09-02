const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    a11y: {
        paginationBulletMessage: 'Перейти к слайду {{index}}'
      },
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
});


document.querySelectorAll('.how-we-work__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.how-we-work__btn').forEach(function (btn) {
            btn.classList.remove('how-we-work__btn--active')
        });
        e.currentTarget.classList.add('how-we-work__btn--active');
        document.querySelectorAll('.how-we-work__block').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('how-we-work__block--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__block--active');
    });
});

$(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');
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



let search = document.querySelector('.header__search__loupe');
let searchBlock = document.querySelector('.header__search__block');
let searchClose = document.querySelector('.header__search__close');

search.addEventListener('click', function () {
    searchBlock.classList.add('header__search__block--active');
})

searchClose.addEventListener('click', function () {
    searchBlock.classList.remove('header__search__block--active');
})