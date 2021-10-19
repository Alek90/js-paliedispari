/* OBBIETTIVO:
    Chiedere all'utente di inserire una parola.
    Creare una funzione per stabilire se la parola proposta sia palindroma o no.
*/


// Chiedere all'utente di inserire una parola.
// Strumenti: - prompt

const user_word = prompt ("Scrivi una parola");
console.log(user_word);
 

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
    Oppure...utilizzando un ciclo for, e assegnando in maniera adeguata la variabile index, il termine del cicloed il codice da seguire...

    let revers_word = "";
    for (i = user_word.length - 1; i > 0; i--) {
    reverse_word += user_word[i];
    }
    
    Questo sulla base del fatto che la stringa viene interpretata come un array di caratteri.
*/




