/*   OBBIETTIVI:
    Dare la possibilità all'utente di scegliere tra prari e dispari.
    Dare la possibilità all'utente di scegliere un numero compreso tra 1 e 5.
    Generare un numero random compreso tra 1 e 5 per il computer, per mezzo di una funzione.
    Sommiamo il numero dell'utente e quello generato per il pc.
    Stabilire se la somma sia pari o dispari, tramite una funzione.
    Dichiarare il vincitore.
*/

// Funzioni

function randomNumber () {

    let random_number = Math.floor(Math.random() * 5) + 1;

    return random_number
}


/* let pc_number = randomNumber ()
console.log(pc_number); */


// Variabili

/* et user_number = Number(document.getElementById("user_number").value);
console.log(user_number);



let sommaNumeri = user_number + pc_number;
console.log(sommaNumeri);

let sumResult = ""; */


// Servirà qualcosa che dà il via? Magari un bottone da premere dopo aver selezionato le scelte...
// Azione

function pariDispari (numero) {
    const moduloPari = 0;
    const moduloDispari = 1;
    let result = "";

    if (numero % 2 == moduloPari) {
        result = "pari";
        return result
    }else {
        result = "Dispari";
        return result
    }
}





const play = document.getElementById("play");


play.addEventListener("click", function() {

    const userNumberChoice = document.getElementById("user_number");

    const user_number = parseInt(userNumberChoice.value);


    let pc_number = randomNumber ();

    let sommaNumeri = user_number + pc_number;

    sumResult = pariDispari(sommaNumeri);
    console.log(user_number, pc_number, sommaNumeri, sumResult);

})