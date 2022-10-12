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
//   // code here
  
// }

// code here


// da rivedere
// let myPromise = new Promise((resolve, reject) => {

//   resolve('good');

// })


//l'es caricato:
function fetchPersonById(id) {
  // code here
  return new Promise((resolve)=> {
    
      setTimeout(()=>{
        resolve(persons.find(item => item.id === id), 1000);
      });
    

  })
  
}

fetchPersonById(1).then((person) => console.log(person));

console.log('hi');




















//my practice

//.then() method 

// const promise = new Promise((resolve, reject)=> {
//   setTimeout(()=> {
//     resolve('Result');
//   }, 200);
// });

// promise.then((res)=> {
//   console.log(res);
// }, (err) => {
//   alert(err);
// });


//setTimeout()

// const loginAlert = () => {
//   alert('Login');
// };

// setTimeout(loginAlert, 6000);

//chaining multiple then() methods
// const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

// promise.then(res => {
//   return res === 'Alan'
//   ? Promise.resolve('Hey Alan!')
//   : Promise.reject('Who are you?')
// }).then((res)=> {
//   alert(err)
// })