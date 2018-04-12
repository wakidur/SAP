var a = 10;
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
    };
}
var g = helloWorldN();
g(); // returns '11';
// step - 3
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
;
// step - 4 
function scopingRules(shouldInitialize) {
    try {
        if (shouldInitialize) {
            var x = 122;
        }
        else {
            var x = "Condition false";
        }
        return x;
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=text.js.map