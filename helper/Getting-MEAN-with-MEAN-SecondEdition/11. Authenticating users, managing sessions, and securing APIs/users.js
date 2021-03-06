const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email: { // Email should be required and unique
        type: String,
        unique: true,
        required: true
    },
    name: { // Name is also required, but not necessarily unique
        type: String,
        required: true
    }, 
    hash: String, // Hash and salt are both just strings
    salt: String
});

userSchema.methods.setPassward = function(password) {
    this.salt = SALT_VALUE;
    this.hash = HASH_VALUE;
}

// update the setPassword method to set the salt and the hash for users.
userSchema.methods.setPassward = function(password) {
    this.selt = crypto.randomBytes(16).toString('hex'); // Create a random string for salt
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex'); // Create encrypted hash
};


userSchema.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
}



// 
/**
 * ******************
 */
let User = mongoose.model('User');
let user = new User();
user.name = "User's name";
user.email = "test@example.com";
user.setPassward('myPassword');
use.save();

/**
 * Create a schema method to generate a JWT
 */

// const mongoose =  require('package');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');

userSchema.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // Create expiry date object and set for seven days
    return jwt.sign({ // Call jwt'sign method and return what it returns
        _id: this._id, // pass payload
        email: this.email, // pass payload to method
        name: this.name, // pass payload to method
        exp: parseInt(expiry.getTime() / 1000), // including exp as unix time in seconds
    }, 'thisIsSecret'); // Send secret for hashing algorithm to use 
};


/**
 * Now all that remains is to update the user schema to replace the hard-coded secret with the environment variable,
 */

userSchema.methods.generateJwt = function() {
    const expire = new Date();
    expire.setDate(expire.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expire.getTime() / 1000)
    }, process.env.JWT_SECRET);
}


/**
    ** Full Passport local strategy definition
 */

passport.use(new LocalStrategy({
  usernameField: 'email'  
}, function (username, password, done) {
    User.findOne({email:username}, function (err, user) {
        // Search MongoDB for user with supplied email address
        if (err) {
            return done(err);
        }
        if(!user){
            // If no user is found, return false and message
            return done(null, false, {
                message: 'Incorrect username.'
            })
        }
        if(!user.validPassword(password)){
            // call validpassword method, passing supplied password
            return done(null, false, {
                // if password is incorre, return false and a message 
                message: 'incurrect password'
            })
        }
        return done(null, user); // if we've got the end we can return user object 
    })
}));
