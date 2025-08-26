// Write a JavaScript program that creates a class called Bank with properties for bank 
// names and branches. Include methods to add a branch, remove a branch, and display all 
// branches. Create an instance of the Bank class and perform operations to add and remove 
// branches. 

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.branches = [];
    }

    addBranch(branchName) {
        this.branches.push(branchName);
        console.log(branchName + " added.")
    }

    removeBranch(branchName) {
        const index = this.branches.indexOf(branchName);
        if (index !== -1) {
            this.branches.splice(index, index);
            console.log(branchName + " removed.")
        } else {
            console.log(branchName + "does not exist.")
        }

    }

    displayBranches() {
        if (this.branches.length === 0) {
            console.log("No branhces avalible");
        } else {
            console.log("branhces: ");
            this.branches.forEach((branch) => console.log("Name: " + branch));
        }

    }

}

const monobank = new Bank("monobank");

monobank.addBranch("Branch 1");
monobank.addBranch("Branch 2");

monobank.removeBranch("Branch 2");

monobank.displayBranches();