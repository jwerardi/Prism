/**
 * Created by tyler on 2/24/16.
 */
/**
 * Created by tyler on 2/21/16.
 */

//VERY simple way of adding comments to page
$(document).ready(function () {
    var comments ="";
    if(thisimage != " "){
        console.log(thisimage.url);
        $("#howmanycomments").html(thisimage.comments.length + " Comments" + "<br>"+ "<br>");
        comments += "<br>";
        for(var j =0; j<thisimage.comments.length; j++) {
            if (thisimage.comments[j].userid == loggeduser._id) {
                comments +=
                    "<a href=\"/user/" + thisimage.comments[j].username + "\">" +
                    "<img src=\"" + thisimage.comments[j].propic + "\" width=\"25\" height=\"25\"/>" +
                    "</a>" +
                    "<span class=\"comment\"><span> " + thisimage.comments[j].username + ": " + thisimage.comments[j].content +
                    "<\/span><\/span>" +
                    "<a href=\"/delete/" + thisimage.userid + "/" + thisimage._id + "/" + thisimage.comments[j]._id+ "\">"+
                    "<button type=\"button\" class=\"btn btn-primary\">delete<\/button><\/a>" + "</a>" + "<br>" + "<br>";
            } else {
                comments +=
                    "<a href=\"/user/" + thisimage.comments[j].username + "\">" +
                    "<img src=\"" + thisimage.comments[j].propic + "\" width=\"25\" height=\"25\"/>" +
                    "</a>" +
                    "<span class=\"comment\"><span> " + thisimage.comments[j].username + ": " + thisimage.comments[j].content
                    + "<\/span><\/span>" + "<br>" + "<br>";
            }
        }
        console.log(comments);
        $("#comments").html(comments);
    }



    // Replace source
    $('img').error(function(){
        $(this).attr('src', '/img/templogo.png');
    });
});

