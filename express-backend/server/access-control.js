/**
 * crateSalt(keylangth, callback) callback(err, salt)
 * 
 * Generate a cryptograhically secure random string fo 
 * use as a password salt using Node's built-in 
 * crypto.randomBytes()
 * 
 * @param {Number} keyLength
 * @param {Function} callback
 * @return {undefined}
 */

var crateSalt = function crateSalt(keyLength, callback) {
    crypto.randomBytes( keyLength, function (err, buff) {
        if (err) {
            return callback(err);
        }
        callback(null, buff.toString('base64'));
    });
};