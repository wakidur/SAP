/**
 * Object.defineProperty();
 * The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object
 * 
 */


/**
 * Syntax
 * Object.defineProperty(obj, prop, descriptor);

 */
Object.defineProperty(Object.prototype, 'newProperty' {
    value: ,
    configurable: ,
    enumerable: ,
    writable: ,
    get: ,
    set: ,
})

// using __proto__
var obj = {};
var descriptor = Object.create(null); // no inherited properties
// not enumbeable, not cofigurable, not writable as defaults

descriptor.value = 'static';

Object.defineProperty(obj, 'key', descriptor);

// being explicit

Object.defineProperty(obj, 'key' {
    enumerable: false,
    configurable: false,
    writable: fa
})

Object.defineProperty(Object.prototype, 'setInsertTag', {
    value: function () {
        if (typeof this.tag !== "undefined") {
            this.tag = 4;
            return this.tag;
        } else {
            return undefined;
        }
    },
    writable: true,
    configurable: true,
    enumerable: false,
});

Object.defineProperty(Object.prototype, 'setModifyTag', {
    value: function() {
        if( typeof this.tag !== "undefined" && (this.tag === 0 || this.tag === 8)){
            this.tag = 16;
            return this.tag;
        } else {
            return undefined;

        }
    },
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(Object.prototype , 'setDeleteTag', {
    value: function(){
        if(typeof this.tag !== "undefined"){
            this.tag = 8;
            return this.tag;
        } else {
            return undefined;
        }
    }
});
Object.defineProperty(Object.prototype, 'isTagChanged' , {
    value: function(){
        if(typeof this.tag !== "undefined" ){
            if(this.tag === 0) {
                return false;
            } else {
                return true;
            }
        }
        return undefined;
    },
    writable: true,
    configurable: true;
    enumerable: false
});

//create a constructor function;
function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    };
  }
 
Person.prototype.farewell = farewell;
Person.prototype.fistLatterUppercase = fistLatterUppercase;


 
 function farewell(){
    console.log(this.name.first + ' has left the building. Bye for now!');
 }
 function fistLatterUppercase(){
     console.log(this.name.first.charAt(0).toUpperCase() + this.name.first.slice(1) + " " + this.name.last);
     
 }


 var myObject = {};
 Object.defineProperty(myObject, 'name' ,{
    
 })


 