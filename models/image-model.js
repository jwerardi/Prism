var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
    title: String,
    updated: { type: Date, default: Date.now },
    url: String,
    tags: [String]
});

module.exports = mongoose.model('Image', Image);