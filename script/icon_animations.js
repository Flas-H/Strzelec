

var iconTransition = 500;
var textTransition = 500;

$(document).ready(function(){
	
	var icon;
	var previousIcon = null;
	var text;
	var previousText = null;
	
	$(".icons-hitBox").click(function(){
		
		previousText = text;
		previousIcon = icon;
		
		var id = $(this).data("id");
		text = $("." + id + "-text");
		icon = $("." + id + "-icon");
		
		if(previousIcon != null) textToIcon(previousText, previousIcon);
		setTimeout(iconToText, textTransition, text, icon);
		
	});
	
});	

function iconToText(text, icon){
	
	icon.css({
		"opacity" : "0",
		"transform" : "scale(0.2, 0.2)",
		"transition" : iconTransition / 1000 + "s"
	});
	
	setTimeout(function(){
		
			icon.css({
				"display" : "none"
			});
			
			text.css({
				"display" : "block"
			});
			
	}, iconTransition);	
	
	setTimeout(function(){
		text.css({
			"opacity" : "1",
			"transform" : "scale(1, 1)",
			"transition" : textTransition / 1000 + "s"
		});
	}, iconTransition);
	
}

function textToIcon(text, icon){
	
	text.css({
		"opacity" : "0",
		"transform" : "scale(0.2, 0.2)",
		"transition" : textTransition / 1000 + "s"
	});
	
	setTimeout(function(){
		text.css({
			"display" : "none"
		});
		
		icon.css({
			"display" : "block"
		});
	}, textTransition);
	
	setTimeout(function(){
		icon.css({
			"opacity" : "1",
			"transform" : "scale(1, 1)",
			"transition" : iconTransition / 1000 + "s"
		});
	}, textTransition);
	
}