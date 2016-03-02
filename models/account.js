//TYLER: including mongoose for creating the schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./image-model.js').schema;
//TYLER: passport library for easily creating a salt and hash
var random = require('mongoose-simple-random');
var passportLocalMongoose = require('passport-local-mongoose');

//TYLER: the SCHEMA for storage in the database.
//TYLER: the password is really stored as a salt and hash

var Account = new Schema({
    username: String,
    fullname: String,
    password: String,
    title: String,
    propic: String,
    images: [Image]
});

Account.plugin(passportLocalMongoose);
Account.plugin(random);

module.exports = mongoose.model('Account', Account);
