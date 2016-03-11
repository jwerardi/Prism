/**
 * Created by tyler on 3/11/16.
 */
/**
 * Created by tyler on 3/10/16.
 */
/**
 * Created by tyler on 3/9/16.
 */


$( window ).load( function(){
    var feed = " ";
    console.log("hello");
    console.log(newsFeed[0].username);
    if (typeof newsFeed != 'undefined') {
        for(var i=newsFeed.length-1; i >= 0; i--) {
            feed +=

                "<div id =\"newsFeedObject\">" +
                    "<a href=\"/img/" + newsFeed[i].imageid+ "\">" +
                        "<img src=\"" + newsFeed[i].picture + "\"/>"+
                    "</a>" +
                    "<br><div id=\"newsFeedTitle\"><h1>" + newsFeed[i].title + "</h1><\/div><br><br>" +
                    "<a href=\"/user/" + newsFeed[i].username+ "\">" +
                        "<div id=\"newsFeedUser\"> By: " + newsFeed[i].username + "<\/div><br><br>" +
                    "</a>";

                if(newsFeed[i].comments.length == 1){
                    feed +=
                        "<a href=\"/img/" + newsFeed[i].imageid+ "\">" +
                        "<div id=\"newsFeedComments\">" + newsFeed[i].comments.length + " Comment <\/div><br><br>" +
                        "</a>";
                }else{
                    feed+=
                        "<a href=\"/img/" + newsFeed[i].imageid+ "\">" +
                        "<div id=\"newsFeedComments\">" + newsFeed[i].comments.length + " Comments <\/div><br><br>" +
                        "</a>";
                }

                feed +="</div>";
            //console.log(feed);
        }
        if(newsFeed == " "){
            $('#newsfeed').html("You need to follow users to have content here");
        }else{
            $('#newsfeed').html(feed);
        }

    }

});
