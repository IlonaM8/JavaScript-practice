const myForm = document.getElementById('person-form');

const button = document.querySelector('button');

console.log(myForm);

function initForm(){

   // setTimeout(() => {
   //  console.log('dalay is working');

    const inputName = document.createElement('input');
    inputName.setAttribute("type", "text");
    inputName.setAttribute("value", "First Name");
    document.body.appendChild(inputName);

    const inputSurname = document.createElement('input');
    inputSurname.setAttribute("type", "text");
    inputSurname.setAttribute("value", "Last Name");
    document.body.appendChild(inputSurname);

    const inputAge = document.createElement('input');
    inputAge.setAttribute("type", "text");
    inputAge.setAttribute("value", "Age");
    document.body.appendChild(inputAge);

   // }, 1000);
}

window.addEventListener('DOMContentLoaded', initForm);

//prevent default
function submitPersonForm(event){
    button.style.backgroundColor = 'pink';
    event.preventDefault();
    // come acceddo all'input value??
    let person = {
       firstName: document.querySelector('[value="First Name"]').value,
       lastName: document.querySelector('[value="Last Name"]').value,
       age: document.querySelector('[value="Age"]').value
        
    }

    console.log(person);

}

button.addEventListener('click', submitPersonForm );








