
function loaderFadeOut(){
	
	$(".loader").animate({
		"opacity" : "0"
	}, 500);
	
	setTimeout(function(){
		$(".loader").remove();
	}, 500);
}