// chiedo all'utente di scegliere pari o dispari, poi gli chiedo un numero da 1 a 5, genero un numero random con una funzione, sommo i due numeri, vedo se la somma è pari o dispari e stampo il risultato all'utente

//strumenti
//toLowerCase() serve per rendere meno rigoroso il prompt, così anche se l'utente usa caps me lo legge
//function con la funzione random vista a lezione presa da w3school
//altra function per verificare se la somma è pari o dispari
// parseInt per fare la somma (sarebbe andato bene anche Number)
//stampo in console ad ogni passaggio i risultati per accertarmi che stia facendo bene, e in caso contrario trovare dove è l'errore
//alla fine if, else if, else if, else per vedere i 4 casi, probabile che ci sia un sistema più semplice ma questo funziona, se mi viene in mente qualcosa di più efficiente modifico poi




let userChoice = prompt("Pari o Dispari?").toLowerCase();
console.log(userChoice);

let userNumber = prompt("Digita un numero da 1 a 5");
console.log(userNumber);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let pcNumber = getRndInteger(1, 5);
console.log(pcNumber);

result = parseInt(userNumber) + parseInt(pcNumber);
console.log(result);

function isEven (result) {
    if (result % 2 == 0) {
        return true
    } else {
        return false
    }
}

if (userChoice == "pari" && isEven (result)) {
    console.log(`Il risultato è ${result}, hai scelto pari, hai vinto!`);

} else if (userChoice == "pari" ){
    console.log(`Il risultato è ${result}, hai scelto pari, hai perso...`);

} else if (userChoice == "dispari" && isEven (result)) {
    console.log(`Il risultato è ${result}, hai scelto dispari, hai perso`);

} else {
    console.log(`Il risultato è ${result}, hai scelto dispari, hai vinto!`);

}


// il codice funziona, ora stampo a schermo quello che mi dava la console log