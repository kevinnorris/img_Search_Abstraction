var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchSchema = new Schema({
    term: String,
    offset: Number,
    when: String
});

// Set date before saving
searchSchema.pre('save', function(next) {
    var date = new Date();
    this.when = date.toString();
    next();
});

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;