const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}


//my answer
const math = (a, b, c) => {
  return ((a + c) * (b + a) - a) / b
}

console.log(math(2, 5, 4));