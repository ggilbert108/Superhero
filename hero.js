var imgNum = 0;

$(document).ready(function(){
	$("#next_button").click(function(){
		imgNum = (imgNum + 1) % 5;
		var id = "#day_" + (imgNum + 1) + "_img";

		$("#day_img").fadeOut(function(){
			$(this).attr("src", $(id).attr("src"));
		}).fadeIn();
	});
});