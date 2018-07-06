/* Author: Chris Brough
 * Date: 5-10-2012
 * ------------------------------------------------------------------------------ */

$(document).ready(function() {

    // Open Images in New Tab
    $("#content img").click(function(){
        window.open($(this).attr("src"), $(this).attr("alt"));
        return false;
    });

    $("#content img").css("cursor", "pointer");

    // Generate Table of Contents
    // Use: <ul id="toc"></ul>
    $("ul#toc").tableOfContents($("#wrapper"), { startLevel:2 });

    String.prototype.startsWith = function(str) {
        return (this.match("^"+str)==str)
    }

    // Nav Active Tab
    if(location.pathname != "/"
        && location.pathname.split("/")[1] != "post"
        && !location.pathname.startsWith("/page"))
        $('nav a[href^="/' +
            location.pathname.split("/")[1] + '"]').addClass('active');
    else $('nav a:eq(0)').addClass('active');
});
