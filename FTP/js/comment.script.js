// Function executed when form is submitted
// Check if name and comment are filled in
// If so, set cookie. If not, give notification.

function PlaceComment($FormName,$FormComment) {	    form_formname = $FormName.val();	    form_formcomment = $FormComment.val();
	    pagepath = window.location.pathname;
	    if (form_formname && form_formcomment){
		$.cookie("formname",form_formname, {expires: 3, path: "/"});
		$.cookie("formcomment",form_formcomment, {expires: 3, path: pagepath});
	    }
	    else {
		alert("Please enter a name and comment");
	    }}

// Execute function on click submit button
$("#form_submit").click(function(){
	PlaceComment($("#form_name"),$("#form_comment"));
});// Load cookie values of form into reactions div
// If no cookie, remove this div$(document).ready(function(){	if ($.cookie("formname")) {	    formname_value = $.cookie("formname");	    $("#form_name").val(formname_value);
	    $('#form_name').attr("placeholder",formname_value);
	    $("#reactions p").append("<b>"+formname_value+"</b> says:<br />");	} 	else {	    $('#form_name').attr("placeholder","Name");
	}

	if ($.cookie("formcomment")) {	    formcomment_value = $.cookie("formcomment");
	    $("#form_comment").attr("placeholder",formcomment_value);
	    $("#reactions p").append("<i>"+formcomment_value+"</i>");	} 
	else {
	    $('#form_comment').attr("placeholder","What do you want to say?");
	}
	if (!$.cookie("formname") || !$.cookie("formcomment")) {
		$("#reactions").remove();
	}
	else {}});