const _renderHomepage = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        …
    });
};
const homelist = function (req, res) {
    _renderHomepage(req, res);
};
/**
 * ******************************
 */
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}
/**
 * **************************************
 */

const _renderHomepage = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
    });
};

module.exports.homelist = function (req, res) {
    // Set path for API request (server is already set at top of file)
    const path = '/api/locations';
    // Set request options, including URL, method, empty JSON body, and hard-coded query string parameters
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {},
        qs: {
            lng: -0.7992599,
            lat: 51.378091,
            maxDistance: 20
        }
    };
    // Make request, sending through request options
    request(
        requestOptions,
        (err, response, body) => { // Supplying callback to render homepage
            _renderHomepage(req, res);
        }
    );
};


/**
 * Update the contents of the homelist controller to use the API response
 * 
 */

request(requestOptions, (err, response, body) => {
    // Pass body returned by request to _renderHomepage function
    _renderHomepage(req, res, body);
})


/**
 * Update the _renderHomepage function to use the data from the API
 * Add additional responseBody parameter to function declaration
 */

const _renderHomepage = function (req, res, responseBody) {
    res.render('locations-list', {
        title: "Loc8r - find a place to work with wifi",
        pageHeader: {
            title: "Loc8r",
            strapline: "Find places to work with wifi near you!",
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for",
        locations: responseBody // Remove hard-coded array of locations and pass responseBody through instead
    });
};


/**
 * Adding and using a function to format the distance returned by the API
 */
const _formatDistance = (function (distance) {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        // If supplied distance is over 1000 m, convert to km, round to one decimal place and add km unit
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = "km";
    } else {
        //Otherwise round down to nearest meter
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
})
request(requestOptions, (err, response, body) => {
    // Assign returned body data to a new variable
    let data = body;
    // Loop through array, formatting distance value of location
    for (let i = 0; i < data.length; i++) {
        data[i].distance = _formateDistance(data[i].distance);

    }
    // Send modified data to be rendered instead of original body
    _renderHomepage(req, res, data);
});

/**
 * validate that the API has returned some data before trying to use it
 * 
 */
request(requestOptions, (err, response, body) => {
    let data = body;
    if (response.statusCode === 200 && data.length) {
        for (let i = 0; i < data.length; i++) {
            data[i].distance = _formatDistance(data[i].distance);
        }
    }
    _renderHomepage(req, res, data);

});

/**
 * Outputting messages if the API does't return location data
 * 
 * 
 */
const _renderHomepagee = function (req, res, responseBody) {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('location-list', {
        title: "Loc8r - find a place to work with wifi",
        pageHeader: {
            title: "Loc8r",
            strapline: "Find places to work with wifi near you!",
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: responseBody,
        message: message,
    });

}

/**
 * ***************
 */

const requestOptionss = {
    url: "apiOptions.server" + path,
    method: "GET",
    json: {},
    qs: {
        lng: 1,
        lat: 1,
        maxDistance: 0.002
    }
}


