const educationsUL = document.getElementById('educations');
const workplaceUL = document.getElementById('workplace');
const infoSection = document.getElementById('info-section');

async function getCV(){
    let response = await fetch('JSON/CV.json');
    if (response.ok){
        let json = await response.json();
        //Hämtar in Json objektet Education genom .filter
        const educations = json.filter(item => item.category == 'Education');
            //Hämta in utbildningarna från JSON filen, skapar två olika li element för utbildningar
         educations.forEach(edu => {
            const headline1 = document.createElement('h3');
            headline1.textContent = edu.title0 + ":";
            educationsUL.appendChild(headline1);

            const educationItem1 = document.createElement('li');
            educationItem1.textContent = edu.title1;
            educationsUL.appendChild(educationItem1);

            const educationItem2 = document.createElement('li');
            educationItem2.textContent = edu.title2;
            educationsUL.appendChild(educationItem2);  
        });
        const workplaces = json.filter(item => item.category == 'Workplaces');
        workplaces.forEach(work => {
            const headline2 = document.createElement('h3');
            headline2.textContent = work.title0 + ':';
            workplace.appendChild(headline2);

            const workItem1 = document.createElement('li');
            workItem1.textContent = work.title1;
            workplaceUL.appendChild(workItem1);
            const workItem2 = document.createElement('li');
            workItem2.textContent = work.title2;
            workplaceUL.appendChild(workItem2);
            const workItem3 = document.createElement('li');
            workItem3.textContent = work.title3;
            workplaceUL.appendChild(workItem3);
            const workItem4 = document.createElement('li');
            workItem4.textContent = work.title4;
            workplaceUL.appendChild(workItem4);
            const workItem5 = document.createElement('li');
            workItem5.textContent = work.title5;
            workplaceUL.appendChild(workItem5); 
            const workItem6 = document.createElement('li');
            workItem6.textContent = work.title6;
            workplaceUL.appendChild(workItem6);  
        });

        //Felhantering i konsollen
        }else{
        console.log('HTTP error: '+ response.status);
    }
}

async function getInfo(){
    let response = await fetch('JSON/info.json');
    if (response.ok){
        let json = await response.json();
        const info = json[0];
        const infoParagraph = document.createElement('p');
        infoParagraph.textContent = `${info.information1} ${info.information2} ${info.information3}`;
        infoSection.appendChild(infoParagraph);
    //Felhantering i konsollen    
    }else{
        console.log('HTTP error: '+ response.status);
    }
}
getCV();
getInfo();

//Minst ett interaktivt JS element som jag själv skrivit

//Dessutom ska du integrera minst en interaktiv funktion som är baserad på en befintlig ren JavaScript-lösning (ej från ett bibliotek). Från typ codepen/github
//Exempel på funktioner kan vara en modal, bildspel, scroll-effekt, eller funktioner för att dölja/visa element. 

//Var noga med att kommentera din kod för att tydligt ange vilka delar du har skrivit själv och vilka delar som är baserade på externa källor. Ange också källan för den externa koden. 

//Koppla nått av projekten från mitt github till portfolion (publicera)

// - Validerad med 0 fel på [https://validator.w3.org/Links to an external site.](https://validator.w3.org/)
// - Inga errors i Console
// - Webbplatsen ska vara tekniskt optimerad för sökmotorer, vilket inkluderar korrekt användning av semantiska HTML5-element,
//  metataggar som titel och beskrivning och optimerade bilder för snabba laddningstider.


// - Dina utbildningar och tidigare arbetsplatser ska inte längre ligga i HTML-koden
// - Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format
// - Denna JSON-fil ska läsas och och generera ditt CV