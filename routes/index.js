var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


//receives the index view along with request.user, the jade file will then decide which version of the home page to display depending
//on if the user is currently authenticated.
router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});

//receives the register view which has a register form
router.get('/register', function(req, res) {
  res.render('register', { });
});

//all of the register form information is then passed to a new Account model, and redirected to the index view, but this time will be prompted with
//a view of their profile
router.post('/register', function(req, res) {
  //registers a new account with the following information complete from the form
  Account.register(new Account({ username : req.body.username, fullname: req.body.name, title : req.body.title, propic: req.body.propic}), req.body.password, function(err, account) {
    if (err) {
      //if the username is not unique, let them know in "info"
      return res.render("register", {info: "Sorry. That username already exists. Try again."});
    }
    //authenticate and redirect to the index and show the profile
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

//gets the login page and passes it the logged in user
router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

//send a request to login and handle any errors that may arise
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.render("login", {info: "Sorry, your credentials are invalid."});
    }
    req.login(user, function(err){
      if(err){
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
});

/*
//attempt to authenticate the user's credentials
router.post('/login', passport.authenticate('local'), function(req, res) {
  if (err) {
    //if the authentication is not successfull
    return res.render("login", {info: "Invalid Credentials"});
  }else{
    res.redirect('/');
  }
});
*/

//IN PROGRESS when a user wants to see another user's profile
router.get('/user/:username', function (req, res, next) {
  Account.findByUsername(req.params.username, function(err, usr){
    return res.render("user", {usr: usr});
  });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});
router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;

