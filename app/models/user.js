// Get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

// Set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));

