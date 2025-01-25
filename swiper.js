// SWIPER
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 50,
    // slidesPerView: 2, -кол-во слайдов в одной части
    // freeMode: true, - прокрутка свободная
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });
