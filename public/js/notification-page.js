/**
 * Created by tyler on 3/9/16.
 */

$( window ).load( function(){
    var notifications = "";

    if (typeof notifuser.notifications != 'undefined') {
        for(var i=notifuser.notifications.length-1; i >= 0; i--) {
            console.log(notifuser.notifications[i].content);
            notifications += "<a href=\"" + notifuser.notifications[i].link + "\">" +
            "<p>" + notifuser.notifications[i].content + "</p></a>";
            console.log(notifications);
        }
        $('#feed').html(notifications);
    }

});
