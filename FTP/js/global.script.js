$(document).ready(function() {
	// Make text bold
	$(".boldtrigger").click(function() {
		$("body").toggleClass("bolden");
	});

	// Make text italic
	$(".italictrigger").click(function() {
		$("body").toggleClass("italicing");
	});

	// Default coloring theme
	$(".colortrigger_default").click(function() { 
		$("body").removeClass("coloring_green");	
		$("body").removeClass("coloring_red");
		$("body").removeClass("coloring_blue");
	});

	// Green coloring theme
	$(".colortrigger_green").click(function() {
		$("body").removeClass("coloring_red");
		$("body").removeClass("coloring_blue");
		$("body").addClass("coloring_green");
	});

	// Red coloring theme
	$(".colortrigger_red").click(function() {	
		$("body").removeClass("coloring_green");
		$("body").removeClass("coloring_blue");
		$("body").addClass("coloring_red");
	});

	// Blue coloring theme
	$(".colortrigger_blue").click(function() {	
		$("body").removeClass("coloring_green");
		$("body").removeClass("coloring_red");
		$("body").addClass("coloring_blue");
	});


$("#content_destinations img").mouseenter(function(){
    imgurl = $(this).prop("src");
	$(".intro_img").css("background-image", "url(" + imgurl + ")");
});


});

