// Write a JavaScript program to create a class called "Person" with properties for name, 
// age and country. Include a method to display the person's details. Create two 
// instances of the 'Person' class and display their details. 

class Person {

    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayPersonInfo() {
        console.log(
            `Name: ${this.name} | Age: ${this.age} | Country: ${this.country}
            `)
    }
}

const person1 = new Person("Vi", 24, "USA");
const person2 = new Person("Ville Valo", 47, "Canada");

person1.displayPersonInfo();
person2.displayPersonInfo();