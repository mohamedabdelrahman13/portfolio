document.addEventListener("DOMContentLoaded", function () {
    let scrollBtn = document.getElementById("scrollbutton");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollbutton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


// sidebar
let sidebarShown = false;
const menuButton = document.querySelector('.menuBtn');
const closeButton = document.querySelector('.closebtn');
const sidebar = document.querySelector('.sidebar');


menuButton.addEventListener('click' , function(){
   sidebar.classList.toggle('show');
   sidebarShown = true;
})

closeButton.addEventListener('click' , function(){
   sidebar.classList.toggle('hide');
   sidebar.classList.remove('show')
   sidebarShown = false;
})


// toggle theme 
const lightThemeBtn = document.querySelector('.light');
const darkThemeBtn = document.querySelector('.dark');

lightThemeBtn.addEventListener('click' , ()=>{
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    // localStorage.setItem("theme", isLight ? "light" : "dark");
    if(isLight){
        localStorage.setItem("theme" , "light");
        lightThemeBtn.classList.toggle('hide');
        darkThemeBtn.classList.toggle('show');
        VANTA.NET({
            el: ".animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1c1c9f,
            backgroundColor:0xf0efef,
            points: 19.00,
            maxDistance: 18.00,
            spacing: 20.00
          })
    }
});
darkThemeBtn.addEventListener('click' , ()=>{
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    // localStorage.setItem("theme", isLight ? "light" : "dark");
    if(!isLight){
        localStorage.setItem("theme" , "dark");
        darkThemeBtn.classList.toggle('show');
        lightThemeBtn.classList.toggle('hide');
         VANTA.NET({
            el: ".animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00ffff,
            backgroundColor:0x1E1E2F,
            points: 19.00,
            maxDistance: 18.00,
            spacing: 20.00
          })
    }
    
});

window.onload = ()=> localStorage.setItem("theme" , "dark")

AOS.init();
gsap.registerPlugin(ScrollTrigger);
const home = document.getElementsByClassName('home-desc')

// animation of home section

gsap.from(".home-item", { opacity: 0, x: -100 , duration: .5 , stagger:.3});
// gsap.from(".home-img", { opacity: 0, x: 100, duration: 2 });

    gsap.from(".link", {
        opacity: 0,
        y: 200,
        duration:.3,
        stagger:.1
    });
// GSAP Animation

// animation of about section

gsap.from(".about-content", { 
    scrollTrigger: {
        trigger: "#about", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: -200,
    duration: 1,
    stagger:.5
});

// animation of skills section

gsap.from(".skill ", { 
    scrollTrigger: {
        trigger: "#skills", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: -200,
    x:-100,
    duration: 1,
    stagger:.5
});

// animation of Experience section
gsap.from(".left-align", { 
    scrollTrigger: {
        trigger: "#experience", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: 0,
    x:100,
    duration: 1,
    stagger:.5,
    delay:1
});
gsap.from(".right-align", { 
    scrollTrigger: {
        trigger: "#experience", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: 0,
    x:-100,
    duration: 1,
});
// animation of projects section
gsap.from(".project ", { 
    scrollTrigger: {
        trigger: "#projects", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: -200,
    duration: 2,
    stagger:.5
});

// animation of Contact section
gsap.from(".contact ", { 
    scrollTrigger: {
        trigger: "#contact", 
        start: "top 50%", 
        end: "top 50%",   
        scrub: false,   
        },  
    opacity: 0,
    y: -200,
    // x:100,
    duration: 1,
    stagger:.5
});


  window.addEventListener('load', () => {
    const target = document.querySelector(".animation");
    if (target) {
        console.log(target)
        VANTA.NET({
            el: target,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.5,
            color: 0x00ffff,
            points: 19.00,
            maxDistance: 18.00,
            spacing: 20.00
        })
    }
    else{
        console.log(target);
    }
  });