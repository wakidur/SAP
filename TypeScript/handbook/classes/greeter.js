var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var newGreeter = /** @class */ (function () {
    function newGreeter(message) {
        this.greeter = message;
    }
    newGreeter.prototype.greet = function () {
        return "Hello " + this.greeter;
    };
    return newGreeter;
}());
var greeterInstance = new newGreeter("world");
/**
 * Inheritance
 */
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogs.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dogs;
}(Animals));
var dogs = new Dog();
dog.bark();
dog.move();
dog.bark();
/**
 * More complex example
 */
var AnimalSecond = /** @class */ (function () {
    function AnimalSecond(theName) {
        this.name = theName;
    }
    AnimalSecond.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalSecond;
}());
var Snaks = /** @class */ (function (_super) {
    __extends(Snaks, _super);
    function Snaks(name) {
        return _super.call(this, name) || this;
    }
    Snaks.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snaks;
}(AnimalSecond));
var Horses = /** @class */ (function (_super) {
    __extends(Horses, _super);
    function Horses(name) {
        return _super.call(this, name) || this;
    }
    Horses.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping....");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horses;
}(AnimalSecond));
var sams = new Snaks("Sammy the Python");
var toms = new Horses('Tommy the Palomino');
sam.move();
toms.move(35);
/**
 * Public, private, and protected modifiers
 */
// Public 
var AnimalPublicClass = /** @class */ (function () {
    function AnimalPublicClass(theName) {
        this.name = theName;
    }
    /**
     * move
     */
    AnimalPublicClass.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalPublicClass;
}());
// private
var AnimalPrivateClass = /** @class */ (function () {
    function AnimalPrivateClass(theName) {
        this.name = theName;
    }
    return AnimalPrivateClass;
}());
/**
 * new AnimalPrivateClass('Cat').name; // Property 'name' is private and only accessible within class 'AnimalPrivateClass'.
 */
var AnimalPribateCompatible = /** @class */ (function () {
    function AnimalPribateCompatible(theName) {
        this.name = theName;
    }
    return AnimalPribateCompatible;
}());
var Rhinos = /** @class */ (function (_super) {
    __extends(Rhinos, _super);
    function Rhinos() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhinos;
}(AnimalPribateCompatible));
var Employeer = /** @class */ (function () {
    function Employeer(theName) {
        this.name = theName;
    }
    return Employeer;
}());
var animalPribateCompatible = new AnimalPribateCompatible('Goat');
var rhinos = new Rhinos();
var employees = new Employeer('Bob');
/**
 * animalPribateCompatible = rhinos;
 * AnimalPribateCompatible = employees; // Cannot assign to 'AnimalPribateCompatible' because it is not a variable.
 */
// protected 
var PersonProtectedClass = /** @class */ (function () {
    function PersonProtectedClass(name) {
        this.name = name;
    }
    return PersonProtectedClass;
}());
var EmployeeProtected = /** @class */ (function (_super) {
    __extends(EmployeeProtected, _super);
    function EmployeeProtected(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    /**
     * getElevatorPitch
     */
    EmployeeProtected.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeProtected;
}(PersonProtectedClass));
var howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
/**
 * console.log(howard.name); Property 'name' is protected and only accessible within class 'PersonProtectedClass' and its subclasses.
 */
var personConstructorProtected = /** @class */ (function () {
    function personConstructorProtected(theName) {
        this.name = theName;
    }
    return personConstructorProtected;
}());
// Employee can extend Preson 
var EmployeeClassProtector = /** @class */ (function (_super) {
    __extends(EmployeeClassProtector, _super);
    function EmployeeClassProtector(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    /**
     * getElevatorPitch
     */
    EmployeeClassProtector.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeClassProtector;
}(personConstructorProtected));
var howards = new EmployeeClassProtector("Howard", "Sales");
/**
 * let johns = new personConstructorProtected('John');
 * // Constructor of class 'personConstructorProtected' is protected and only accessible within the class declaration.
 */
/**
 * Readonly modifier
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
/**
 * Accessors
 */
var EmployeeAccessors = /** @class */ (function () {
    function EmployeeAccessors() {
    }
    return EmployeeAccessors;
}());
var empAccessors = new EmployeeAccessors();
empAccessors.fullName = "Bob Smith";
if (empAccessors.fullName) {
    console.log(empAccessors.fullName);
}
var passcode = 'secret passcode';
var EmployeeGetSet = /** @class */ (function () {
    function EmployeeGetSet() {
    }
    Object.defineProperty(EmployeeGetSet.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorezed update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeGetSet;
}());
var employeeGetSet = new EmployeeGetSet();
employeeGetSet.fullName = "Bob Smith";
if (employeeGetSet.fullName) {
    console.log(employeeGetSet.fullName);
}
/**
 * Static Properties
 */
var GridStaticProperties = /** @class */ (function () {
    function GridStaticProperties(scale) {
        this.scale = scale;
    }
    GridStaticProperties.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - GridStaticProperties.origin.x);
        var yDist = (point.y - GridStaticProperties.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    GridStaticProperties.origin = {
        x: 0,
        y: 0
    };
    return GridStaticProperties;
}());
var grid1 = new GridStaticProperties(1.0);
var grid2 = new GridStaticProperties(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//# sourceMappingURL=greeter.js.map