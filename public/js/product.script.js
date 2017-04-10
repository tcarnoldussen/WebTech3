$.urlParam = function(name){
	var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(window.location.href);
	return results[1] || 0;
}

var product_id = $.urlParam("id");
alert(product_id);

$(".product").attr("id",product_id);