class newGreeter {
    greeter: string;
    constructor(message: string) {
        this.greeter = message;
    }
    greet() {
        return `Hello ${this.greeter}`;
    }
}

let greeter = new newGreeter("world");

/**
 * Inheritance 
 */
class Animal  {
    constructor() {}
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog  extends Animal {
    constructor() {}
    bark() {
        console.log(`Woof! Woof!`);
    }
}

const dog = new Dog();
dog.bark();
dog.move();
dog.bark();
