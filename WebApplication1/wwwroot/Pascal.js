window.onload = function () {
    console.log("start")
let hova = document.getElementById("ide");
for (var n = 0; n < 10; n++) {
    let sor = document.createElement("div");
    sor.classList.add("sor");
    hova.appendChild(sor);
    for (var k = 0; k<n+1; k++) {
        let szám = document.createElement("div");
        szám.classList.add("elem");
        let x =binom(n, k);
        szám.innerText = x;
        let y = 260-4*x;
        let z = y.toString();
        szám.style.backgroundColor = "rgba(" +[ [z], [z], [z]].join(',') +")";
        sor.appendChild(szám);
    }

    }
}
var faktor = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;

    }
    return er;
}
var binom = function (a, b) {
    let n = faktor(a);
    let k = faktor(b);
    let kn = faktor(a - b);
    let x = n / (k * kn);
    return x;
}