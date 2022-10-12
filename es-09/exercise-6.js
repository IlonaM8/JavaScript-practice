
//esercizio corretto da caricare

function getKeys(obj){
 
  const keys = [];
  for(let i in obj){
    keys.push(i)
  }

  return keys; 


   //return only keys:
    //return Object.keys(person);
  
}



const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};



const keys = getKeys(person);
console.log(keys);


