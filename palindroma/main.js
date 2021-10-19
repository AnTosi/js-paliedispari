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

// let letters = userWord.split();

// console.log(letters);




//uso ciclo con charAt per creare array lettere

// for (let i = 0; i < userWord.length; i++) {
//     letter += userWord.charAt(i);
//     console.log(letter);
// }


//provo con spread che avevo rimosso

// const characters = userWord.split("");
// console.log(characters);

//funziona, ora come dicevo sopra provo a fare reverse (non mi ricordo di preciso qual è, ma sono abbastanza sicuro di aver visto una funzione che lo faccia)

//comunque ho avuto una mezzoretta di pausa forzata perché il gatto mi era salito in collo bloccandomi entrambe le braccia

// let reverseCharacters = characters;
// reverseCharacters.reverse();

// console.log(reverseCharacters);
// console.log(characters);

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

function palindrome (array1, array2) {
    if (array1.length !== array2.length) {
        document.querySelector
    }
       else for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {


    } else return true
}
}


if (palindrome (userCharacters, reverseCharacters)) {
    document.querySelector("h1").innerHTML = "La parola che hai scelto è palindroma!"
} else {
    document.querySelector("h1").innerHTML = "La parola che hai scelto non è palindroma :("
}


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const reverseFruit = fruits.reverse();
// console.log(reverseFruit)