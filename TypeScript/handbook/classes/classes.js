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
    constructor() {
    }
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
//# sourceMappingURL=classes.js.map