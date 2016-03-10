/**
 * Created by tyler on 2/18/16.
 * Edited by James on 3/2/16
 */
$.validator.addMethod( "lettersonly", function( value, element ) {
    return this.optional( element ) || /^[a-z0-9]+$/i.test( value );
}, "Letters and/or numbers only please" );

$(document).ready(function () {
    /**
     * Created by tyler on 2/24/16.
     */
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: console.log("left");
                $('#back').trigger('click');
                break;

            case 39: console.log("right");
                $('#next').trigger('click');
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
    //validation rules
    $("#login").validate({
       
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
        },
         errorElement : 'div',
        errorLabelContainer: '.errors'
    });
    $("#register").validate({
        rules: {
            "username": {
                required: true,
                lettersonly : true,
                maxlength: 20
            },
            "password": {
                required: true
            },
            "title" : {
                required: true,
                maxlength: 30
            },
            "propic": {
                url: true,
                extension: "jpg|png|gif"
            },
            "name": {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            "username": {
                required: "USERNAME REQUIRED",
                lettersonly : "USERNAME CAN ONLY CONTAIN LETTERS OR NUMBERS",
                maxlength: "USERNAME CANNOT BE LONGER THAN 20 CHARACTERS"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            },
            "title" : {
                required: "TITLE REQUIRED",
                maxlength: "TITLE CANNOT BE LONGER THAN 20 CHARACTERS"
            },
            "propic": {
                url:"VALID URL REQUIRED",
                extension: "JPG/PNG/GIF REQUIRED"
            },
            "name": {
                required: "NAME REQUIRED",
                maxlength: "NAME CANNOT BE LONGER THAN 20 CHARACTERS"
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errors'
    });
    $("#update").validate({
        rules: {
            "username": {
                required: true,
                lettersonly : true,
                maxlength: 20

            },
            "password": {
                required: true
            },
            "title" : {
                required: "TITLE REQUIRED",
                maxlength: "TITLE CANNOT BE LONGER THAN 20 CHARACTERS"
            },
            "propic": {
                url: true,
                extension: "jpg|png|gif"
            },
            "name": {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            "username": {
                required: "USERNAME REQUIRED",
                lettersonly : "USERNAME CAN ONLY CONTAIN LETTERS OR NUMBERS",
                maxlength: "USERNAME CANNOT BE LONGER THAN 20 CHARACTERS"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            },
            "title" : {
                required: "TITLE REQUIRED",
                maxlength: "TITLE CANNOT BE LONGER THAN 20 CHARACTERS"
            },
            "propic": {
                url:"VALID URL REQUIRED",
                extension: "JPG/PNG/GIF REQUIRED"
            },
            "name": {
                required: "NAME REQUIRED",
                maxlength: "NAME CANNOT BE LONGER THAN 20 CHARACTERS"
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errors'
    });
    $("#upload").validate({
        rules: {
             "title" : {
                required: false
            },
            "photo": {
                required: true,
                url: true,
                extension: "jpg|png|gif"
            }
        },
        messages: {
            "title": {
                required: "TITLE REQUIRED"
            },
            "photo": {
                required: "URL REQUIRED",
                url:"VALID URL REQUIRED",
                extension: "JPG/PNG/GIF REQUIRED"
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errors' 
        
    });
});