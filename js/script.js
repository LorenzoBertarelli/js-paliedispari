// L'UTENTE INSERISCE UNA PAROLA
const UserWord = prompt(`Scrivi una parola e ti dirò se è un palindromo`);
console.log(UserWord);

// CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA è UN PALINDORMO
function isPalindormo(UserChoise) {
    
}


// NUMERO SCELTO DALL'UTENTE DA 1 A 5
const sceltaUtente = parseInt(prompt(`scegli pari o dispari con un numero da 1 a 5`));
console.log(sceltaUtente);

// NUMERO RANDOM PC DA 1 A 5
const randomPC = Math.floor(Math.random() * 5) + 1;
console.log(randomPC);

// SOMMA NUMERI
let sommaNumbers = sceltaUtente + randomPC;
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