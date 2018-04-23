/**
 * wiki.js - wiki route module.
 * 
 */
var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function(req, res){
    res.send('Wiki home page');
});

//About page route.
router.get('/about', function(req, res){
    res.send('About this wiki');
});

module.exports = router;


/**
 * Route parameters
 */

app.get('/users/:userId/books/:bookId', function(req, res){
    // Access userId via
    var userId  = req.params.userId;
    // Access bookId via
    var bookId  = res.params.bookId;
});