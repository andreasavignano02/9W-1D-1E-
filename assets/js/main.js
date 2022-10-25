"use strict";
let giocatore1 = 10;
let giocatore2 = 20;
console.log(giocatore1);
console.log(giocatore2);
let numeroRandom = (function generatoreNumero() {
    let numero = (Math.random() * (100 - 1) + 1);
    let numeroDecimale = Math.floor(numero);
    console.log(numeroDecimale);
    return numeroDecimale;
})();
function confronto() {
    let diff1 = Math.abs(numeroRandom - giocatore1);
    let diff2 = Math.abs(numeroRandom - giocatore2);
    if (giocatore1 === numeroRandom) {
        console.log("Hai indovianto 1");
    }
    else if (giocatore1 === numeroRandom) {
        console.log("Hai indovinato 2");
    }
    else if (diff1 < diff2) {
        console.log("giocatore 1 è più vicino");
    }
    else {
        console.log("giocatore 2 è più vicino");
    }
}
