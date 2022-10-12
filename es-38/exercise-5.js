// class BankAccount {
//   #amount = 0;

//   constructor(initialAmount) {
//     this.#amount = initialAmount;
//   }

  

//   deposit(amount) {
//     this.#amount += amount;
//   }

//   withdraw(amount) {
//     this.#amount -= amount;
//   }

//   view() {
//     console.log(this.#amount);
//   }
// }


// //a new class that extends bankAccount class
// class BankAccountVip extends BankAccount {
//   constructor(initialAmount){
//     super(initialAmount);

//   }

//   //getter
//   get initialAmount(){
//     this._amount = initialAmount;
//   }


//   interestRate(){
//     let interestRate = (this._amount * 3) / 100;
//     if(this._amount >= 1000){
//       return this._amount = interestRate;
//     }
   

//   }

// }




// const bankAccountVip = new BankAccountVip(1000);
// bankAccountVip.deposit(500);
// bankAccountVip.deposit(1200);
// bankAccountVip.withdraw(800);
// bankAccountVip.deposit(3500);
// bankAccountVip.interestRate();
// bankAccountVip.view();


//try again

class BankAccount {
  constructor(amount){
      this._amount = amount;
  }

  get amount(){
      return this._amount;
  }

  view(){
      console.log(this._amount);
  }

  deposit(newAmount){
       this._amount += newAmount
  }

  withdraw(newAmount){
      this._amount -= newAmount
  }


}


class BankAccountVip extends BankAccount {
    constructor(initialAmount){
      super(initialAmount);
  
    }
  
    //getter
    get initialAmount(){
      this._amount = initialAmount;
    }
  
  
    interestRate(){
      let interestRate = (this._amount * 3) / 100;
      if(this._amount >= 1000){
        return this._amount += interestRate;
      }
     
  
    }
  
  }

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.interestRate();
bankAccountVip.view();