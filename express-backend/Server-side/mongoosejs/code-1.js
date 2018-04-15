import {
  Model
} from 'mongoose';

// 1. Getting Started
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

// Schema
var kittySchema = mongoose.Schema({
  name: String
})

// Model
var kitten = mongoose.model('kitten', kittySchema);


var silence = new kitten({
  name: 'Silence'
});
console.log(silence.name); // 'Silence'


// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
var kittySchema = mongoose.Schema({
  name: String
});
kittySchema.method.speak = function() {
  var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
  return greeting;
};

var kitten = mongoose.model('kitten', kittySchema);

//call
var fluffy = new kitten({
  name: 'Fluffy'
});
fluffy.speak(); // "Meow name is fluffy"


// Save 

fluffy.save(function(err, fluffy) {
  if (err) {
    return console.error(err);
  }
  fluffy.speak();
  
});

//Display all the kittens
kitten.find(function(err, kittens) {
  if (err) {
    return console.error(err);
  }
  console.log(kitten);
});;

// querying
kitten.find({
  name: /^fluff/
}, callback);