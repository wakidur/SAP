var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        body: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
    mata: {
        votes: Number,
        favs: Number
    }
});


// Creating a model

var Blog = mongoose.model('Blog', blogSchema);
// ready to go


/* Instance methods */
// define a scheme
var animalSchema = new Schema({
	name: String,
	type: String
});
// assign a function to the 'methods' object of our animalSchema

animalSchema.methods.findSimilarTypes = function(callback) {
	return this.model('Animal').find({ type: this.type}, callback);
};

var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({type: 'dog'});
	dog.findSimilarTypes(function(err, dogs){
		console.log(dogs);// woof
	});

/* static */

var animalSchema = new Schema({ 
	name: String, 
	type: String 
});

animalSchema.statics.findByName = function(name, callback){
	return this.find({name: new RegExp(name, 'i')}, callback);
};

var Animal = mongoose.model('Animal', animalSchema);

Animal.findByName('fido', function(err, animals){
	console.log(animals);
});


/*Query Helpers*/

animalSchema.query.byName = function(name) {
	return this.find({name: new RegExp(name, 'i')});
};
var Animal = mongoose.model('Animal', animalSchema);
	Animal.find().byName('fido').exec(function(err, animals){
		console.log(animals);
	})
	
/* Index*/
var animalSchema = new Schema({
    name: String,
    type: String,
    tags: { type: [String], index: true } // field level
  });

  animalSchema.index({ name: 1, type: -1 }); // schema level
 