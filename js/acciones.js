//JavaScript

$(document).ready(function(e){
	document.addEventListener("deviceready", onDeviceReady, false);
	
}); //ready

function onDeviceReady(){
	
	$('#posicion').on ('click', function(){
		getPosition ();
	});//posicion
}//onDeviceReady

function getPosition(){
	var options = {
		enableHighAccuracy :true,
		maximumAge: 3600000
	}//options
	
	var watchID = navigator.geolocation.getCurrentPosition (onSuccess, onError, options);
	
	function onSuccess(position) {
		
		alert('Latitud: ' + position.coords.latitude + '\n' + 
		'Longitud: ' + position.coords.longitude + '\n');
	};//onSuccess
	
	function onError(error) {
		alert('Código: ' + error.code + '\n' + 'Mensaje: ' + error.message + '\n');
	}//onError
}//getPosition

