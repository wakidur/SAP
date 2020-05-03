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
     * 12. Joining Arrays
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
     * 13. Joining Arrays
     * 
     */

}