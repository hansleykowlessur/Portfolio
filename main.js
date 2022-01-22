import './style.css';
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';


// #region Custom cursor

const customCursor = document.getElementById('custom-cursor')
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// #endregion

// #region Swiper JS

// #region MainSwiper

// Main swiper used for the entire website to navigate between contents.

const mainSwiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 1500,
  rewind: true,
});

// #endregion

// #region TimelineSwiper

// Handles swiping for each workplace to show additional details about work experience

// eslint-disable-next-line no-unused-vars
const timelineSwiper = new Swiper('.timelineSwiper', {
  effect: 'creative',
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

// #endregion

// #region Navigation links

const linksOfMenu = {
  // eslint-disable-next-line quote-props
  'Home': 0,
  'About me': 1,
  // eslint-disable-next-line quote-props
  'Experience': 2,
  // eslint-disable-next-line quote-props
  'Projects': 3,
  // eslint-disable-next-line quote-props
  'Badges': 4,
  // eslint-disable-next-line quote-props
  'Contact': 5,
};

// Allows navigation between each page created by swiper JS

export function goToPageSwiper(desiredPage) {
  let pageToNavigate = -1;
  const transitionTime = 500;
  // Find page based on the dictionary provided.
  for (const [key, value] of Object.entries(linksOfMenu)) {
    if (key === desiredPage) {
      pageToNavigate = value;
      break;
    };
  };

  // If not found, stop, else go to the page using the index.
  if (pageToNavigate === -1) return;
  mainSwiper.slideTo(pageToNavigate, transitionTime, false);
};

// #endregion

// #endregion

// #region Vivus JS

// Handles the animation of the main logo in the home page

// eslint-disable-next-line no-undef
const logoAnimation = new Vivus(
  'myLogo', {
    type: 'sync',
    duration: 200,
    // eslint-disable-next-line no-undef
    animTimingFunction: Vivus.EASE,
  }, function (e) {
    e.el.classList.add('finished');
  };
);

// #endregion

// #region Image on hover

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

// Show image on hover with transition.

export function hoverImg(imgId) {

  let imgStyle = 'opacity: 1; transition: opacity 0.3s ease-in;';

  showHideImg(imgId, imgStyle);
};

// Fade out the image when hovering out.

export function easeoutImg(imgId) {
  
  let imgStyle = 'opacity: 0; transition: opacity 0.3s ease-in;';

  showHideImg(imgId,imgStyle);
};

// Handles whether or not to show or fade out the image.

function showHideImg(imgId, imgStyle) {

  let imgIdxName = ''

  for (const [key, value] of Object.entries(imgOfProjects)) {

    if( parseInt(key) === imgId) {
      imgIdxName = value;
    };

  };

  if (imgIdxName === '') return;

  document.getElementById(imgIdxName).style = imgStyle;
};

// #endregion
