// 16-05-2018
class Greeter {
    greeting: string;
    constructor(message: string) {
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
    move(distanceInMeters: number = 0) {
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
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal3 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal3 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal3 = new Horse("Tommy the palomino");

/**
 * Public, private, and protected modifiers
 */

class AnimalPublic {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }

    public move(destanceInMeters: number) {
        console.log(`${this.name} moved ${destanceInMeters}m.`);
    }
}

class AnimalPrivate{
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

new AnimalPrivate("Cat").name; // Error: 'name' is private; 


class Animal4 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal4 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal4("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error 'Animal4' and 'Employee' are not compatible 