$(document).ready(function(){
	if ($.cookie("product_counts")) {
		num_fav = $.cookie("product_counts");
		btn_text = num_fav + " favorites";
		$(".fav_btn").text(btn_text);
	} 
	if ($.cookie("product_counts")) {
		num_fav = $.cookie("product_counts");
		btn_text = num_fav + " favorites";
		$(".fav_btn").text(btn_text);
		if ($.cookie("product_counts") == "0") {
			$.removeCookie("product_counts", { path: '/' });
		}
	}

	product_id = $(".product_add").parents("table").attr("id");
	product_cookiename = "store_" + product_id;
	if ($.cookie(product_cookiename)) {
		$(".product_add").addClass("product_added");
       		$(".product_add").text("added");
	}
});