/**
 * Created by tyler on 2/24/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
    content: String,
    username: String,
    userid: String,
    image: String,
    propic: String,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', Comment);