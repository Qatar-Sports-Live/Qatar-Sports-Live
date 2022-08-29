const navBtn = document.querySelector('.hamburger');
const smallScreenMenu = document.querySelector('.nav-links-small-screen');
const navLinksSmall = smallScreenMenu.querySelectorAll('a');
const overlay = document.querySelector('.nav-overlay');

const scrollRightBtn = document.querySelector('.scroll-left')
const scrollLeftBtn = document.querySelector('.scroll-right')
const slideShowContainer = document.querySelector('.services-slide-show')
const mainDataContainer = document.querySelector('.user-data-section');

const showCasevideo =  document.querySelector('.show-case-video')


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
const slides = document.querySelectorAll('.news-article');
const slideContainer = document.querySelector('.news-articles')
console.log(slides)
const slideSize = slides[0].clientWidth + 32;
// console.log(slideSize)
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
// console.log(nextBtn, prevBtn);
let counter = 1;
nextBtn.addEventListener('click', ()=>{
    counter++;
    if (counter>=slides.length) return;
    slideContainer.style.transform = `translateX(-${slideSize*counter}px)`;

    // console.log('ok')
})
prevBtn.addEventListener('click', ()=>{
    slideContainer.style.transform += `translateX(${slideSize*counter}px)`;
})
