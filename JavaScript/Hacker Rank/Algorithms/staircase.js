/**
 * Sun Apr 19 2020 00:39:20 GMT+0600 (Bangladesh Standard Time)
 * 
 * Consider a staircase of size n = 4
 *    # 
 *   ##
 *   ###
 *  ####
 * 
 * Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
 *  Write a program that prints a staircase of size .
 * 
 * 
 * Function Description
 * Complete the staircase function in the editor below. It should print a staircase as described above.
 * staircase has the following parameter(s): n: an integer
 */

// Complete the staircase function below.
function staircase(n) {
    const length = parseInt(n);
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (j < n - i - 1) {
                console.log('')
            } else {
                console.log('#')
            }
        }
        console.log(`\n`)
    }

}
staircase(3)

function staircase(n) {
    let mainContainer = "";
    const length = parseInt(n);
    for (let i = 0; i < length; i++) {
        let contain = '';
        for (let j = 0; j < length; j++) {
            if (j < n - i - 1) {
                contain += " "
            } else {
                contain += "#"
            }
        }
        console.log(contain, '\n');
    }

}
staircase(3)


// Complete the staircase function below.
function staircase(n) {
    let mainContain = "";
    const length = parseInt(n);
    for (let i = 0; i < length; i++) {
        let contain = '';
        for (let j = 0; j < length; j++) {
            if (j < n - i - 1) {
                contain += " "
            } else {
                contain += "#"
            }
        }
        mainContain += `${contain}\n`;
    }
    console.log(mainContain);

}

staircase(3)