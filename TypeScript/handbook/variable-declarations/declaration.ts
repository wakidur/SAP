function f( shouldInitialize: boolean ) {
	if( shouldInitialize ) {
		var x = 10;
	}
	return x;
}

f(true); // returns '10'
f(false); // returns 'undefined';


/***** Block-scoping ****/
function letFunction(input: boolean){
	let a = 100;
	
	if(input){
		// Still okay to reference 'a'
		let b = a + 1;
		return b;
		
	}
	// Error: 'b' doesn't exist here 
	return b;
}