var Main = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Main.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	This is the application's document class.
		
	TO DO'S---------------------------------------------------------------------------
			
	END-------------------------------------------------------------------------------
	*/
	
	SETTING_AUTHENTICJOBS_API_URL	: 'src/php/getJobs.php',
	
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
		Loading.alloc();
		Work.alloc();
		Sidebar.alloc();
		Main.getWork();
	},
	
	/**
	 *
	 * This method retrieves available jobs from authenticjobs.com
	 *
	 * @param	current page number.
	 *
	 */
	getWork : function(page)
	{
		Loading.show(0);
		
		if(!page) page = 0;
		
		var URL			= Main.SETTING_AUTHENTICJOBS_API_URL;
		var Data		= 'page='+page+'&random='+Math.floor(Math.random()*100);
		var Type		= 'GET';
		var Method		= 'json';
		var Callback	= Main.addJobAdvertsToMap;
		
		Utils.ajax(URL, Data, Type, Method, Callback);
	},
	
	/**
	 *
	 * This method retrieves available jobs from authenticjobs.com
	 *
	 * @param	Status of the call, true if everything succeeded.
	 * @param	The data retrieved from the API.
	 *
	 */
	addJobAdvertsToMap : function(ResponseStatus, Data)
	{
		if(!ResponseStatus){
			return; // Something went wrong..
		}
		
		$.each(Data.listings.listing, function(key, value)
		{ 
			if(value.company && value.company.location)
			{
				var lat			= value.company.location.lat;
				var lng			= value.company.location.lng;
				var information	= value;
				
				Work.addWorkplaceByLatLng(lat, lng, information, Main.showSidebar);
			}
		});
		
		if(Data.listings.page < Data.listings.pages)
		{
			page = (parseInt(Data.listings.page) + 1);
			Main.getWork(page);
		}
		else 
		{
			Loading.hide();
		}
	},
	
	/**
	 *
	 * This method activates the side bar and make sure that business 
	 * data is displayed.
	 *
	 * @param The selected map marker.
	 * @param API Data from authenticjobs.com
	 *
	 */
	showSidebar : function(Marker, APIData)
	{
		LinkedIn.getPeopleRelatedToCompany(APIData.company.name, Main.showSocialSidebar);
		Sidebar.addJobData(APIData);
		Sidebar.show();
	},
	
	/**
	 *
	 * This method handles the response from LinkedIn's API and checks if there are open 
	 * profiles(public users) associated to a specific company, if there is, the social 
	 * side bar will be displayed.
	 *
	 * @param	The response data from LinkedIn JavaScript API.
	 *
	 */
	showSocialSidebar : function(APIData)
	{
		Sidebar.hideSocialSidebar(null, function()
		{
			Sidebar.clearSocialSidebar();
			
			var numOfPeopleFound = 0;
					
			for(var index in APIData.people.values) 
			{
				if(APIData.people.values[index].pictureUrl){
					numOfPeopleFound++;
					Sidebar.addPersonToSocialSidebar(APIData.people.values[index]);
				}
			}
			
			if(numOfPeopleFound > 0)
			{
			    Sidebar.showSocialSidebar();
			}
		});
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
		Work.dealloc();
		Sidebar.dealloc();
	}
}

/**
 *
 *	Using google.maps.event for the bootstrap.
 *
 */
google.maps.event.addDomListener(window, 'load', Main.alloc);