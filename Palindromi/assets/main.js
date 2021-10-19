/* OBBIETTIVO:
    Chiedere all'utente di inserire una parola.
    Creare una funzione per stabilire se la parola proposta sia palindroma o no.
*/


// Creare una funzione per stabilire se la parola proposta sia palindroma o no.
/* Strumenti: 
    - function (); per creare la funzione;
*/

// Modi trovati per costruire la funzione necessaria ad espletare lo scopo richiesto:

/* 
    - split(); per trasformare una stringa (user_word) in un array;
    - reverse(); per invertire l'ordine degli elementi dell'array [user_word];
    - join(); per convertire tutti gli elementi di un array in una stringa; ? (valutare se questo passaggio sia necessario)
    - if(); per confrontare le due parole/i due array per verificare se siano uguali;
*/

/* 
    Oppure...utilizzando un ciclo for, e assegnando in maniera adeguata la variabile index, il termine del ciclo ed il codice da seguire...

    let revers_word = "";
    for (let i = user_word.length - 1; i >= 0; i--) {
    reverse_word += user_word[i];
    }
    
    Questo sulla base del fatto che la stringa viene interpretata come un array di caratteri.
    
    Strumenti:
    -for()
    -if()
*/


//  TEST VIA CICLO FOR


/** Funzione che verifica se una parola è palindroma, e rende messaggio con risultato.
 * @param {string} word - la parola da verificare.
 */
function palindromeTest(word){

    let reverse_word = "";
    let message = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reverse_word += word[i];
    }
    console.log(reverse_word);

    if (reverse_word == user_word){
        console.log("Palindrome");
        message = "Palindrome";
        return message
        
    }else {
        console.log("Not Palindrome");
        message = "Not Palindrome"
        return message 
    }

}


// Chiedere all'utente di inserire una parola;
let user_word = prompt ("Scrivi una parola").toLowerCase();

// utilizzare funzione apposita per verificare se la parola dell'utente sia palindroma;
let verify = palindromeTest(user_word);

// stampare risultato in html.
document.getElementById("message").innerHTML = verify;
