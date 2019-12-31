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






