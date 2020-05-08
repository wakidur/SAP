// step-1
const numberValue = 455;

try {
    numberValue = 99;
} catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const 'number'
    // Note - error message will vary depending on browser
}

console.log( numberValue);

/*
 *
 *  Examples
 * 
 */
// NOTE : Constants can be declared with uppercase or lowercase, 
// but a common convention  is to use all-uppercase letters.

// Define MY_FAV as a constant and give it the value 7
const MY_SAVEN = 7;

// This will throw an error - Uncaught TypeError: Assignment to constant variable
    MY_SAVEN = 2;

// MY_SEVEN is 7
console.log('My favorite number is: ' + MY_SAVEN);;

// Trying to redeclare a constant throws an error
const MY_SAVEN = 200;

// The number MY_SEVEN is reserved for constant about, so this will fail too

var MY_SAVEN = 200;

// this throws an error too
let MY_SAVEN = 200;

//it's important to note the nature of block scoping

if (MY_SAVEN === 7) {
    //this is fine and creates a block scoped MY_SEVEN variable
    // (Works equally well with let to declare a block scoped non const variables)

    let MY_SAVEN = 20;

    // MY_SEVEN is now 20
    console.log('my favorite number is ' + MY_SAVEN);

    // This gets hoisted into the globale context and throws an error
    var MY_SAVEN = 20;
}

// MY_SEVEN is still 7
console.log('my favorite  number is' + MY_SAVEN);

//throws an error
const FOO;

//const also works on objects
const MY_OBJECT = {
    'key': 'value'
};
// Attempting to overwrite the object throws an error
MY_OBJECT = {
    'otherKey': 'value'
};

// However, object keys are not protected, 
// so the following statement is executed withour problem
MY_OBJECT.key = "Other value";

// The same applies to arrays 
const MY_ARRAY = [];

// It's Possible to push intems into the array

MY_ARRAY.puth('A');
// however, assigning a new array to the variable throws an error 
MY_ARRAY = ['B'];
