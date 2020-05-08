/**
 * Challenge
 * 1
Have the function FizzBuzz(num) take the num parameter being passed and return all the numbers from 1 to num separated by spaces, but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz", and every number that is divisible by both 3 and 5 with the word "FizzBuzz". For example: if num is 16, then your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be within the range 1 - 50.
 */

function FizzBuzz(num) {
    let stringValue = "";
    if (Number.isInteger(num)) {
        // range 1 - 50
        if (num > 0 && num <= 50) {
            for (let index = 1; index <= num; index++) {
                if (index % 3 == 0 && index % 5 == 0) {
                    stringValue += "FizzBuzz ";
                } else if (index % 3 == 0) {
                    stringValue += "Fizz ";
                } else if (index % 5 == 0) {
                    stringValue += "Buzz ";
                } else if ((index % 3 != 0) || (index % 5 != 0) || (index % 3 != 0 && index % 5 != 0)) {
                    stringValue += index + " ";
                }
            }
        }
    } else {
        window.alert('Input valid number');
    }

    // code goes here  
    return stringValue;

}

// keep this function call here 
FizzBuzz(16);


/*
* Challenge
02
Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
*/

function PrimeTime(number) {
    let trueValue = new Boolean(true);
    let falseValue = new Boolean(false);
    if (Number.isInteger(number)) {
        if (number === 1) {
            return falseValue.toString();
        } else if (number === 2) {
            return trueValue.toString();
        } else {
            for (var x = 2; x < number; x++) {
                if (number % x === 0) {
                    return falseValue.toString();
                }
            }
            return trueValue.toString();
        }
    } else {
        window.alert('This is not valid number')
    }

}

PrimeTime(37)

function test_prime(n) {

    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}


/**
 *  Challenge 
 * 03
Have the function LRUCache(strArr) take the array of characters stored in strArr, which will contain characters ranging from A to Z in some arbitrary order, and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm implemented. For example: if strArr is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the following steps are taken:

(1) A does not exist in the cache, so access it and store it in the cache.
(2) B does not exist in the cache, so access it and store it in the cache as well. So far the cache contains: ["A", "B"].
(3) Same goes for C, so the cache is now: ["A", "B", "C"].
(4) Same goes for D, so the cache is now: ["A", "B", "C", "D"].
(5) Now A is accessed again, but it exists in the cache already so it is brought to the front: ["B", "C", "D", "A"].
(6) E does not exist in the cache, so access it and store it in the cache: ["B", "C", "D", "A", "E"].
(7) D is accessed again so it is brought to the front: ["B", "C", "A", "E", "D"].
(8) Z does not exist in the cache so add it to the front and remove the least recently used element: ["C", "A", "E", "D", "Z"].

Now the caching steps have been completed and your program should return the order of the cache with the elements joined into a string, separated by a hyphen. Therefore, for the example above your program should return C-A-E-D-Z.

*/
function LRUCache(strArr) {
    var elementsCache = [];
    strArr.forEach(value => {
        if (!elementsCache.includes(value)) {
            if (elementsCache.push(value) > 5) {
                elementsCache.shift();
            }
        } else {
            elementsCache.splice(elementsCache.findIndex(cacheVal => value === cacheVal), 1);
            elementsCache.push(value);
        }
    });

    return elementsCache.join('-');

}

var arrayValue = ["A", "B", "C", "D", "E", "D", "Q", "Z", "C"]
LRUCache(arrayValue);


/*
* 04
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
*/

function MinWindowSubstring(strArr){
    var min = null;
    var n = strArr[0];
    var k = strArr[1];
    for (var i = 0; i < n.length; i++) {
      for (var j = i + 1; j <= n.length; j++) {
        var sub = n.slice(i, j);
        if(checkK(sub, k)){
          if (min === null || sub.length < min.length){
            min = sub;
          }
        }
      }
    }
    return min;
  }
  
  function checkK(sub, k){
    var h = k.split('');
    for (var i = 0; i < sub.length; i++) {
      var char = sub[i];
      var index = h.indexOf(char);
      if(index > -1){
        h.splice(index, 1);
      }
    }
    if(h.length === 0){
      return true;
    } else {
      return false;
    }
  }