/**
 * Declaring a variable in JavaScript has always tradintilly been done the var keyword.
 */
var a = 10;

// We can also declare a variable inside of a function
function appreciaMess() {
    var message = 'Well done';
    return message;
}
// step-1
function helloWorld() {
    var message = "Hello, world!";
    return message;
}

// step-2
function helloWorldN() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = helloWorldN();
    g();// returns '11';


// step - 3

function f() {
    var a = 1;
        a = 2;
    var b = g();
        a = 3;
    return  b;

    function g() {
        return a;
    }
};

// step - 4 

function scopingRules( shouldInitialize: boolean) {
    
    try {
        if (shouldInitialize) {
            var x = 122;
        } else {
            var x = "Condition false";
        }
        return x;
    } catch (error) {
        throw error;
    }
}


// Step - 5 
function sumMatrix( matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++ ) {
        var currentRow = matrix[i];

        for (var i = 0; i < currentRow.length; i++) {
            sum  += currentRow[i];  
        }
    }
    return sum;
}


// Step - 7;

for ( var i = 0; i < 10; i++ ) {
  setTimeout(function() { 
      console.log(i)
    }, 100 * i);
}