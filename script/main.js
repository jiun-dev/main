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




