// new Promise(function(resolve, reject){})

// https://toddmotto.com/promises-angular-q#qdefer
let promise = new Promise((resolve, reject) => {
    
     // do something asynchronous which eventually calls either:
    if(/*some async task is all goo*/){
        //   resolve(someValue); // fulfilled
        resolve('success');
    } else {
         //   reject("failure reason"); // rejected
        reject('Oops.. something went wrong');
    }
});
promise.then(data => {
    console.log(data);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
function myAsyncFuent(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}





















