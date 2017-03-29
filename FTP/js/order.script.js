function PlaceOrder($OrderName,$OrderMail,$OrderComment) {	    order_ordername = $OrderName.val();
	    order_ordermail = $OrderMail.val();	    order_ordercomment = $OrderComment.val();		order_orderproduct = $.cookie("step2");		$("#order_product").val(order_orderproduct);	    if (order_ordername && order_ordermail && !order_ordercomment) {
		$.cookie("ordername",order_ordername, {expires: 3});
		$.cookie("ordermail",order_ordermail, {expires: 3});
	    }
	    else if (order_ordername && order_ordermail && order_ordercomment) {
			$.cookie("ordername",order_ordername, {expires: 3});
			$.cookie("ordermail",order_ordermail, {expires: 3});
			$.cookie("ordercomment",order_ordercomment, {expires: 3});
	    }
	    else {
			alert("Please enter your name and email address");
	    }}

// Execute function on click submit button
$("#order_submit").click(function(){
	PlaceOrder($("#order_name"),$("#order_mail"),$("#order_comment"));
});
// Load values in order form if cookies are set$(document).ready(function(){	if ($.cookie("ordername") && $.cookie("ordermail")) {	    ordername_value = $.cookie("ordername");	    ordermail_value = $.cookie("ordermail");		$("#order_name").attr("placeholder",ordername_value);	    $("#order_name").val(ordername_value);		$("#order_mail").attr("placeholder",ordermail_value);	    $("#order_mail").val(ordermail_value);	}	if ($.cookie("ordercomment")) {		ordercomment_value = $.cookie("ordercomment");		$("#order_comment").text(ordercomment_value);		}	else {		$("#order_comment").attr("placeholder","If you have some additional information, put it here");	}});
// Use name of comments if filled in before
if ($.cookie("formname") && !$.cookie("ordername")) {
	$("#order_name").val(formname_value);
}