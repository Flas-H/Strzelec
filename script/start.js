
$(document).ready(
	function(){
		$("#title_logo_section1").fadeIn(500);
		setTimeout(function(){
			$("#title_logo_section1").animate({left: '0vw'}, 500);
			$("#title_viewport_image_section1").animate({left: '0vw'}, 500);
		}, 500);
		setTimeout(function(){
			$("#title_text_section1").animate({top: '-15vh'}, 500);
			$("#title_logo_section1").animate({top: '-15vh'}, 500);
		}, 1000);
		setTimeout(function(){
			$("#title_subtitle_text_section1").animate({top: '0vh'}, 500);
		}, 1500);
		setTimeout(function(){
			$("#subtitle_section1").fadeIn(500);
		}, 3000);
	});
	
var scrolledTop = false;
	
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});