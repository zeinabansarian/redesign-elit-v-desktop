gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "30vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 30%",
    end:"bottom -200vw",
    scrub : 1,
    // markers:true,
    
})
let parallaxRight = gsap.timeline();
parallaxRight.to('.btmS' , {
    x : "-30vw"
})
ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 30%",
    end:"bottom -200vw",
    scrub : 1,
    // markers:true,

})

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let toTop = document.querySelectorAll(".toTop")

toTop.forEach(element => {
    gsap.from(element,{
        scrollTrigger:{
           trigger: element,
            start:"top 80%",
            end:"bottom bottom",
            // markers:true,
            
        },
        opacity:0,
        duration:1,
        y:"20vh"

    })
});



const serviceSlider = new Swiper('.serviceSlider', {
   freeMode:true,
   slidesPerView:3,
   speed:3000,
//    grabCursor:true,
   spaceBetween:53,
  });





jQuery('.openPara').readmore({
    speed: 100,
    collapsedHeight:45,
    moreLink: '<button class="readMoreBtn"> <span>+</span> بیشتر</button>',
    lessLink: '<button class="readMoreBtn"> <span>-</span> کمتر</button>',
    heightMargin: 16,
    afterToggle: function(trigger, element, expanded) {
        
        // if(! expanded) { // The "Close" link was clicked
        //   $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
        // }
      },
});

    
