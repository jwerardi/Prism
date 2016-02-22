/**
 * Created by tyler on 2/21/16.
 */

$( window ).load( function()
{
    $( '#list' ).masonry( {
        itemSelector: '.item',
        isFitWidth: true} );
});

//VERY simple way of adding the images to the profile
$(document).ready(function () {

    var images ="";

    for(var i =0; i<currentUser.images.length;i++)
    {
        //img(src= " " + user.propic)
        images +=
            "<div class=\"item\">" +
                "<img src=\"" + currentUser.images[i] + "\"/>" +
            "</div>";
    }
    console.log(images);
    //adding photos to page on DOM
    $("#list").html(images);

});
