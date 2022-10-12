const person = {
  firstName: '',
  lastName: '',
  fullName(){
    if(this.firstName && this.lastName){
      return `${this.firstName} ${this.lastName}`
    }
  }
}

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';


const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins





