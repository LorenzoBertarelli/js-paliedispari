// NUMERO SCELTO DALL'UTENTE DA 1 A 5
const sceltaUtente = parseInt(prompt(`scegli pari o dispari con un numero da 1 a 5`));
console.log(sceltaUtente);

// NUMERO RANDOM PC DA 1 A 5 NELLA FUNZIONE
function numeroRandomPc() {
    let numeroRandom = Math.floor(Math.random() * 5) + 1;
    return numeroRandom;
}

let randomPc = numeroRandomPc();
console.log(randomPc);

// SOMMA NUMERI
let sommaNumbers = sceltaUtente + randomPc;
console.log(sommaNumbers); 

// FUNZIONE PER DIRE SE è PARI O DISPARI
function sommaPariDispari(sommaNumbers) {
    if (sommaNumbers % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

let risultato = sommaPariDispari(sommaNumbers);
console.log(risultato);

// Determina il vincitore
if (risultato === sceltaUtente) {
    alert("Hai vinto! La somma è " + risultato + ".");
} else {
    alert("Hai perso! La somma è " + risultato + ".");
}