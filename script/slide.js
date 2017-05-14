var position = -1;
var previousPosition = -1;
var sectionAmount = 4

var highlightedColor = "rgba(0, 0 , 0, 0.3)";
var notHighlightedColor = "rgba(18, 130, 103, 0)";

// For Chrome
window.addEventListener('mousewheel', moveToSlide);

// For Firefox
window.addEventListener('DOMMouseScroll', moveToSlide);


function moveToSlide(e){
	
	e.preventDefault();
	var delta = e.wheelDelta ? -e.wheelDelta : e.detail;
	
	if(!$('*').is(":animated")){
		
		previousPosition = position;
		setTimeout(crossGlintFadeOut, 800, previousPosition + 3);
		
		if(delta > 0) position++;
		else position--;
		
		if(position > sectionAmount) position = 0;
		else if(position < 0) position = 3;
		
		 $('html, body').animate({
			scrollTop: $("#section" + position).offset().top
		  }, 800);
		 
		 animateMenu();
		 crossGlintFadeIn(position + 3);
		 
		 
		 //alert("ss");
	}
}

function animateMenu(){
	$(".side-bar_element" + previousPosition).animate({
		backgroundColor : notHighlightedColor,
		fontSize : '60%',
		fontWeight : "600",
		lineHeight : "100%"}, 600);
		 
	$(".side-bar_element" + position).animate({
		backgroundColor : highlightedColor,
		fontSize : '100%',
		fontWeight : "700",
		lineHeight : "130%"}, 600);
}