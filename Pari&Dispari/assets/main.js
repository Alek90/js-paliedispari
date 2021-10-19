/*   OBBIETTIVI:
    Dare la possibilità all'utente di scegliere tra prari e dispari.
    Dare la possibilità all'utente di scegliere un numero compreso tra 1 e 5.
    Generare un numero random compreso tra 1 e 5 per il computer, per mezzo di una funzione.
    Sommiamo il numero dell'utente e quello generato per il pc.
    Stabilire se la somma sia pari o dispari, tramite una funzione.
    Dichiarare il vincitore.
*/

// Funzioni

/** Generatore numero random tra 1 e 5. */
function randomNumberGenerator () {

    let random_number = Math.floor(Math.random() * 5) + 1;

    return random_number
};

/** Funzione che riconosce e dichiara se un numero sia pari o dispari.
 * @param {number} numero - il numero da esaminare.
 */
function recognizerEvenOdd (numero) {
    const moduloPari = 0;
    let declared = "";

    if (numero % 2 == moduloPari) {
        declared = "pari";
        return declared
    }else {
        declared = "dispari";
        return declared
    };
}


// Servirà qualcosa che dà il via? Magari un bottone da premere dopo aver selezionato le scelte...

const playBotton = document.getElementById("play");

// Azione: al click sul pulsante:

playBotton.addEventListener("click", function() {

    // prendere la scelta dell'utente;
    let user_choice = document.getElementById("user_choice").value;
    // prendere il valore del numero scelto dall'utente, in forma di numero;
    const userNumberChoice = document.getElementById("user_number");
    const user_number = parseInt(userNumberChoice.value);
    // inizializzare variabile messaggio;
    let message = 0;

    // generare numero PC tramite funzione apposita, e stamparlo in html;
    let pc_number = randomNumberGenerator ();
    document.getElementById("pc_number").innerHTML = pc_number;

    // sommare numero user e numero PC;
    let sumNumber = user_number + pc_number;

    // analizzare se la somma sia pari o dispari tramite funzione apposita;
    sumDeclared = recognizerEvenOdd(sumNumber);

    // creare messaggi differenziati per i possibili risultati;
    if(user_choice == sumDeclared){
        message = "You Win"
    }else {
        message = "PC Win"
    }

    // stampare somma e messaggio reltivo al vincitore in html.
    document.querySelector(".winner").innerHTML = `${sumNumber} ${message}`;
    console.log(message);

});