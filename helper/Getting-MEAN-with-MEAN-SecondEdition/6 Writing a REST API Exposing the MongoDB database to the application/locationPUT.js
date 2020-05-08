Loc
    .findById(req.params.locationid)
    .exec((err, location) => {
      location.name = req.body.name;
      location.save(function(err, location) {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(location);
        }
      });
    }
  );
};

/**
 * *****************************
 */

const locationsUpdateOne = function(req, res) {
    if (!req.params.locationid) {
      res
        .status(404)
        .json({
          "message": "Not found, locationid is required"
        });
      return;
    }
    Loc
      .findById(req.params.locationid)
      .select('-reviews -rating')
      .exec((err, location) => {
        if (!location) {
          res
            .json(404)
            .status({
              "message": "locationid not found"
            });
          return;
        } else if (err) {
          res
            .status(400)
            .json(err);
          return;
        }
        location.name = req.body.name;
        location.address = req.body.address;
        location.facilities = req.body.facilities.split(',');
        location.coords = [
          parseFloat(req.body.lng),
          parseFloat(req.body.lat)
        ];
        location.openingTimes = [{
          days: req.body.days1,
          opening: req.body.opening1,
          closing: req.body.closing1,
          closed: req.body.closed1,
        }, {
          days: req.body.days2,
          opening: req.body.opening2,
          closing: req.body.closing2,
          closed: req.body.closed2,
        }];
        location.save((err, location) => {
          if (err) {
            res
              .status(404)
              .json(err);
          } else {
            res
              .status(200)
              .json(location);
          }
        });
      }
    );
  };




/**
 * **************************
 */

const reviewsUpdateOne = function(req, res) {
    if (!req.params.locationid || !req.params.reviewid) {
      res
        .status(404)
        .json({
          "message": "Not found, locationid and reviewid are both required"
        });
      return;
    }
    Loc
      .findById(req.params.locationid)
      .select('reviews')
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
          let thisReview = location.reviews.id(req.params.reviewid);
          if (!thisReview) {
            res
              .status(404)
              .json({
                "message": "reviewid not found"
              });
          } else {
            thisReview.author = req.body.author;
            thisReview.rating = req.body.rating;
            thisReview.reviewText = req.body.reviewText;
            location.save((err, location) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                _updateAverageRating(location._id);
                res
                  .status(200)
                  .json(thisReview);
              }
            });
          }
        } else {
          res
            .status(404)
            json({
              "message": "No review to update"
            });
        }
      }
    );
  };