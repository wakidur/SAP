const _getLocationInfo = function(req, res, callback) {
    const path = `/api/locations/${req.params.locationid}`;
    const requestOptions = {
        url: apiOption.service + path,
        method: "GET",
        json: {}
    };

    request(requestOptions, (err, response, body) => {
        let data = body;
        if (response.statusCode === 200) {
            data.coords = {
                lng: body.coords[0],
                lat: body.coords[1]
            };
            // Following successful API response, invoke callback instead of named function
            callback(req, res, data);
        } else {
            _showError(req, res, response.statusCode);
        }
    });
};

const locationInfo = function(req, res) {
    // In locationInfo controller call _getLocationInfo function, passing a callback function that will call _renderDetailPage function upon completion
    _getLocationInfo(req, res, (req, res, responseData) => {
        _renderDetailPage(req, res, responseData);
    });
};

const addReview = function(req, res) {
    // Also call _getLocationInfo from addReview controller, but this time pass _renderReviewForm in callback
    _getLocationInfo(req, res, (req, res, responseData) => {
        _renderReviewForm(req, res, responseData);
    });
};


var _renderReviewForm = function (req, res, locDetail) {
    res.render('location-review-form', {
        title: `Review ${locDetail.name} on Loc8r`,
        pageHeader: {title: `Review ${locDetail.name}`}
    });
};