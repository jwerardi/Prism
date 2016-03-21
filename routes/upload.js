/**
 * Created by tyler on 3/20/16.
 */
var _ = require('underscore'),
    AWS = require('aws-sdk'),
    fs = require('fs'),
    path = require('path'),
    flow = require('flow');

var Account = require('../models/account');
var Image = require('../models/image-model.js');

/*
var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET;
*/

configPath = path.join(__dirname, '..', "config.json");
//AWS.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
AWS.config.loadFromPath(configPath);

exports.s3 = function(req, res) {
    var unique_id = '_' + Math.random().toString(36).substr(2, 9);
    unique_id+=".jpg";
    var s3 = new AWS.S3(),
        file = req.file,
        result = {
            error: 0,
            uploaded: []
        };

    flow.exec(
        function() { // Read temp File
            fs.readFile(file.path, this);
        },
        function(err, data) { // Upload file to S3
            s3.putObject({
                Bucket: 'prismapp', //Bucket Name
                Key: unique_id, //Upload File Name, Default the original name
                Body: data
            }, this);
        },
        function(err, data) { //Upload Callback
            if (err) {
                console.error('Error : ' + err);
                result.error++;
            }
            result.uploaded.push(data.ETag);
            this();
        },
        function() {

            if(!req.body.title){
                var newImage = new Image({username: req.user.username, userid: req.user.id, key: unique_id,
                    title: "Untitled.", url: "https://s3-us-west-2.amazonaws.com/prismapp/" + file.originalname});
            }else{
                var newImage = new Image({username: req.user.username, userid: req.user.id, key: unique_id,
                    title: req.body.title, url: "https://s3-us-west-2.amazonaws.com/prismapp/" + file.originalname});
            }
            newImage.save(function(err) {
                if (err) throw err;

                console.log('Image created!');
            });

            //push the new image onto the user's image array
            req.user.images.push(newImage);

            //save user to have the new image object
            req.user.save(function(err) {
                if (err)
                    console.log('error while attempting to update' + req.user.username);
                else{
                    console.log("updated: " + req.user.username);
                }
            });

            res.redirect('/');
            fs.unlink(file.path, function(err){
                console.log("somethung");
            });
        });
};

exports.delete = function(req, res) {
    console.log("hello");
    var s3 = new AWS.S3();
    s3.deleteObjects({

        Bucket: 'prismapp',
        Delete: {
            Objects: [
                {Key: req.params.key}
            ]
        }
    }, function (err, data) {

        if (err) {
        return console.log(err);
        }
        else{
        Account.findOne({'images._id': req.params.imageid}, {'images.$': 1}, function (err, usr) {
            if (usr) {
                Account.findByIdAndUpdate(usr._id, { $pull: { 'images': { _id: req.params.imageid } }}, function(err,model){
                    if(err){
                        return res.render('error', {message: "Could not retrieve account"});
                    }else{
                        Image.findById(req.params.imageid, function(err, img) {
                            if (img) {
                                img.remove();
                                return res.redirect("/");
                            }
                        });
                    }
                });
            }
        });
            console.log('success');
        }

    });
};