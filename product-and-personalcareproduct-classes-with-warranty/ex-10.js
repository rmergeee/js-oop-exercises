// Write a JavaScript program that creates a class called Product with properties for product 
// ID, name, and price. Include a method to calculate the total price by multiplying the price 
// by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product 
// class and adds an additional property for the warranty period. Override the total price calculation 
// method to include the warranty period. Create an instance of the PersonalCareProduct class 
// and calculate its total price. 

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    totalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, date) {
        super(id, name, price);
        this.date = new Date(date);
    }

    totalPrice(quantity) {
        console.log(super.totalPrice(quantity) + " with warranty period - " + this.date);
    }
}

const banan = new PersonalCareProduct("12331255", "Banan", 2, "2025, 8, 26");

banan.totalPrice(2);