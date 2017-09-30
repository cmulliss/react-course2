
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old. `
    }
}
//Student is just a person with modufications

class Student extends Person {
    constructor(name, age, major) {
        // calling the parent constructor function with super
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}
class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += ` Hi! I am ${this.name} and I am visiting from ${this.location} `;
        }
        return greeting;
    }
}
const me = new Traveller("Motley Penguin", 26, 'Somerset');
console.log(me.getGreeting());

const me2 = new Traveller();
console.log(me2.getGreeting());

/* Truthy
n JavaScript, a truthy value is a value that is considered  true 
when evaluated in a Boolean context. All values are truthy unless 
they are defined as falsy (i.e.,  except for 
    false, 0, "", null, undefined, and NaN).
Falsy
A falsy value is a value that translates to false when evaluated 
in a Boolean context. */
