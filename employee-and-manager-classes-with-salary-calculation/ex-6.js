// Write a JavaScript program that creates a class called 'Employee' with properties for 
// name and salary. Include a method to calculate annual salary. Create a subclass called 
// 'Manager' that inherits from the 'Employee' class and adds an additional property for 
// department. Override the annual salary calculation method to include bonuses for managers. 
// Create two instances of the 'Manager' class and calculate their annual salary. 

class Employee {
    constructor(fullName, salary) {
        this.fullName = fullName;
        this.salary = salary;
    }

    calcAnnualSalaty() {
        return 12 * this.salary;
    }
}

class Manager extends Employee {
    constructor(fullName, salary, departament) {
        super(fullName, salary);
        this.departament = departament;
    }

    calcAnnualSalaty(bonus) {
        return super.calcAnnualSalaty() + bonus;
    }
}

const manager = new Manager("Bebrashvili", 2000, "DRK");

console.log(manager.calcAnnualSalaty(130));