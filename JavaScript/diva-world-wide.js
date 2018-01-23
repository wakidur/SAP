/*
QUESTION 1: 
**. Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 
**. The parameter "userDate" and the return value are strings. 
For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API . Please don't copy and paste some answer from the internet.
*/

function formatDate(userDate) {
    userDate = new Date(userDate);
    year = userDate.getFullYear().toString();
    month = (userDate.getMonth() + 1).toString();
    day = userDate.getDate().toString();
    if (month.length == 1) {
        month = '0' + month;
    }
    if (day.length == 1) {
        day = '0' + day;
    }
    return year + month + day;
}
var a = "12/31/2014";
console.log(formatDate(a));


function formatDate(userDate) {
    var parts = userDate.split('/');
    if (parts[0].length == 1) parts[0] = '0' + parts[0];
    if (parts[1].length == 1) parts[1] = '0' + parts[1];
    return parts[2] + parts[0] + parts[1];
}