var LinkedIn = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: LinkedIn.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	This class is currently very simple since we only use one method from LinkedIn 
	JavaScript API, but this class may be more useful in the future. The aim is that 
	all communication with LinkedIn will take place through this class.
	
	TO DO'S---------------------------------------------------------------------------
	
	* [NICE-TO-FIX] See comments in the method descriptions..
	
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//	CONSTRUCTOR METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * DESC..
	 *
	 */
	alloc : function()
	{
		// NOTHING TO ALLOC..
	},
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * This method retrieves persons associated with a particular company name.
	 *
	 * @param	The name of the company.
	 * @param	The function to run when data is retrieved.
	 *
	 * TODO: Try to remove magic numbers and strings.
	 */
	getPeopleRelatedToCompany : function(CompanyName, Callback)
	{
		IN.API.PeopleSearch()
		.fields("firstName", "lastName", "publicProfileUrl","pictureUrl")
		.params({"company-name": CompanyName, "count": 25})
		.result(function(data){Callback(data)});
	},
	
	/**
	 *
	 * Method to quickly reset this static class.
	 *
	 */
	reset : function()
	{
		LinkedIn.dealloc();
		LinkedIn.alloc();
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
		// NOTHING TO DEALLOC..
	}
}