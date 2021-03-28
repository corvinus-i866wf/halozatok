var kerdes;
var helyzet = 0;

window.onload =letöltés()

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        )
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdes = d;
    kérdésMegjelen(helyzet);
}
function kérdésMegjelen(k) {
    let ide = document.getElementById("kerdes");
    ide.innerHTML = kerdes[k].questionText

    for (var i = 1; i < 4; i++) {
        console.log(i)
        let elem = document.getElementById("valasz" + i)
        elem.innerHTML = kerdes[k]["answer" + i]
    }

    if (document.getElementById("kep").src != "") {
        document.getElementById("kep").src = kerdes[k].image
    }
   
    
}
function Léptetelore() {
    if (helyzet == kerdes.length + 1) {
        helyzet = 0;
        letöltés();
        clear();
    }
    else {
        helyzet++;
        letöltés();
        clear();
    }
}
function Leptethatra() {
    if (helyzet == 0) {
        helyzet = kerdes.length - 1;
        letöltés();
        clear();
    }
    else {
        helyzet--;
        letöltés();
        clear();
    }
}
function ellenoriz(k) {
    let elem = document.getElementById("valasz" + k);
    if (kerdes[helyzet]["correctAnswer"]==k) {
        elem.style.backgroundColor = "green";
    }
    else {
        elem.style.backgroundColor = "red";
        let jovalasz = document.getElementById("valasz" + kerdes[helyzet]["correctAnswer"]);
        jovalasz.style.backgroundColor = "green";
    }       
}
function clear() {
    for (var i = 1; i < 4; i++) {
        let elem = document.getElementById("valasz" + i)
        elem.style.backgroundColor = "lightgray"; 
    }

}