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







//another version 
function fetchPersonById(id) {
  
  return new Promise((resolve, reject)=> {
    if(persons.find(item => item.id === null)){
      reject('Not here');
    } else {
      setTimeout(function(){
        resolve(persons.find(item => item.id === id), 1000);
      });
    }

  })
  
}

fetchPersonById(4).then((person) => console.log(person));

console.log('hello, there')







//ex starter
// function fetchPersonById(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(persons.find(item => item.id === id)), 1000);
//   });
// }

// fetchPersonById(2).then((person) => console.log(person));