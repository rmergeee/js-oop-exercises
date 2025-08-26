// Write a JavaScript program that creates a class `Book` with properties for title, author, 
// and publication year. Include a method to display book details. Create a subclass called 
// 'Ebook' that inherits from the 'Book' class and includes an additional property for book 
// price. Override the display method to include the book price. Create an instance of the 
// 'Ebook' class and display its details. 

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayDetails() {
        console.log(this.title);
        console.log(this.author);
        console.log(this.year);
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayDetails() {
        super.displayDetails();
        console.log(this.price);
    }
}

const ebook = new Ebook("The name of wind", "Patric Rotfuss", 2000, 30);

ebook.displayDetails();