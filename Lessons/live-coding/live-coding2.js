//Creare una funzione che passato come parametro un array restituisca l'array con solo i numeri pari
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function number(arr){
//     const even = arr.filter( element => {
//         return element % 2 === 0;
//     })
//     return even;
// }

// console.log(number(array));




/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

const bici = [
   {nome: 'bici1', peso: 20},
   {nome: 'bici2', peso: 40},
   {nome: 'bici3', peso: 10},
   {nome: 'bici4', peso: 60},
]

let biciLeggera = bici[0];

bici.forEach(bike => {
    if(bike.peso < biciLeggera.peso){
         biciLeggera = bike;
    }


})

console.log(biciLeggera);

// const biciLeggera = bici.sort((a, b) => a.peso - b.peso)[0];
// console.log(biciLeggera);

const {nome, peso} = biciLeggera; 
console.log( ` La bici con il ${nome} e il peso di ${peso} è la bici più leggera!`);









// 1 -> Scriviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0
// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero


//risposta prima:
// function sum(num1, num2){
//     return num1 + num2;

// }


//risposta seconda:
// function sum(num1, num2){

//     if( typeof num1 === 'number' && typeof num2 === 'number' ){
//         console.log( num1 + num2);
//     } else{
//         console.error(`non è un numero`);
//     }
// }

// (sum(1, 3));



//risposta terza
// function sum(num1, num2){
//     if( num2 === 0){

//     }

//     if( typeof num1 === 'number' && typeof num2 === 'number' ){
//         console.log( num1 + num2);
//     } else{
//         console.error(`non è un numero`);
//     }
// }

// sum(1, 3);