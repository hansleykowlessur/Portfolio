import './style.css';
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
  rewind: true,
});

new Swiper(".timelineSwiper",{
  effect: "creative",
  grabCursor: true,
  nested: true,
  creativeEffect: {
    prev: {
      // will set Up (`translateY(-100%)`) on previous slide
      translate: [0, '-100%', 0],
    },
    next: {
      // will set `translateX(100%)` on next slide
      translate: ['100%', 0, 0],
    },
  },
});


new Vivus (
  'myLogo',{
    type:'sync',
    duration: 200,
    animTimingFunction: Vivus.EASE
  },
  function(e){
    e.el.classList.add("finished")
  }
);

let customCursor = document.getElementById("custom-cursor")
document.addEventListener("mousemove", e => {
  customCursor.style.left = e.pageX + 'px';
  customCursor.style.top  = e.pageY + 'px';
});


const linksOfMenu = {
  'Home' : 0, 
  'About me' : 1, 
  'Experience' : 2, 
  'Projects' : 3, 
  'Badges' : 4, 
  'Contact' : 5,
};

const imgOfProjects = {
  1 : 'first-img',
  2 : 'second-img',
  3 : 'third-img',
  4 : 'fourth-img',
  5 : 'fifth-img',
  6 : 'sixth-img',
  7 : 'seventh-img',
  8 : 'eighth-img',
};

export function goToPageSwiper(desiredPage) {
  
  let pageToNavigate = -1;
  let transitionTime = 500;
  
  for (const [key, value] of Object.entries(linksOfMenu)) {

    if (key === desiredPage) {
      pageToNavigate = value;
      break;
    };

  };

  if (pageToNavigate === -1) return;
  
  mainSwiper.slideTo(pageToNavigate, transitionTime, false);
  
}

export function hoverImg(imgId) {

  let imgStyle = "opacity: 1; transition: opacity 0.3s ease-in;";

  
  showHideImg(imgId, imgStyle);

};

export function easeoutImg(imgId) {
  
  let imgStyle = "opacity: 0; transition: opacity 0.3s ease-in;";

  showHideImg(imgId,imgStyle);        

};

function showHideImg(imgId, imgStyle) {

  let imgIdxName = ''

  for (const [key, value] of Object.entries(imgOfProjects)) {

    if( parseInt(key) === imgId) {
      imgIdxName = value;
      console.log( { key , imgId, imgStyle, value} );
    };
  
  };

  if (imgIdxName === '') return;

  document.getElementById(imgIdxName).style = imgStyle;

};