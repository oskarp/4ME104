var Utils = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Utils.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	This is a help class containing static utility methods, nothing else.
		
	TO DO'S---------------------------------------------------------------------------
	
	* NOTHING..
			
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC STATIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * Method for handling AJAX calls.
	 *
	 * @param	The URL for data to be retrieved.
	 * @param	Data to be sent with the call.
	 * @param	The method to be used for sending data.
	 * @param	Data method(XML/JSON or TEXT)
	 * @param	Callback method.
	 * @param	Parameters to be passed to the callback method.
	 *
	 */
	ajax : function(URL, Data, Type, Method, Callback, Parameters)
	{
		if(!Parameters){
			Parameters	= new Array();
		}
		
		var ajaxRequest = $.ajax({
			url			: URL,
			data		: Data,
			type		: Type,
			dataType	: Method,
			async		: false,
			success		: function(responseData)
			{
				if(Callback)
				{
					Callback(true, responseData, Parameters);
				}
			},
			error		: function(responseData)
			{
				if(Callback)
				{
					Callback(false, responseData, Parameters);
				}
			}
			
		}).responseText;
	}
}