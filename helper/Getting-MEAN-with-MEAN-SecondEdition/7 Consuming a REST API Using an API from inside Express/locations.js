location.save((err, location) => {
    if (err) {
        console.log(err);
        res.status(400)
        .json(err);
    } else {
        _updateAverageRating(location._id);
        let thisReview = location.reviews[location.reviews.length - 1];
        res
            .status(201)
            .json(thisReview);
    }
})