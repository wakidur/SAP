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