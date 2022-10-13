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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
//promise object
// const fetchPersonById = new Promise((resolve, reject) => {
//   resolve(persons.find(item => item.id === id))
  
// });






function fetchPersonById(id) {
  
  return new Promise((resolve, reject)=> {
    if(persons.id === undefined ){
      reject('Not here');
    } else {
      setTimeout(function(){
        resolve(persons.find(item => item.id === id), 1000);
      });
    }

  })
  
}

fetchPersonById(2)
.then((person) => console.log(person))
.catch((er) => console.log(er));



//
function fetchJobById(id){
  return new Promise((resolve, reject)=> {
    if(jobs.id === undefined ){
      reject('job id not here!')
    } else {
      setTimeout(function(){
        resolve(jobs.find(item => item.id === id), 1000);
      });
    }
  })
}



fetchJobById(1)
.then((person) => console.log(person))
.catch((er) => console.log(er));






//important - don't console.log the promise

//use my promise the get the result of the promise

// fetchPersonById.then(value => {
//   return value + 1;
// })
// .then(newValue => {
//   console.log(newValue);
// })
// .catch(err =>{
//   console.error(err);
// })
//if there is an err - you need to catch it


