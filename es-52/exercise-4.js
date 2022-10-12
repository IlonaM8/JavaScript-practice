const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


// const id = person.id.toJSON = function() {
//   return this.id;
// }

// const age = person.id.toJSON = function() {
//   return this.age;
// }


const json = JSON.stringify(person, ["id", "age"]);

console.log(json); // Should return: { id: 1, age: 25 }