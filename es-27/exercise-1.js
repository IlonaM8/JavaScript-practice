const person = {
  firstName: 'John',
  lastName: 'Doe'
};

//verifico se ci sono prima
let verifyProperty = console.log(person?.address?.city?.verifyProperty);
let verifyMethod = console.log(person?.fullName?.verifyMethod);



//console.log(person?.address?.city); // Argh! Cannot read property 'city' of undefined
//console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined