class newGreeter {
    greeter: string;
    constructor(message: string) {
        this.greeter = message;
    }
    greet() {
        return `Hello ${this.greeter}`;
    }
}

let greeterInstance = new newGreeter("world");

/**
 * Inheritance 
 */
class Animals{
    constructor() {}
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dogs  extends Animals {
    bark() {
        console.log(`Woof! Woof!`);
    }
}

const dogs = new Dog();
dog.bark();
dog.move();
dog.bark();
