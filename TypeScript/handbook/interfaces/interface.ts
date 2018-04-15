// step -1;
function printLabel( labelledObj: {label: string}) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 100,
    label: "size 100 Object"
};

printLabel(myObj);

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

