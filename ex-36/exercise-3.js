class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  
  //static method 
  
  static fromObject(obj){
    return new this(obj.firstName, obj.lastName);
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};



const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);