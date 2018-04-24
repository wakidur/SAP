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