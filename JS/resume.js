//Variabler för att koppla till olika sektioner i HTML dokumentet resume.html
const educationsUL = document.getElementById('educations');
const workplaceUL = document.getElementById('workplace');
const infoSection = document.getElementById('info-section');

//Funktion för att hämta in all data i JSON dokumentet och printa ut i DOM
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
        //Hämtar in alla arbetsplatser från samma JSON dokument som föregående
        const workplaces = json.filter(item => item.category == 'Workplaces');
        workplaces.forEach(work => {
            const headline2 = document.createElement('h3');
            headline2.textContent = work.title0 + ':';
            workplace.appendChild(headline2);
        //Lägger till varje jobb från JSON i ett eget list element
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
//Hämtar text om mig från ett annat JSON dokument (info.json) och printar det i konsollen som en p-tagg
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
//Aktiverar funktionerna så de printas i DOM
getCV();
getInfo();

