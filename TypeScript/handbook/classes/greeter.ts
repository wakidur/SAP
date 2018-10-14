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

/**
 * More complex example
 */
class AnimalSecond {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snaks extends AnimalSecond {
    constructor(name: string) {
        super(name); 
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horses extends AnimalSecond {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping....");
        super.move(distanceInMeters);
    }
}

let sams = new Snaks("Sammy the Python");
let toms: AnimalSecond = new Horses('Tommy the Palomino');

sam.move();
toms.move(35);

/**
 * Public, private, and protected modifiers
 */
