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

gsap.to('.scroll-img', {
  y: 350,
  x: 550,
  skewY: 0,
  skewX: -5,
  ease: "power4.out",
  onComplete: function () {
    gsap.to('.scroll-img', {
      y: 700,
      x: 0,
      skewY: 5,
      skewX: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".main-seven2",
        start: "top 40%",
        end: "top 5%",
        scrub: 1
      }
    });
  },
  scrollTrigger: {
    trigger: ".main-seven",
    start: "top 50%",
    end: "top 5%",
    scrub: 1
  }
})

gsap.from('.card1' , { 
  x : "-200%" ,  
  autoAlpha : 0 , 
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".section-eigth-wrapper",
   scrub: 0.7,
   start: "top 65%",
   end: "top 35%",
 }
})

gsap.from('.card2' , { 
  x : '200%' ,  
  autoAlpha : 0 ,
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".section-eigth-wrapper",
   scrub: 0.7,
   start: "top 65%",
   end: "top 35%",
 }
})

gsap.from('.card3' , { 
  y : '100%' ,  
  autoAlpha : 0 ,
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".card3",
   scrub: 0.5,
   start: "top 75%",
   end: "top 50%",
 }
})

gsap.from('.card4' , { 
  y : '100%' ,  
  autoAlpha : 0 ,
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".card4",
   scrub: 2,
   start: "top 75%",
   end: "top 50%",
 }
})

gsap.from('.card5' , { 
  y : '100%' ,  
  autoAlpha : 0 ,
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".card5",
   scrub: 2,
   start: "top 85%",
   end: "top 80%",
 }
})

gsap.from('.card6' , { 
  y : '100%' ,  
  autoAlpha : 0 ,
  ease: "power4.out", 
  scrollTrigger: {
   trigger: ".card6",
   scrub: 2,
   start: "top 85%",
   end: "top 70%",
 }
})


gsap.to('.content-9' , { 
  y : 100 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".card6",
   scrub: 0.7,
   start: "top 50%",
   end: "top 30%",
 }
})

gsap.to('.content-10' , { 
  y : -100 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".card6",
   scrub: 0.7,
   start: "top 50%",
   end: "top 30%",
 }
})

gsap.set('.content-11' , { y : 100})
gsap.to('.content-11' , { 
  y : 180 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".content-11",
   scrub: 0.7,
   start: "top 85%",
   end: "top 30%",
 }
})

gsap.set('.content-12' , { y : 70})
gsap.to('.content-12' , { 
  y : -60 ,  
  ease: "power3.out", 
  scrollTrigger: {
   trigger: ".content-12",
   scrub: 1.5,
   start: "top 85%",
   end: "top 30%",
 }
})

const imagaAndTitle = [
  {
    img : '/assets/images/factory.jpg' , 
    title : '42 Factory'
  }, 
  {
    img : '/assets/images/school.jpg' , 
    title : '150 School'
  }, 
  {
    img : '/assets/images/coin.jpg' , 
    title : '0 Debt'
  }, 
]

ScrollTrigger.create({
  trigger: '.section-info',
  pin: '.info',
  start: 'top 40%',
  end: 'bottom 55%',
})
const sections = document.querySelectorAll('.section-info-set')

sections.forEach((section, index) => {

  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: "bottom center",
    onEnter: () => {
      gsap.set('.info img', {
        attr: {src: imagaAndTitle[index].img}
      })
      gsap.set('.info h4', {
        innerText: imagaAndTitle[index].title
      })
    },
    onEnterBack: () => {
      gsap.set('.info img', {
        attr: {src: imagaAndTitle[index].img}
      })
      gsap.set('.info h4', {
        innerText: imagaAndTitle[index].title
      })
    }
  })

})

