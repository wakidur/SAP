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