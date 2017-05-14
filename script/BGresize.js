
$(document).ready(resize());

var windowHeight;
var windowWidth;
var boxHeight;
var boxWidth;
var boxHeightOffset;
var boxWidthOffset;

var bg;

function resize(){

	$(window).resize(function(){
		
		//SIZE
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		
		if(windowWidth * (9 /16) >= windowHeight){
			boxWidth = windowWidth;
			boxHeight = windowWidth * (9 / 16);
		}
		else{
			boxHeight = windowHeight;
			boxWidth = windowHeight * (16 / 9);
		}
		
		//console.log(boxWidth + " " + boxHeight + " " + windowWidth + " " + windowHeight);
		
		$(".section_background").css({"height" : boxHeight, "width" : boxWidth});
		
		//POSITION
		boxHeightOffset = windowHeight - boxHeight;
		boxWidthOffset = windowWidth - boxWidth;
		
		$(".section_background").css({
			"margin-top" : boxHeightOffset / 2 + "px",
			"margin-left" : boxWidthOffset / 2 + "px"
		})
		
	})
	
}

$(document).ready(function(){
	//SIZE
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		
		if(windowWidth * (9 /16) >= windowHeight){
			boxWidth = windowWidth;
			boxHeight = windowWidth * (9 / 16);
		}
		else{
			boxHeight = windowHeight;
			boxWidth = windowHeight * (16 / 9);
		}
		
		//console.log(boxWidth + " " + boxHeight + " " + windowWidth + " " + windowHeight);
		
		$(".section_background").css({"height" : boxHeight, "width" : boxWidth});
		
		//POSITION
		boxHeightOffset = windowHeight - boxHeight;
		boxWidthOffset = windowWidth - boxWidth;
		
		$(".section_background").css({
			"margin-top" : boxHeightOffset / 2 + "px",
			"margin-left" : boxWidthOffset / 2 + "px"
		})
});
