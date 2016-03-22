/**
 * Created by tyler on 3/10/16.
 */
/**
 * Created by tyler on 3/10/16.
 */
/**
 * Created by tyler on 3/9/16.
 */

$( window ).load( function(){
    var following = "";
    console.log("hello");
    if (typeof userFollowing!= 'undefined') {
        for(var i=userFollowing.length-1; i >= 0; i--) {
            following +=
                "<a href=\"/user/" + userFollowing[i].username + "\">" +
                "<img src=\"" + userFollowing[i].propic + "\" width=\"100\" height=\"auto\"/>"+
                "</a>" +
                "<span class=\"comment\"><span> " + userFollowing[i].username + "<\/span><br><br>";
            console.log(following);
        }
        if(following == ""){
            $('#following').html("This user is not following anyone yet.");
        }else{
            $('#following').html(following);
        }

    }

});
