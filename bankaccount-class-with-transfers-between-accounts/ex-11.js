// Write a JavaScript program that creates a class called BankAccount with properties for 
// account number, account holder name, and balance. Include methods to deposit, withdraw, 
// and transfer money between accounts. Create multiple instances of the BankAccount class 
// and perform operations such as depositing, withdrawing, and transferring money. 

class BankAccaount {
    constructor(name) {
        this.accNumber = Math.random() * 1000;
        this.name = name;
        this.balance = 0;
    }

    deposit(amount) {
        console.log(this.name + " +" + amount);
        this.balance += amount;
    }

    withdraw(amount) {
        if(this.balance >= amount) {
            console.log(this.name + " -" + amount);
            this.balance -= amount;
        } else {
            console.log("Not enough money!");
        }
        
    }

    transfer(amount, bankAcc) {
        if(this.balance >= amount) {
            console.log(this.name + " --> " + amount + " --> " + bankAcc.name);
            this.withdraw(amount);
            bankAcc.deposit(amount);
        } else {
            console.log("Not enough money!");
        }
    }
}

const p1 = new BankAccaount("Roha");
const p2 = new BankAccaount("Nastya");

p1.deposit(200);

p1.transfer(100, p2);