let OpMenu = document.querySelector('header .toggleBox')
let CloseMenu = document.querySelector('header .CloseInner')
let MenuC = document.querySelector('header .MenuContainer')
let toggleBox = document.querySelector('header .toggleBox')
gsap.set('.MenuContainer .Menu-link',{
    y:100,
    opacity:0
})
let is =false
OpMenu.addEventListener('click',()=>{
    MenuIcon.reversed() ? MenuIcon.play() : MenuIcon.reverse();
  if(!is){
    setTimeout(() => {
      setTimeout(() => {
        gsap.to(span1,.3,{y:10,rotation:45,transformOrigin:'14px 50%', ease: Elastic.easeInOut.config(0.6, 0.3)},span1)
        gsap.to(span3,.3,{y:-10,rotation:-45, transformOrigin:'15px 50%', ease: Elastic.easeInOut.config(0.6, 0.3)},span3)
        MenuC.classList.add('open')
            gsap.to('.MenuContainer .Menu-link',{
            className:'Menu-link fadeUP',
            duration:.5,
            dulay:.5,
            stagger:.2
          })
      }, 200);
      is = true
       
    
    }, 100);
  }
else{
  gsap.to('.MenuContainer .Menu-link',{
            className:'Menu-link',
            duration:.5,
            dulay:.5,
            stagger:.2
          })
  setTimeout(()=>{
    MenuC.classList.remove('open')
    },1000)
    gsap.to(span1,.3,{rotation:0, duration:.5,ease: 'none'})
    gsap.to(span3,.3,{ rotation:0, duration:.5,ease: 'none'})
    is = false           
}
})
let span1 = document.querySelector('header .toggleBox .toggleItem:nth-child(1)');
let span2 = document.querySelector('header .toggleBox .toggleItem:nth-child(2)');
let span3 = document.querySelector('header .toggleBox .toggleItem:nth-child(3)');
let MenuIcon = new TimelineMax({paused:true, reversed:true});
MenuIcon
.to(span2,.3,{x:50,opacity:0, ease: 'none'},span2)
.to(span1,.3,{y:10, ease: 'none'},span1)
.to(span3,.3,{y:-10, ease: 'none'},span3)
// Images on hover
let MenuItems = document.querySelectorAll('.BG_MenuC .Menu .Menu-link')
let Banner = document.querySelector('.BG img')
MenuItems.forEach(item=>{
    item.addEventListener('mouseenter',(event)=>{
        for(let i =0 ; i< MenuItems.length ; i++){
            MenuItems[i].classList.remove('show')
          let img = item.getAttribute('data-bg')
          Banner.setAttribute('src',img)
            Banner.parentElement.classList.add('showIMG')   
         
        }
        event.currentTarget.classList.toggle('show')
        })
        item.addEventListener('mouseleave',(event)=>{
            for(let i =0 ; i< MenuItems.length ; i++){
                MenuItems[i].classList.remove('show')
              let img = item.getAttribute('data-bg')
              Banner.parentElement.classList.remove('showIMG')
            }
            event.currentTarget.classList.toggle('show')
     })

})

  // Enable Scroll


// SEARCH
let searchBTN = document.querySelector('header .searchIcon')
let closeSearch = document.querySelector('.CloseSerch')
let search = document.querySelector('.searchContainer')
let navv = document.querySelector('.navigation')
let header2 = document.querySelector('header')
searchBTN.addEventListener('click',()=>{
  search.classList.add('show')
  header2.classList.add('hideINSearch')
  // navv.classList.add('InSearch')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('show')
  header2.classList.remove('hideINSearch')
  // navv.classList.remove('InSearch')


})
