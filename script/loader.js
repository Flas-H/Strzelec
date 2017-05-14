
function loaderFadeOut(){
	
	$(".loader").animate({
		"opacity" : "0"
	}, 500);
	
	$(".loader").remove();
}