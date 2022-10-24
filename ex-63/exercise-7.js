const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      try{
        if (person) {
        return resolve(JSON.stringify(person));
      } else {
        reject(`Person with id: ${id} doesn't exist`)
      }

      }catch(error){
        console.log(error);
      }
    }, 1000);
    console.log('Everything else is working :) ooo, huuhuu!');
  });
}

(async () => {
  const personJson = await fetchPersonById(4);
  const person = await JSON.parse(personJson);
  console.log(person);
})();














//code starter
// function fetchPersonById(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const person = persons.find(item => item.id === id);

//       if (person) {
//         return resolve(JSON.stringify(person));
//       }

//       return reject(`Person with id: ${id} doesn't exist`);
//     }, 1000);
//   });
// }

// (async () => {
//   const personJson = await fetchPersonById(4);
//   const person = await JSON.parse(personJson);
//   console.log(person);
// })();