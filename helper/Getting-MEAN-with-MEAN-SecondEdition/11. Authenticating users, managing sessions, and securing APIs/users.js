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

