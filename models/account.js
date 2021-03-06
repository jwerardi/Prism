//TYLER: including mongoose for creating the schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TYLER: passport library for easily creating a salt and hash
var passportLocalMongoose = require('passport-local-mongoose');

//TYLER: the SCHEMA for storage in the database.
//TYLER: the password is really stored as a salt and hash
var Account = new Schema({
    username: String,
    password: String,
    title: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
