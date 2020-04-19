/**
 * Mon Apr 20 2020 02:13:43 GMT+0600 (Bangladesh Standard Time)
 * 
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * 
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
 * Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * 
 * Function Description
 * Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format
 */

/*
* Complete the timeConversion function below.

* Sample Input 0 
* 07:05:45PM





*/
function timeConversion(s) {
    let time = s.toLowerCase().split(':');
    let hours = parseInt(time[0]);
    let ampm = time[2];
    if (ampm.indexOf('am') != -1 && hours == 12) {
        time[0] = '00';
    }
    if (ampm.indexOf('pm') != -1 && hours < 12) {
        time[0] = hours + 12;
    }

    return time.join(':').replace(/(am|pm)/, '');

}