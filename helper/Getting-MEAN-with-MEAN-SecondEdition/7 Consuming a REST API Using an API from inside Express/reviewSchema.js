/**
 * Adding validation to reviews at the schema level
 */
const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});