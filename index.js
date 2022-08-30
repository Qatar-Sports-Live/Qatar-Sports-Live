const navBtn = document.querySelector('.hamburger');
const smallScreenMenu = document.querySelector('.nav-links-small-screen');
const navLinksSmall = smallScreenMenu.querySelectorAll('a');
const overlay = document.querySelector('.nav-overlay');

const scrollRightBtn = document.querySelector('.scroll-left')
const scrollLeftBtn = document.querySelector('.scroll-right')
const slideShowContainer = document.querySelector('.services-slide-show')
const mainDataContainer = document.querySelector('.user-data-section');

const showCasevideo =  document.querySelector('.show-case-video')

const destinationContainer = document.querySelector('.news-articles')
const destinations  = document.querySelectorAll('.place');

//navigation menu toggle
navBtn.addEventListener('click', openAndCloseMenu)
function openAndCloseMenu(){  
if(navBtn.classList.contains('nav-open')){
    navBtn.classList.remove('nav-open');
    smallScreenMenu.style.transform = 'translateX(-100%)'
}
else{
    navBtn.classList.add('nav-open');
    smallScreenMenu.style.transform = 'translateX(0%)'
    overlay.style.display = "block"
}
}

    navLinksSmall.forEach(navLink=>{
        navLink.addEventListener('click',openAndCloseMenu)
    })

overlay.addEventListener('click', ()=>{
    overlay.style.display = "none"
    openAndCloseMenu();
})    
// SHOW CASE VIDEO

window.addEventListener('DOMContentLoaded',()=>{
    // console.log(showCasevideo);
    showCasevideo.play();
})
// END OF SHOW CASE VIDEO


// World Cup Count Down starts from here;
const days = document.querySelector(".count-down-days");
const hours = document.querySelector(".count-down-hours");
const minutes = document.querySelector(".count-down-mins");

const countDown = () => {
    const countDate = new Date("November 20, 2022 19:00:00+0300").getTime();
    const currentDate = new Date().getTime();
    const gap = countDate - currentDate;

    const minValue = Math.floor(gap / 1000 / 60) % 60;
    const hourValue = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    const dayValue = Math.floor(gap / 1000 / 60 / 60 / 24);


    days.innerHTML = dayValue < 10 ? `0${dayValue}` : `${dayValue}:`
    hours.innerHTML = hourValue < 10 ? `0${hourValue}` : `${hourValue} :`;
    minutes.innerHTML = minValue < 10 ? `0${minValue}` : minValue;

}
countDown();
setInterval(countDown, 1000);

//CAROUSEL
// const slides = document.querySelectorAll('.news-article');
// const slideContainer = document.querySelector('.news-articles')
// console.log(slides)
// const slideSize = slides[0].clientWidth + 32;
// // console.log(slideSize)
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');
// // console.log(nextBtn, prevBtn);
// let counter = 1;
// nextBtn.addEventListener('click', ()=>{
//     counter++;
//     if (counter>=slides.length) return;
//     slideContainer.style.transform = `translateX(-${slideSize*counter}px)`;

//     // console.log('ok')
// })
// prevBtn.addEventListener('click', ()=>{
//     slideContainer.style.transform += `translateX(${slideSize*counter}px)`;
// })
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
// //Buttons
// const previousBtn = document.querySelector('#previousBtn');
// const nextBtn = document.querySelector('#nextBtn');
// //Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;


// carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

// nextBtn.addEventListener('click',()=>{
//     if(counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });

// previousBtn.addEventListener('click',()=>{
//     if(counter <= 0) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });


// carouselSlide.addEventListener('transitionend',()=>{
//     if(carouselImages[counter].id === 'lastClone'){
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length -2;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone'){
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//     }
// });

// console.log(carouselImages.length);
//AUTO-SCROLLING AND SCROLL BUTTONS ON DESITINATIONS SECTION
// scrollRightBtn.addEventListener('click', scrollRight);
// scrollLeftBtn.addEventListener('click',scrollLeft)
const elementSize = destinations[0].clientWidth
console.log(elementSize)
//FINDING TOTAL WIDTH COVERED BY PLACE ELEMENTS 
const totalClientWidth = destinations.length*elementSize;

let unscrolledWidth = totalClientWidth
function scrollRight(){

    unscrolledWidth-=elementSize;

    if(unscrolledWidth>=0){ 
      destinationContainer.scrollLeft+=elementSize;
    }
    else{
        destinationContainer.scrollLeft -= totalClientWidth-elementSize; 
        // console.log('yeah')
        unscrolledWidth = totalClientWidth;
    }
  
  }

  function scrollLeft(){
     destinationContainer.scrollLeft-=elementSize;
  }

//auto scrolling every 3 secons
const autoScroll = (t)=>{
    setInterval(scrollRight,t)
}
// autoScroll(2500);

// SMOOTH SCROLLING EFFECT
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scroll-btn").on('click', function() {
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $(destinationContainer).animate({
        // scrollTop: $(hash).offset().width
        scrollLeft:elementSize
      }, 800);
     // End if
    //  console.log('ok')
  });
});

// SMOOTH SCROLLING EFFECT
