function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: "Size 10 Object"
};

printLabel(myObj);


/**
 * Using Interface
 */
interface LabelledValue {
    label: string;
}

function printLabelWithInte(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let labelObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabelWithInte(labelObj);


/**
 * Optional Properties
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySqueay = createSquare({ color: "black" });


/**
 * *************
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare1(config: SquareConfig): { color: string; area: number } {
    let newSquare = {
        color: "white",
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySqueay1 = createSquare({ color: "black" });

/**
 * property in createSquare2 had we mistyped the name of the color
 */

interface SquareConfigMistyped {
    color?: string;
    width?: number;
}

function createSquareMistyped(config: SquareConfigMistyped): { color: string; area: number } {
    let newSquare = {
        color: 'whith',
        area: 100
    };
    if (config.col) {
        // Error: property 'color' does not exist on type 'SquareConfigMistyped'

    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

let mySqueayMistyped = createSquareMistyped({ color: 'black' });


/**
 * **************** ReadOnly property
 */

interface Point {
    readonly x: number;
    readonly y: number;
}

let readOnlyExample_1: Point = {
    x: 10, y: 60
}

readOnlyExample_1.x = 5; // Error: Cannot assign to 'x' because it is a  a read-only property.


let readOnlyExample_2: Point = {
    x: 600, y: 125
}


/**
 * ReadonlyArray<T>
 */
let a: number[] = [1,3,4,5];
let readOnlyArray: ReadonlyArray<number> = a;
readOnlyArray[0] = 100; // Error: [ts] Index signature in type 'ReadonlyArray<number>' only permits reading.
readOnlyArray.push(5); // error: Property 'push' does not exist on type 'ReadonlyArray<number>'
// (property) ReadonlyArray<number>.length: number
readOnlyArray.length = 100; // Error: [ts] Cannot assign to 'length' because it is a constant or a read-only property.