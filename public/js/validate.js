/**
 * Created by tyler on 2/18/16.
 */

$(document).ready(function () {
    //validation rules
    $("#login").validate({
        rules: {
            "name": {
                required: true
            },
            "password": {
                required: true
            }
        },
        messages: {
            "name": {
                required: "USERNAME REQUIRED"
            },
            "password": {
                required: "PASSWORD REQUIRED"
            }
        }
    });
});