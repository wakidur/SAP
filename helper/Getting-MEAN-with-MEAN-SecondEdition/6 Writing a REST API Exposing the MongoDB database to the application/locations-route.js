const express = require('express');
const router = express.Router();

// Include controller files (we’ll create these next)
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
 

/**
 * Define routes for locations
 * locations
 */

router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);
 
router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

/**
 * Define routes for reviews
 * reviews
 */

router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);
 
router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

/**
 * Export routes
 */
module.exports = router;