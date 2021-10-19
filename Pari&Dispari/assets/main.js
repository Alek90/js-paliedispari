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
function randomNumber () {

    let random_number = Math.floor(Math.random() * 5) + 1;

    return random_number
}

/** Funzione che riconosce e dichiara se un numero sia pari o dispari.
 * @param {number} numero - il numero da esaminare.
 */
function pariDispari (numero) {
    const moduloPari = 0;
    let result = "";

    if (numero % 2 == moduloPari) {
        result = "pari";
        return result
    }else {
        result = "dispari";
        return result
    }
}


// Servirà qualcosa che dà il via? Magari un bottone da premere dopo aver selezionato le scelte...

const play = document.getElementById("play");

// Azione

play.addEventListener("click", function() {

    const userNumberChoice = document.getElementById("user_number");
    const user_number = parseInt(userNumberChoice.value);
    let user_choice = document.getElementById("user_choice").value;
    let message = 0;


    let pc_number = randomNumber ();

    let sumNumber = user_number + pc_number;

    sumResult = pariDispari(sumNumber);
    console.log(user_number, user_choice, pc_number, sumNumber, sumResult);

    if(user_choice == sumResult){
        message = "You Win"
    }else {
        message = "PC Win"
    }

    document.querySelector(".winner").innerHTML = message;
    console.log(message);

})