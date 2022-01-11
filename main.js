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
  rewind: true,
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
  'Home' : 1, 
  'About me' : 2, 
  'Experience' : 3, 
  'Projects' : 4, 
  'Badges' : 5 , 
  'Contact' : 6
};

export function goToPageSwiper(desiredPage) {
  
  let pageToNavigate = 0;

  // Return index to page else return 0 if not found
  for (const [key, value] of Object.entries(linksOfMenu)) {
    if ( key === desiredPage ){
      pageToNavigate = key;
    }
    console.log({ pageToNavigate, key, value});
  };
  
  if (pageToNavigate === 0) return null;
  console.log(pageToNavigate);
  mainSwiper.slideTo(parseInt(1), 500, false);
  
}


