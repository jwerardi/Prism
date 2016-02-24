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
    var item1 = "\"item\"";
    var item2 = "\"item grid-item--width2\"";
    var images ="";

    for(var i = currentUser.images.length-1; i>0;i--)
    {
        if (typeof currentUser.images[i].url != 'undefined'){
            //console.log(currentUser.images[i].url);
            //img(src= " " + user.propic)
            images +=
                "<div class=" +item1 + "id = \"" + [i] + "\">" + "<a href=\"/images/" + currentUser._id + "/" + i +"\">" +
                "<img src=\"" + currentUser.images[i].url + "\"/>" + "</a>" +
                "</div>";
        }

    }
    //console.log(images);
    //adding photos to page on DOM
    $("#list").html(images);

});
