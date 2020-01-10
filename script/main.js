/* scroll btn */

$(document).ready(function(){
    $('#btn1').click(function(){
        var offset = $('.div1').offset();
        $('html').animate({scrollTop : offset.top}, 800);
    });
});

$(document).ready(function(){
    $('#btn2').click(function(){
        var offset = $('#div2').offset();
        $('html').animate({scrollTop : offset.top}, 800);
    });
});

$(document).ready(function(){
    $('#btn3').click(function(){
        var offset = $('#div3').offset();
        $('html').animate({scrollTop : offset.top}, 800);
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

/* skills */

/* Credits: 
 * https://www.developphp.com/video/JavaScript/Circular-Progress-Loader-Canvas-JavaScript-Programming-Tutorial
 */

(function() {
	
	var Progress = function( element ) {
		
		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;
		
		this.diff = 0;
		
		this.init();	
	};
	
	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();	
			}, 25);
		},
		run: function() {
			var self = this;
			
			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 10;
			self.context.fillStyle = "#000";
			self.context.strokeStyle = "#d30000";
			self.context.textAlign = "center";
			
			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();
			
			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}
			
			self.loaded++;
		}
	};
	
	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();
			
		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );
			
			
			
			var timer = setInterval(function() {
				index++;
					
				var canvas = self.bars[index].querySelector( "canvas" );
				var prog = new Progress( canvas );
				
				if( index == self.bars.length ) {
						clearInterval( timer );
				} 
				
			}, self.tick * 100);
				
		}
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#bars .bar" );
	});
	
})();



