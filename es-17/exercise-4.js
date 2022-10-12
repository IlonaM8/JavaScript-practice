function calculate(){
   let total = 0;
  // let result = {};

  return {
    add(num){
      total += num;
      return this;
    },
    multiply(num){
      total *= num;
      return this;
    },

    divide(num){
      total /= num;
      return this;
    },

    sub(num){
      total -= num;
      return this;
    }, 

    printResult(){
      console.log(total);
    }


  }
  // return {
  //    add,
  //    multiply,
  //    sub,
  //    divide,
  //    calculateNum(){
  //     return result = result + add + (result * multiply) + (result - sub) + (result /divide);
  //   }
   

  // }
  
 
}

const newCalculator = calculate(2, 2, 2, 2);
newCalculator
console.log(newCalculator)


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7







// function calculate(add, multiply, sub, divide) {
   
//   return {
//      add,
//      multiply,
//      sub,
//      divide,
//      calculateNum(){
//       let num = 0;
//       num = num + add;
//       num = num * multiply;
//       num = num - sub;
//       num = num / divide;
//       console.log(num);
//      }

//   }
  
  
// }


// const newCalculator = calculate(2, 4, 2, 2);
// console.log(newCalculator)
// const calculator = calculate();
// calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7