var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment').schema;

var Image = new Schema({
    title: String,
    updated: { type: Date, default: Date.now },
    url: String,
    tags: [String],
    comments: [Comment]
});

module.exports = mongoose.model('Image', Image);