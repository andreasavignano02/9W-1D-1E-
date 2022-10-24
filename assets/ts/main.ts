let giocatore1:number = 10;
let giocatore2:number = 20;
console.log(giocatore1);
console.log(giocatore2);

let numeroRandom:number = (function generatoreNumero(){
    let numero = (Math.random() * (100-1) + 1);
    let numeroDecimale = Math.floor(numero);
    console.log(numeroDecimale)
    return numeroDecimale
})()

if (giocatore1 === numeroRandom || giocatore2 === numeroRandom){
    console.log("Hai indovianto")
    } 
    else {
    console.log("Avete sbagliato entrambi")
}
