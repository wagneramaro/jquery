
function tudoPronto(){
	alert("Pagina Carregada");
}
jQuery(document).ready(tudoPronto);

//////

/*$(function(){
	 alert("Aviso 2 - Pagina Carregada");
});*/



//estou craindo um elemento para remover com jQuery
jQuery('body').prepend('<div id="paraapagar">teste</div>');
jQuery('body').prepend('<div id="paraapagar2">Tinha outra div aqui</div>');

alert("Essa função é executada antes das outras funções. Observe as mudanças no documento");



$('a').attr('href', 'http://www.google.com.br');

//Insere o texto interpretando o html 
$('#teste1').html("Esse é o <b>conteudo</b>");

//insere o conteudo como texto puro
$('#teste2').text("Esse é o <b>conteudo</b>");

//mudar o id
$('#teste1').attr('id', 'teste3');

//selecionar div
$('#teste3');

//inserir atributo em imagem
$('#google').find('img').attr('width', '100');

//inserir largura em css
$('#google').find('img').width('200');

//adicionar valor no input
$('input').val("Inserindo conteudo no input");

//adicionar conteudo na tag value
$('input').attr('value', 'tag value preenchida');

//inserir conteúdo depois da tag - fora da tag
$('input').after("<br>Esse é o <b>conteudo depois </b><br>pulou a linha");

$('input').before("<div>Nome:</div>");

//adicionar conteúdo no que já existe no fim - dentro da tag
$('ul').append('<li>Item 5</li>');

$('ul').prepend('<li>Item 0</li>');



//remover um elemento
$('#paraapagar').remove();


//pegar segundo item da lista
var segundoitem = $('li').eq(1);

var quartoitem = $('li:eq(3)');

segundoitem.html("Item Segundo");

quartoitem.html("Item alterado");

//selecionar o elemento pai - anterior - principal
$('.filha').parent();

//selecionar a correspondencia mais proxima da classe dentro do bloco relacionado

$('.irmao').closest('.topo');


//adicionar classe css

$('h1').addClass('fundovermelho');

//remover classe css
$('h1').removeClass('fundovermelho');

if ($('h1').hasClass('fundovermelho')) {
	alert("tem sim");
} else {
	alert("não tem");
}

//adicionar propriedade css no elemento
$('h1').css("color", "#ff0000");

//armazenar dados em html
$('input').data('caracteres', $('input').val().length);


document.write('Número de caracters no campo input ' + $('input').data('caracteres'));


