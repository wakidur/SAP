// Synchronous - 1
const second = () => {
    console.log(`2. Second Function: Hello there!`);
}

const first = () => {
    console.log(`1.1 First Function: Hi there!`);
    second();
    console.log('1.2 First Function: The End');
};

first();

// Synchronous - 2

const processImage = (image) => {
    /**
     * Doing some operations on image
     */
    console.log("Image Processed");
};

const networkRequest = (url) => {
    /**
     * requesting network resource
     */
    return someData;
};

const greeting = () => {
    console.log('Hello World');
};

processImage(logo.jpg);
networkRequest('www.somerandomurl.com');
greeting();


/**
 * asynchronous 
 */
// asynchronous  Callback
const networkRequestAsync = () => {
    setTimeout(() => {
        console.log('Async code');
    }, 2000);
};

console.log('Hello world');

// how it’s executed in an asynchronous way.
const networkRequestAsyncProcess = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000);
};
console.log('Hello World');
networkRequestAsyncProcess();
console.log('The End');


// DOM Events
document.querySelector('.btn').addEventListener('click', (event) => {
    console.log("Button Clicked");
})

// ES6 Job Queue/ Micro-Task queue

// step - 1
console.log('Script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
    resolve('Promise resolved');
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

console.log('Script End');

// step - 2
console.log('Script start');

setTimeout(() => {
    console.log('setTimeout 1');
}, 0);

setTimeout(() => {
    console.log('setTimeout  2 ');
}, 0);

new Promise((resolve, reject) => {
    resolve('Promise 1 resolve');
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
console.log('Script End');

// step - 3
console.log('Script start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

new Promise((resolve, reject) => {
    resolve('Promise 2 resolve');
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve('Promise 3 resolved');
    }).then((result) => {
        console.log('result');
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});