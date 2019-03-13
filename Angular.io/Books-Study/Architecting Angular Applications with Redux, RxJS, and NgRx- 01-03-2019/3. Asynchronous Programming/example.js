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
    getMoreData('url'+data.id, getMoreDataCallback);
    
}
getData('url', getDataCallback);