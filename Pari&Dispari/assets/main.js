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


let pc_number = randomNumber ()
console.log(pc_number);