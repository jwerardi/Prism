/**
 * Created by tyler on 3/10/16.
 */
/**
 * Created by tyler on 3/9/16.
 */

$( window ).load( function(){
    var followers = "";
    console.log("hello");
    if (typeof userFollowers != 'undefined') {
        for(var i=userFollowers.length-1; i >= 0; i--) {
            followers +=
                "<a href=\"/user/" + userFollowers[i].username + "\">" +
                "<img src=\"" + userFollowers[i].propic + "\" width=\"100\" height=\"auto\"/>"+
                "</a>" +
                "<span class=\"comment\"><span> " + userFollowers[i].username + "<\/span><br>";
            console.log(followers);
        }
        if(followers == ""){
            $('#followers').html("No notifications to show.");
        }else{
            $('#followers').html(followers);
        }

    }

});
