function addBola() {
	var largura = $('body').width()-50;
	var altura = $('html').height()-50;

	var x = Math.floor(Math.random()*largura);
	var y = Math.floor(Math.random()*altura);
	var cor = Math.floor(Math.random()*4);

	var bola = $('<div class="bola"></div>')
	bola.css('left', x+'px');
	bola.css('top', y+'px');

	switch(cor){
		case 0:
			bola.css('background-color', 'blue');
			break;
		case 1:
			bola.css('background-color', 'red');
			break;
		case 2:
			bola.css('background-color', 'yellow');
			break;
		case 3:
			bola.css('background-color', 'black');
			break;
		case 4:
			bola.css('background-color', 'green');
			break;
	}


	bola.bind('click', function(){
		$(this).fadeOut('fast');
		placar++;
		updatePlacar();
	});

	
	if(x > 150 || y > 150){
		$(document.body).append(bola);
	}
	
}



function updatePlacar(){
	$('#placar').html(placar);
}

var placar = 0;


$(function(){

	$('#comecar').bind('click', function(){

		setInterval(addBola, 200);
	});


});