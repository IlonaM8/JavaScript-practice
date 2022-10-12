const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',

 



  fullName(){
    return this.firstName + ' ' + this.lastName
  }, 
  info(){
    return `${this.firstName}  ${this.lastName}, ${this.age} - ${this.job}`
  }
  

}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer


//prima versione
 // fullName () {
  //   console.log(`Hi, I'm ${this.firstName} ${this.lastName}.`)
  // },

  // info(){
  //   console.log(`I'm a ${this.age} years old ${this.job}.`)
  // }
