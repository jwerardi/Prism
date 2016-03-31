var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment').schema;
var random = require('mongoose-simple-random');

var Image = new Schema({
    username: String,
    userid: String,
    title: String,
    updated: { type: Date, default: Date.now },
    url: String,
    tags: [String],
    key: String,
    comments: [Comment]
});

Image.plugin(random);
module.exports = mongoose.model('Image', Image);