var sum = 0;

function PlaceFavCookie($ProductID) {
	product_cookiename = "store_" + product_id;
	if ($.cookie(product_cookiename)) {
		$ProductID.addClass("product_added");
		$ProductID.text("added");
	}
	else {
		$.cookie(product_cookiename, product_id, {expires: 3, path: "/"});
	}

function AddProductCountCookie() {
	if ($.cookie("product_counts")) {
		sum = $.cookie("product_counts");
		newsum = (+sum + 1);
		btn_text = newsum + " favorites";
		$(".fav_btn").text(btn_text);
		$.cookie("product_counts", newsum, {expires: 3, path: "/"});
	} 
	else {
		firstsum = (+sum + 1);
		btn_text = firstsum + " favorites";
		$(".fav_btn").text(btn_text);
		$.cookie("product_counts", firstsum, {expires: 3, path: "/"});
	}
};

function AddToCartEffect($AddButton) {
        $AddButton.addClass("product_added");
        $AddButton.text("added");

        var cart = $(".fav_btn");
        var imgtodrag = $(".product_image img");
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': 'auto',
                    'width': '300px',
                    'z-index': '100'
            })
                .appendTo($("body"))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': '75px',
                    'height': 'auto'
            }, 1000, 'easeInOutExpo');

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    };

function RemoveFromCart($RemoveButton) {
	product_id = $RemoveButton.parents("tr").attr("id");
	product_cookiename = "store_" + product_id;

	$RemoveButton.parents("tr").hide();
	$.removeCookie(product_cookiename, { path: '/' });

	if ($.cookie("product_counts")) {
		sum = $.cookie("product_counts");
		newsum = (+sum - 1);
		btn_text = newsum + " favorites";
		$(".fav_btn").text(btn_text);
		$.cookie("product_counts", newsum, {expires: 3, path: "/"});
	} 
};

$(".product_add").click(function(){
	product_id = $(this).parents("table").attr("id");
	product_cookiename = "store_" + product_id;
	if ($.cookie(product_cookiename)) {
		alert("You already favorited this product");	
	}
	else {
		PlaceFavCookie($(".product_add"));
		AddProductCountCookie();
		AddToCartEffect($(".product_add"));
	}
});

$(".item_remove_btn").click(function(){
	RemoveFromCart($(this));
});