/**
 * Move the contents of the locationInfo controller into an external function
 */
const _renderDetailPage = function (req, res) {
    res.render('location-info', {
        title: "Starcups",
    });
};

module.exports.locationInfo = function (req, res) {
    _renderDetailPage(req, res);
    
}


/**
 * Update the locationInfo controller to call the API 
 */
const locationInfo = function (req, res) {
    // Get locationid parameter from URL and append it to API path
    const path = `/api/location/${req.params.locationid}`;
    // Set all request options needed to call API
    requestOption = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };

    request(requestOption, (err, response, body) => {
        // Call _renderDetailPage function when API has responded
        _renderDetailPage(req, res);
    });
};


/**
 * Preprocessing data in the controller
 * 
 */
request(requestOption, (err, response, body) => {
    // Create copy of returned data in new variable
    let data = body;
    // Reset coords property to be an object, setting lng and lat using values pulled from API response
    data.coords = {
        lng: body.coords[0],
        lat: body.coords[1]
    };
    // Send transformed data to be rendered
    _renderDetailPage(req, res, data);
});


/**
 * Update renderDetailPage to accept and use data from the API
 * 
 */

// Add new parameter for data in function definition
const renderDetailPage = function (req, res, locDetail) {
    res.render('location-info', {
        //Reference specific items of data as needed in function
      title: locDetail.name,
      pageHeader: {
        title: locDetail.name
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: locDetail // Reference specific items of data as needed in function
    });
  }

/**
 * reviewSchema
 */
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    reviewTxt : String,
    createdOn: {
        type: Data,
        "default": Date.now
    }
});

/**
 * Trap any error caused by the API ont returning a 200 status
*/

request(requestOption, (err, response, body) => {
    let date = body;
    if (response.statusCode === 200) {
        date.coords = {
            lng: body.coords[0],
            lat: body.coords[1]
        };
        _renderDetailPage(req, res, date);
    } else {
        _showError(req, res, response.statusCode);
    }
});


/**
 * Create an error-handling function for API status codes that aren't 200
 */
const _showError = function (req, res, status) {
    let title = '';
    let content = '';
    if (status === 404) { // If status passed through is 404, set title and content for page
      title = '404, page not found';
      content = 'Oh dear. Looks like we can\'t find this page. Sorry.';
    } else { // Otherwise set a generic catch-all message
      title = `${status}, something's gone wrong`;
      content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status); // Use status parameter to set response status
    res.render('generic-text', { // Send data to view to be compiled and sent to browser
      title : title,
      content : content
    });
  };