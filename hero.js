var imgNum = 0;
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ];
$(document).ready(function(){
	$("#next_button").click(function(){
		$(this).prop("disabled", true);
		imgNum = (imgNum + 1) % 5;
		$("#day_tag").text(days[imgNum]);		
		var id = "#day_" + (imgNum + 1) + "_img";

		$("#day_img").fadeOut(function(){
			$(this).attr("src", $(id).attr("src"));
		}).fadeIn(function(){
			$("#next_button").prop("disabled", false);
		});
	});
});