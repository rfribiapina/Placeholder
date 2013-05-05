(function($){
	$.fn.placeholder = function(valor){
		var $input = $(this);
		
		$input.focus(function(){
			if($input.val()==valor){ 
				$input.val("");
			}
		});
		
		$input.blur(function(){
			if($input.val()==''){ 
				$input.val(valor);
			}
		});
		
		$input.val(valor);
	}
})(jQuery)