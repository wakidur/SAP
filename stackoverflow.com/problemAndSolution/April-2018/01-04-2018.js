Object.defineProperty(Array.prototype, 'test', {
    configurable: true,
    enumerable: false,
    get: function() {
      return {
        func: function() {
          console.log(this);
          return this;
        }.bind(this)
      };
    }
  });

  [].test.func();


  Object.defineProperty(Array.prototype, 'chainFunction', {
    value: function() {
      console.log(this);
      return this;
    },
    writable: true,
    configurable: true,
    enumerable: false,
  });

  [].chainFunction();


  