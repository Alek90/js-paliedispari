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


// Funzione basata sulla concezione che num pari + num dispari darà risultato dispari, mentre la somma tra 2 num pari o 2 num dispari darà risultato pari.
function pariDispari (x, y) {
    let modulo1 = x % 2;
    let modulo2 = y % 2;
    let result = "";

    if(modulo1 |= modulo2){
        result = "Dispari";
        return result;
    }else{
        result = "Pari";
        return result;
    };
}

const x = 4
const y = 5

let risultato = pariDispari(x, pc_number)
console.log(risultato);



// Variabili DOM

let user_number = Number(document.getElementById("user_number").value);
// console.log(user_number);


// Servirà qualcosa che dà il via? Magari un bottone da premere dopo aver selezionato le scelte...
// Azione

