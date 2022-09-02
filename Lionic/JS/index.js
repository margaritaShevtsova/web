let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-link');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header-nav--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    })
})

let articlesMore = document.querySelector('.articles-more');
let articles = document.querySelectorAll('.articles-item');

articlesMore.addEventListener('click', function() {
    articles.forEach(function(el) {
        el.classList.add('articles-item--visible');
    });
    articlesMore.closest('.articles-center').classList.add('articles-center--hidden');
});