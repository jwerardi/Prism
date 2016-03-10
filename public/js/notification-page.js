/**
 * Created by tyler on 3/9/16.
 */

$( window ).load( function(){
    var notifications = "";

    if (typeof notifuser.notifications != 'undefined') {
        for(var i=notifuser.notifications.length-1; i >= 0; i--) {
            console.log(notifuser.notifications[i].content);

            console.log(notifications);
            notifications +=
                "<a href=\"" + notifuser.notifications[i].link + "\">" +
                "<img src=\"" + notifuser.notifications[i].preview + "\" width=\"100\" height=\"auto\"/>"+
                "</a>" +
                "<span class=\"comment\"><span> " + notifuser.notifications[i].content + "<\/span><br>";
            console.log(notifications);
        }
        if(notifications == ""){
            $('#feed').html("No notifications to show.");
        }else{
            $('#feed').html(notifications);
        }

    }

});
