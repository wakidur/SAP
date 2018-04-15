/*
	*14-05-2018
*/

/*
* db.js
* I created for the database is name "wally" with
* Password "theflashisawesome".
*/

let mongoose  = require('mongoose');
	mongoose.connect('mongodb://wally:theflashisawesome@localhost.com:27017/node-jwt-db');
	
	
/*
* config.js
*/

module.exprts = {
	'secret' : 'supersecret'
}

/*
* AuthController.js
*/
let express = require('express');
let User = require('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../congig/config');

let register = register;
	// register 
	function register(req, res) {
		let hashedPassword = bcrypt.hashSync(req.body.password, 8);
		User.create({
			name: req.body.name,
			emai: req.body.email,
			password: hashedPassword
		}).then((user) => {
			// create a token
			var token = jwt.sign(
			{id: user._id}, 
			config.secret, 
			{expiresIn: 86400 });
		
			res.status(200).send({
				auth: true, 
				token: token 
			})
		}).catch((err) => req.status(500).send("There was a problem registering the user."));
	}
	
// ES6
let register = (req, res) => {
	// encrypt it with Bcrypt’s hashing method.
	let hashadPassword = bcrypt.hashSync(req.body.password, 8); 
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: hashadPassword
	})
	.then((user) => {
		// create a token
		var token = jwt.sign({id: user._id}, congin.secret, {expiresIn: 86400 });
		res.status(200).send({auth: true, token: token});
	})
	.catch((err) => {
		res.status(500).send("There was a problem registering the user.")
	})
	
};

let allowMe = allowMe;
	function allowMe(req, res){
		let token = req.headers['x-access-token'];
		if(!token){
			//401 unauthorized
			return res.status(401).send({auth: false, message: 'No token provided.'});
		}
		jwt.verify(token, config.secret, (err, decoded) => {
			if(err) {
				return res.status(500).send({
					auth: false, 
					message: 'Failed to authenticate token.' }
				)
			}
			res.status(200).send(decoded);
		})
	}
	
// add this to the bottom of AuthController.js

module.exports = {
	register: register
}


/*
* auth-routes.js
*/
let authController = require("../controllers/AuthController");

/*
* in AuthController.js change this line
*/

let allowMe = allowMe;
	function allowMe(req, res){
		let token = req.headers['x-access-token'];
		if(!token){
			//401 unauthorized
			return res.status(401).send({auth: false, message: 'No token provided.'});
		}
		jwt.verify(token, config.secret, (err, decoded) => {
			if(err) {
				return res.status(500).send({
					auth: false, 
					message: 'Failed to authenticate token.' }
				)
			}
			//res.status(200).send(decoded);
			User.findById(decoded.id, {password: 0})
			.then((user) => {
				if(!user){
					return res.status(404).send("No user found.");
				}
				res.status(200).send(user);
			})
			.catch((err) => res.status(500).send("There was a problem finding the user."))
		})
	}
	
// login 
let login = (req, res) => {
	User.findOne({ email: req.body.email})
		.then((user) => {
			if(!user){
				return res.status(404).send('No user found.');
			}
			let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
			
			if(!passwordIsValid) {
				return res.status(401).send({
					auth: false, 
					token: null
					})
			}
			let token = jwt.sign(
			{ 
				id: user._id 
			}, 
			config.secret, 
			{
				xpiresIn: 86400
			});
			res.status(200).send({auth: true, token: token})
		})
		.catch((err) => {
			res.status(500).send('Error on the server.'));
		})
}


let allowMe = (req, res, next) => {
	let token = req.headers['x-access-token'];
	if(!token) {
		return res.status(401).send({auth: false, message: 'No token provided.'})
	}
	jwt.varify(token, config.secret, (err, decoded) => {
		if(err){
			return res.status(500).send({ 
			auth: false, 
			message: 'Failed to authenticate token.' 
			})
		}
		User.findById(decoded.id, {password: 0})
			.then((user) => {
				if(!user) {
					return res.status(404).send("No user found.");
				}
				// res.status(200).send(user); Comment this out!
				next(user); // add this line
			})
			.catch((err) => res.status(500).send("There was a problem finding the user."))
	});
};

// add the middleware function
router.use((user, req, res, next) => {
	res.status(200).send(user);
});

/*
* VerifyToken.js
*/
let jwt = require('jsonwebtoken');
let config = require('../config/config');

function varifyToken(req, res, next) {
	let token = req.headers['x-access-token'];
	if(!token){
		return res.status(403).send({
			auth: false, 
			message: 'No token provided.'
			})
	}
	jwt.varify(token, config.secret, (err, decoded) => {
		if(err) {
			return res.status(500).send({ 
			auth: false, 
			message: 'Failed to authenticate token.' });
		}
		// if everything good, save to request for use in other routes
		req.userId = decoded.id;
		next();
		
	});
}

module.exports = varifyToken;


