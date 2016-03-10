/**
 * Created by tyler on 3/9/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Notification = new Schema({
    content: String,
    from: String,
    updated: { type: Date, default: Date.now },
    to: String,
    seen: Boolean,
    link: String,
    preview: String,
});

module.exports = mongoose.model('Notification', Notification);