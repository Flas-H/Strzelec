
	var relativeMousePosX = 0;
	var relativeMousePosY = 0;

	var maxTillVertical = 10;
	var maxTillHorizontal = 10;
	
	var pageWidth = $(window).width();
	var pageHeight = $(window).height();
	var logoWidth = pageWidth * 0.22;
	var logoHeight = pageHeight * 0.4;
	
	var tillX = 0;
	var tillY = 0;
	var tillXFactor = 0;
	var tillYFactor = 0;
	
	
	$(window).resize(function(){
		
		pageWidth = $(window).width();
		pageHeight = $(window).height();
		
		logoWidth = $(".side-bar_logo").outerWidth(true);
		logoHeight = $(".side-bar_logo").outerHeight(true);
		
		//moveToSlide(event);
	});
	
	$(document).ready(function(){
		$(".side-bar_logo_image").hover(logoFXEnter, logoFXLeave);
	});
	
	function logoFXEnter(){
		$(".side-bar_logo_image").mousemove(function(event){
				
				
			relativeMousePosX =
				event.pageX - (pageWidth - pageWidth * 0.05 - logoWidth / 2);
				
			relativeMousePosY = 
				event.pageY - logoHeight / 2 - (position + 1) * pageHeight;
				
			tillFactorX = relativeMousePosX / (logoWidth / 2);
			tillFactorY = relativeMousePosY / (logoHeight / 2);
				
			tillX = maxTillHorizontal * tillFactorY
			tillY = maxTillVertical * tillFactorX;
				
			//console.log(relativeMousePosY);
				
			$(".side-bar_logo_image").css({
				"transform" : "rotateX(" + -tillX + "deg) rotateY(" + tillY + "deg)",
				"transition" : "0s"});
		});
	}
	
		
	function logoFXLeave(){
		//$(".side-bar_logo_image").off("mousemove");
		$(".side-bar_logo_image").css({
			"transform" : "rotateX(0deg) rotateY(0deg)",
			"transition" : "1s"});
	}
		