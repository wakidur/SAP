/*
* SchemaTypes
* SchemaTypes handle definition of path 
	defaults, 
	validation
	getters,
	setters,
	field selection default for queries
	
	** The following are all the valid SchemaTypes in mongoose.
	
	* String
	* Number
	* Date
	* Buffer
	* Boolean
	* Mixed
	* ObjectId
	* Array
	* Decimal128


*/

var Schema = mongoose.Schema;
var mySchema = new Schema({
	name: String,
	binary: Buffer,
	living: Boolean,
	update: {
		type: Date,
		default: Date.now
	},
	age: {
		type: Number,
		min: 18,
		max: 69
	},
	mixed: Schema.Type.Mixed,
	someId: Schema.Type.ObjectId,
	decimal: Schema.Type.Decimal128,
	array: [],
	ofString: [String],
	OfNumber: [Number],
	ofDates: [Date],
	ofBuffer: [Buffer],
	ofBoolean: [Boolean],
	ofMixed: [Schema.Types.Mixed],
	ofObjectId: [Schema.Types.ObjectId],
	ofArray: [
		[]
	],
	ofArrayOfNumbers: [
		[Number]
	],
	nested: {
		stuff: {
			type: String,
			lowercase: true,
			trim: true
		}
	}
})