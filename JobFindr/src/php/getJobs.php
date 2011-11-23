<?php

/*	
	START----------------------------------------------------------------------------
	
	Name	: getJobs.js
	Version	: 1.0
	Author	: Henrik Andersen
	Mail	: henrik.andersen@lnu.se
	Date	: xxxx-xx-xx
	Time	: xx:xx:xx
		
	DESCRIPTION-----------------------------------------------------------------------
	
	This is a simple class to retrieve data from an external API via cURL.
	
	TO DO'S---------------------------------------------------------------------------
		
	END-------------------------------------------------------------------------------
*/

// PUBLIC CLASS

class GetJobs
{	
	//--------------------------------------------------------------------------------
	//
	//  CONSTRUCTOR METHOD
	//
	//--------------------------------------------------------------------------------
	
	/**
	 *
	 * The class constructor.
	 *
	 */
	public function __construct()
	{
		$page	= @$_GET['page'];
		$URL	= "http://www.authenticjobs.com/api/?api_key=00d328bc05c88d805191f2bd3ed93b55&method=aj.jobs.search&format=json&perpage=100&page=".$page;
		
		if(!$page){
			$page = 0;
		}
		
		$ch = curl_init($URL);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		$data = curl_exec($ch);
		curl_close($ch);
	}
}

new GetJobs();

?>