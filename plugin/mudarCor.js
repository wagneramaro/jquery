(function($){
	$.fn.mudarCor = function(cor){
		this.each(function(){
			$(this).css('color', cor);
			$(this).css('text-decoration', 'none');

			$(this).hover(function(){
				$(this).css('background-color', '#ff0055');
			},function(){
				$(this).css('background-color', '#5588ff');
			});
		});

		return this;
	}
}(jQuery));