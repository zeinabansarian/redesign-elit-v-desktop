
const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
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

 // SEARCH
 let searchIcon2 = document.querySelector('.searchContainerr .inputBox .SearchIcon')
 searchIcon2.addEventListener('click',()=>{
   console.log('clicked');
   let input = document.querySelector('input#search2')
   if(input.value == ''){
     return
      }
    else{
        console.log('val',input.value);
        var url = `/loadNew.inc?q=${input.value}`;
        $(".loaded").load(url);}
        setTimeout(() => {
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
          gsap.to('.swiper-news',{
            opacity:1,
            duration:1,
            ease:'none'
          })
          gsap.to('.swiper-project',{
            opacity:1,
            duration:1,
            ease:'none'
          })
          gsap.to('.swiper-blogs',{
            opacity:1,
            duration:1,
            ease:'none'
          })
        }, 100);

 
 })
 let inputt2 = document.querySelector('input#search2')
 inputt2.addEventListener("keypress", function(event) {
   // If the user presses the "Enter" key on the keyboard
   if (event.key === "Enter") {
     // Cancel the default action, if needed
     if(inputt2.value != ''){
       event.preventDefault();
     console.log('clicked');
 console.log('val',inputt2 );
 console.log('val',inputt2.value);
 var url = `/loadNew.inc?q=${inputt2.value}`;
 $(".loaded").load(url);
setTimeout(() => {
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
  gsap.to('.swiper-news',{
    opacity:1,
    duration:1,
    ease:'none'
  })
  gsap.to('.swiper-project',{
    opacity:1,
    duration:1,
    ease:'none'
  })
  gsap.to('.swiper-blogs',{
    opacity:1,
    duration:1,
    ease:'none'
  })
}, 100);

     }
 
 
   }
 });
 gsap.to('.swiper-news',{
  opacity:1,
  duration:1,
  ease:'none'
})
gsap.to('.swiper-project',{
  opacity:1,
  duration:1,
  ease:'none'
})
gsap.to('.swiper-blogs',{
  opacity:1,
  duration:1,
  ease:'none'
})