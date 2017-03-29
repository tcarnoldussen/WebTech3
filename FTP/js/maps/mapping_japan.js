function myMap() {
	// Starting map
    var map = new google.maps.Map(document.getElementById("googlemaps"), {
	zoom: 5,
	center: {lat: 35.652832, lng: 139.839478}
    });
	
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
			
	// Create the infowindow object	
	var infowindow = new google.maps.InfoWindow(); 

	// Making different markers
    var marker1 = new google.maps.Marker({
		position: {lat: 36.732799, lng: 138.4627},
        map: map,
        title: "Jigokudani Monkey Park",
		label: "A"
    });
		
	var marker2 = new google.maps.Marker({
		position: {lat: 35.0255965643, lng: 135.72074545},
		map: map,
		title: "Todaiji Temple",
		label: "B"
    });
		
	var marker3 = new google.maps.Marker({
		position: {lat: 34.687378, lng: 135.525844},
		map: map,
		title: "Osaka Castle",
		label: "C"
    });
	
	
	var markers = {marker1, marker2, marker3};
		
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: "img/google-maps/m"});
		
		
	// adds zoom and infowindow to all markers
	marker1.addListener("click", function() {
		map.setZoom(8);
		map.setCenter(marker1.getPosition());
		infowindow.setContent(marker1.title);
		infowindow.open(map, marker1);
	});	
		
	marker2.addListener("click", function() {
		map.setZoom(8);
		map.setCenter(marker2.getPosition());
		infowindow.setContent(marker2.title);
		infowindow.open(map, marker2);
	});		
		
	marker3.addListener("click", function() {
		map.setZoom(8);
		map.setCenter(marker3.getPosition());
		infowindow.setContent(marker3.title);
		infowindow.open(map, marker3);
	});	

}