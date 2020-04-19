/**
 * Mon Apr 20 2020 01:10:14 GMT+0600 (Bangladesh Standard Time)
 * You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
 * 
 */


// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    const max = Math.max.apply(null, ar);
    return ar.filter(n => n == max).length;

}