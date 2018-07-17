const locationsCreate = function (req, res) {};
module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};

res
    .status(status)
    .json(content);


const locationsCreate = function (req, res) {
    res
        .status(200)
        .json({
            "status": "success"
        });
};

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {
        "status": "success"
    });
};



/**
 * **************************
 */

const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

Loc.findById(locationId);

Loc.
findById(locationId) //Apply findById method to Location model using Loc
    .exec((error, location) => { //Execute query
        console.log(`findById complete ${location}`); // Log message when complete
    });


const locationsReadOne = function (req, res) {
    Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
            res
                .status(200)
                .json(location);
        });
};

/**
 * ********************************************
 */

const locationsReadOne_final = function(req, res) {
    if (req.params && req.params.locationid) { // Error trap 1: check that locationid exists in request parameters
      Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
          if (!location) { //Error trap 1: check that locationid exists in request parameters
            res
              .status(404)
              .json({
                "message": "locationid not found"
              });
            return;
          } else if (err) { // Error trap 3: if Mongoose returned an error, send it as 404 response and exit controller using return statement
            res
              .status(404)
              .json(err);
            return;
          }
          res // If Mongoose didn’t error, continue as before and send location object in a 200 response
            .status(200)
            .json(location);
        });
    } else { //If request parameters didn’t include locationid, send appropriate 404 response
      res
        .status(404)
        .json({
          "message": "No locationid in request"
        });
    }
  };