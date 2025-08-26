// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the 
// area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and 
// override the area calculation method. Create an instance of the 'Circle' class and calculate 
// its area. Similarly, do the same for the 'Triangle' class. 

class Shape {

    calcArea() {
        throw new Error("Method 'calculateArea()' must be overridden in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.pi = Math.PI;
    }

    calcArea() {
        return this.pi * Math.pow(this.radius, 2);
    }
}

class Triangle extends Shape {
    constructor(h, a) {
        super();
        this.h = h;
        this.a = a;
    }

    calcArea() {
        return 0.5 * this.a * this.h;
    }
}

const circle = new Circle(4);
console.log(circle.calcArea());
const triangle = new Triangle(4, 5);
console.log(triangle.calcArea());