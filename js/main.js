document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    //code goes here to find position
    var params = {enableHighAccuracy: false, timeout:36000, maximumAge:60000};
    //enableHighAccuracy means try to use GPS and drain the battery
    //for improved accuracy within a few meters.
    //maximum age is how long to cache the location info
    //timeout is how long to wait for the network to respond after the user says ok
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
    //to continually check the position (in case it changes) use
    // navigator.geolocation.watchPosition( reportPosition, gpsError, params)
  }else{
    //browser does not support geolocation api
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});

function reportPosition( position ){ 
  var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"
  + "Heading: " + position.coords.heading + " &deg;<br/>"
  + "Speed: " + position.coords.speed + " m/s<br/>"
  + "Timestamp: " + position.timestamp;
    
//Canvas
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = "400";
	canvas.height = "400";
	
	//Google Maps
	var googleMaps = new Image();
	googleMaps.src = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red|label:A|" + position.coords.latitude + ',' + position.coords.longitude + "&key=AIzaSyAvzBN1ulE55AmMAyDJSwBBxjpAGEj4bGE";
	
	//Draw image and append all
	googleMaps.onload = function () {
		context.drawImage(googleMaps, 0, 0);
		document.querySelector("body").appendChild(canvas);
	}    
}



function gpsError(error) {
	var errors = {
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);
}


function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}