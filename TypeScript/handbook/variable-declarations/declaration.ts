function ScopingRules(shouldInitialize: boolean) {
	if (shouldInitialize) {
		var x = 10;
	}
	return x;
}

ScopingRules(true); // returns '10'
ScopingRules(false); // returns 'undefined';

/**
 * These scoping rules can cause several types of mistakes.
 * One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times:
 * 
 */

function sumMatrix(matrix: number[][]) {
	var sum = 0;
	for (var i = 0; i < matrix.length; i++) {
		var currentRow = matrix[i];
		for (var i = 0; i < currentRow.length; i++) {
			sum += currentRow[i];
		}

	}
}

/**
 * 
 */



/***** Block-scoping ****/
function letFunction(input: boolean) {
	let a = 100;

	if (input) {
		// Still okay to reference 'a'
		let b = a + 1;
		return b;

	}
	// Error: 'b' doesn't exist here 
	return b;
}


for( var i = 0; i < 10; i++ ){
	setTimeout(() => {
		console.log(i);
	}, 100 * i);
}
// for (let index = 0; index < 10; index++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 100 * i);
// }


for(var i = 0; i < 10; i ++ ) {
	// Capture the current state of 'i'
	// by invoking a function with its current value
	(function(i) {
		setTimeout(function(){
			console.log(i);
		}, 100 * i);
    })(i);
}