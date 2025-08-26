// Write a JavaScript program that creates a class called University with properties for 
// university name and departments. Include methods to add a department, remove a 
// department, and display all departments. Create an instance of the University class 
// and add and remove departments. 

class University {
    constructor(uName) {
        this.uName = uName;
        this.departaments = [];
    }

    addDepartament(depName) {
        this.departaments.push(depName);
        console.log(depName + " added.")
    }
    removeDepartament(depName) {
        const index = this.departaments.indexOf(depName);
        if (index !== -1) {
            this.departaments.splice(index, index);
            console.log(depName + " removed.")
        } else {
            console.log(depName + "does not exist.")
        }
    }

    displayDep() {
        this.departaments.forEach(dep => console.log(dep))
    }
}

const duikt = new University("duikt");

duikt.addDepartament("IT");
duikt.addDepartament("Managment")

duikt.displayDep();

duikt.removeDepartament("Managment");

duikt.displayDep();