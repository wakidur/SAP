let mongoose = require('mongoose');  
let UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

/*
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
	name: String,
	email: String,
	password: String
});

module.exports = mongoose.model('User', userSchema);
*/