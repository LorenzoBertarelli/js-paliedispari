// Chiedi all'utente di inserire una parola
let parola = prompt("Inserisci una parola per scoprire se è palindorma:");

// Definisci una funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
  // Converte la parola in un array di caratteri
  let caratteri = parola.split("");
  // Inverte l'array di caratteri
  let caratteriInvertiti = caratteri.reverse();
  // Converte l'array di caratteri invertiti in una stringa
  let parolaInvertita = caratteriInvertiti.join("");
  // Verifica se la parola invertita è uguale alla parola originale
  if (parolaInvertita === parola) {
    return true;
  } else {
    return false;
  }
}

// Verifica se la parola inserita è palindroma e stampa un messaggio appropriato
let risultatoElement = document.getElementById("result");
if (isPalindroma(parola)) {
  risultatoElement.innerHTML = parola + " è palindroma!";
} else {
  risultatoElement.innerHTML = parola + " non è palindroma.";
}