function printLabel(labelledObj: {label: string}) {
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

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySqueay = createSquare({color: "black"});
