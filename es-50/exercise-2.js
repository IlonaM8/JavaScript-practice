class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  //versione corretta
  static fromJson(json){
    const obj = JSON.parse(json);
     return new this(obj.id, obj.firstName, obj.lastName, obj.age);
   

  }
}



const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer =  Person.fromJson(json);
console.log(developer);


//soluzione corretta
// static fromJson(jsonText) {
//   const obj = JSON.parse(jsonText);
//   return new this(obj.id, obj.firstName, obj.lastName, obj.age);
// }