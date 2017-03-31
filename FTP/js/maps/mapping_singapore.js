function myMap() {
	// Starting map
    var map = new google.maps.Map(document.getElementById("googlemaps"), {
	zoom: 8,
	center: {lat: 1.290270, lng: 103.851959}
    });
	
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
			
	// Create the infowindow object	
	var infowindow = new google.maps.InfoWindow(); 

	// Making different markers
    var marker1 = new google.maps.Marker({
		position: {lat:  1.289437, lng: 103.84998},
        map: map,
        title: "Universal Studios Singapore",
		label: "A"
    });
		
	var marker2 = new google.maps.Marker({
		position: {lat: 1.403778, lng: 103.787283},
		map: map,
		title: "Night Safari",
		label: "B"
    });
		
	var marker3 = new google.maps.Marker({
		position: {lat: 1.29652, lng: 103.84886},
		map: map,
		title: "National Museum of Singapore",
		label: "C"
    });
	
	
	var markers = {marker1, marker2, marker3};
		
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: "img/google-maps/m"});
		
		
	// adds zoom and infowindow to all markers
	marker1.addListener("click", function() {
		map.setZoom(15);
		map.setCenter(marker1.getPosition());
		infowindow.setContent(marker1.title);
		infowindow.open(map, marker1);
	});	
		
	marker2.addListener("click", function() {
		map.setZoom(15);
		map.setCenter(marker2.getPosition());
		infowindow.setContent(marker2.title);
		infowindow.open(map, marker2);
	});		
		
	marker3.addListener("click", function() {
		map.setZoom(15);
		map.setCenter(marker3.getPosition());
		infowindow.setContent(marker3.title);
		infowindow.open(map, marker3);
	});	

}