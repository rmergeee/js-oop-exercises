// Write a JavaScript program to create a class called 'Rectangle' with properties for width 
// and height. Include two methods to calculate rectangle area and perimeter. Create an 
// instance of the 'Rectangle' class and calculate its area and perimeter. 

class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    calcPerimeter() {
        return 2 * (this.height + this.width);
    }
}

const square = new Rectangle(4, 4);

console.log(square.calcArea());
console.log(square.calcPerimeter());