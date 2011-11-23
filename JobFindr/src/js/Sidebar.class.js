var Sidebar = 
{
	/*	
	START----------------------------------------------------------------------------
	
	Name	: Sidebar.class.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
		
	TO DO'S---------------------------------------------------------------------------
			
	END-------------------------------------------------------------------------------
	*/
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC CONSTANTS
	//
	//--------------------------------------------------------------------------------
	
	DIV_SIDEBAR							: '#page-sidebar-wrapper',
	DIV_SOCIAL_SIDEBAR					: '#page-sidebar-social-wrapper',
	DIV_SOCIAL_SIDEBAR_LIST				: '#page-sidebar-social-list-wrapper > ul',
	DIV_WORK_NAME						: '#page-sidebar-work-meta-name-wrapper > h1',
	DIV_WORK_TAGLINE					: '#page-sidebar-work-meta-name-wrapper > p',
	DIV_WORK_TITLE						: '#page-sidebar-work-description-wrapper > h2',
	DIV_WORK_CITY						: '#page-sidebar-work-description-wrapper > p',
	DIV_WORK_LOGO						: '#page-sidebar-work-meta-logo-wrapper > a > img',
	DIV_WORK_DESCRIPTION				: '#page-sidebar-work-description-text-wrapper',
	DIV_WORK_EMAIL						: '#page-sidebar-apply-wrapper > a',
	
	SETTING_DEFAULT_SOCIAL_SLIDE_TIME	: 350,
	
	//--------------------------------------------------------------------------------
	//
	//  CONSTRUCTOR METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * This public method works as a constructor for this class. 
	 * The method is not enabled by default, the method must be 
	 * triggered manually from somewhere in the code base.
	 *
	 */
	alloc : function()
	{
		// NOTHING YET..
	},
	
	//--------------------------------------------------------------------------------
	//
	//  PUBLIC METHODS
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * The method renders the job information in the side bar
	 * The data comes from Main.class.js
	 *
	 * @param	An JSON-object from the Authenticjobs.com api.
	 *
	 */
	addJobData : function(data)
	{
		var name		 = Sidebar.substring(data.company.name,				15);
		var tagline		 = Sidebar.substring(data.company.tagline,			35);
		var title		 = Sidebar.substring(data.title,		   			25);
		var city		 = Sidebar.substring(data.company.location.city,	30);
		var country		 = Sidebar.substring(data.company.location.country,	5);
		var logo		 = data.company.logo;
		var email		 = data.apply_email;
		var info		 = 'http://www.authenticjobs.com/jobs/'+data.id;
		var url			 = data.company.url;
		var description	 = Sidebar.substring(data.description,			  1000);
		
		$(Sidebar.DIV_WORK_NAME).html(name);
		$(Sidebar.DIV_WORK_TAGLINE).html(tagline);
		$(Sidebar.DIV_WORK_TITLE).html(title);
		$(Sidebar.DIV_WORK_CITY).html(city+', '+country);
		$(Sidebar.DIV_WORK_LOGO).attr('src', logo);
		$(Sidebar.DIV_WORK_DESCRIPTION).html(description);
		$(Sidebar.DIV_WORK_DESCRIPTION).html(description+'<br /><a target="_blank" href="'+info+'" class="read-more">Read more..</a>');
		$(Sidebar.DIV_WORK_EMAIL).attr('href', 'mailto:'+email);
	},
	
	/**
	 *
	 * Simple method to shorten strings.
	 *
	 * param	The string to be shortened.
	 * param	The maximum length of the string.
	 * @return	The short version of the string. 
	 *
	 */
	substring : function(string, length)
	{
		if(string.length > length)
		{
			string  = string.substring(0, length);
			string += '..';
		}
		
		return string;
	},
	
	/**
	 *
	 * Simple method to display the entire side bar with 
	 * an animation.
	 *
	 */
	show : function()
	{
		var pos = $(Sidebar.DIV_SIDEBAR).css('left');
		
		if(pos == '-416px')
		{
			$(Sidebar.DIV_SIDEBAR).animate({left: '0'}, 865);
		}
	},
	
	/**
	 *
	 * Simple method to hide the entire side bar with 
	 * an animation.
	 *
	 */
	hide : function()
	{
		var pos = $(Sidebar.DIV_SIDEBAR).css('left');
		
		if(pos == '0px')
		{
			$(Sidebar.DIV_SIDEBAR).animate({left: '-416'}, 865);
		}
	},
	
	/**
	 *
	 * Simple method to toggle the side bar's visibility 
	 * with an animation.
	 *
	 */
	toggle : function()
	{
		var pos = $(Sidebar.DIV_SIDEBAR).css('left');
		
		if(pos == '0px')
		{
			Sidebar.hide();
		}
		else 
		{
			Sidebar.show();
		}
	},
	
	/**
	 *
	 * Simple method to display the social side bar with 
	 * an animation.
	 *
	 */
	showSocialSidebar : function(SlideTime, Callback)
	{
		if(!SlideTime){
			SlideTime = Sidebar.SETTING_DEFAULT_SOCIAL_SLIDE_TIME;
		}
		
		var pos = $(Sidebar.DIV_SOCIAL_SIDEBAR).css('left');
		
		if(pos == '-70px')
		{
			$(Sidebar.DIV_SOCIAL_SIDEBAR).animate({left: '0'}, Sidebar.SETTING_DEFAULT_SOCIAL_SLIDE_TIME, function(){
				if(Callback){Callback()};
			});
		}
		else
		{
			Callback();
		}
	},
	
	/**
	 *
	 * Simple method to hide the social side bar with 
	 * an animation.
	 *
	 */
	hideSocialSidebar : function(SlideTime, Callback)
	{
		if(!SlideTime){
			SlideTime = Sidebar.SETTING_DEFAULT_SOCIAL_SLIDE_TIME;
		}
		
		var pos = $(Sidebar.DIV_SOCIAL_SIDEBAR).css('left');
		
		if(pos == '0px')
		{
			$(Sidebar.DIV_SOCIAL_SIDEBAR).animate({left: '-70'}, Sidebar.SETTING_DEFAULT_SOCIAL_SLIDE_TIME, function(){
				if(Callback){Callback()};
			});
		}
		else
		{
			Callback();
		}
	},
	
	/**
	 *
	 * Simple method to toggle the social side bar's visibility 
	 * with an animation.
	 *
	 */
	toggleSocialSidebar : function()
	{
		var pos = $(Sidebar.DIV_SOCIAL_SIDEBAR).css('left');
		
		if(pos == '0px')
		{
			Sidebar.hideSocialSidebar();
		}
		else 
		{
			Sidebar.showSocialSidebar();
		}
	},
	
	/**
	 *
	 * Method to add people to the social side bar(LinkedIn).
	 *
	 * @param	The person from the LinkedIn API that should be added to the side bar.
	 *
	 */
	addPersonToSocialSidebar : function(person)
	{
		var tmpPersonListItem = document.createElement('li');
					
		var tmpPersonListLink = document.createElement('a');
			tmpPersonListLink.setAttribute('target', '_blank');
			tmpPersonListLink.setAttribute('href', person.publicProfileUrl);
		
		var tmpPersonListImage = document.createElement('img');
			tmpPersonListImage.setAttribute('src', person.pictureUrl);
		
		$(tmpPersonListLink).append(tmpPersonListImage);
		$(tmpPersonListItem).append(tmpPersonListLink);
		$(Sidebar.DIV_SOCIAL_SIDEBAR_LIST).append(tmpPersonListItem);
	},
	
	/**
	 *
	 * Rapid method for clearing the contents of the social side bar, 
	 * ie the LinkedIn users who have been associated with a workplace.
	 *
	 */
	clearSocialSidebar : function()
	{
		$(Sidebar.DIV_SOCIAL_SIDEBAR_LIST).html('');
	},
	
	/**
	 *
	 * Use this method to reset this static class.
	 *
	 */
	reset : function()
	{
		Sidebar.dealloc();
		Sidebar.alloc();
	},
	
	//--------------------------------------------------------------------------------
	//
	//  DESTRUCT METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * This method works as a deconstructor for this class, use it to clear
	 * memory and reset unnecessary information.
	 *
	 */
	dealloc : function()
	{
		// NOTHING YET..
	}
}