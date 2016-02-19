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
});