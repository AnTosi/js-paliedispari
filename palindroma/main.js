//chiedo all'utente una parola e verifico se è palindroma
//strumenti:
//prompt per chiedere la parola e toLowerCase per rendere meno rigoroso il tutto
//split() per creare array con lettere

//split mi separa una parola dall'altra, non le lettere, devo trovare qualcos'altro (forse un ciclo che mi stampa ogni charAt, se non c'è funzione già pronta)

//provo con spread che avevo rimosso

//reverse per confrontare array lettere con il suo contrario nella funzione



let userWord = prompt("Inserisci una parola").toLowerCase();

// let letters = userWord.split();

// console.log(letters);




//uso ciclo con charAt per creare array lettere

// for (let i = 0; i < userWord.length; i++) {
//     letter += userWord.charAt(i);
//     console.log(letter);
// }


//provo con spread che avevo rimosso

let letter = [...userWord];
console.log(letter);

//funziona, ora come dicevo sopra provo a fare reverse (non mi ricordo di preciso qual è, ma sono abbastanza sicuro di aver visto una funzione che lo faccia)

//comunque ho avuto una mezzoretta di pausa forzata perché il gatto mi era salito in collo bloccandomi entrambe le braccia


