var kerdes;
var helyzet = 0;
var jovalasz;

window.onload =letöltés()

function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}
function kérdésBetöltés(id) {
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
function kérdésMegjelenítés(kerdes) {
    console.log(kerdes);
    document.getElementById("kerdes").innerText = kerdes.questionText
    document.getElementById("valasz1").innerText = kerdes.answer1
    document.getElementById("valasz2").innerText = kerdes.answer2
    document.getElementById("valasz3").innerText = kerdes.answer3
    document.getElementById("kep").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
    jovalasz = kerdes.correctAnswer;
    
}
function Léptetelore() {
   /* if (helyzet == kerdes.length-1) {
        helyzet = 0;
        kérdésMegjelen(helyzet);
        clear();
    }
    else {
        helyzet++;
        kérdésMegjelen(helyzet);
        clear();
    }*/
    if (helyzet == 858) {
        
        kérdésBetöltés(0);
        helyzet = 0;
       
    }
    else {
    helyzet++;
    kérdésBetöltés(helyzet);
    }
    clear();
}
function Leptethatra() {
   /* if (helyzet == 0) {
        helyzet = kerdes.length - 1;
        kérdésMegjelen(helyzet);
        clear();
    }
    else {
        helyzet--;
        kérdésMegjelen(helyzet);
        clear();
    }*/
    if (helyzet == 0) {
       
        kérdésBetöltés(0);
        helyzet = 858;
        
    }
    else {
        helyzet--;
        kérdésBetöltés(helyzet);
    }
    clear();
   
}
function ellenoriz(k) {
   /* let jovalasz= kerdes["correctAnswer"]
    let elem = document.getElementById("valasz" + k);
    if (jovalasz==k) {
        elem.style.backgroundColor = "green";
    }
    else {
        elem.style.backgroundColor = "red";
        let megold = document.getElementById("valasz" + kerdes["correctAnswer"]);
        megold.style.backgroundColor = "green";
    }    */
    
    
    let elem = document.getElementById("valasz" + k);
    console.log(jovalasz);
    if (jovalasz == k) { elem.style.backgroundColor = "green" }
    else { elem.style.backgroundColor="red"}
}
function clear() {
    for (var i = 1; i < 4; i++) {
        let elem = document.getElementById("valasz" + i)
        elem.style.backgroundColor = "lightgray"; 
    }

}