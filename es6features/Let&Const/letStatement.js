/*step - 1 
 */
/*
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x);// expecte output 2;
}
console.log(x); // expected output 1
*/

/**
 * Scoping Rules
 */

// varTest
/*
function varTest(params) {
    var x = 1;
    if (params) {
        var x = 2; // same variable!
        console.log(x);// 2
    }
    console.log(x);
}
varTest(true);

*/

/*
function letTest(params){
    let x = 1;
    if (params) {
        let x = 2; // defferent variable
        console.log(x);
    }
    console.log(x); // 1
}

letTest(true);
*/
/*
// let does not create a property on the global object
var x = 'globalVariable';
let y = 'globalLet';

console.log(this.x); // globalVariable
console.log(this.y);

*/
/**
 * Emulating private members
 * 
 */

var Thing; {
    let privateScope = new WeakMap();
    console.log(typeof privateScope);
    let counter = 0;

    Thing = function () {
        this.someProperty = "foo";
        privateScope.set(this, {
            hidden: ++counter,
        });
    };

    Thing.prototype.showPublic = function () {
        return this.someProperty;
    };

    Thing.prototype.showPrivate = function () {
        return privateScope.get(this).hidden;
    };
};

console.log(typeof privateScope);

var thing = new Thing();

console.log(thing);

thing.showPublic();
thing.showPrivate();

/**
 * Temporal Dead Zone and errors with let
 */

if (x) {
    let foo;
    let foo; // SyntaxError thrown. 
}


function doSomeThing(params) {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError;
    var bar = 1;
    var foo = 2;
}

doSomeThing();


let switchValue = 1;

switch (switchValue) {
    case 0:
        let foo;
        break;
    case 1:
        let foo; // SyntaxError for redeclaration
        break;

    default:
        break;
}

/**
 * however, it's important to point out that a block nested inside a case cluse will create a now block scope lexical environment, which will not produce the redeclaration errors show above.
 */

let switchValue1 = 2;

switch (switchValue1) {
    case 0:
        {
            let fooo;
            break;
        }
    case 1:
        {
            let fooo;
            break;
        }
    default:
        break;
}

/**
 * Another example of temporal dead zone combined with lexical scoping
 */

function temporalDeadZone(params) {
    var foo = 33;
    if (params) {
        let foo = (foo + 50);
    }

}

temporalDeadZone(true);


let aa = {
    a: [1, 2, 3]
}

function goo(aa) {
    // n here is defined!
    for (let n  of aa.a) {
        console.log(n);
        
    }
}

goo(n);

/**
 * Other situations
 */
var a = 1;
var b = 2;

if( a === 1) {
    var a = 11; // this scope is global
    let b = 22; // the scope is inside the if-block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 1
