/* scroll btn */

$(document).ready(function(){
    $('#btn1').click(function(){
        var offset = $('#div1').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
});

$(document).ready(function(){
    $('#btn2').click(function(){
        var offset = $('#div2').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
});

$(document).ready(function(){
    $('#btn3').click(function(){
        var offset = $('#div3').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
});


/* top btn */
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#move_top_btn').fadeIn();
        } else {
            $('#move_top_btn').fadeOut();
        }
    });
    $("#move_top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

/* fade in out */

$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.introduce').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/10 ){
                $(this).animate({'opacity':'1'},800);
            }
        }); 
    });
});





