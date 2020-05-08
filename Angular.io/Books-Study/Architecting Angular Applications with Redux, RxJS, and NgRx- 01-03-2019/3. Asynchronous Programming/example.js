// async
callAsync(a, b, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log('response', response);
    }
});

// 
function callAsync(param, param2, fn) {
    setTimeout(() => {
        if (param > param2) {
            fn(null, 'success');
        } else {
            fn('error', null);
        }
    });
}

/**
 * when you need to do several async calls one after another and those calls are dependent upon each other
 */

getData('url', (err, data) => {
    getMoreData('url' + data.id, (err, moreData) => {
        getEvenMoreData('url' + moreData.id, (err, moreData) => {
            console.log('done here', moreData);
        });
    });
});

/**
 * Keeping the code shallow is about giving our anonymous functions a dedicated name and breaking them out into their own functions
 */

function getEventMoreDataCallbac(err, eventMoreData) {
    console.log('Done here');
}

function getMoreDataCallback(err, moreData) {
    getEvenMoreData('url' + moreData.id, getEventMoreDataCallbac);
}

function getDataCallback(err, data) {
    getMoreData('url' + data.id, getMoreDataCallback);

}
getData('url', getDataCallback);


// Promis
/**
 * To put a promis to use, we need to instantiate it and make it part of a method 
 */

function getData(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data');
        }, 1000);
    });
}

function getMoreData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error from more data')
        }, 1000);
    })
}

// then
getData().then((data) => {
    console.log('data', data);
});

// alternative 1
getMoreData().then(
    data => {
        console.log('data', data);
    },
    err => {
        console.log('error', err);
    }
);

// alternative 2
getMoreData().then(data => {
        console.log('data', data);
    })
    .catch((err) => {
        console.log('error', err);
    });

// Async/await
async function getData(arguments) {
    // more to come
}

async function getData(arguments) {
    let data = await getMoreData();
    let otherData = await getEvenMoreData();
}

// promise-based 
function getMoreData(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('more data')
        }, 100);
    });
}

function getEvenMoreData(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('more data');
        }, 1000);
    });
}

/**
 * When we call getMoreData() and getEvenMoreData(), 
 * we can now use the keyword await to wait for the promise to resolve
 */

async function getData(arguments) {
    var data = await Promise.resolve('data');
    var moreData = await getMoreData(data);
    var evenMoreData = await getEvenMoreData(moreData);
    return evenMoreData;

}

getData().then((result) => console.log('result', result) );