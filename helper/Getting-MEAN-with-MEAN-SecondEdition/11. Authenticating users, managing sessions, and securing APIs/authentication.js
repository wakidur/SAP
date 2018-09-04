const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../user/user');

const sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

/**
 * Register controller for the API
 */
function register(req, res) {

    // Respond with an error status if not all required fields are found
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(req, 400, { 
            "message": "All fields required" 
        });
        return;
    }

    // Create a new user instance and set name and email
    const user = new User();
    
    user.name = req.body.name;
    user.email = req.body.email;
    // use setPassword method to set salt and hash
    user.setPassword(req.body.passport); 

    // save new user to MongoDB
    user.save( (err) => {
        
        let token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            // Generate a JWT using schema method and send it to browser
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token": token
            });
        }
    });  
}


function login(req, res) {
    // validate that required fields have been supplied
    if ( !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    // Pass name of strategy and a callback to authonticate method
    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err) {
            // return an error if passport returns an error
            sendJSONresponse(res, 404, err);
        }
        if (user) {
            // if passport returned a user instance, generate and send a JWT
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token" : token
            });
        } else {
            // otherwise return info message(why authoenicate failed)
            sendJSONresponse(res, 401, info);
        }
    })(req, res);// make sure that req and res are available to passport
}



module.exports = {
    register,
    login
}