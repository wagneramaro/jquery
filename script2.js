//remover espaços que o jquery pega
var valor = $.trim($('#algo').html());
document.write(valor);

//loop do jquery
$('li').each(function(){
	document.write("<br>" + $(this).html() );
});

//tipo da variavel
var idade = 90;
document.write("<br>" +$.type(idade));


//verificar se uma varíavel é um numero
$.isNumeric(idade);

if($.isNumeric(idade)){
	alert('Sim, é um numero');
}