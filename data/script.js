$(function(){

	var horaescolhidaCampo;

	$('input').bind('focus', function(){
		var pos = $(this).offset();
		var width = $(this).width();

		$('.horaescolhida').css('left', pos.left + width + 5);
		$('.horaescolhida').css('top', pos.top );
		$('.horaescolhida').show();

		horaescolhidaCampo = $(this);
	});


	$('input').bind('blur', function(){
		setTimeout(function(){
			$('.horaescolhida').hide();
		}, 200);
		
	});

	$('.horaescolhida button').bind('click', function(){
		var hora = $(this).html();
		horaescolhidaCampo.val(hora);
	})



});