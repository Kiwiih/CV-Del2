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
const btn2 = document.getElementById('btn-2');
const closeBtn = document.getElementById('close');
const popup = document.getElementById('myPopup');
const imageContainer = document.getElementById('random-image-container');

btn1.addEventListener('click', generateRandomImage)
closeBtn.addEventListener('click', closeRandomImage);

function generateRandomImage(){
    const getRandomImage = randomImage();
    const imgSection = document.createElement('img');
    imgSection.src = getRandomImage;
    imageContainer.appendChild(imgSection);
    popup.style.display = 'block';
}

//Funktion för att kunna stänga popupen
function closeRandomImage(){
    popup.style.display = 'none';
    //Så popupen blir tom efter varje gång man stänger, så ny bild kan laddas
    imageContainer.innerHTML = '';
}

function randomImage(){
const imageFolder = 'pokemonImg';
const images = ['bulbasaur.png','charmander.png', 'fuecoco.png', 'totodile.png', 'pikachu.png', 'philly.png', 'psyduck.png', 'squirtle.png','jigglypuff.png', 'sprigatito.png'];
const randomImg = images[Math.floor(Math.random()* images.length)];
return `${imageFolder}/${randomImg}`;
}
});