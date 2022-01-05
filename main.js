import './style.css'
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'


let mainSwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'slide',
  speed: 1500,
});

let verticalSwiper = new Swiper(".timelineSwiper",{
  effect: "creative",
  grabCursor: true,
  nested: true,
  creativeEffect: {
    prev: {
      // will set `translateY(-100%)` on previous slide
      translate: [0, '-100%', 0],
    },
    next: {
      // will set `translateX(100%)` on next slide
      translate: ['100%', 0, 0],
    },
  },
})

let customCursor = document.getElementById("custom-cursor")
document.addEventListener("mousemove", e => {
  customCursor.style.left = e.pageX + 'px';
  customCursor.style.top  = e.pageY + 'px';
})