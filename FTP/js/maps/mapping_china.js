function myMap() {
	// Starting map
    var map = new google.maps.Map(document.getElementById("googlemaps"), {
	zoom: 4,
	center: {lat: 35.0, lng: 105.0}
    });
	
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
			
	// Create the infowindow object	
	var infowindow = new google.maps.InfoWindow(); 

	// Making different markers
    var marker1 = new google.maps.Marker({
		position: {lat: 39.908829698, lng: 116.387665116},
        map: map,
        title: "The Forbidden City (Beijing)",
		label: "A"
    });
		
	var marker2 = new google.maps.Marker({
		position: {lat: 30.249999, lng: 120.1333328},
		map: map,
		title: "Paradise On Earth (West Lake, Hangzhou)",
		label: "B"
    });
		
	var marker3 = new google.maps.Marker({
		position: {lat: 34.500164666, lng: 112.909329696},
		map: map,
		title: "Shaolin Temple",
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