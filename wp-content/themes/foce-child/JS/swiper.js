var swiper = new Swiper(".mySwiper", {
  speed:1000,
  freeMode: true,
  
  effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      slideShadows: false,
    },

    loop: true,
    slidesPerView: 3,

    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
});



