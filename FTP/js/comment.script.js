// Function executed when form is submitted
// Check if name and comment are filled in
// If so, set cookie. If not, give notification.

function PlaceComment($FormName,$FormComment) {
	    pagepath = window.location.pathname;

		$.cookie("formname",form_formname, {expires: 3, path: "/"});
		$.cookie("formcomment",form_formcomment, {expires: 3, path: pagepath});
	    }
	    else {
		alert("Please enter a name and comment");
	    }

// Execute function on click submit button
$("#form_submit").click(function(){
	PlaceComment($("#form_name"),$("#form_comment"));
});
// If no cookie, remove this div
	    $('#form_name').attr("placeholder",formname_value);
	    $("#reactions p").append("<b>"+formname_value+"</b> says:<br />");
	}

	if ($.cookie("formcomment")) {
	    $("#form_comment").attr("placeholder",formcomment_value);
	    $("#reactions p").append("<i>"+formcomment_value+"</i>");
	else {
	    $('#form_comment').attr("placeholder","What do you want to say?");
	}
	if (!$.cookie("formname") || !$.cookie("formcomment")) {
		$("#reactions").remove();
	}
	else {}