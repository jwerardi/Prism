/**
 * Created by tyler on 2/24/16.
 */
/**
 * Created by tyler on 2/21/16.
 */

//VERY simple way of adding the images to the profile
$(document).ready(function () {
    var comments ="";
    if(thisimage != " "){
        console.log(thisimage.url);
        console.log(thisimage.comments.length);
        for(var j =0; j<thisimage.comments.length; j++){
            comments +=
                "<span class=\"comment\"><span>" + thisimage.comments[j].username + ": " + thisimage.comments[j].content + "<\/span><\/span>"+"<br>"+"<br>";
        }
        console.log(comments);
        $("#comments").html(comments);
    }
});
