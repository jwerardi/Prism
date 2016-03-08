/**
 * Created by tyler on 3/2/16.
 */

$( window ).load( function()
{
    $('#accounts').masonry( {
        itemSelector: '.item',
        isFitWidth: true} );
});


(function(){

    var accounts = "";
    var item1 = "\"item\"";
    for(var i =0; i<randusers.length; i++){
        /*
        images +=
            "<div class=" +item1 + "id = \"" + [i] + "\">" +
            "<a href=\"/user/" + randimages[i].username + "\">" +
            "<img src = \""+randimages[i].url+ "\" width=\"150\" height=\"150\"/>" +
            "<span class=\"text-content\"><span>" + randimages[i].title  +"<\/span><\/span>" +
            "</a>" +
            "</div>";
        console.log(images);
        */
        accounts+=
            "<div class=" +item1 + "id = \"" + i + "\">" +
            "<a href=\"/user/" + randusers[i].username + "\">" +
            "<img src = \""+randusers[i].propic+ "\" width=\"150\" height=\"150\"/>"+
            "<span class=\"text-content\">" + randusers[i].username  +"<\/span>" +
            "</a>"+
            "<\/div><br>";
        /*
            for(var j=0; j < randusers[i].images.length; j ++){

                accounts +=

                "<img src = \""+randusers[i].images[j].url+ "\" width=\"150\" height=\"150\"/>" +

            }
            */
    }
    $("#accounts").html(accounts.toString());
    console.log(accounts);
})();