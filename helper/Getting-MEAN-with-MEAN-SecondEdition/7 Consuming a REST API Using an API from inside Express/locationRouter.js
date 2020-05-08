router.get('/', ctrlLocations.homelist);
// Add locationid parameter to route for single location
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);