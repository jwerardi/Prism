/**
 * Created by tyler on 2/21/16.
 */

//VERY simple way of adding the images to the profile
$(document).ready(function () {
    var images ="";
    for(var i =0; i<currentUser.images.length;i++)
    {
        //img(src= " " + user.propic)
        images += " <img src=\"" + currentUser.images[i] + "\" + style=\"width:600px;height:400px;\">";
    }
    //adding photos to page on DOM
    $("#photos").html(images);

});
