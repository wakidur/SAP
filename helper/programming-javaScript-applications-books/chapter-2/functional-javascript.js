// Recursion example


function factorial(n, accumulator) {
    if (n === 0) {
        return accumulator;
    }
    return factorial(n - 1, n * accumulator);
}

factorial(5, 1);

//---------------
let test = {
    name: "John",
    age: 28,
    scores: [89, 72, 96, 55, 66]
}

function getType(objectParm) {
    return Object.prototype.toString.call(objectParm).match(/.* (.*)\]/)[1];
    // return {}.toString.call(obj).match(/.* (.*)\]/)[1];
}

function stringify(obj) {
    if (getType(obj) === "Function") {
        return null;
    }
    if (getType(obj) === "Undefined") {
        return null;
    }
    if (getType(obj) === "Null") {
        return null;
    }
    if (getType(obj) === "Number") {
        return obj;
    }
    if (getType(obj) === "String") {
        return '"' + obj + '"';
    }
    if (getType(obj) === "Array") {
        return '[' + obj.map(function(o) {
            return stringify(o);
        }).join(",") + ']'
    }

    if (getType(obj) === "Object") {
        let result = [];
        Object.keys(obj).forEach((key) => {
            let values = stringify(obj[key]);
            if (values !== null) {
                result.push('"' + key + '":' + val)
            }
        })
        return "{" + result.join(",") + "}"
    }
}

stringify(test);



function asyncSerical(params) {
    let args = Array.prototype.slice.call(arguments);

    function next(params) {
        let func = args.shift();
        if (func) {
            func(next);
        }
    }
    next();
}