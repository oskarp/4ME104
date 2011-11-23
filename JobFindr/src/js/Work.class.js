var Work = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Work.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	This class is an extension of the Map class, try to think of it as Work inherits 
	properties and methods from the Map class. Since we do not have support for 
	inheritance, Work is using functionality from Map.
		
	TO DO'S---------------------------------------------------------------------------
	
	* [NICE-TO-FIX] "Getters and Setters" for the functionality in Map.
			
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC CONSTANTS
	//
	//--------------------------------------------------------------------------------
	
	SETTING_DEFAULT_LAT		: 58.96145200,
	SETTING_DEFAULT_LNG		: 16.36271800,
		
	//--------------------------------------------------------------------------------
	//
	//	CONSTRUCTOR METHOD
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
		Map.alloc();
		Map.initMap(Work.SETTING_DEFAULT_LAT, Work.SETTING_DEFAULT_LNG);
	},
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * Add a workplace on the map.
	 *
	 * @param	Company address in the form of a string.
	 * @param	The name of the company.
	 *
	 */
	addWorkplace : function(address, name)
	{
		Map.getAddress(address, function(result){
		
			if(result)
			{				
				var lat = result[0].geometry.location.lat();
				var lng = result[0].geometry.location.lng();			
				var pos	= Map.addMarker(lat, lng, name);
				
				google.maps.event.addListener(pos, 'click', function(){
					Main.showSidebar(this);
				});
				
				return pos;
			}
		})	
	},
	
	/**
	 *
	 * DESC..
	 *
	 * @param	Desc..
	 * @param	Desc..
	 * @param	Desc..
	 * @param	DESC..
	 * @return	Desc..
	 *
	 */
	addWorkplaceByLatLng : function(lat, lng, information, Callback)
	{
		var pos	= Map.addMarker(lat, lng, information.company.name, true);
		
		if(pos == false)
		{
			return;
		}
		
		google.maps.event.addListener(pos, 'click', function(){
			Callback(this, information);
		});
		
		return pos;
	},
	
	/**
	 *
	 * Method to quickly reset this static class.
	 *
	 */
	reset : function()
	{
		Work.dealloc();
		Work.alloc();
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
		Map.dealloc();
	}
}