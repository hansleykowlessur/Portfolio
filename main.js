import './style.css'
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper(".mySwiper", {
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