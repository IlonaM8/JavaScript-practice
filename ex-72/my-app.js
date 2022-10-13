//recupero i valori di ciascun campo di input
const firstNameHtml = document.getElementById('firstName');
const lastNameHtml = document.getElementById('lastName');
const ageHtml = document.getElementById('age');

//oggetto person contenente le proprietà
const person = new Object();
person.firstName = firstNameHtml;
person.lastName = lastNameHtml;
person.age = ageHtml;

//recupero l'el form
const formEl = document.querySelector('form');


//aggiungere l'attributo `data-person` contenente l'oggetto `person` in formato json
let jsonPerson = JSON.stringify(person);

formEl.setAttribute('data-person', 'jsonPerson');





//p.s. Non sono sicura di aver capito l'esercizio ma ci ho provato! :)







