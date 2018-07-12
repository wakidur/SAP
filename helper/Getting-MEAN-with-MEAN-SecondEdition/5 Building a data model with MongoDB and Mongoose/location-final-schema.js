// Require Mongoose so that we can use its methods
const mongoose = require('mongoose');

// Define a schema for opening times
const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

// Define a schema for opening times
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// Start main location schema definition
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: [Number],
        index: '2dsphere' // Use 2dsphere to add support for GeoJSON longitude and latitude coordinate pairs
    },
    // Reference opening times and reviews schemas to add nested subdocuments
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});