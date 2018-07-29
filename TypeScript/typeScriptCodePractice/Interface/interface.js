function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);
function printLabelWithInte(labelledObj) {
    console.log(labelledObj.label);
}
var labelObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabelWithInte(labelObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySqueay = createSquare({ color: "black" });
function createSquare1(config) {
    var newSquare = {
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
var mySqueay1 = createSquare({ color: "black" });
//# sourceMappingURL=interface.js.map