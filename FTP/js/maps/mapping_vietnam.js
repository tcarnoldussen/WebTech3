function myMap() {
	// Starting map
    var map = new google.maps.Map(document.getElementById("googlemaps"), {
	zoom: 5,
	center: {lat: 14.058324, lng: 108.277199}
    });
	
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
			
	// Create the infowindow object	
	var infowindow = new google.maps.InfoWindow(); 

	// Making different markers
    var marker1 = new google.maps.Marker({
		position: {lat:	17.543127, lng: 106.144828},
        map: map,
        title: "Hang Son Doong Cave",
		label: "A"
    });
		
	var marker2 = new google.maps.Marker({
		position: {lat: 11.367542, lng: 106.11928},
		map: map,
		title: "Cao Dai Temple",
		label: "B"
    });
		
	var marker3 = new google.maps.Marker({
		position: {lat: 22.336361, lng:	103.843785},
		map: map,
		title: "Sa Pa Terraces",
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