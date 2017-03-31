// When clicking big image hero, scroll down to booking module
$("#intro_home").click(function(){
	$("body").animate({
		scrollTop: $("#booking_module").offset().top
	}, 500);
});

if ($.cookie("formname")) {
	formname_value = $.cookie("formname");
	$("#intro_home h1").text(formname_value+", it is time to travel");
}

// Load in the booking module with jQuery + image slider plugin
$(document).ready(function() {
	$("#intro_home").backgroundCycle({
		imageUrls: [
			"img/banner/home1.jpg",
			"img/banner/home2.jpg",
			"img/banner/home3.jpg"
		],
		fadeSpeed: 1000,
		duration: 3000,
		backgroundSize: SCALING_MODE_COVER
	});
	
	$("#booking_module").load("book.html");

	// Personalise the homepage with name
});