const _renderReviewForm = function (req, res, locDetail) {
    res.render('location-review-form', {
        title: `Review ${locDetail.name} on Loc8r`,
        pageHeader: {
            title: `Review ${locDetail.name}`
        }
    });
};


/**
 * post data
 */
const posdata = {
    author: req.body.name,
    rating: parseInt(req.body.rating, 10),
    reviewText: req.body.review
};

/**
 * Update the controller to pass a query string error string to the view
 */
const _renderReviewForm = function (req, res, locDetail) {
    res.render('location-review-form', {
        title: `Review ${locDetail.name} on Loc8r`,
        pageHeader: {title: `Review ${locDetail.name}`},
        error: req.query.err,
    });
};