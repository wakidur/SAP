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

// Public 
class AnimalPublicClass {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    /**
     * move
     */
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// private
class AnimalPrivateClass {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
/**
 * new AnimalPrivateClass('Cat').name; // Property 'name' is private and only accessible within class 'AnimalPrivateClass'.
 */

class AnimalPribateCompatible {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhinos extends AnimalPribateCompatible {
    constructor() {
        super('Rhino');
    }
}

class Employeer {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animalPribateCompatible = new AnimalPribateCompatible('Goat');
let rhinos = new Rhinos();

let employees = new Employeer('Bob');

/**
 * animalPribateCompatible = rhinos;
 * AnimalPribateCompatible = employees; // Cannot assign to 'AnimalPribateCompatible' because it is not a variable.
 */

// protected 

class PersonProtectedClass {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class EmployeeProtected extends PersonProtectedClass {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    /**
     * getElevatorPitch
     */
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
/**
 * console.log(howard.name); Property 'name' is protected and only accessible within class 'PersonProtectedClass' and its subclasses.
 */

class personConstructorProtected {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee can extend Preson 
class EmployeeClassProtector extends  personConstructorProtected {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    /**
     * getElevatorPitch
     */
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howards = new EmployeeClassProtector("Howard", "Sales");
/**
 * let johns = new personConstructorProtected('John'); 
 * // Constructor of class 'personConstructorProtected' is protected and only accessible within the class declaration.
 */


/**
 * Readonly modifier
 */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.


