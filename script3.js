//para saber se um elemento existe
if( $('#algo').length > 0){
	alert('Existe!');
} else {
	alert('Não Existe');
}

//saber se um elemento tem uma classe
if( $('#algo').hasClass('testeClasse1')){
	alert('Existe a classe!');
} else {
	alert('Não Existe a classe');
}


if($('#cpf').attr('checked', true)){
   $('#cnpjCampo').attr('disabled', true);
}else if($('#cnpj').attr('checked', true)){
   $('#cnpjCampo').attr('disabled', false);
   $('#cpfCampo').attr('disabled', true);
}

//pegar item selecionado do select
$('#idade').val();

//outra opção
$('#idade').find('option').eq(1).attr('selected', 'selected');

//alterar terceiro elemento
$('#lista').find('li').eq(2).html('Item Alterado').css('color', 'red');

$('#lista').find('li').eq(7).remove();

//pegar elemento nativo javascript
$('li')[2];