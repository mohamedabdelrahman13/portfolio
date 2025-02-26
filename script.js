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


AOS.init();
gsap.registerPlugin(ScrollTrigger);
const home = document.getElementsByClassName('home-desc')

// animation of home section

gsap.from(".home-desc", { opacity: 0, y: -25 , duration: 2 });
gsap.from(".home-img", { opacity: 0, y: 25, duration: 2 });

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

