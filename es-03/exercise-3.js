const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {

  students.push('Marco');
  
}

addStudent('Marco');




console.log(students);

//Risposta: Dichiarare con "const" (quindi read-only) non significa che è immutabile. 
//Possiamo comununque modificare i singoli elementi dell'array.