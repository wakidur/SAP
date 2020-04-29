var rotArr = [1, 2, 3, 6, 9, 8, 7, 4];//numbers in squence of rotation(initial stage)
var Arr = [1, 2, 3, 6, 9, 8, 7, 4];//fixed for while loop
let i = null;
let j = null;
var btnId = null;

function clickOnFive() {
    //for rotating the array 
    let lastItem = rotArr[rotArr.length - 1];

    for (j = rotArr.length - 1; j > 0; j--) {
        rotArr[j] = rotArr[j - 1];
    }
    rotArr[0] = lastItem;
    //for amending the values
    i = 0;
    while( i != 8){
        btnId = "btn" + Arr[i];
        document.getElementById(btnId).innerHTML = rotArr[i];
        i++;
    }
};
//when btn5 is clicked call the above function
document.getElementById("btn5").addEventListener("click",clickOnFive);