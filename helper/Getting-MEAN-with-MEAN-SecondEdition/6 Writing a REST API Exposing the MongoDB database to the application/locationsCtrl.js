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

const locationsReadOne_final = function (req, res) {
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

/**
 * ****************************************
 */
var theEarth = (function () {
    var earthRadius = 6371; // km, miles is 3959
    var getDistanceFromRads = function (rads) {
        return parseFloat(rads * earthRadius);
    };
    var getRadsFromDistance = function (distance) {
        return parseFloat(distance / earthRadius);
    };
    return {
        getDistanceFromRads: getDistanceFromRads,
        getRadsFromDistance: getRadsFromDistance
    };
})();
/***
 * ************************************************
 */
const locationsListByDistance = function (req, res) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const point = {
        type: "Point",
        coordinates: [lng, lat]
    };
    const geoOptions = {
        spherical: true,
        maxDistance: 20000,
        num: 10
    };
    Loc.geoNear(point, geoOptions, callback);
};

/****
 * ************************
 */

Loc.geoNear(point, options, (err, results, stats) => {
    let locations = [];
    results.forEach((doc) => {
      locations.push({
        distance: (doc.dis)
        name: doc.obj.name,
        address: doc.obj.address,
        rating: doc.obj.rating,
        facilities: doc.obj.facilities,
        _id: doc.obj._id
      });
    });
    res
      .status(200)
      .json(locations);
  });



/**
 * *************
 */
const locationsListByDistance = function(req, res) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const point = {
      type: "Point",
      coordinates: [lng, lat]
    };
    const geoOptions = {
      spherical: true,
      maxDistance: 20000,
      num: 10
    };
    if (!lng || !lat) {
      res
        .status(404)
        .json({
        "message": "lng and lat query parameters are required"
      });
      return;
    }
    Loc.geoNear(point, geoOptions, (err, results, stats) => {
      let locations = [];
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        results.forEach((doc) => {
          locations.push({
            distance: doc.dis,
            name: doc.obj.name,
            address: doc.obj.address,
            rating: doc.obj.rating,
            facilities: doc.obj.facilities,
            _id: doc.obj._id
          });
        });
        res
          .status(200)
          .json(locations);
      }
    });
  };

  /**
   * 
   * *********************
   */
  const locationsCreate = function(req, res) {
    Loc.create({ // Apply create method to model
      name: req.body.name,
      address: req.body.address,
      facilities: req.body.facilities.split(","), // Create array of facilities by splitting a comma-separated list
      coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)], //Parse coordinates from strings to numbers
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
    }, (err, location) => { // Supply callback function, containing appropriate responses for success and failure
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(location);
      }
    });
  };