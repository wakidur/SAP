/*
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
function printLabel1(labelledObj) {
    console.log(labelledObj.lable);
}
let myObj1 = {
    size: 10,
    lable: "Size 10 Object"
};
printLabel1(myObj1);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
let myObj2 = {
    size: 15,
    label: "Size 12 Object"
};
printLabel2(myObj2);
function createSquare(config) {
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
    * /;
function createSquare(config) {
    let newSquare = {
        color: 'whith',
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
let mySquare = createSquare({ color: 'black' });
function newCreateSquare(config) {
    let newSquare = {
        color: 'whith',
        area: 100
    };
    if (config.colo) {
        // Error : property 'colo' does not exist on type 'newSquereConfig
        newSquare.color = config.colo;
    }
    if (config.whith) {
        newSquare.area = config.whith * config.whith;
    }
    return newSquare;
}
let p1 = { x: 10, y: 20 };
p1.x = 3444; // error! Cannot assign to 'x' because it is a constant or a read-only property.
let k = [1, 2, 3, 4, 5, 6, 7];
let ro = k;
ro[0] = 100; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = roo; // error!
//# sourceMappingURL=interface.js.map