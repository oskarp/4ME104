var Map = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Map.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	Class to manage and encapsulate functionality from Google Maps API. Use this class 
	to handle map-related events and information.
	
	TO DO'S---------------------------------------------------------------------------
	
	* [NICE-TO-ADD] System for infobubbles..
	* [NICE-TO-FIX] See comments in the method descriptions..
			
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC CONSTANTS
	//
	//--------------------------------------------------------------------------------
	
	DIV_CANVAS			: 'page-map-wrapper', 	// The name of the HTML-element that contains the map.
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC PROPERTIES
	//
	//--------------------------------------------------------------------------------
	
	map					: null,		// The HTML-element that contains the map.
	geocoder			: null,		// DESC..
	markers				: null,		// An array containing all markers that are added via the addMarker method.
	
	//--------------------------------------------------------------------------------
	//
	//  CONSTRUCTOR METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * This function simulates the constructor for this class. 
	 * Use it to allocate memory in the form of necessary variables 
	 * and properties. Use dealloc method to clear the class if 
	 * necessary.
	 *
	 */
	alloc : function()
	{
		Map.geocoder	= new google.maps.Geocoder();
		Map.markers		= new Array();
	},
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * Method to initialize the map, Note that alloc-method 
	 * must be executed before this method can be performed.
	 *
	 * @param  Map's starting position in latitude.
	 * @param  Map's starting position in logitude.
	 *
	 * TODO: The method should preferably deal with a 
	 * LatLng-objects instead of the parameters, lat 
	 * and lng.
	 *
	 * TODO: There are many magic numbers in this method 
	 * that must be manageable externally or via parameters.
	 *
	 */
	initMap : function(lat, lng)
	{
		var pos	= new google.maps.LatLng(lat, lng);
		
		var mapSettings				= {};
			mapSettings.zoom		= 2;
			mapSettings.center		= pos;
			mapSettings.mapTypeId	= google.maps.MapTypeId.ROADMAP;
			
		Map.map = new google.maps.Map(document.getElementById(Map.DIV_CANVAS), mapSettings);	
	},
	
	/**
	 *
	 * Method for placing markers on the map.
	 *
	 * @param  	Marker position in latitude.
	 * @param  	Marker position in longitude.
	 * @param	If the cursor must be alone on its geographical position.
	 * @return	Returns the marker that was added to the map.
	 *
	 */
	addMarker : function(lat, lng, title, unique)
	{	  
		if(unique)
		{
			for(var i = 0; i < Map.markers.length; i++)
			{
				if((Map.markers[i].position.lat() == lat) && (Map.markers[i].position.lng() == lng)){
					return false;
				}
			}	
		}
		
		var pos			= new google.maps.LatLng(lat, lng);
		var marker		= new google.maps.Marker({
			position	: pos, 
			map			: Map.map, 
			title		: title
		});
		
		Map.markers.push(marker);
		  
		return marker;
	},
	
	/**
	 *
	 * Method for removing markers from the map.
	 *
	 * @param  	Marker to remove from map.
	 * @return	Returns true if the removal of the marker was successful.
	 *
	 */
	removeMarker : function(marker)
	{
		for(var i = 0; i < Map.markers.length; i++)
		{
			if(marker == Map.markers[i])
			{
				Map.markers[i].setMap(null);
				Map.markers.splice(i, 1);
				
				return true;
			}
		}
	},
	
	/**
	 *
	 * Method to quickly empty the map on markers.
	 *
	 */
	clearMap : function()
	{
		for(var i = 0; i < Map.markers.length; i++)
		{
			Map.markers[i].setMap(null);
			Map.markers.splice(i, 1);
		}
		
		Map.markers	= null;
		Map.markers = new Array();
	},
	
	/**
	 *
	 * Function to convert addresses(strings) to the geographical positions(LatLng).
	 * Convenient when you want the geographic position of a company and so on.
	 *
	 * @param	Adress as a String.
	 * @param	The function to run when the calculations are complete.
	 *
	 */
	getAddress : function(address, callback)
	{
		var address = {'address': address};
		
		Map.geocoder.geocode(address, function(results, status)
		{
			if(status == google.maps.GeocoderStatus.OK)
			{
				callback(results);
			}
			else 
			{
				callback(false);
			}	
		});
	},
	
	/**
	 *
	 * Simple method to quickly calculate distance between two geographical points(as the crow flies).
	 *
	 * @param	Location/pos 1 as an LatLng-object.
	 * @param	Location/pos 2 as an LatLng-object.
	 *
	 */
	getDistanceBetween : function(licationA, locationB)
	{
		return google.maps.geometry.spherical.computeDistanceBetween(licationA, locationB);
	},
	
	/**
	 *
	 * Simple method to center the map after a specific marker.
	 *
	 * @param	The marker we want to have in the center of the map.
	 *
	 */
	setMarkerInCenter : function(marker)
	{
		Map.map.setCenter(marker.getPosition());
	},
	
	/**
	 *
	 * Method to quickly reset this static class.
	 *
	 */
	reset : function()
	{
		Map.dealloc();
		Map.alloc();
	},
	
	//--------------------------------------------------------------------------------
	//
	//  DESTRUCT METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * The method is used as a destructor method for this class. Used to save memory 
	 * when classes become inactive.
	 *
	 */
	dealloc : function()
	{
		Map.map			= null;
		Map.geocoder	= null;
		Map.markers		= null;
	}
}