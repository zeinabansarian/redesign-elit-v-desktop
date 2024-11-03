let SwiperGalley = new Swiper('.swiper-gallery',{
    centeredSlides:true,
    slidesPerView:1.8,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 30,
    grabCursor: true,
    speed:1000,
    effect:'slide' ,
    navigation: {
        nextEl: ".Gallery-Container .swiper-button-next",
        prevEl: ".Gallery-Container .swiper-button-prev",
      },

})
let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:3,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Related-projects .swiper-button-next",
        prevEl: ".Related-projects .swiper-button-prev",
      },
  });  