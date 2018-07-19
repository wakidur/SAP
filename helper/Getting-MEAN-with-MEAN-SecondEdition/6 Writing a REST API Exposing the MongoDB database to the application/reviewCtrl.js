const reviewsReadOne = function (req, res) {
    if (req.params && req.params.locationid && req.params.reviewid) {
        Loc
            .findById(req.params.locationid)
            .select('name reviews')
            .exec((err, location) => {
                if (!location) {
                    res
                        .status(404)
                        .json({
                            "message": "locationid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                if (location.reviews && location.reviews.length > 0) {
                    const review = location.reviews.id(req.params.reviewid);
                    if (!review) {
                        res
                            .status(404)
                            .json({
                                "message": "reviewid not found"
                            });
                    } else {
                        response = {
                            location: {
                                name: location.name,
                                id: req.params.locationid
                            },
                            review: review
                        };
                        res
                            .status(200)
                            .json(response);
                    }
                } else {
                    res
                        .status(404)
                        .json({
                            "message": "No reviews found"
                        });
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message": "Not found, locationid and reviewid are both required"
            });
    }
};


const reviewsCreate = function (req, res) {
    const locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec((err, location) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    _doAddReview(req, res, location);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message": "Not found, locationid required"
            });
    }
};

/**
 * ************************
 */
location.save((err, location) => {
    if (err) {
        res
            .status(400)
            .json(err);
    } else {
        let thisReview = location.reviews[location.reviews.length - 1];
        res
            .status(201)
            .json(thisReview);
    }
});

/**
 * ***********************************************************
 */
const _doAddReview = function (req, res, location) {
    if (!location) {
        res
            .status(404)
            .json({
                "message": "locationid not found"
            });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });
        location.save((err, location) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                _updateAverageRating(location._id);
                let thisReview = location.reviews[location.reviews.length - 1];
                res
                    .status(201)
                    .json(thisReview);
            }
        });
    }
};


const reviewsCreate = function (req, res) {
    const locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec((err, location) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    _doAddReview(req, res, location);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message": "Not found, locationid required"
            });
    }
};

/**
 * *************************************
 */
const _doSetAverageRating = function (location) {
    if (location.reviews && location.reviews.length > 0) {
        const reviewCount = location.reviews.length;
        const ratingTotal = location.reviews.reduce((total, review) => {
            return total + review.rating;
        }, 0);
        let ratingAverage = parseInt(ratingTotal / reviewCount, 10);
        location.rating = ratingAverage;
        location.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Average rating updated to", ratingAverage);
            }
        });
    }
};

const _updateAverageRating = function (locationid) {
    Loc
        .findById(locationid)
        .select('rating reviews')
        .exec((err, location) => {
            if (!err) {
                _doSetAverageRating(location);
            }
        });
};


const _doAddReview = function (req, res, location) {
    if (!location) {
        res
            .status(404)
            .json({
            const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

// Define a schema for opening times
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});    "message": "locationid not found"
            });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });
        location.save((err, location) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                _updateAverageRating(location._id);
                let thisReview = location.reviews[location.reviews.length - 1];
                res
                    .status(201)
                    .json(thisReview);
            }
        });
    }
};


const reviewsCreate = function (req, res) {
    const locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec((err, location) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    _doAddReview(req, res, location);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message": "Not found, locationid required"
            });
    }
};