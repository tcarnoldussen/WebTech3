function PlaceOrder($OrderName,$OrderMail,$OrderComment) {
	    order_ordermail = $OrderMail.val();
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
	    }

// Execute function on click submit button
$("#order_submit").click(function(){
	PlaceOrder($("#order_name"),$("#order_mail"),$("#order_comment"));
});

// Use name of comments if filled in before
if ($.cookie("formname") && !$.cookie("ordername")) {
	$("#order_name").val(formname_value);
}