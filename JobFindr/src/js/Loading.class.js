var Loading = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Loading.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	Class to manage the charging screen. This class is currently very simple, but 
	may be expanded.
		
	TO DO'S---------------------------------------------------------------------------
	
	* NOTHING..
			
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC CONSTANTS
	//
	//--------------------------------------------------------------------------------
	
	DIV_LOADING					: '#screen-loading-wrapper', // The name of the loading div.
	SETTING_DEFAULT_FADE_TIME	: 1000,						 // Default speed of fading transitions.
	
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
		// NOTHING TO ALLOC..
	},
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * Method to show the default loading screen.
	 *
	 * @param	Loading screen fade in time in milliseconds.
	 *
	 */
	show : function(FadeTime)
	{
		if(!FadeTime)
			FadeTime = Loading.SETTING_DEFAULT_FADE_TIME;
		
		$(Loading.DIV_LOADING).fadeIn(FadeTime);
	},
	
	/**
	 *
	 * Method to hide the default loading screen.
	 *
	 * @param	Loading screen fade out time in milliseconds.
	 *
	 */
	hide : function(FadeTime)
	{
		if(!FadeTime)
			FadeTime = Loading.SETTING_DEFAULT_FADE_TIME;
		
		$(Loading.DIV_LOADING).fadeOut(FadeTime);
	},
	
	/**
	 *
	 * Method to quickly reset this static class.
	 *
	 */
	reset : function()
	{
		Loading.dealloc();
		Loading.alloc();
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