"use strict";

//rest
let [a, b, ...c] = [1, 2, 3, 4];
console.log(a, b, c) // 1, 2, [3, 4]

// raccoglie tutti i valori in eccedenza in un array. Può essere utilizzato anche in assegnazione/ distruturazione

//nel caso di parametri in eccesso ma deve essere l'ultimo
function showNotes(firstName, lastName, ...titles){
    console.log(firstName + ' ' + lastName);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);

}

showNotes("bruce", "wayne",  "Hero", "SuperH";

//rest sta a sinistra 

// Spread: prende un elemento complesso e lo esplode in singoli elementi
let arr1 = [1, -2, 3, 4];
let arr2 = [5, 4, -6, 6];
console.log(arr1);
console.log(...arr1); //
console.log(arr1); // 
console.log(Math.max(...arr1)); //8 

let heroes = ["bruce", "wayne",  "Hero", "SuperH"];
showname(...heroes) ;
// showName("bruce", "wayne",  "Hero", "SuperH");
//prende i singoli elementi e va a distribuirli.

//dichiarare un nuovo arrai in cui sono presenti i singoli elementi dell'array arr1
let newAray = [...arr1];

//possiamo anche fare così: dove vengono assegnati i singoli elementi dei due array messi a disposizione
let newAray2 = [...arr1, ...arr2];


//new object with spread
//usato per unire più oggetti o prender eun oggetto precedente e variarlo

let obj1 = {
    type: 'anotherbsls',
    price: 300,
    
}

let obj2 = {
    type: 'batmanmobile',
    price: 300,
    color: black
}

console.log(obj1);
console.log({ ...obj1 }); //{type: 'bababay', price: 200 }
console.log({ ...obj1, ...{price: 200 }}); //la proprietà di price verrà trascritta

// creiamo un oggetto nidificato: prendi iprimo e il secondo oggetto, aggiunfi nuova proprietà
let newObj = {...obj1, ...obj2, seats: 3, ...{ year: 2000 }};
console.log(newObj);

//posiamo comporre e gestire la clonazione(non profonda)
//prendere il primo oggetto e spreedarlo e cambiare le prorpietà

