// HERO SLIDER
let HeroSwiper = new Swiper ('.swiper-banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed:5000,
    effect:'fade' ,
    navigation: {
        nextEl: ".BannerSlider .swiper-button-next",
        prevEl: ".BannerSlider .swiper-button-prev",
      },
  })
  gsap.registerPlugin(ScrollTrigger)
let projects = document.querySelectorAll('.Project')
projects.forEach(p=>{
    gsap.to(p,{
     opacity:1,
     y:0,
     scrollTrigger:{
        trigger:p,
        start:"top 80%",
        end:"bottom bottom"
     }
    })
})
