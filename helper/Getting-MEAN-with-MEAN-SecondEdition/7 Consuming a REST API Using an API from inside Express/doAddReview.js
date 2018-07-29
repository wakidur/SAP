/**
 * doAddReview controller used to post review data to the API
 */
const doAddReview = function (req, res) {
    const  locationId = req.params.locationid;
    const path = `/api/locations/${locationid}/reviews`;
    const postData = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10),
        reviewText: req.body.review
    };

    const requestOptions = {
        url: apiOption.server + path,
        method: 'POST',
        json: postdata
    }
  
    request(requestOptions, (err, response, body) => {
        if(response.statusCode === 201 ) {
            response.redirect(`/location/${locationid}`);
        } else {
            _showError(req, res, response.statusCode);
        }
    });
};


/**
 * ************************
 */
const doAddReview = function (req, res) {
    const  locationId = req.params.locationid;
    const path = `/api/locations/${locationid}/reviews`;
    const postData = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10),
        reviewText: req.body.review
    };

    const requestOptions = {
        url: apiOption.server + path,
        method: 'POST',
        json: postdata
    }
  
    request(requestOptions, (err, response, body) => {
        if (response.statusCode === 201) {
            res.redirect(`/location/${locationid}`);

        }else if(response.statusCode === 400 && body.name && body.name === "ValidationError"){
            res.redirect(`/location/${locationid}/reviews`);
        } else {
            console.log(body);
            _showError(req, res, response.statusCode);
            
        }
    })
};