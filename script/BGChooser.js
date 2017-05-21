
$(document).ready(function(){
	
	var factor;
	var I_Result;
	var S_Result;
	
	factor = Math.random();
	I_Result = Math.floor(factor * 4) + 1;
	S_Result = 'url("asset/bg/mod' + I_Result + "/";
	
	$("#section_menu_background").css({
		"backgroundImage" : S_Result + 'title.jpg")'
	});
	
	$("#section3_bg").css({
		"backgroundImage" :S_Result + 'kim_jestesmy.jpg")'
	});
	
	$("#section4_bg").css({
		"backgroundImage" : S_Result + 'co_robimy.jpg")'
	});

	$("#section6_bg").css({
		"backgroundImage" : S_Result + 'rekrutacja.jpg")'
	});
	
	$("#section7_bg").css({
		"backgroundImage" : S_Result + 'dla_chcacych.jpg")'
	});
});
