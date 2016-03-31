/**
 * Created by tyler on 3/2/16.
 */

$( window ).load( function()
{
    $('#search').masonry( {
        itemSelector: '.item',
        isFitWidth: true} );
});


(function(){

    var accounts = "";
    var item1 = "\"item\"";
    for(var i =0; i<searchusers.length; i++) {
        accounts +=
            "<div class=" + item1 + "id = \"" + i + "\">" +
            "<a href=\"/user/" + searchusers[i].username + "\">";
            if(searchusers[i].propic == ""){
                accounts += "<img src = \"/img/templogo.png\"/>";
            }else{
                accounts +="<img src = \"" + searchusers[i].propic + "\"/>";
            }
            accounts +="<span class=\"text-content\">" + searchusers[i].username + "<\/span>" +
            "</a>" +
            "<\/div><br>";
    }
    $("#search").html(accounts);
    console.log(accounts);
})();