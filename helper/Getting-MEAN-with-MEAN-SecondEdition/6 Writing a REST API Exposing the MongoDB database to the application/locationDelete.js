const locationsDeleteOne = function(req, res) {
    const locationid = req.params.locationid;
    if (locationid) {
      Loc
        .findByIdAndRemove(locationid)
        .exec((err, location) => {
            if (err) {
              res
                .status(404)
                .json(err);
              return;
            }
            res
              .status(204)
              .json(null);
          }
      );
    } else {
      res
        .status(404)
        .json({
          "message": "No locationid"
        });
    }};

/**
 * 
 */
const reviewsDeleteOne = function(req, res) {
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
          if (!location.reviews.id(req.params.reviewid)) {
            res
              .status(404)
              .json({
                "message": "reviewid not found"
              });
          } else {
            location.reviews.id(req.params.reviewid).remove();
            location.save((err) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                _updateAverageRating(location._id);
                res
                  .status(204)
                  .json(null);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({
              "message": "No review to delete"
            });
        }
      }
    );};