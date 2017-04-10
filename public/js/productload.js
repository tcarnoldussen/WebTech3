$(document).ready(function(){

var page = 1; 

//AJAX load products function
function ProductLoader(page) {
	var loadurl = "showproducts?p=" + page;
	$.ajax({url: loadurl, 
		success: function(output){
			$("#products").html(output);
		}
	});
};

   
// First page load products
if (page = 1) {
	ProductLoader(page);
}

   
// More pages load products
$("#loadmore").click(function(){
	page++;
	ProductLoader(page);
});

});