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




//versione ccorretta!
function fetchPersonById(id) {
  const person = persons.find(item => item.id === id)
  
  return new Promise((resolve, reject)=> {
    if(person){
      resolve(person);

    } else if(!person){
      reject('id not here');
    }
    
    
    } )

  
}

fetchPersonById(3)
.then((person) => console.log(person))
.catch((er) => console.log(er));




//quindi ti fai la condizione if(person) quindi se trova l'id resolve else reject, o al contrario if(!person) quindi non c'è l'id  reject else resolve





//ex starter
// function fetchPersonById(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(persons.find(item => item.id === id)), 1000);
//   });
// }

// fetchPersonById(2).then((person) => console.log(person));





// function fetchPersonById(id) {
//   return new Promise((resolve, reject) => {
//     if(persons.id === id){
//       setTimeout(()=> {
//         resolve(persons.find(item => item.id === id), 1000);
//       });
//     } else if(id === null){
//       reject('There is not such id, try another one');
//     }
    
//   });
// }

// fetchPersonById(1).then((person) => console.log(person));

// console.log('hello, there')