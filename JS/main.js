//Minst ett interaktivt JS element som jag själv skrivit

//Dessutom ska du integrera minst en interaktiv funktion som är baserad på en befintlig ren JavaScript-lösning (ej från ett bibliotek). Från typ codepen/github
//Exempel på funktioner kan vara en modal, bildspel, scroll-effekt, eller funktioner för att dölja/visa element. 

//Var noga med att kommentera din kod för att tydligt ange vilka delar du har skrivit själv och vilka delar som är baserade på externa källor. Ange också källan för den externa koden. 

// - Validerad med 0 fel på [https://validator.w3.org/Links to an external site.](https://validator.w3.org/)
// - Inga errors i Console
// - Webbplatsen ska vara tekniskt optimerad för sökmotorer, vilket inkluderar korrekt användning av semantiska HTML5-element,
//  metataggar som titel och beskrivning och optimerade bilder för snabba laddningstider.

document.addEventListener('DOMContentLoaded', function () {

const btn1 = document.getElementById('btn-1');
const darmodeBtn = document.getElementById('btn-2');
const closeBtn = document.getElementById('close');
const popup = document.getElementById('myPopup');


//Event-listeners för alla knappar
btn1.addEventListener('click', generateRandomImage)
closeBtn.addEventListener('click', closeRandomImage);
darmodeBtn.addEventListener('click', returnDarkmode)

//Generera en bild när man klickar på den länkade knappen
function generateRandomImage(){
    const getRandomImage = randomImage();
    const imgSection = document.createElement('img');
    imgSection.src = getRandomImage;
    imageContainer.appendChild(imgSection);
    popup.style.display = 'flex';
}

//Funktion för att kunna stänga popupen
function closeRandomImage(){
    popup.style.display = 'none';
    //Så popupen blir tom efter varje gång man stänger, så ny bild kan laddas
    imageContainer.innerHTML = '';
}
//Generera en random bild från en bild-mapp 
function randomImage(){
const imageFolder = 'pokemonImg';
const images = ['bulbasaur.png','charmander.png', 'fuecoco.png', 'totodile.png', 'pikachu.png', 'philly.png', 'psyduck.png', 'squirtle.png','jigglypuff.png', 'sprigatito.png'];
const randomImg = images[Math.floor(Math.random()* images.length)];
return `${imageFolder}/${randomImg}`;
}
});

//Function för att aktivera darkmode, byta bakgrund och färger på allt
function returnDarkmode(){
    const headerContainer = document.getElementsByClassName('header-container');
    const imageContainer = document.getElementById('random-image-container');
    const navigationLinks = document.getElementsByClassName('a-nav');


    const headerElement = headerContainer[0];
    const navigationElement = navigationLinks[0,1,2];
    document.body.style.backgroundImage = 'url("https://free-images.com/lg/89b4/forest_dark_time_nature.jpg")';
    headerElement.style.backgroundColor = 'black';
    navigationElement.style.backgroundColor = 'black';
    navigationElement.style.color = 'white';



}

//Nån annan persons kod (https://codepen.io/ekeric13/pen/wKOwmg)
   var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
var slides = document.querySelectorAll('.slide');
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
   var lastSlide = carouselContent.lastElementChild.cloneNode(true);
   lastSlide.style.left = (-lengthOfSlide) + "px";
   carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function(el, i){
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function(el, i){
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  if ( window.innerWidth >= 500 ) {
    carouselDisplaying = 3;
  } else if ( window.innerWidth >= 300 ) {
    carouselDisplaying = 2;
  } else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function(el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}


var rightNav = document.querySelector('.nav-right');
rightNav.addEventListener('click', moveLeft);

var moving = true;
function moveRight() {
  if ( moving ) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener('transitionend', activateAgain);
}

var leftNav = document.querySelector('.nav-left');
leftNav.addEventListener('click', moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if ( moving ) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener('transitionend', replaceToEnd);
}




carouselContent.addEventListener('mousedown', seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener('mousemove', slightMove);
  document.addEventListener('mouseup', moveBasedOnMouse);
}

function slightMove(e) {
  if ( moving ) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if ( Math.abs(difference) < (lengthOfSlide/4) ) {
      slightMoveSlides(difference);
    }  
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function(el){
    var left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
    initialPos.push( left );
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function(el, i){
    var oldLeft = initialPos[i];
    el.style.left = (oldLeft + newX) + "px";
  });
}

function moveBasedOnMouse(e) { 
  var finalX = e.clientX;
  if ( initialX - finalX > 0) {
    moveRight();
  } else if ( initialX - finalX < 0 ) {
    moveLeft();
  }
  document.removeEventListener('mouseup', moveBasedOnMouse);
  carouselContent.removeEventListener('mousemove', slightMove);
}