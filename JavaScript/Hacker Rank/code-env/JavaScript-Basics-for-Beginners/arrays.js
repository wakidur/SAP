exports.arrays = () => {
    console.log(" ................Arrays...............");

    /**
     * 1: Introduction
     * Adding new Element 
     * Finding element 
     * Removeing Element
     * Splitting Array 
     * Combining arrays
     */

    /**
     * 2: Adding Elements
     * 
     */
    const numbers2 = [3, 4];
    // End 
    numbers2.push(5, 6);
    // Beginning
    numbers2.unshift(1, 2);
    // Middle
    numbers2.splice(2, 0, "wakid", 'Munni');


    console.log(numbers2);

    /**
     * 3: Finding Element
     */
    const numbers3 = [1, 2, 3, 1, 4];
    console.log(numbers3.indexOf(1));
    console.log(numbers3.lastIndexOf(1));

    console.log(numbers3.indexOf(1) !== -1);
    console.log(numbers3.includes(3));

    /**
     * 4: Finding Element && 5: Arrow Function
     */

    const courses4 = [{
            id: 1,
            name: "a"
        },
        {
            id: 2,
            name: 'b'
        }
    ]

    const course4 = courses4.find(item => {
        return item.name === 'aa'
    });
    const courseIndex4 = courses4.findIndex(item => {
        return item.name === 'd'
    });
    console.log(course4);
    console.log(courseIndex4);

    /**
     * 6: Removing Elements
     */

    const numbers6 = [1, 2, 3, 4, 5];
    // End 
    const last = numbers6.pop();
    console.log(last);
    // Beginning 
    const first = numbers6.shift();
    console.log(first);

    // Middle 
    numbers6.splice(2, 1);
    console.log(numbers6);

    /**
     * 7: Emptying an Array
     */
    let numbers7 = [1, 2, 3, 4, 5];
    let another7 = numbers7;

    // Solution 1
    numbers7 = []; // but numbers7 raference are available

    // Solution 2 ( best)
    numbers7.length = 0;

    // Solution 3 
    numbers7.splice(0, numbers7.length);

    // Solution 4 
    while (numbers7.length > 0)
        numbers7.pop()




    console.log('number7', numbers7);
    console.log("7", another7);


    /**
     * 8: Combining and Slicing
     */

    const firstObj8 = [{
        id: 1,
        name: 'a'
    }];
    const first8 = [1, 2, 3, 4];
    const second8 = [4, 5, 6, 7, 8];

    const combined = first8.concat(second8);
    // Copy array
    const slice8 = combined.slice();

    console.log(combined);
    console.log(slice8);

    /**
     * 9: The Spread Operator
     * 
     */
    const combinedWithSpread = [...first8, ...second8];
    // Copy 
    const copyArray = [...combinedWithSpread];
    console.log(combinedWithSpread);
    console.log(copyArray);

    /**
     * 10: Iterating an Array 
     * 
     */
    const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8];

    // For of loop
    for (const number of numbers10)
        console.log(number);

    // forEach loop
    numbers10.forEach((element, index) => console.log(index, element));


    /**
     * 11. Joining Arrays
     * 
     */

    const numJoin = [1, 2, 3, 4];
    const joinedNumber = numJoin.join(',');
    console.log(joinedNumber);

    const messageJoin = "This is my first message";
    const parts = messageJoin.toLowerCase().split(' ');
    console.log(parts);

    const combinedJoin = parts.join('-');
    console.log(combinedJoin);

    /**
     * 12. Sorting Arrays
     * 
     */

    const numSorting = [2, 3, 4, 5, 8, 1];
    numSorting.sort();
    console.log(numSorting);

    numSorting.reverse();
    console.log(numSorting);

    const coursesSort = [{
            id: 1,
            name: 'Node.js'
        },
        {
            id: 2,
            name: 'Jquery'
        }
    ];

    const courses12 = coursesSort.sort((a, b) => {
        // a < b => -1
        // a > b => 1
        // a === b => 0
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })
    console.log(courses12);

    /**
     * 13. Testing The Elemet of an Array  
     * 
     */

    const numbers13 = [1, 2, -1, 3, 4];
    // every()
    // some()
    /**
     * (method) Array<number>.every(callbackfn: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean 
     * 
     * 
     * Determines whether all the members of an array satisfy the specified test.
     */
    const allPositive = numbers13.every(value => {
        return value >= 0
    })
    console.log(allPositive);

    /**
     * (method) Array<number>.some(callbackfn: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean
     * 
     * Determines whether the specified callback function returns true for any element of an array
     * 
     */
    const atLeastOnePositive = numbers13.some(value => {
        return value >= 0
    })
    console.log(atLeastOnePositive);


    /**
     * 14. Filtering an Array  
     * 
     * (method) Array<number>.filter(callbackfn: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)
     * 
     * 
     * Returns the elements of an array that meet the condition specified in a callback function.
     */

    const filtered = numbers13.filter(n => n >= 0);
    console.log(filtered);

    /**
     * 15. Mapping an array 
     * 
     * map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
     * 
     * Returns the elements of an array that meet the condition specified in a callback function.
     */

    const mapItems = numbers13
        .filter(item => item >= 0)
        .map(item => ({
            value: item
        }))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);
    console.log(mapItems);

    /**
     * 16. Reducing an Array 
     * 
     * reduce(callbackfn: (previousValue/Accumulator : number, currentValue: number, currentIndex: number, array: number[]) => number): number
     * 
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     */

    // a = 0, c = 1 => a = 1
    // a = 1, c = -1 => a = 0
    // a = 0 , c = 2 => a = 2
    // a = 2, c = 3 => a = 3
    // a = 5, c = 4 => a = 5

    // const numbers16 = [1, 2, 3, 4];
    const numbers16 = [256741038, 623958417, 467905213, 714532089, 938071625];
    const sum = numbers16.reduce((acc, cur) => acc + cur);
    console.log(sum);


    /**
     * Exercise 1
     */

    const exercise1 = arrayFromRange(-1, 4);
    console.log(exercise1);

    function arrayFromRange(min, max) {
        const output = [];
        for (let i = min; i <= max; i++)
            output.push(i);
        return output;
    }

    /**
     * Exercise 2 
     */

    const exercise2 = [1, 2, 3, 4, 5];

    // console.log(includesFun(exercise2, -1));

    function includesFun(array, searchElement) {
        for (const element of array)
            if (element === searchElement)
                return true;
        return false;
    }

    /**
     * Exercise 3 
     */
    const exercise3 = [1, 2, 3, 4];
    const exerciseThreeOutput = except(exercise3, [1]);
    // console.log(exerciseThreeOutput);

    function except(array, excluded) {
        const output = [];
        for (let element of array)
            if (!excluded.includes(element))
                output.push(element);
        return output;
    }

    /**
     * Exercise 4 
     */

    const exercise4 = [1, 2, 3, 4, 5];
    const output4 = move(exercise4, 1, 4);
    // console.log(output4);

    function move(array, index, offset) {
        const position = index + offset;

        if (position >= array.length || position < 0) {
            console.error('Invalid offset.');
            return;
        }

        const output = [...array] // copy main array
        const element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;

    }

    /**
     * Exercise 5 
     */
    const exercise5 = [1, 2, 3, 4, 1];
    const output5 = countOccurrences(exercise5, 1);
    console.log(output5);

    function countOccurrences(array, searchElement) {
        // implementation step 1
        /*
        let count = 0;
        for (let element of array)
            if (element === searchElement)
                count++;
        return count;
        */
        // implementation step 2
        return array.reduce((acc, cur) => {
            const occurrence = (cur === searchElement) ? 1 : 0;
            console.log(acc, cur, searchElement)
            return acc + occurrence;
        }, 0)
    }

    /**
     * Exercise 6 
     */
    const movies = [{
            title: 'a',
            year: 2018,
            rating: 4.5
        },
        {
            title: 'b',
            year: 2017,
            rating: 4.7
        },
        {
            title: 'c',
            year: 2018,
            rating: 3
        },
        {
            title: 'd',
            year: 2018,
            rating: 4.5
        },
        {
            title: 'e',
            year: 2012,
            rating: 4.5
        },
        {
            title: 'f',
            year: 2016,
            rating: 4.5
        },
    ];

    // All the movies in 2018 with rating > 4
    // Sort them by their rating
    // Descending order
    // Pick their title



    const title = movies
        .filter(m => m.year === 2018 && m.rating >= 4)
        .sort((a, b) => a.rating - a.rating)
        .reverse()
        .map(m => m.title);

    console.log(title)




}