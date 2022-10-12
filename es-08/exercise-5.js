function calculateAverageAge(persons) {
  //return persons.reduce((prev, persons) =>  prev + persons.age,0) /persons.length;

  let i = 0; sum = 0; ageLength = age.length;
  while(i < ageLength){
    sum += age[i++];
  }

  return sum / ageLength;
};

let age = [16,17,21,32,18,13,24,15,34,28];
let a = calculateAverageAge(age);


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);



//risultato
// function calculateAverageAge(age) {
//   let i = 0, summ = 0, ArrayLen = age.length;
//   while (i < ArrayLen) {
//       summ = summ + age[i++];
// }
//   return summ / ArrayLen;
// }

// let age = [16,17,21,32,18,13,24,15,34,28];
// let a = calculateAverageAge(age);
// console.log(a)