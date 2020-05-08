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
var Schema = mongoose.Schema;
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
var Schema = mongoose.Schema;
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
var Schema = mongoose.Schema;
var animalSchema = new Schema({
    name: String,
    type: String,
    tags: { type: [String], index: true } // field level
  });

  animalSchema.index({ name: 1, type: -1 }); // schema level

/**
 * Virtuals
 */

 // Define a schema
 var Schema = mongoose.Schema();
 var personSchema = new Schema({
     name: {
         first: String,
         last: String,
         virtuals: true
     }
 });

personSchema.virtual('fullName').get(function(){
    return this.name.first + ' ' + this.name.last;
});

personSchema.virtual('fullName')
    .get(function () { return this.name.first + ' ' + this.name.last  })
    .set(function (v) {
        this.name.first = v.substr(0, v.indexOf(' '));
        this.name.last = v.substr(v.indexOf(' ') + 1)
      });
axl.fullName = 'William Rose';//Now 'axl.name.first' is "William"
 // compile our model
 var Person = mongoose.model('Person', personSchema);

 // create a document
 var axl = new Person({
     name:{
         first: 'Axl',
         last: 'Rose'
     }
 });

//  Aliase
var personSchema = new Schema({
    n: {
        type: String,
        // Now accessing `name` will get you the value of `n`, and setting `n` will set the value of `name`
        alias: 'name'
    }
});

// Setting `name` will propagate to `n`
var person = new Person({ name: 'Val' });
console.log(person); // { n: 'Val' }
console.log(person.toObject({ virtuals: true })); // { n: 'Val', name: 'Val' }
console.log(person.name); // "Val"

person.name = 'Not Val';
console.log(person); // { n: 'Not Val' }
 