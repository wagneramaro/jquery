$(function(){

	$('button').click(function(){

		/*
		if($(this).hasClass('fundovermelho')){
			$(this).removeClass("fundovermelho");
		} else {
			$(this).addClass("fundovermelho");
		}
		*/
		//PODEMOS TROCAR O IF PELO COMANDO TOGGLECLASS

		$(this).toggleClass('fundovermelho');


	});

	//outros tipos de adicionar eventos

	$('button').bind('click', function(){
		alert('Clicou');
	});

	//remover evento de click
	$('button').unbind('click');



	$('button').mouseover(function(){
		$(this).addClass('fundovermelho');
	});

	$('button').mouseout(function(){
		$(this).removeClass('fundovermelho');
	});

	//outra função do jQuery para substituir mouseover e mouseout
	$('button').hover(function(){
		$(this).addClass('fundovermelho');
	}, function(){
		$(this).removeClass('fundovermelho');
	});


	//falso click

	$('#btn1').bind('click', function(){
		$('#btn2').trigger('click');
	});

	$('#btn2').bind('click', function(){
		alert('CLicou no botão 2');
	});

	//evento scroll

	$('div').bind('scroll', function(){
		console.log("Rolou a pagina");
		$(this).css('background-color', 'green');
	});

	$(window).bind('recize');

	$('#div').fadeOut();
	$('#div').fadeIn();
	
	$('#div').fadeTo('slow', 0.5);
	$('#div').fadeToggle();
	$('#div').fadeToggle();
	$('#div').slideUp();
	$('#div').slideDown();
	$('#div').slideToggle('slow');
	$('#div').slideToggle('fast');

	$(".aviso").bind("click", function(){

		$(this).slideToggle('slow');

	});



});