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
});
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});


const Loc = mongoose.model('Location', locationSchema);

const locationsCreate = function (req, res) {
    Loc.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(","),
        coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
        openingTimes: [{
            days: req.body.days1,
            opening: req.body.opening1,
            closing: req.body.closing1,
            closed: req.body.closed1,
        }, {
            days: req.body.days2,
            opening: req.body.opening2,
            closing: req.body.closing2,
            closed: req.body.closed2,
        }]
    }, (err, location) => {
        if (err) {
            res
                .status(400)
                .json(err)
        } else {
            res
                .status(201)
                .json(location);

        }
    });
};


// _doSetAverageRating
const _doSetAverageRating = function(location) {
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

// updating the average rating
const _updateAverageRating = function (req, res) {
    Loc.findById(locationid).select('rating reviews').exec((err, location) => {
        if(!err) {
            _doSetAvarageRating(location);
        }
    });
};

// do add review
const _doAddReview = function (req, res) {
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
                    .status(400).json(err);
                
            } else {
                _updateAverageRating(location._id);
                let thisReview = location.reviews[location.reviews.length - 1];
                res.status(201).json(thisReview);
            }
        })
    }
}

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