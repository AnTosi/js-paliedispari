//chiedo all'utente una parola e verifico se è palindroma
//strumenti:
//prompt per chiedere la parola e toLowerCase per rendere meno rigoroso il tutto
//split() per creare array con lettere

//split mi separa una parola dall'altra, non le lettere, devo trovare qualcos'altro (forse un ciclo che mi stampa ogni charAt, se non c'è funzione già pronta)

//provo con spread che avevo rimosso

//reverse per confrontare array lettere con il suo contrario nella funzione



let userWord = prompt("Inserisci una parola").toLowerCase();
let reverseUserWord = userWord.split("").reverse().join("");

console.log(userWord, reverseUserWord);

let userCharacters = userWord.split("");
let reverseCharacters = reverseUserWord.split("");
console.log(userCharacters, reverseCharacters);



// il problema era che per qualche motivo lo spread e il reverse mi invertivano pure l'ordinata dell'array di userWord per motivi ignoti, prbabilmente con qualche adeguamento anche gli altri metodi commentati successivamente potrebbero funzionare


// let letters = userWord.split();
// console.log(letters);




//uso ciclo con charAt per creare array lettere
// abbandonato questo metodo perché inefficiente, ci sono già metodi esistenti che fanno lo stesso

// for (let i = 0; i < userWord.length; i++) {
//     letter += userWord.charAt(i);
//     console.log(letter);
// }


//provo con spread che avevo rimosso dalla memoria

//inizialmente split non mi divideva le lettere, sicuramente sbagliavo un po' di sintassi
// const characters = userWord.split("");
// console.log(characters);

//funziona, ora come dicevo sopra provo a fare reverse (non mi ricordo di preciso qual è, ma sono abbastanza sicuro di aver visto una funzione che lo faccia)

//comunque ho avuto una mezzoretta di pausa forzata perché il gatto mi era salito in collo bloccandomi entrambe le braccia

// let reverseCharacters = characters;
// reverseCharacters.reverse();

// qua ho notato il fatto che l'array mi veniva dato nell'ordine corretto ma con gli elementi con l'ordinata al contrario nel primo, e con l'ordine invertito e l'ordinata corretta nel secondo, così facendo risultavano sempre palindromi, quindi ho dovuto apportare l'accorgimento nel prompt per evitare questa situazione (e joinare e poi risplittare funziona)

// console.log(reverseCharacters);
// console.log(characters);


//qua, come dicevo sopra, probabilmente funziona ora che non ho l'inghippo con i due array

// function palindrome (array1, array2) {
//     if (array1 == array2) {
//         return true
//     } else if (array1 !== array2) return false
// }

// if (palindrome (characters, reverseCharacters)) {
//     document.querySelector("h1").innerHTML = "La parola che hai scelto è palindroma!"
// } else {
//     document.querySelector("h1").innerHTML = "La parola che hai scelto non è palindroma :("
// }


// boh, non capisco perché con il reverse == non funziona, forse non gli interessa l'ordine ma solo quali elementi ci sono (mi dà sempre palindromo), riprovo con il ciclo
// credo che non sia quello scritto qua il motivo, ovvero che l'ordine conta ma per qualche strano motivo lo invertiva


/**
 * Questa funzione controlla se la parola 1 è uguale alla parola 2
 * @param {array1} parola1 array di stringhe, ogni stringa è una lettera della parola
 * @param {array2} parola2 array di stringhe, ogni stringa è una lettera della parola
 * @returns {boolean} true se uguali, false se diverse
 */

function equalWords (array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }
       else for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
        return false

    } else return true
}
}


if (equalWords (userCharacters, reverseCharacters)) {
    document.querySelector("h1").innerHTML = "La parola che hai scelto è palindroma!"
} else {
    document.querySelector("h1").innerHTML = "La parola che hai scelto non è palindroma :("
}


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const reverseFruit = fruits.reverse();
// console.log(reverseFruit)