var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1200:{
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1025:{
            spaceBetween: 30,
            slidesPerView: 2,
        },
        0:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});

const faqElements = document.querySelectorAll('.faq');

faqElements.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

// modern swiper

var swiper = new Swiper(".modern__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1200:{
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1025:{
            spaceBetween: 30,
            slidesPerView: 2,
        },
        0:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});

// adaptive swiper

var swiper = new Swiper(".adaptive__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1200:{
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1025:{
            spaceBetween: 30,
            slidesPerView: 2,
        },
        0:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});

// burger menu

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});