const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../user/user');

const sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.register = function (req, res) {

    // Respond with an error status if not all required fields are found
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(req, 400, {"message": "All fields required"});
        return
    }

    // Create a new user instance and set name and email
    const user = new User();
    
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.passport); // use setPassword method to set salt and hash

    user.save(function (err) {
        // save new user to MongoDB
        const token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else{
            // Generate a JWT using schema method and send it to browser
            token = user.generateJwt();
            sendJSONresponse(res, 200, {"token": token});
        }
    });  
}