$(document).ready(function(){
    animateDiv();
    
});
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.boss').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.boss').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });

   

    $('.enimy').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$(function(){

	$(window).bind("keydown", function(e){
		if(e.keyCode == 39){
			$('.spaceship').animate({
			
			'left':"+=5%"
		
		}, {
			duration:50,
			complete:function(){
				console.log("Terminou a animação");
			}
		});
		}
	});

	$(window).bind("keydown", function(e){
		if(e.keyCode == 37){
			$('.spaceship').animate({
			
			'left':"-=5%"
		
		}, {
			duration:100,
			complete:function(){
				console.log("Terminou a animação");
			}
		});
		}
	});

	$(window).bind("keydown", function(e){
		if(e.keyCode == 38){
			$('.spaceship').animate({
			
			'top':"-=5%"
		
		}, {
			duration:100,
			complete:function(){
				console.log("Terminou a animação");
			}
		});
		}
	});

	$(window).bind("keydown", function(e){
		if(e.keyCode == 40){
			$('.spaceship').animate({
			
			'top':"+=5%"
		
		}, {
			duration:100,
			complete:function(){
				console.log("Terminou a animação");
			}
		});
		}
	});

});

$(function(){
        var x = 0;
        setInterval(function(){
            x+=1;
            $('body').css('background-position', '0 ' + x + 'px');
        }, 8);
    });



