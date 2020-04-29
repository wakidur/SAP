// 1 Day 0: Hello, World.
exports.processData = inputString => {
    // This line of code prints the first line of output
    console.log("Hello, World.");

    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

// 2 Day 1: Data Types

exports.dataTypes = (integer, double, String) => {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
     // Declare second integer, double, and String variables.
     let secondInteger = 4;
     let secondDouble = 4.0;
     let secondString = "is the best place to learn and practice coding!";
    // Read and save an integer, double, and String to your variables.
    // secondInteger = parseInt(readLine())
    // secondDouble = parseFloat(readLine())
    // secondString = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(parseInt(i + parseInt(secondInteger)));

    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d + parseFloat(secondDouble)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}