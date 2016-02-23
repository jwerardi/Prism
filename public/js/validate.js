/**
 * Created by tyler on 2/18/16.
 */

$(document).ready(function () {
    //validation rules
    $("#login").validate({
        errorLabelContainer: '#errors',
        rules: {
            "username": {
                required: true
            },
            "password": {
                required: true
            }
        },
        messages: {
            "username": {
                required: "USERNAME REQUIRED"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            }
        }
    });
    $("#register").validate({
        errorLabelContainer: '#errors',
        rules: {
            "username": {
                required: true
            },
            "password": {
                required: true
            },
            "title" : {
                required: true
            },
            "propic": {
                url: true,
                extension: "jpg|png"
            },
            "name": {
                required: true
            }
        },
        messages: {
            "username": {
                required: "USERNAME REQUIRED"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            },
            "title" : {
                required: "TITLE REQUIRED"
            },
            "propic": {
                extension: "JPG/PNG REQUIRED"
            },
            "name": {
                required: "NAME REQUIRED"
            }
        }
    });
    $("#update").validate({
        rules: {
            "username": {
                required: true
            },
            "password": {
                required: true
            },
            "title" : {
                required: true
            },
            "propic": {
                url: true,
                extension: "jpg|png"
            },
            "name": {
                required: true
            }
        },
        messages: {
            "username": {
                required: "USERNAME REQUIRED"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            },
            "title" : {
                required: "TITLE REQUIRED"
            },
            "propic": {
                extension: "JPG/PNG REQUIRED"
            },
            "name": {
                required: "NAME REQUIRED"
            }
        }
    });
    $("#upload").validate({
        rules: {
             "title" : {
                required: true
            },
            "photo": {
                required: true,
                url: true,
                extension: "jpg|png"
            }
        },
        messages: {
            "title": {
                required: "TITLE REQUIRED"
            },
            "photo": {
                required: "URL REQUIRED",
                url:"VALID URL REQUIRED",
                extension: "JPG/PNG REQUIRED"
            },
        },
        errorElement : 'div',
        errorLabelContainer: '.errors' 
        
    });
});