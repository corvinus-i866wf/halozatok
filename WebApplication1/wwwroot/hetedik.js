var kerdes;
var helyzet = 0;
var jovalasz;
var hotList = [];           
var questionsInHotList = 3;
var displayedQuestion;      
var numberOfQuestions;      
var nextQuestion = 1;
var timeoutHandler;
myStorage = window.localStorage;

window.onload = letöltés()
window.onload = init();

function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}
/*function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}  */
function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) {
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                    timeoutHandler = setTimeout(Léptetelore, 3000);
                }
            }
        );
}
function init() {
   /*for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }*/

   
   for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
    if (localStorage.getItem("hotList")) {
        hotList =JSON.parse(localStorage.getItem("hotList"));
    }
    if (localStorage.getItem("displayedQuestion")) {
        displayedQuestion = parseInt(localStorage.getItem("displayedQuestion"));
    }
    if (localStorage.getItem("nextQuestion")) {
        nextQuestion = parseInt(localStorage.getItem("nextQuestion"))
    }
    if (hotList.length===0 ) {
        for (var i = 0; i < questionsInHotList; i++) {
            kérdésBetöltés(nextQuestion, i)
            nextQuestion++;
        }
    } else {
        kérdésMegjelenítés();
        
    }
    
    

}
function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdes = d;
    kérdésMegjelen(helyzet);
}
/*function kérdésMegjelen(k) {
    let ide = document.getElementById("kerdes");
    ide.innerHTML = kerdes[k].questionText

    for (var i = 1; i < 4; i++) {
        console.log(i)
        let elem = document.getElementById("valasz" + i)
        elem.innerHTML = kerdes[k]["answer" + i]
    }

    if (document.getElementById("keptag").src != "") {
        document.getElementById("keptag").src = kerdes[k].image
    }
}*/
function kérdésMegjelenítés() {
    let kerdes = hotList[displayedQuestion].question;
    console.log(kerdes);
    document.getElementById("kerdes").innerText = kerdes.questionText
    document.getElementById("valasz1").innerText = kerdes.answer1
    document.getElementById("valasz2").innerText = kerdes.answer2
    document.getElementById("valasz3").innerText = kerdes.answer3
    document.getElementById("kep").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
    jovalasz = kerdes.correctAnswer;
    
}
function Léptetelore() {
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés();
    clear();
    timeoutHandler = setTimeout(Léptetelore, 3000);
    
    
}
function Leptethatra() {
    displayedQuestion--;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
   
}
function ellenoriz(k) {
    let elem = document.getElementById("valasz" + k);
    console.log(jovalasz);
    if (jovalasz == k) {
        elem.style.backgroundColor = "green";
        hotList[displayedQuestion].goodAnswers++;
        document.getElementById(`valasz1`).style.pointerEvents = "none";
        document.getElementById(`valasz2`).style.pointerEvents = "none";
        document.getElementById(`valasz3`).style.pointerEvents = "none";
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
        }



    }
    else {
        elem.style.backgroundColor = "red"
        hotList.goodAnswers = 0;
        document.getElementById(`valasz1`).style.pointerEvents = "none";
        document.getElementById(`valasz2`).style.pointerEvents = "none";
        document.getElementById(`valasz3`).style.pointerEvents = "none";
    }
    
    localStorage.setItem("hotList", JSON.stringify(hotList));
    localStorage.setItem("displayedQuestion", displayedQuestion);
    localStorage.setItem("nextQuestion",nextQuestion);
}
function clear() {
    for (var i = 1; i < 4; i++) {
        let elem = document.getElementById("valasz" + i)
        elem.style.backgroundColor = "lightgray"; 
        document.getElementById(`valasz1`).style.pointerEvents = "auto";
        document.getElementById(`valasz2`).style.pointerEvents = "auto";
        document.getElementById(`valasz3`).style.pointerEvents = "auto";
    }

}