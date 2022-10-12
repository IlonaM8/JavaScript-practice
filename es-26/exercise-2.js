
// questo è l'es 26, ho caricato per sbaglio l'es 25 al posto di 26 e viceversa:
function Person(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
}


let john = new Person('John', 'Doe');
let simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
