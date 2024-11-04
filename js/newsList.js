const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
lenis.stop()
gsap.to('.loading',{
    opacity:0,
    duration:1,
    delay:1,
    ease:'none'
})
gsap.set('.newsList-Cotainer',{
    x:'100vw',
    duration:1,
})
           
setTimeout(() => {
    lenis.start() 
    gsap.to('.newsList-Cotainer',{
        x:0,
        duration:1,
         ease:'none'
    })
}, 1000);
