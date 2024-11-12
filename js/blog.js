var elements = document.querySelectorAll('.blog');
var gallery = document.querySelector('.BlogList')

var groupSize = 2;
var groupCount = Math.ceil(elements.length / groupSize);

for (var i = 0; i < groupCount; i++) {
var startIndex = i * groupSize;
var endIndex = startIndex + groupSize;

const parentDiv = document.querySelector(".BlogList");
var groupElements = Array.from(elements).slice(startIndex, endIndex);

var groupDiv = document.createElement('div');
groupDiv.className = 'Row';
groupElements.forEach(function (element,index) {
groupDiv.appendChild(element);
});

gallery.appendChild(groupDiv);
}
elements.forEach(e=>{
    gsap.to(e,{
        opacity:1,
        scrollTrigger:{
            trigger:e,
            start:'top 70%',
            end:'bottom bottom'
        }
    })
})

const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)