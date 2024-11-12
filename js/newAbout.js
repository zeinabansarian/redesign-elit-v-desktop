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