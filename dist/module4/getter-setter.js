"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get Test() {
        return this.getTestBalance();
    }
    //getter
    get balance() {
        return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
    //setter
    set deposit(amount) {
        this._balance = this.balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this.
        ;
    }
}
const myAccount = new BankAccount(444, "Persian", 30);
// myAccount.addDeposit(20);
// myAccount.getBalance();
// myAccount.getBalance();
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);
