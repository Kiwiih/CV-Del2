document.addEventListener('DOMContentLoaded', function () {
const darkmodeBtn = document.getElementById('btn-2');

darkmodeBtn.addEventListener('click', returnDarkmode)

//Function för att aktivera darkmode, byta bakgrund och färger på allt
function returnDarkmode() {
    const headerContainer = document.getElementsByClassName('header-container');
    const h1 = document.getElementsByClassName('h1');
    const navigationLinks = document.getElementsByClassName('a-nav');
    const activeNavLink = document.getElementsByClassName('active');
    const primaryInfoCards = document.getElementsByClassName('primary-card');
    const footerContainer = document.getElementsByClassName('footer-container');
    const buttons = document.getElementsByClassName('button');

    const headerElement = headerContainer[0];
    const h1Element = h1[0];
    const navigationElements = Array.from(navigationLinks);
    const activeNavElement = activeNavLink[0];
    const cardElements = Array.from(primaryInfoCards);
    const footerElements = footerContainer[0];
    const buttonElements = Array.from(buttons); 
    

    h1Element.style.color = '#4f772d';
    document.body.style.backgroundImage = 'url("https://free-images.com/lg/89b4/forest_dark_time_nature.jpg")';
    headerElement.style.backgroundColor = '#2d221c';
    footerElements.style.backgroundColor = '#2d221c';
    activeNavElement.style.backgroundColor= '#2d221c';
    activeNavElement.style.color = '#4f772d';

    // Itterera över navigation links and lägga till styles
    navigationElements.forEach(function(link) {
        link.style.backgroundColor = '#2d221c';
        link.style.color = 'white';
    });
    // Itterera över infokort and lägga till styles
    cardElements.forEach(function(card) {
        card.style.backgroundColor = '#2d221c';
        card.style.color = 'white';
    });
    buttonElements.forEach(function(card) {
        card.style.backgroundColor = '#4f772d';
        card.style.color = 'white';
    });
}
});