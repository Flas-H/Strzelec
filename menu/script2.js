
$(document).ready(function(){
	$(".section_info_cross").hover(
		function(){
			$(".section_info_text").fadeIn();
		},
		function(){
			$(".section_info_text").fadeOut();
		});
		document.body.scroll = "no";
});

var position = -1;
var previousPosition = -1;

var highlightedColor = "rgba(18, 130, 103, 1.0)";
var notHighlightedColor = "rgba(18, 130, 103, 0)";

function myFunction(event){
	
	event.preventDefault();
	
	if(!$('*').is(":animated")){
		
		previousPosition = position;
		
		if(event.deltaY > 0) position++;
		else position--;
		
		if(position > 3) position = 0;
		else if(position < 0) position = 3;
		
		 $('html, body').animate({
			scrollTop: $("#section" + position).offset().top
		  }, 800);
		  
		 $(".side-bar_element" + previousPosition).animate({opacity : '0'}, 600);
		 
		 $(".side-bar_element" + position).animate({opacity : '1'}, 600);
		 
		 
		 //alert("ss");
	}
}