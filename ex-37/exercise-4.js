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









const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();

