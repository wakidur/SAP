/**
 * Listing 7.1 Adding request and default API options to the locations.js controllers file
 */
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}


/**
 * 
 */
const requestOptions  = {
    url: "http://yourapi.com/api/path", // Define URL of API call to be made
    method: "GET", // Set request method
    json: {}, // Define body of request, even if it’s an empty JSON object
    qs: { //  Optionally add any query string parameters that might be used by API
        offset: 20
    }
}


// The callback function runs when a response comes back from the API,
(err, response, body) => {
    if (err) { 
        // If error has been passed through, do something with it
      console.log(err);
    } else if (response.statusCode === 200) {
        // If response status code is 200 (request was successful), output JSON body of response
      console.log(body);
    } else {
        // If request returned a different status code, output the code
      console.log(response.statusCode);
    }
  }


/**
 * Define options for request
 */
const requestOptions = {
    url: "http://yourapi.com/api/path",
    method: "GET",
    json: {},
    qs: {
        offset: 20
    }
};

/**
 * Syntax 
 * request(options, callback)
 * Make request, sending through options, and supplying a callback function to use responses as needed
 */
request(requestOptions, (err, response, body) => {
    if (err) {
        console.log(err);
      } else if (response.statusCode === 200) {
        console.log(body);
      } else {
        console.log(response.statusCode);
      }
});

