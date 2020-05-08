exports.functions = () => {
    // 1 Function Declaration vs Expression
    // Function Declaration
    function walk(params) {
        console.log('Walk');
    }

    // Anonymous Function Expression 
    const run = function () {
        console.log('run');
    }

    let move = run;
    run();
    move();
    walk();

    // 2. Hoisting
    // 3. Arguments
    function sum() {
        let total = 0;
        for (const value of arguments)
            total += value;
        return total;
    }

    // console.log(sum(1, 2, 3, 4, 5, 6, 10));

    // 4. The Rest Operator
    function sum(discount, ...prices) {
        const total = prices.reduce((acu, cur) => acu + cur);
        return total * (1 - discount);

    }
    console.log(sum(0.1, 20, 30, 1));

    // 5. Default Parameters
    function interest(principle, rate = 3.5, years = 5) {
        return principle * rate / 100 * years;
    }

    // console.log(interest(10000, 4.3, 5));

    // 6 Getters and Setters
    // 7. Try and Catch 
    const personObj = {
        firstName: 'Mosh',
        lastName: 'Hamedani',
        get fullName() {
            return `${personObj.firstName} ${personObj.lastName}`;
        },
        set fullName(value) {
            if (typeof value !== 'string')
                throw new Error('Value is not a string.');

            const parts = value.split(' ');
            if (parts.length !== 2)
                throw new Error('Enter a first and last name');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    }


    try {
        personObj.fullName = 'Jhon M';
    } catch (error) {
        console.error(error);
    }

    // console.log(personObj);
    // console.log(personObj.fullName);

    // 8 Local vs. Global Scope 
    const color = 'red'; // Global scope
    function start(params) {
        const message = 'Hi!';
        const color = 'blue'; // Local Scop
    }

    // 9 Let Vs Var
    // var => function-scope
    // ES6 (ES2015): let , const => block-socpe
    function startLetVar(params) {
        for (var i = 0; i < 5; i++) {
            console.log(i);

        }
        console.log(i)
    }
    // startLetVar()


    /**
     * 10 The This keyworkd & 11. Changing This
     * The object that is executing the current function
     * method -> obj
     * function -> global (window, global)
     */

    const video = {
        title: 'a',
        paly() {
            console.log(this)
        },
        tags: ['a', 'b', 'c'],
        showTags() {
            // Using Arrow Function
            this.tags.forEach(tag => console.log(this.title, tag));
            // Using this into callback function
            this.tags.forEach(function (tag) {
                console.log(this.title, tag)
            }, this);
            // Using bing method
            this.tags.forEach(function (tag) {
                console.log(this.title, tag)
            }.bind(this))
        }
    }

    video.stop = function () {
        console.log(this)
    }

    // video.paly();
    // video.stop();
    // video.showTags();

    function playVideo(params) {
        // console.log(this); // global
    }

    // playVideo();

    // Constructor function
    function Video(title) {
        this.title = title;
        //console.log(this)
    }
    const v = new Video('b');

    // Exercise 1 -Sum of Argument

    console.log(exerciseOneSum([1, 2, 3, 4, 5]));
    // console.log(exerciseOneSum(1, 2, 3, 4, 5));

    function exerciseOneSum(...items) {
        console.log(items);

        if (items.length === 1 && Array.isArray(items[0]))
            items = [...items[0]];
        // console.log(items = [...items[0]])

        return items.reduce((acu, cur) => acu + cur);

    }

    // Exercise 2 - Area of Circle

    const circleObj = {
        radius: 2,
        get area() {
            return Math.PI * this.radius * this.radius;
        }
    };

    console.log(circleObj.area);

    // Exercise 3 Error Handling



    try {
        const exercise5 = [1, 2, 3, 4, 1];
        const output5 = countOccurrences(exercise5, 1);
        console.log(output5);
    } catch (error) {
        console.error(error);
    }

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

        // Error Handling
        if (!Array.isArray(array))
            throw new Error('Invalid Array.');

        return array.reduce((acc, cur) => {
            const occurrence = (cur === searchElement) ? 1 : 0;
            console.log(acc, cur, searchElement)
            return acc + occurrence;
        }, 0)
    }





}