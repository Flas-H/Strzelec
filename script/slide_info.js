
var rullerTime = 200;
var buttonTime = 200;
var textTime = 400;
var slideInOffset = 0;
var rotateTime = 700;

$(document).ready(function(event){
	
	var id;
	var text;
	var previousText = null;
	var ruller;
	var previousRuller = null;
	var button;
	var previousButton = null;
	var direction;
	var previousDirection = null;
	
	$(".info_icon").click(function(){
		
		var time = 0;
		previousText = text;
		previousButton = button;
		previousRuller = ruller;
		previousDirection = direction;
		
		if(previousText != null){
			
			slideInRuller(previousRuller);
			time += rullerTime - slideInOffset;
			
			setTimeout(slideOutText, time, previousText, previousDirection);
			time += textTime;
			
			setTimeout(slideOutRuller, time, previousRuller);
			time += rullerTime;
			
			setTimeout(slideInButton, time, previousButton);
			time += buttonTime;
			
		}
		
		id = $(this).data("id");
		text = $("#" + id + "_Text");
		ruller = $("#" + id + "_Ruller");
		button = $("#" + id + "_Button");
		direction = $("#section_" + id).data("direction");
		
		setTimeout(slideOutButton, time, button);
		time += buttonTime;
		
		setTimeout(slideInRuller, time, ruller);
		time += rullerTime - slideInOffset	;
		
		setTimeout(slideInText, time, text, direction);
		time += textTime;
		
		setTimeout(slideOutRuller, time, ruller);
		time += rullerTime;
			
	});
	
	
	$(".info_icon").hover(function(event){
		
		if(!$("*").is(":animated")){
			//console.log($(this).attr("id"))	;
			$(this).css({
				"transform" : "rotate(135deg)",
				"transition" : rotateTime / 1000 + "s"
			});
		}
	}, function(event){
		
		$(this).css({
			"transform" : "rotate(0deg)",
			"transition" : rotateTime / 1000 + "s"
		});
		
	})
	
});

function slideOutText(object, direction){
	
	if(direction == "right-top" || direction == "right-down"){
		
		object.animate({
			"width" : "0px",
			"padding-top" : "0px",
			"padding-bottom" : "0px",
			"padding-left" : "0px",
			"padding-right" : "0px",
			"margin-left" : "34vw"
		}, textTime);
		
	}
	else{
		object.animate({
			"width" : "0px",
			"padding-top" : "0px",
			"padding-bottom" : "0px",
			"padding-left" : "0px",
			"padding-right" : "0px"
		}, textTime);
	}
}

function slideInText(object, direction){
	
	var maxWidth = 30;
	var maxPadding = 2;
	console.log(direction);
	
	if(direction == "right-down" || direction == "right-top"){
		
		object.animate({
			"margin-left" : "0vw",
			"width" : maxWidth + "vw",
			"padding-top" : maxPadding + "vh",
			"padding-bottom" : maxPadding + "vh",
			"padding-left" : maxPadding + "vw",
			"padding-right" : maxPadding + "vw"
		}, textTime);
		
	}
	else{
		object.animate({
			"width" : maxWidth + "vw",
			"padding-top" : maxPadding + "vh",
			"padding-bottom" : maxPadding + "vh",
			"padding-left" : maxPadding + "vw",
			"padding-right" : maxPadding + "vw"
		}, textTime);
	}
}

function slideOutButton(object){
	
	object.animate({
		"transform" : "rotateX(360deg)",
		"opacity" : "0"
	}, buttonTime);
	
}

function slideInButton(object){
	
	object.animate({
		"transform" : "rotateX(-360deg)",
		"opacity" : "1"
	}, buttonTime);
	
}

function slideOutRuller(object){
	
	object.animate({
		"height" : "0vh"
	}, rullerTime);
	
}

function slideInRuller(object){
	
	object.animate({
		"height" : "31vh"
	}, rullerTime);
	
}

function crossGlintFadeIn(section){
	
	var object = $(".icon-plus[data-section = \"" + section + "\"");
	var standardFontSize = "3vw";
	
	var animationStepTime = 1000;
	
	object.animate({
		"font-size" : standardFontSize,
		"opacity" : "1"
	}, animationStepTime);
	
	//console.log("fadeIn section " + section);
}

function crossGlintFadeOut(section){
	
	var object = $(".icon-plus[data-section = \"" + section + "\"");
	var maxFontSize = "50vw";
	
	object.css({
		"font-size" : maxFontSize,
		"opacity" : "0"
	})
	//console.log("fadeOut " + section);
}