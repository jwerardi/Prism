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
                maxlength: 40
            },
            "propic": {
                url: true,
                extension: "jpg|png|gif"
            },
            "name": {
                required: true,
                maxlength: 40
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
    $("#uploadform").validate({
        rules: {
             "title" : {
                required: false
            },
            "singleFile": {
                required: true,
                extension: "jpg|png|gif|jpeg"
            }
        },
        messages: {
            "title": {
                required: "TITLE REQUIRED"
            },
            "singleFile": {
                required: "FILE REQUIRED",
                extension: "JPG/PNG/GIF/JPEG REQUIRED"
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errors' 
        
    });

    $('#filesize').bind('change', function() {
        if(this.files[0].size>10485760){
            //alert("MAX FILE SIZE: 10mb");
            document.getElementById("submitbtn").disabled = true;
            $('#error').html("MAX FILE SIZE: 10mb");
        }else{
            document.getElementById("submitbtn").disabled = false;
            $('#error').html("");
        }
        //this.files[0].size gets the size of your file.

    });
});