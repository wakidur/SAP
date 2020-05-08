// 17-05-2018
/**
 * Defining schemas
 */
//Require Mongoose
var mongoose = require('mongoose');
// Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    date: Date
});

/**
 * Creating a model
 */
//Define Schema
var Schema = mongoose.Schema;
var SomeNewModelSchema = new Schema({
    userName: String,
    dateOf: Date
});
// compile model from schema(স্কিমা থেকে মডেল কম্পাইল)
var SomeModel = mongoose.model('SomeModel', SomeNewModelSchema);


/**
 * Validation
 */
var breakfastSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'To few eggs'],
        mix: 12,
        required: [true, 'Why no eggs?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water']
    }
});

/**
 * Searching for records
 */

var Athlete = mongoose.model('Athlete', yourSchema);
// find all athletes who play tennis, selecting the 'name' and 'age' fields

Athlete.find({
    'sport': 'Tennis'
}, 'name age', function (err, athletes) {
    if (err) {
        return handleError(err);
    }
    // 'athletes' contains the list of athletes that match the criteria.
});


/**
 * if you don't specify a callback then the API will return a variable of type Query. 
 * You can use this query object to build up your query and then execute it (with a callback )  
 * later using the exec() method.
 */

// Find all athletes thet play tennis
var query = Athlete.find({
    'sport': 'Tennis'
});

// selecting the 'name' and 'age' fields

query.select('name age');
// limit our results to 5 items

query.limit(5);
// sort by age
query.sort({
    age: -1
});

// execute the query at a laster time 
query.exec(function (err, athletes) {
    if (err) {
        return handleError(err);
    }
    // athletes contains an ordered list of 5 athletes who play Tennis
});

// where()
Athlete
    .find()
    .where('sport').equals('Tennise')
    .where('age').gt(17).lt(50)
    .limit(5)
    .sort({
        age: -1
    })
    .select('name age')
    .exec(function (err, athletes) {
        if (err) {
            return handleError(err);
        }
        // athletes contains an ordered list of 5 athletes who play Tennis
    });


/**
 * Working with related documents — population
 */
// example - 1 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name: String,
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }]
});

var storySchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
});

var Story = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

// example - 2

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    _id: String.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }]
});

var storySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    tytle: String,
    fans: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


/**
 * populate()
 */
Story  
    .findOne({title: 'Bob gose sledding'})
    .populate('author')
    .exec(function (err, story) {
        if (err) {
            return handleError(err);
        }
        console.log('The author is %s', story.author.name);
        // Prints "The author is Bob Smith"
      });


/**
 * Connect to MongoDB
 */

// set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Author model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 100,
        min: 1
    },
    family_name: {
        type: String,
        required: true,
        max: 100,
        min: 1
    },
    date_of_brith: {
        type: Date,
        default: Data.now
    },
    date_of_death: {
        type: Date
    }
});

// Virtual for author's full name
authorSchema
    .virtual('fullName')
    .get(function(){
        return this.family_name + ' ' + this.first_name;
    });

// Virtual for author's URL
authorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
      });

// Export model
module.exports = mongoose.model('Author', authorSchema);


/**
 * Book model
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
});

// Virtual for book's URL
bookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
      });

// Export model 
module.exports = mongoose.model('Book', bookSchema);


/**
 * BookInstance model
 */

var BookInstanceSchema =  new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    imprint: String,
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
        default: 'Maintenance'
    },
    due_back: {
        type: Data,
        default: Date.now
    }
});

//virtual for url
BookInstanceSchema
    .virtual('url')
    .get(function (param) {
        return '/catalog/bookinstance/' + this._id;
      });

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);


// Genre model - challenge!

var genreSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

// virutal url
genreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
      });