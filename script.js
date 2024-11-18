const cursor = document.querySelector(".cursor");
const blurrcursor = document.querySelector(".blurrcursor");
const downarrw=document.querySelector('.down-arrow')
document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blurrcursor.style.left = dets.x - 150 + "px";
  blurrcursor.style.top = dets.y - 150 + "px";
});
const allh4 = document.querySelectorAll(".navbar a");
allh4.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.scale = 4;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";

  });
  element.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#74b62c";
    cursor.style.border = "none";
  });
});
// downarrw.addEventListener('mouseenter',()=>{
//   cursor.style.scale = 4;
//     cursor.style.backgroundColor = "transparent";
//     cursor.style.border = "1px solid #fff";
// })
// downarrw.addEventListener('mouseleave',()=>{
//   cursor.style.scale = 1;
//   cursor.style.backgroundColor = "#74b62c";
//   cursor.style.border = "none";
// })

gsap.to(".navbar", {
  backgroundColor: "#000",
  duration: 2,
  height: 100,
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".maindiv", {
  backgroundColor: "#000",
  duration: 1,
  scrollTrigger: {
    trigger: ".maindiv",
    scroller: "body",
    scrub: true,
    start: "top -4%",
    end: "top -80%",
  },
});
gsap.from(".aboutdiv", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 5,
  scrollTrigger: {
    trigger: ".aboutdiv",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".page3 p", {
    x: -50,
    duration: 2,
    scrollTrigger: {
      trigger: ".page3 p",
      scroller: "body",
      // start:'top 70%',
      scrub: true,
    },
  });
gsap.from(".img1", {
  y:-60,
  x:-60,
  duration: 2,
  scrollTrigger: {
    trigger: ".img1",
    scroller: "body",
    // markers:true,
    scrub: true,
  },
});
gsap.from(".img2", {
    y: 10,
    x: 10,
    duration: 2,
  scrollTrigger: {
    trigger: ".img2",
    scroller: "body",
    // markers: true,
    start:'top 20%',
    scrub: true,
  },
});
gsap.from('.page4 h1',{
  y:50,
  scrollTrigger:{
    trigger:'.page4 h1',
    scroller:'body',
    // markers:true,
    start:'top 75%',
    end:'top 70%',
    scrub:2,
  }
})

