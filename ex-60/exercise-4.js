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


// code here


const  fetchPersonById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      // console.log(person)

      if(person){
        // return resolve(JSON.stringify(person));
       return resolve(person);
      } 
      return reject(`Person with id: ${id} doesn't exist`);

    }, 1000);


  })

}

// const fetchPerson = fetchPersonById(2);


const fetchJobById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jobT = jobs.find(item => item.id === id);
      // console.log(jobT)

      if(jobT){
        // return resolve(JSON.stringify(jobs));
        return resolve(jobT);
      } 
      return reject(`Job with id: ${id} doesn't exist`);
    }, 500);
  
})}


// const job = fetchJobById(2);

//promise all
Promise.all([fetchPersonById(1), fetchJobById(1)])
.then((resolve) => {
  console.log(resolve);
})
.catch((reject) =>{
  console.log(reject);
})













