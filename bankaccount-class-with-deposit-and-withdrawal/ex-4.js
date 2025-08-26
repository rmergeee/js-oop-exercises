// Write a JavaScript program that creates a class called "BankAccount" with properties for 
// account number and balance. Include methods to deposit and withdraw money from the account. 
// Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it. 

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance + amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount) {
        if ((this.balance - amount) < 0) {
            console.log(`Помилка! Максимальна сума вилучення(ващ баланс) - ${this.balance}`);
            return;
        }
        this.balance - amount;
        console.log(`Withdrawn: $${amount}`);
    }

    displayBalance() {
    console.log(`Account Balance: $${this.balance}`);
    }
}

const rostAcc = new BankAccount("5151 5123", 200);

rostAcc.withdraw(200);