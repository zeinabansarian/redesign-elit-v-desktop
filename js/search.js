
let swiperNews = new Swiper(".swiper-news", {
  slidesPerView:3,
  spaceBetween: 40
  ,  navigation: {
      nextEl: ".Related-news .swiper-button-next",
      prevEl: ".Related-news .swiper-button-prev",
    },
}); 

let swiperProject= new Swiper(".swiper-project", {
  slidesPerView:3,
  spaceBetween: 40
  ,  navigation: {
      nextEl: ".Related-projects .swiper-button-next",
      prevEl: ".Related-projects .swiper-button-prev",
    },
    autoplay:true
});  
let swiperblogs = new Swiper(".swiper-blogs", {
  slidesPerView:3,
  spaceBetween: 40
  ,  navigation: {
      nextEl: ".Related-blogs .swiper-button-next",
      prevEl: ".Related-blogs .swiper-button-prev",
    },
}); 