$(function(){

	$('.botao').bind('click', function(){

		$('.div').animate({
			'border-radius':75,
			'position':"absolute",
			'margin-top':"+=50",
			'margin-left':"+=50"
		}, {
			duration:1000,
			complete:function(){
				console.log("Terminou a animação");
			}
		});

	});

	$('.botao2').bind('click', function(){
		$('.div').stop();
	});



});