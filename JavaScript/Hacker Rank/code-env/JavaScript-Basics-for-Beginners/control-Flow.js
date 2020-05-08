exports.controlFlow = () => {

    // 1 
    // Hour
    // If hour is between 6am and 12pm : Good morning!
    // If it is between 12pm and 6pm: Good afternoon!
    // Otherwise: Good evening!
    let hour = 20;
    if (hour >= 6 && hour < 12)
        console.log('Good morning');
    else if (hour >= 12 && hour < 18)
        console.log('Good afternoon');
    else
        console.log('Good evening');

    // 2
    let role;
    switch (role) {
        case 'guest':
            console.log('Guest User');
            break;
        case 'moderator':
            console.log('Moderator User');
            break;

        default:
            console.log('Unknown User');
            break;
    }

    if (role === 'guest') console.log('Guest User');
    else if (role === 'moderator') console.log('Moderator User');
    else console.log('Unknown User');


    // 3
    for (let i = 1; i <= 5; i++) {
        if (i % 2 !== 0) console.log(`Odd ${i}`);
        else if (i % 2 === 0) console.log(`Even ${i}`);

    }
    // Loop reverse order
    for (let i = 10; i >= 5; i--) {
        if (i % 2 !== 0) console.log(`Odd ${i}`);
        else if (i % 2 === 0) console.log(`Even ${i}`);
    }

    // 4
    let j = 0;
    while (j <= 15) {
        if (j % 2 !== 0) console.log(`Odd ${j}`);
        else if (j % 2 === 0) console.log(`Even ${j}`);
        j++
    }

    // 5
    // for-in (iterate over object )
    const person = {
        name: "Mosh",
        age: 30
    }

    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            const element = person[key];
           // console.log(element);

        }
    }

    // 6
    // for-of (iterate over array )
    const colors = ['red', 'green', 'blue'];
    for (const iterator of colors) {
        console.log(iterator)
    }

    // 7
    let k = 0;
    while (k <= 10) {
        // if (k === 5) break;
        if (k % 2 === 0) {
            k++;
            continue;
        }

        console.log(k);
        k++;
    }

    /**
     * 8
     * Exercise 1
     * Write a function that takes two numbers and return the maximum of the two
     */

    function maxNumberBetweenTwo(...nums) {
        const [a, b] = nums;
        return (a > b) ? a : b;
    }

    maxNumberBetweenTwo(30, 40);

    /**
     * 9
     * Exercise 2
     * 
     * FizzBuss Algorithms
     * Divisible by 3 => Fizz
     * Divisible by 5 => Buzz
     * Divisible by both 3 and 5 => FizzBuzz
     * Not divisible by 3 or 5 => input
     * Not a number => "Not a number"
     */
    // console.log(fizzBuzz(0));
    function fizzBuzz(num) {
        if (typeof num !== 'number')
            return 'Not a number';
        if (num === 0)
            return num;
        if ((num % 3 === 0) && (num % 5 === 0))
            return 'FizzBuzz';
        if (num % 3 === 0)
            return 'Fizz';
        if (num % 5 === 0)
            return 'Buzz';
        return num;

    }
    /*
     * Complete the 'fizzBuzz' function below.
     *
     * The function accepts INTEGER n as parameter.
     * n = 15
     */

    function fizzBuzz(n) {
        // Write your code here
        for (let i = 1; i <= n; i++) {
            if (i === 0)
                console.log(i);
            else if ((i % 3 == 0) && (i % 5 == 0))
                console.log("FizzBuzz");
            else if (i % 3 == 0)
                console.log("Fizz");
            else if (i % 5 == 0)
                console.log("Buzz");
            else
                console.log(i);
        }

    }



    /**
     * 10
     * Exercise 3
     * Speed Limit = 70 
     * 5 Kilomiter -> 1 point
     * Math.floor(1.3)
     * 12 Point -> Suspended License
     
     */
    // checkSpeed(80);

    function checkSpeed(speed) {
        const speedLimit = 70;
        const kmPerPoint = 5;
        const pointsLimit = 12;
        // speedLimit + kmPerPoint = 70 + 5 = 75 ||| speed 74 < 75 to avoid 0 points calculation for this function 
        if (parseInt(speed) < parseInt(speedLimit + kmPerPoint))
            console.log('OK');
        else {
            const points = Math.floor((parseInt(speed) - speedLimit) / kmPerPoint);
            if (points >= pointsLimit)
                console.log(`License suspende because of points  limit ${points}`);
            else
                console.log(`Points ${points}`);

        }
    }

    /**
    * 11
    * Exercise 4
    * Even and Odd number 
    
    */

    // showNumbers(12);

    function showNumbers(limit) {
        let i = 1;
        while (i <= limit) {
            const message = (i % 2 === 0) ? "Even" : "Odd";
            console.log(i, message);
            i++
        }
    }

    /**
    * 12
    * Exercise 5
    * Truthy and Falsy value 
    
    */

    //console.log('Truthy', countTruthy([0, null, undefined, '', 3, 2]));

    function countTruthy(array) {
        let count = 0;
        for (let item of array)
            if (item)
                count++;
        return count;

    }

    /**
     * 13
     * Exercise 6
     * String Properties    
     */
    // console.log(showProperties(movie));

    const movie = {
        title: "Toy",
        releaseYear: 2018,
        rating: 4.4,
        director: 'Bob'
    }

    function showProperties(object) {
        // Lexical declaration cannot appear in a single-statement context
        for (const key in object)
            if (object.hasOwnProperty(key))
                if (typeof object[key] === 'string')
                    console.log(key, object[key]);
    }

    /**
     * 14
     * Exercise 7
     * Sum of Multiples 3 and 5 
     * Multiples of 3: 3, 6, 9
     * Multiple of 5: 5, 10; 
     */

    // console.log(sumOfMultiples(10));

    function sumOfMultiples(n) {
        let sum = 0;

        for (let i = 0; i <= n; i++)
            if (i % 3 === 0 || i % 5 === 0)
                sum += i;

        return sum;
    }


    /**
     * 15
     * Exercise 8
     * Calculate Grade  
     *
     * Average of Totla number
     * 
     * 0-59: F 
     * 60-69: D 
     * 70-79: C 
     * 80-89: B 
     * 90-100: A 
     */

    // console.log(calculateGrade([80, 90, 70]));

    function calculateGrade(array) {
        // Calculate Average 
        const average = calculateAverage(array);
        // simplify code 
        if (average < 60) return "F"
        if (average < 70) return "D"
        if (average < 80) return "C"
        if (average < 90) return "B"
        return "A"

        function calculateAverage(array) {
            let sum = 0;
            for (let value of array)
                sum += value;

            return sum / array.length;
        }
    }

    /**
     * 16
     * Exercise 9
     * 
     * Show Stars
     */

    console.log(showStarsLeftToRightUp(10));
    console.log(showStarsLeftToRightDown(10));
    console.log(showStarsRightToLeftUp(10));
    console.log(showStarsRightToLeftDown(10));

    function showStarsLeftToRightUp(rows) {
        for (let row = 1; row <= rows; row++) {
            let pattern = '';
            for (let i = 0; i < row; i++)
                pattern += '*';
            console.log(pattern);
        }
    }

    function showStarsLeftToRightDown(rows) {
        for (let row = rows; row >= 1; row--) {
            let pattern = '';
            for (let i = 0; i < row; i++)
                pattern += '*';
            console.log(pattern);
        }
    }

    function showStarsRightToLeftUp(rows) {
        for (let row = 0; row < rows; row++) {
            let pattern = '';
            for (let i = 0; i < rows; i++) {
                if (i < rows - row - 1) pattern += ' ';
                else pattern += '*'
            }
            console.log(pattern);
        }
    }

    function showStarsRightToLeftDown(rows) {
        for (let row = rows; row > 0; row--) {
            let pattern = '';
            for (let i = 0; i < rows; i++) {
                if (i < rows - row)
                    pattern += ' ';
                else
                    pattern += '*'
            }
            console.log(pattern);
        }
    }


    /**
     * 17
     * Exercise 10
     * 
     * Show Primes
     * 
     * Prime (Whose factors are only 1 and itself)
     * Composite
     * 12 = 1, 2, 3 4, 6, 12
     * Can be divided eventy by its factors
     * 
     * 11 = 1, 11
     * 13 = 1, 13
     */

    console.log(showPrimes(20));

    function showPrimes(limit) {
        for (let number = 2; number <= limit; number++)
            if (isPrime(number)) console.log(number);

        // Check is prime logic
        function isPrime(number) {
            for (let factor = 2; factor < number; factor++)
                if (number % factor === 0)
                    return false;
            return true;
        }
    }











}