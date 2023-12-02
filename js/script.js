/*
Realizzare un semplice applicativo in un linguaggio a piacere che generi un numero intero casuale tra 1 e 10.
Una volta generato tale numero deve chiedere un numero all’utente e verificare se ha indovinato il numero generato.
Se l’utente non ha indovinato potrà riprovare altrimenti il programma informerà l’utente che ha vinto e terminerà.
*/

// devo anzitutto raccogliere tutte le variabili che mi servono affinché ciò avvenga
// genero un numero da 1 a 10 come previsto da consegna
let randNumber = Math.floor(Math.random() * 10) + 1;
// faccio un console log per assicurarmi funzioni
// console.log(randNumber);
// Raccolgo la variabile del bottone nel form
let button = document.getElementById("submit");
// raccolgo la variabile del form che disciplina tutto 
let campoFormEl = document.getElementById("game-form");
//raccolgo la variabile dei risultati
let postGameEl = document.getElementById("esito");

//creo l'evento del clic al bottone per verificare che tutto giri bene al momento.
button.addEventListener("click", startGame);

//una volta raccolti gli elementi che mi servono creo una funzione di verifica.
function startGame(event) {
    /* verificato che il numero generato casualmente funziona,
    raccolgo la variabile del numero scelto dall'utente dentro la funzione,
    fuori non avrebbe senso perché in quel momento il campo risulterebbe vuoto */
    let userNumEl = document.getElementById("user-num").value;
    //faccio un console log per assicurarmi giri tutto bene
    //console.log(userNumEl);
    if (userNumEl == randNumber) {
        // evito che la pagina si rinfreschi in questo modo
        event.preventDefault();
        //console.log("hai inserito qualcosa che dovevi");
        postGameEl.style.display = "block";
        campoFormEl.innerHTML = `
        <label for="numero">Inserisci un numero tra 1 e 10:</label>
        <input type="number" name="numero" min="1" max="10" id="user-num" required>
        <input type="submit" value="Conferma" id="submit" disabled>
        `;
        postGameEl.innerHTML = `
        <p class="parag">
            <span class="text-success">Corretto!</span>
            ho pensato proprio al numero ${userNumEl}, hai vinto!
        </p>
        `;
    } else if (userNumEl > 0 && userNumEl < 11 && userNumEl !== randNumber) {
        // evito che la pagina si rinfreschi in questo modo
        event.preventDefault();
        //console.log("AAAAAAAAAAH")
        postGameEl.style.display = "block";
        postGameEl.innerHTML = `
        <p class="parag">
            <span class="text-danger">Sbagliato!</span>
            ho pensato un altro numero, ritenta!
        </p>
        `;
    }
}