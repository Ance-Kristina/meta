/* ---------------------------------------------------- */
/* ---------------------------------  Previous Projects */
const projects = [
    "Latvian alphabet BINGO game. Part of local community web app.",
    "Storytelling game about forest gnome. To access: in input field write ANCE. Part of local community web app.",
    "Communication form with automatically generated unique ID number.",
    "Don't forget to inspect this portfolio page. <b>This is my latest creation.</b>",
];
const iconText = ["B", "S", "C", "P"];
const aLink = [
    "../pages/izklaides/alfabets/alfabets.html",
    "../pages/izklaides/ruka-puku-blenu-stasti.html",
    "../pages/grozs/g1.html",
    "#"
];
let go = projects.length;

previousProjects = () => {
    let projectDiv = document.getElementById("previousProjects");
    let line = document.getElementById("line");

    if (go == 0){
        projectDiv.innerHTML = "";
        go = projects.length;
        line.style.visibility = "hidden";
    }else{
        for (let i=0; i<projects.length; i++){
            line.style.visibility = "visible";
            let d = document.createElement("div");
            let a = document.createElement("a")
            let icon = document.createElement("div");
            let iconP = document.createElement("p");

            d.setAttribute("class", "project");
            a.setAttribute("href", aLink[i]);
            a.setAttribute("target", "_blank");
            icon.setAttribute("class", "projectIcon");
            iconP.innerHTML = iconText[i];
        
            
            icon.appendChild(iconP);
            a.appendChild(icon);
            d.appendChild(a);
            projectDiv.appendChild(d);
            d.innerHTML+=('<p class="projectText">'+projects[i]+'</p>');

            go--; 
        };
    };
}
/* ----------------------------------------- */
/* ---------------------------------  Resume */

const resumeTitles = ["Contact info", "Education", "Experience", "Skills and character traits", "Hobbies"];
const contactText = [
    "Stacijas street 4<br>Dundaga, LV-3270<br>LATVIA",
    "ance.kristinna@gmail.com",
    "+371 26273377",
]
const resumeText = [
    'EKA University of Applied Sciences "Culture Management" (2007-2013)',
    '2013 - 2022 On the board of the sports club DUNDAGA. Event management for classic volleyball, beach volleyball and hockey tournaments.<br><br>2017 - 2019 Head of the Sports Committee in Dundaga municipality. Work with documentation, financial regulations and event management.<br><br>2016 - 2022 Owner of CNC router workshop (European Union funds project). Where gained good experience in client work, product design (blueprints), project management, logistics and working with:<br>Mach3 - CNC control software,<br>Aspire - software solution for creating and cutting parts on a CNC router,<br>GIMP - image editor.',
    'HTML, CSS, Javascript, product design, creativity, leadership, work ethic, teamwork.',
    'I enjoy sport activities such as volleyball, fitness, forest hiking and of course coding. I like to challenge myself and grow through learning and practising experiences.',
]
let openClose = true;
resume = () => {
    let resumePerson = document.getElementById("resumePerson");
    if (openClose == false){
        resumePerson.innerHTML = "";
        openClose = true;
    }else{
        let resumeContact = document.createElement('div');
        let resumeInfo = document.createElement('div');
        resumeContact.setAttribute('id', 'resumeContact');
        resumeInfo.setAttribute('id', 'resumeInfo');
    
        let contactTitle = document.createElement('h3');
        contactTitle.setAttribute('class', 'contactTitle');
        contactTitle.innerHTML = resumeTitles[0];
        resumeContact.appendChild(contactTitle);
        for (let i=0; i<contactText.length; i++){
            let p = document.createElement('p');
            p.setAttribute('class', 'contactText');
            p.innerHTML = contactText[i];
            resumeContact.appendChild(p);
        };
        for (let i=0; i<resumeText.length; i++){
            let h3 = document.createElement('h3');
            h3.setAttribute('class', 'resumeTitle');
            h3.innerHTML = resumeTitles[i+1];
            let p = document.createElement('p');
            p.setAttribute('class', 'resumeText');
            p.innerHTML = resumeText[i];
            resumeInfo.appendChild(h3);
            resumeInfo.appendChild(p);
        };
    
        resumePerson.appendChild(resumeContact);
        resumePerson.appendChild(resumeInfo);
        openClose = false;
    };  
}

/* ----------------------------------------- */
/* -----------------------------------  Game */
let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
let game3 = document.getElementById("game3");
let gameText1 = document.getElementById("gameText1");
let gameText2 = document.getElementById("gameText2");
let gameText3 = document.getElementById("gameText3");
let abcdDiv1 =document.getElementById("abcdDiv1");
let abcdDiv2 =document.getElementById("abcdDiv2");
let abcdDiv3 =document.getElementById("abcdDiv3");
let questions = [
    "What is the capital of my home country? Clue! Look in my resume.",
];
let game1Answers =["Tallinn", "Riga", "Vienna", "Bangkok"];
let openCloseGame = true;


question1 = () => {
    if (openCloseGame == false){
        gameText1.innerHTML = "1 question";
        abcdDiv1.innerHTML = " ";
        openCloseGame = true;
    }else{
        game1.removeAttribute("onclick");
        game2.removeAttribute("onclick");
        game3.removeAttribute("onclick");
        gameText1.innerHTML = questions[0];

        for (let i=0; i<game1Answers.length; i++){
            let d = document.createElement("div");
            d.setAttribute("class", "abcd");
            d.innerHTML = game1Answers[i];
            abcdDiv1.appendChild(d);
        }
    
        let timerNr = document.getElementById("timerNr");
        timerNr.innerHTML = 5;

        let gamePromise = new Promise(function(resolve, reject){

        });

       /*  const interval = setInterval(time, 1000);
        function time() {
            if (timerNr.innerHTML == 0){
                clearInterval(interval);
            }else{
                timerNr.innerHTML--;
            }
        } */
        game1.setAttribute("onclick", "question1()")
        openCloseGame = false;
    }


    
    
}