/**
 * Object.defineProperty();
 * The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object
 * 
 */

192.168.11.67
 /**
  * Syntax
  * Object.defineProperty(obj, prop, descriptor);

  */
  Object.defineProperty(Object.prototype, 'newProperty' {
      value: ,
      configurable:,
      enumerable: ,
      writable : ,
      get: ,
      set: ,
  })

  // using __proto__
  var obj = {};
  var descriptor = Object.create(null); // no inherited properties
  // not enumbeable, not cofigurable, not writable as defaults

  descriptor.value = 'static' ;

  Object.defineProperty(obj, 'key' , descriptor);

  // being explicit

  Object.defineProperty(obj, 'key' {
      enumerable: false,
      configurable: false,
      writable: fa
  })