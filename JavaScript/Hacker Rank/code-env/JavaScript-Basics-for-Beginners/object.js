/**
 * Object-Oriented Porgramming (OOP)
 * 
 */
exports.objectOrientedProgramming = () => {
    /*
    // step - 1: Basics ; 
    // Object Oriented Programming style 
    // You define (and create) a JavaScript object with an object literal 
    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1,
        },
        isVisible: true,
        draw: function () {
            console.log("draw");
        }
    };

    circle.draw();

    // step - 2  : Factory Function ; 
    // 
    function createCircle(radius) {
        // return {
        //     radius: radius,
        //     draw: function() {
        //         console.log("Draw");
        //     }
        // }
        // ES6 Short Form
        return {
            radius, // Property
            draw() { // Method
                console.log("Draw Method")
            }
        }
    }

    const circle1 = createCircle(1);
    console.log(circle1);
    const circle2 = createCircle(2);
    console.log(circle2, circle2.draw());
    console.log(circle2.draw());

    // Step - 3 : Constructor Functon
    // Camel Notation: oneTwoThreeFour
    // Pascal Notation: OneTwoThree

    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log("Draw Method");
        }
    }

    const circleCon = new Circle(1);
    console.log(circleCon);

    // Step - 4 : Dynamic Nature of Object
    const car = {
        name: "Volvo"
    }
    car.color = "Yellow";
    car.draw = function () {}

    delete car.color;

    console.log(car);


    // Step - 5 : Constructor Property
    // Step - 6 : Function are Object 

    function CircleFnObj(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw');
        }
    }
    CircleFnObj.call({}, 1);
    CircleFnObj.apply({}, [1, 2, 3]);
    console.log('call', CircleFnObj.call({}, 1))
    const CircleFnObj1 = new CircleFnObj(1);
    const CircleFnObj2 = CircleFnObj.call({}, 1);
    console.log(CircleFnObj1);
    console.log(CircleFnObj2);

    // Step - 7 : Value vs. Reference Types
    let xx = 10;
    let yy = xx;
    
    xx = 20;

    // Output 
    // x 
    // 20
    // y
    // 10

    let xxR = {value: 10};
    let yyR = xxR

    xxR.value = 20;
    // xxR {value: 20}
    // yyR {value: 20}

    // Primitive are copied by their value
    // Objects are coppied by their reference 

    let number = 10;
    function increase(number) {
        number++;
    }

    increase(number);
    console.log(number)
    let objIn = {value: 10};
    function increase(objIn) {
        objIn.value++;
    }

    increase(objIn);
    console.log(objIn );

    // Enumerating Properties of an Object
    const EnumeratObj = {
        radius: 23,
        draw() {
            console.log('Draw ..');
        }
    }

    for (const key in EnumeratObj) 
        if (EnumeratObj.hasOwnProperty(key)) 
            console.log(key, EnumeratObj[key]) ;

    for (const iterator of Object.keys(EnumeratObj)) 
        console.log(iterator);

    for (const entry of Object.entries(EnumeratObj)) 
        console.log(entry); 

    // 9 cloning an Object 
    const cloningObj = {
        radius: 1,
        draw() {
            console.log(" Cloning object ");
        }
    }

    const clonAnother = Object.assign({}, cloningObj);
    const cloningSpred = {...cloningObj};

    console.log(clonAnother);
    console.log(cloningSpred);


    
    
     


*/


    async function getCountryName(code) {
        // write your code here
        // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

        function ajax_get(url, callback) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log('responseText:' + xmlhttp.responseText);
                    try {
                        var data = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        console.log(err.message + " in " + xmlhttp.responseText);
                        return;
                    }
                    callback(data);
                }
            };

            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }


        function getAllCountry() {
            let countries = [];
            for (let i = 1; i <= 25; i++) {
                ajax_get(`https://jsonmock.hackerrank.com/api/countries?page=${i}`, function (data) {
                    countries.push(data)
                });

            }
            return countries
        }

        let countriesWithPagi = await getAllCountry();
        console.log(countriesWithPagi)

    }

    getCountryName()














}