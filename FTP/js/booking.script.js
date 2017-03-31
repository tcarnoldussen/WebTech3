function BookingStep1($ItemStep1) {
	// Remove tooltip1 and hide button when item is clicked
	$("#step1_tooltip").remove();
	$("#step3").slideUp();

	// Determine which step 2 must be showed or hided
	var step1id = $ItemStep1.attr("id");
	var step1index = step1id.split("_")[1];
	var step2index = "#step2_" + step1index;
	$(step2index).slideToggle();
	$(step2index).siblings().slideUp();

	// If item of step 1 is already open, close and undo classes; otherwise open and activate classes
	if ($ItemStep1.hasClass("step1_item_focus")){
	    $ItemStep1.siblings().removeClass("step1_item_disabled");
	    $ItemStep1.removeClass("step1_item_focus");
	    window.id_step1 = "";
	    $.removeCookie("step1", {path: "/"});
	    $.removeCookie("step2", {path: "/"});
	    $("#step2_tooltip").remove();
	}
	else {
	    $("#step2_tooltip").delay(500).fadeIn(800);
	    $ItemStep1.removeClass("step1_item_disabled");
	    $ItemStep1.siblings().removeClass("step1_item_focus");
	    $ItemStep1.toggleClass("step1_item_focus");
	    $ItemStep1.siblings().addClass("step1_item_disabled");
	    window.id_step1 = $ItemStep1.attr("id");
	    $.cookie("step1",id_step1, {expires: 3, path: "/"});
	}
}

function BookingStep2($ItemStep2) {
	// Remove tooltip2
	$("#step2_tooltip").remove();

	// If item of step 2 is already open, close and undo classes; otherwise open and activate classes
    	if ($ItemStep2.hasClass("step2_item_focus")){
	    $ItemStep2.siblings().removeClass("step2_item_disabled");
	    $ItemStep2.removeClass("step2_item_focus");
	    $("#step3").slideUp();
	    window.id_step2 = "";
	    $.removeCookie("step1", {path: "/"});
	    $.removeCookie("step2", {path: "/"});
	}
	else {
    	    $ItemStep2.removeClass("step2_item_disabled");
	    $ItemStep2.siblings().removeClass("step2_item_focus");
	    $ItemStep2.toggleClass("step2_item_focus");
	    $ItemStep2.siblings().addClass("step2_item_disabled");
	    $("#step3").slideDown();
	    window.id_step2 = $ItemStep2.attr("id");
	    $.cookie("step2",id_step2, {expires: 3, path: "/"});
	}
}

$(document).ready(function(){
	$(".step2_item, #step3, #step1_tooltip, #step2_tooltip").hide();
	$("#step1_tooltip").delay(1500).fadeIn(800);

	$(".step1_item").click(function(){
	    BookingStep1($(this));
		$("body").animate({scrollTop: $("#step1").offset().top}, 500);
	});
  
	$(".step2_item td").click(function(){
	    BookingStep2($(this));
	    $("body").animate({scrollTop: $("#step2").offset().top}, 500);
	});
 
	// Set cookies with values of step 1 and step 2, expiration 3 days
	$("#step3_btn").click(function(){
	    $.cookie("step1",id_step1, {expires: 3, path:"/"});
	    $.cookie("step2",id_step2, {expires: 3, path:"/"});
	    var cookieValue = $.cookie("step2");
	});
	

	if ($.cookie("step1") && $.cookie("step2")) {
	    cookieStep1 = "#"+$.cookie("step1");
	    cookieStep2 = "#"+$.cookie("step2");
	    BookingStep1($(cookieStep1));
	    BookingStep2($(cookieStep2));
	    $("#step1_tooltip").remove();
	    $("#step3").remove();
	} 
	else {
	    // Shuffle button text plugin, only if no cookie
	    $("#step3_btn").ShuffleText([
	    	"I'm ready to go!",
	    	"It's time to travel",
	    	"Make that trip!",
	    	"Yeah, go for it!",
	    	"我们去吧"
	    	],{loop: true, delay: 4000}
	    );
	}
});