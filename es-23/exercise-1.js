const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

// ho ottenuto lo stesso risultato con for..in 
//ma non capisco come ottenre lo stesso risultato con object.keys :(

for(let i in person){
  console.log(i + ': ' + person[i]);
}

// so stampare sia le chiavi che i valori
// console.log(Object.entries(person)); 

//oppure solo le chiavi
//console.log(Object.keys(person))
