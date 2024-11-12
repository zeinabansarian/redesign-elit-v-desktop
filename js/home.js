let section2 = document.querySelectorAll(".section2")
$(function() {
    fullpage();
  
  });
// FULLPAGE
function fullpage(){
  $('#fullpage').fullpage({
    //   scrollingSpeed: 1000,
      scrollBar: true,
    //   autoScrolling: true,
				//scrollOverflow:true,
				// fitToSection: false,
      afterLoad: function(origin, destination, direction, trigger){
        $(".section2").removeClass("activeImg")
        if (destination>2) {
            
            console.log(destination);
            console.log(section2[destination-3]);
            section2[destination-3].classList.add("activeImg")
        }








        					
   



      }



  

  });
}




const slider1 = new Swiper('.slider1', {
    disableOnInteraction:false,
    loop: true,
    pauseOnMouseEnter:false,
    effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
  });


  gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "20vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 20%",
    end:"bottom -200vw",
    scrub : 1,
    
    
  })
  let parallaxRight = gsap.timeline();
  parallaxRight.to('.btmS' , {
    x : "-20vw"
  })
  ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 20%",
    end:"bottom -200vw",
    scrub : 1,
    

})


gsap.to(".gallery .section1",{
  scrollTrigger:{
     trigger:".gallery",
     start:"top 10%",
     end:"bottom bottom",
    //  onEnter: () => document.querySelector("header").classList.add("color"),
     
    //  onLeaveBack: () => document.querySelector("header").classList.remove("color")

  }
 })