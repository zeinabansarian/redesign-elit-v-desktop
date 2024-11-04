gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "30vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

})
let parallaxRight = gsap.timeline();
parallaxRight.to('.btmS' , {
    x : "-30vw"
})
ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

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





  let closePop = document.querySelector(".closePop")

let openGallery = document.querySelectorAll(".openGallery")
let zoomIn = document.querySelector(".zoomIn")
let rotateRight = document.querySelector(".rotateRight")
let rotateLeft = document.querySelector(".rotateLeft")
let zoomOut = document.querySelector(".zoomOut")
let closeSlider = document.querySelector(".closeSlider")
let galleryFlag=true;
let zoomMin =0.5;
let zoomMax =1.7;
let currZoom = 1;
let curRotate = 0;
let sGalleryFlag = true;

  let imagesThumb = document.querySelectorAll(".scrollContainer .imgS")
let popUpGalleryContainer = document.querySelector(".popUpGalleryContainer")
let sGallery = document.querySelector(".sGallery")
  imagesThumb.forEach(element => {
    element.addEventListener("click" , function (params) {
        let imgS = element.querySelector("img").getAttribute("src")
        popUpGalleryContainer.classList.add("popOpen")
        sGallery.querySelector(".imgS img").setAttribute("src",imgS)
        
        sGallery.classList.add("popOpen")
    })
  });


  
zoomIn.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpGalleryContainer .sGallery img");
    console.log("zoomin");
    if (currZoom<zoomMax) {
        currZoom+=0.1
        currImg.style.scale = currZoom
    }
})
zoomOut.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpGalleryContainer .sGallery img");
    console.log("zoomout");
    if (currZoom>zoomMin) {
        currZoom-=0.1;
        currImg.style.scale = currZoom
    }
})
rotateLeft.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpGalleryContainer .sGallery img");
    curRotate+=90
    currImg.style.rotate = `${-curRotate}deg`
})
rotateRight.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popUpGalleryContainer .sGallery img");
    curRotate+=90
    currImg.style.rotate = `${curRotate}deg`
})

closeSlider.addEventListener("click", function (params) {
    popUpGalleryContainer.classList.remove("popOpen")
    sGallery.classList.remove("popOpen")


})