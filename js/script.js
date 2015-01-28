function disableBodyScroll(){
    //Add right margin to keep page from jumping right:
    $('body').css( 'margin-right', window.innerWidth - $('body').width() ).addClass("noScroll");
}

function enableBodyScroll(){
    //Remove right margin added:
    $('body').css( 'margin-right', 0).removeClass("noScroll");
}




$(function(){

    //Scroll to top
    $("#scrollTop").on("click", function(){
        jQuery('html,body').animate({scrollTop:"0px"},500);
    });

    //Hide Old Browser Message
    $("#outdated #btnClose").on("click", function(){
        $("#outdated").fadeOut();
    });

})