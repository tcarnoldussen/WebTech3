function myMap() {
	// Starting map
    var map = new google.maps.Map(document.getElementById("googlemaps"), {
	zoom: 5,
	center: {lat: 15.0, lng: 100.0}
    });
	
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
			
	// Create the infowindow object	
	var infowindow = new google.maps.InfoWindow(); 

	// Making different markers
    var marker1 = new google.maps.Marker({
		position: {lat: 13.75003, lng: 100.491288},
        map: map,
        title: "The Grand Palace (Bangkok)",
		label: "A"
    });
		
	var marker2 = new google.maps.Marker({
		position: {lat: 12.821549, lng: 102.140404},
		map: map,
		title: "Khao Khitchakut National Park",
		label: "B"
    });
		
	var marker3 = new google.maps.Marker({
		position: {lat: 17.018593, lng: 99.707855},
		map: map,
		title: "Sukhothai Old City",
		label: "C"
    });
	
	
	var markers = {marker1, marker2, marker3};
		
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: "img/google-maps/m"});
		
		
	// adds zoom and infowindow to all markers
	marker1.addListener("click", function() {
		map.setZoom(10);
		map.setCenter(marker1.getPosition());
		infowindow.setContent(marker1.title);
		infowindow.open(map, marker1);
	});	
		
	marker2.addListener("click", function() {
		map.setZoom(10);
		map.setCenter(marker2.getPosition());
		infowindow.setContent(marker2.title);
		infowindow.open(map, marker2);
	});		
		
	marker3.addListener("click", function() {
		map.setZoom(10);
		map.setCenter(marker3.getPosition());
		infowindow.setContent(marker3.title);
		infowindow.open(map, marker3);
	});	

}