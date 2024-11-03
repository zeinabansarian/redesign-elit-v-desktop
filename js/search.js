let header = document.querySelector('header')
header.classList.add('color')
let swiperNews = new Swiper(".swiper-news", {
    slidesPerView:3,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".news .swiper-button-next",
        prevEl: ".news .swiper-button-prev",
      },
  }); 
  
  let swiperblog = new Swiper(".swiper-blog", {
    slidesPerView:2.5,
    spaceBetween: 40
    
  }); 
  
  let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:3.5,
    spaceBetween: 40

  }); 