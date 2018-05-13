// step -1;
/*function printLabel0( labelledObj: {label: string}) {
    console.log(labelledObj.label);
}

let myObj0 = {
    size: 100,
    label: "size 100 Object"
};

printLabel(myObj0);

// step - 2
interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 100,
    label: "Size 10 Object"
};

printLabel(myObj);
*/
// 09-05-2018

// step-1;
function printLabel1(labelledObj: { lable: string }) {
    console.log(labelledObj.lable);
}

let myObj1 = {
    size: 10,
    lable: "Size 10 Object"
}
printLabel1(myObj1);

// step - 2

// Using interface 
interface LabelledValue1 {
    label: string
}

function printLabel2(labelledObj: LabelledValue1) {
    console.log(labelledObj.label);
}

let myObj2 = {
    size: 15,
    label: "Size 12 Object"
}
printLabel2(myObj2);


// Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'whith', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

