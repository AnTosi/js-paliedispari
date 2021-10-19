// chiedo all'utente di scegliere pari o dispari, poi gli chiedo un numero da 1 a 5, genero un numero random con una funzione, sommo i due numeri, vedo se la somma è pari o dispari e stampo il risultato all'utente

//strumenti
//toLowerCase() serve per rendere meno rigoroso il prompt, così anche se l'utente usa caps me lo legge
//function con la funzione random vista a lezione presa da w3school
//altra function per verificare se la somma è pari o dispari
//parseInt per fare la somma (sarebbe andato bene anche Number)
//stampo in console ad ogni passaggio i risultati per accertarmi che stia facendo bene, e in caso contrario trovare dove è l'errore
//alla fine if, else if, else if, else per vedere i 4 casi, probabile che ci sia un sistema più semplice ma questo funziona, se mi viene in mente qualcosa di più efficiente modifico poi
//potrei usare addeventlistener collegato ad un bottone per inizializzare il tutto e poterlo ripetere,
//ma lo abbiamo già visto in altri esercizi e preferisco concentrarmi sul JS e sulle funzioni



let userChoice = prompt("Pari o Dispari?").toLowerCase();
console.log(userChoice);

let userNumber = prompt("Digita un numero da 1 a 5");
console.log(userNumber);


// questa è la funzione per il numero random vista a lezione, presa da w3school

/**
 * funzione w3school per numeri interi random che includono max e min nell'intervallo
 * @param {number} min il valore minimo dell'intervallo
 * @param {number} max il valore massimo dell'intervallo
 * @returns {number} numero random tra min e max (inclusi)
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


//invoco la funzione appena scritta per generare il valore richiesto e lo "salvo" in una variabile
let pcNumber = getRndInteger(1, 5);
console.log(pcNumber);

//parseInt per fargli fare il calcolo, altrimenti me li scrive accanto
result = parseInt(userNumber) + parseInt(pcNumber);
console.log(result);


/**
 * funzione per verificare se il numero dato è pari o dispari
 * @param {number} numerodaverificare numero di cui vogliamo sapere se è pari o dispari
 * @returns {boolean} true se pari, false se dispari
 */
function isEven (number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}



// questa serie di if è per verificare il risultato con quanto detto dall'utente, forse posso semplificarlo con una funzione, ora provo

// if (userChoice == "pari" && isEven (result)) {
//     console.log(`Il risultato è ${result}, hai scelto pari, hai vinto!`);
//     document.querySelector("h1").innerHTML = `Il risultato è ${result}, hai scelto pari, hai vinto!`;

// } else if (userChoice == "pari"){
//     console.log(`Il risultato è ${result}, hai scelto pari, hai perso...`);
//     document.querySelector("h1").innerHTML = `Il risultato è ${result}, hai scelto pari, hai perso...`;

// } else if (userChoice == "dispari" && isEven (result)) {
//     console.log(`Il risultato è ${result}, hai scelto dispari, hai perso`);
//     document.querySelector("h1").innerHTML = `Il risultato è ${result}, hai scelto dispari, hai perso`;

// } else {
//     console.log(`Il risultato è ${result}, hai scelto dispari, hai vinto!`);
//     document.querySelector("h1").innerHTML = `Il risultato è ${result}, hai scelto dispari, hai vinto!`;

// }

// il codice funziona, ora stampo a schermo quello che mi dava la console log


// qua cerco di generalizzare quanto fatto sopra dentro una funzione
// ci sono riuscito


/**
 * Questa funzione confronta la scelta tra pari o dispari dell'utente e il numero inserito, stampando a schermo l'esito
 * 
 * @param {string} choice qua scelta tra pari o dispari
 * @param {number} number qua il numero che vogliamo inserire
 * @returns esito stampato a schermo e in console.log
 */
function pariOdispari (choice, number) {
    if (choice == "pari" && isEven (number)) {
        console.log(`Il risultato è ${number}, hai scelto pari, hai vinto!`);
        document.querySelector("h1").innerHTML = `Il risultato è ${number}, hai scelto pari, hai vinto!`;

    } else if (choice == "pari" && !isEven (number)) {
        console.log(`Il risultato è ${number}, hai scelto pari, hai perso...`);
        document.querySelector("h1").innerHTML = `Il risultato è ${number}, hai scelto pari, hai perso...`;

    } else if (choice == "dispari" && !isEven(number)) {
        console.log(`Il risultato è ${number}, hai scelto dispari, hai vinto!`);
        document.querySelector("h1").innerHTML = `Il risultato è ${number}, hai scelto dispari, hai vinto!`;
    
    } else if (choice == "dispari" && isEven(number)) {
        console.log(`Il risultato è ${number}, hai scelto dispari, hai perso`);
        document.querySelector("h1").innerHTML = `Il risultato è ${number}, hai scelto dispari, hai perso`;
    } else {
        console.log(`INVALID`);
        document.querySelector("h1").innerHTML = `Hai inserito un input non valido`;
    }


}


//invoco la funzione usando le mie variabili ottenute dal prompt e dalla somma del numero scelto dall'utente e random del PC 
pariOdispari (userChoice, result);




// funziona tutto, ma se l'utente scrive cose a caso invece che pari o dispari risulta come dispari, provo a modificare

//modificato l'ultimo else if e aggiunto un else, ora funziona
