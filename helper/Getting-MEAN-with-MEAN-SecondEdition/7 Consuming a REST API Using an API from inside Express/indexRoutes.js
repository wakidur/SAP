router.get('/', locationsCtrl.homeList);
router.get('/location/:locationid', locationsCtrl.locationInfo);
router.get('/location/:locationid/reviews/new', locationsCtrl.addReview);
router.post('/location/:locationid/reviews/new', locationsCtrl.doAddReview);

/**
 * ***********
 */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new') //Update to router.route syntax and insert locationid parameter into the review form route
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);// Create new route on same URL but using POST method and referencing different controller