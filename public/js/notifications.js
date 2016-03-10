/**
 * Created by tyler on 3/9/16.
 */
$( window ).load( function()
{
    $( '#list' ).masonry( {
        itemSelector: '.item',
        isFitWidth: true} );
});

//VERY simple way of adding the images to the profile
$(document).ready(function () {

    if(currentUser != " ") {
        if (typeof currentUser.notifications != 'undefined') {
            console.log(currentUser.notifications.length);
            $("#notifications").html(currentUser.notifications.length);

        }
    }
    $('#notifications').click(function(){
        var notifications = "";
        for(var i=0; i < currentUser.notifications.length; i++) {
            notifications += currentUser.notifications[i].content + " " + currentUser.notifications[i].seen;
            console.log("/notification/"+ currentUser._id + "/" + currentUser.notifications[i]._id + "/seen");
            $.ajax("/notification/"+ currentUser._id + "/" + currentUser.notifications[i]._id + "/seen", {
                success: function(data) {
                    console.log("success");
                },
                error: function() {
                    console.log("not success");
                }
            });
        }

        console.log(notifications);

    });

});
