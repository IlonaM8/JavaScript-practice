function secondMax(arr){

    // let maxValue = 0;
    // let secondMaxValue = 0;

    // arr.forEach(element => {
    //     if(element > maxValue){
    //         secondMaxValue = maxValue; 
    //         maxValue = element;
    //     } else if(element > secondMaxValue){
    //         secondMaxValue = element;
    //     }
        
    // });

    // return secondMaxValue;


    //altro metodo

 return arr.sort((a, b) => a - b)[arr.length - 2]
 
 //return arr.sort((a, b) => b - a)[1]


}

const arr = [ 5, 9, 3, 13, 43, 2, 21 ];
/* Esercizio
Scrivere una funzione che prenda come parametro un array di numeri e restituisca il secondo valore massimo */

console.log(secondMax(arr));



//Prossimo esercizio:
//Scrivete una funzione filterRange(arr, a, b) che accetta come argomento un array arr, filtra gli elementi tra a e b e ne ritorna un array.
//const arr = [5, 3, 8, 1, 9, 4];