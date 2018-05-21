// 16-05-2018
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('world');
console.log(`Greeter Class output: ${greeter}`);
// Inheritance feature
class Animal {
    constructor() {}
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`Woof! Woof!`);
    }
}
const dog = new Dog();
console.log(`Dog Class: ${dog.bark()}`);
console.log(`Dog class inheritance Animal Class : ${dog.move(100)}`);
console.log(`Dog Class: ${dog.bark()}`);
// Section 3
class Animal3 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal3 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal3 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the palomino");
//# sourceMappingURL=classes.js.map