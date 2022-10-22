const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};



const { id , ...personInfo} = person;

console.log(personInfo);





//Esempio:
//  const dog = { id: 3, name: 'corki', breed: 'corgi' };

//  const { id, ...dogInfo } = dog;








// const id = person.id;

// const { id } = person;

// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

// const { firstName, lastName, age } = personInfo;

