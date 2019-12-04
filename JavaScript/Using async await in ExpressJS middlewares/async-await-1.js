/**
 * Exam - 1
 * Verifying a user using callbacks
 */
const verifyUser = function (username, password, callback) {
    dataBase.verifyUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error);
        } else {
            database.getRoles(username, (error, roles) => {
                if (error) {
                    callback(error)
                } else {
                    dataBase.logAccess(username, (error) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, roles);
                        }
                    })
                }
            })
        }
    })
}

/**
 * Exam - 2 
 * Verifying a user with promises
 */

const verifyUserWithPromises = function (username, password) {
    dataBase
        .verifyUserWithPromises(username, password)
        .then(userInfo => dataBase.getRoles(userInfo))
        .then(rolesInfo => dataBase.logAccess(rolesInfo))
        .then(finalResult => {
            // do whatever the 'callback' would do 
        }).catch((err) => {
            // do whatever the error handler needs 
        });
}

// Here you must implement
// database.verifyUser
// database.getRoles
// database.logAccess
// as promises

/**
 * Here you must implement
 * verifyUser
 * getRoles
 * logAccess
 */

const verifyUser = new function (username, password) {
    return new Promise((resolve, reject) => {
        database.connect()
            .then((connection) => connection.query('get username password  sql'))
            .then((result) => resolve(result))
            .catch(reject)
    });
};

const getRoles = new function (userInfo) {
    return new Promise((resolve, reject) => {
        database.connect()
            .then((connection) => connection.query('get roles sql'))
            .then((result) => resolve(result))
            .catch(reject)
    });
};

const logAccess = new function (rolesInfo) {
    return new Promise((resolve, reject) => {
        database.connect()
            .then((connection) => connection.query('get roles sql'))
            .then((result) => resolve(result))
            .catch(reject)
    });
};


/**
 * Exam - 3
 * Verifying a user with async/await
 */


const verifyUserWithAsyncAwait = async function (username, password) {
    try {
        const userInfo = await database.verifyUserWithAsyncAwait(username, password);
        const rolesInfo = await database.getRoles(userInfo);
        const logAccess = await database.logAccess(rolesInfo);

        return userInfo;
    } catch (error) {
        // handle error as needed
    }
}


/**
 * Notes on async/await
 * When you use async/await you are responsible to handle errores at the point you desire
 */

// Verifying a user with async/await
const verifyUser = async function (username, password) {
    const userInfo = await dataBase.verifyUser(username, password);
    const rolesInfo = await dataBase.getRoles(userInfo);
    const logStatus = await dataBase.logAccess(rolesInfo);
    return userInfo;
};


// Note: There is nothing new, the same way we need to use .catch() for promises.
async function run(params) {
    try {
        const userInfo = await verifyUser();
    } catch (error) {

    }

}

/**
 * Exam - 4
 * Middlewares
 * In express, a middleware is nothing more than a callback function that receives three params
 */
function middleware(request, response, next) {}

/**
 * @request : Reference to the object representing the HTTP request. We use it to get any data associated to the request: body, url, headers, etc.
 * @response : Reference to the object repreenting the HTTP response. We need it to write a response: response code, body, headers, etc.
 * @next : Callback we need to execute if we want to continue the pipeline of middlewares.
 */


// DO THIS !!!
app.get('/hello', async (req, res, next) => {
    try {
        // Do something
        next();
    } catch (error) {
        next(error);
    }
});


//   Applying some DRY
const asyncHandler = fn => (req, res, next) =>
    Promise
    .resolve(fn(req, res, next))
    .catch(next)


app.get('/hello', asyncHandler((req, res, next) => {
    // Some code here. Any error will be catch and pass to expressjs
}));