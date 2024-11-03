let header = document.querySelector('header')
header.classList.add('color')
let swiperNews = new Swiper(".swiper-news", {
    slidesPerView:3,
    spaceBetween: 40
    
  }); 
  
  let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:3,
    spaceBetween: 40

  });  