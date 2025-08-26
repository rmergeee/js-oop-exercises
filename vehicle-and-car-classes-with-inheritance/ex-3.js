// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, 
// model, and year. Include a method to display vehicle details. Create a subclass called 
// 'Car' that inherits from the 'Vehicle' class and includes an additional property for the 
// number of doors. Override the display method to include the number of doors. 

class Vehicle {
    constructor(vahicleMake, model, year) {
        this.vahicleMake = vahicleMake;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(this.vahicleMake);
        console.log(this.model);
        console.log(this.year);
    }
}

class Car extends Vehicle {
    constructor(vahicleMake, model, year, numbersOfDoors) {
        super(vahicleMake, model, year);
        this.numbersOfDoors = numbersOfDoors;
    }

    displayDetails() {
        super.displayDetails();
        console.log(this.numbersOfDoors);
    }
}

const bmw = new Car("BMW", "M5", 1999, 4);

bmw.displayDetails();