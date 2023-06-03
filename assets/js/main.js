gsap.from('.gsap-main-img' , {autoAlpha : 0 , duration : 1 , y : -150 })

gsap.from('.gsap-main-title' , {autoAlpha : 0 , duration : 1 , x : -150 })
gsap.from('.gsap-main-title-2' , {autoAlpha : 0 , duration : 0.8 , x : -150 })


gsap.from('.main-2-img' , {autoAlpha : 0 , duration : 1 , right : 150})
gsap.registerPlugin(ScrollTrigger);

gsap.to('.main-2-img' , {
    y: -300 , 
    scrollTrigger: {
      trigger: ".main-2-img",
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    }
})
gsap.to('.gsap-main-title-2' , { 
    y: 150,
    ease: "back.out(1.7)", 
    scrollTrigger: {
      trigger: ".gsap-main-title-2",
      scrub: 1,
      start: "top center",
      end: "bottom top",
    }
})
gsap.to('.gsap-main-title-3' , { 
   y : -250 , 
    ease: "power2.out", 
    scrollTrigger: {
      trigger: ".main-second",
      scrub: 1,
      start: "top center",
      end: "top 25%",
    }
})
gsap.to('.content-1' , { 
    y : -250 , 
     ease: "power2.out", 
     scrollTrigger: {
       trigger: ".main-third",
       scrub: 1,
       start: "top 90%",
       end: "top 20%",
     }
})

gsap.to('.content-2' , { 
   y : -150 , 
    ease: "power2.out", 
    scrollTrigger: {
      trigger: ".main-third",
      scrub: 0.5,
      start: "top 90%",
      end: "top 10%",
    }
})
gsap.to('.content-3' , { 
   y : -150 , 
    ease: "power2.out", 
    scrollTrigger: {
      trigger: ".main-four",
      scrub: 1.5,
      start: "top 85%",
      end: "top 15%",
    }
})
gsap.to('.content-4' , { 
   y : -250 , 
    ease: "power3.out", 
    scrollTrigger: {
      trigger: ".main-four",
      scrub: 1.5,
      start: "top 95%",
      end: "top 5%",
    }
})
gsap.to('.section-five-title' , { 
   y : -150 , 
    ease: "power3.out", 
    scrollTrigger: {
      trigger: ".section-five-title",
      scrub: 1.5,
      start: "top 95%",
      end: "top 40%",
  
    }
})

gsap.to('.section-five-card-1' , { 
    y : 320 ,
    scale : 1.7 ,  
   ease: "power3.out", 
   scrollTrigger: {
     trigger: ".main-five",
     scrub: 3,
     start: "top 85%",
     end: "top 10%"
   }
})

gsap.to('.section-five-card-2' , { 
  y : 60 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".main-five",
   scrub: 0.7,
   start: "top 30%",
   end: "top 5%",
 }
})

gsap.to('.section-five-card-3' , { 
  y : -60 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".main-five",
   scrub: 0.7,
   start: "top 30%",
   end: "top 5%",
 }
})

const TL = gsap.timeline()

TL.to('.words-1' , { 
  y : -170 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".section-six",
   scrub: 1,
   start: "top 40%",
   end: "top 5%",
 }
})
.to('.words-2' , { 
  y : -130 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".words-1",
   scrub: 1,
   start: "top 50%",
   end: "top 5%",
 }
})
.to('.words-3' , { 
  y : -110 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".words-2",
   scrub: 1,
   start: "top 50%",
   end: "top 5%",
 }
})
