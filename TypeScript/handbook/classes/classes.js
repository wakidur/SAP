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
// 16-05-2018
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log("Greeter Class output: " + greeter);
// Inheritance feature
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log("Dog Class: " + dog.bark());
console.log("Dog class inheritance Animal Class : " + dog.move(100));
console.log("Dog Class: " + dog.bark());
// Section 3
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal3));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal3));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the palomino");
/**
 * Public, private, and protected modifiers
 */
var AnimalPublic = /** @class */ (function () {
    function AnimalPublic(theName) {
        this.name = theName;
    }
    AnimalPublic.prototype.move = function (destanceInMeters) {
        console.log(this.name + " moved " + destanceInMeters + "m.");
    };
    return AnimalPublic;
}());
var AnimalPrivate = /** @class */ (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
new AnimalPrivate("Cat").name; // Error: 'name' is private; 
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal4));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal4("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
animal = employee; // Error 'Animal4' and 'Employee' are not compatible 
//# sourceMappingURL=classes.js.map