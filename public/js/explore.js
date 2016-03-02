/**
 * Created by tyler on 3/2/16.
 */

(function(){

    var accounts = "";
    for(var i =0; i<randusers.length; i++){
        accounts+=
            "<div class = \"randaccount\">" +
            "<a href=\"/user/" + randusers[i].username + "\">" +
            "<img src = \""+randusers[i].propic+ "\" width=\"150\" height=\"150\"/>"+"\">" +
            "</a>" +
            "<span class = \"randname\">"+randusers[i].username+"<\/span>" +
            "<\/div>"
    }
    $("#accounts").html(accounts);
    console.log(randusers[1].username);
})();