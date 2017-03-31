// Load in the booking module with jQuery + image slider plugin	
$("#booking_module").load("book.html");
$("body").animate({scrollTop: $("#booking_module").offset().top}, 800);

if ($.cookie("step2")) {
	$("#order_module").load("order.html");
} 